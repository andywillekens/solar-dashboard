<script setup lang="ts">
const fetchingData = ref(false);

const data = ref<Data>({
  tiles: {
    currentWattageYield: {
      value: 0,
      maxValue: 5000,
      label: "Huidige opbrengst",
      dataType: "Watt",
      tileType: "input",
    },
    todayKwhYielded: {
      value: 0,
      maxValue: 30,
      label: "Vandaag opgebracht",
      dataType: "kWh",
      tileType: "input",
    },
    currentWattageConsumption: {
      value: 0,
      maxValue: 5000,
      label: "Huidige verbruik",
      dataType: "Watt",
      tileType: "output",
    },
    todayKwhConsumed: {
      value: 0,
      maxValue: 30,
      label: "Vandaag verbruikt",
      dataType: "kWh",
      tileType: "output",
    },
  },
  toon: {},
  apSystems: {},
});

const fetchData = async () => {
  fetchingData.value = true;

  const apSystems = await useFetch("/api/apsystems/data");
  const apRawCurrentWattage = apSystems.data.value
    ? Math.round(apSystems.data.value.lastPower)
    : 0;
  const apRawTodayWattage = apSystems.data.value
    ? parseFloat(apSystems.data.value.today)
    : 0;

  data.value.tiles.currentWattageYield.value = apRawCurrentWattage;
  data.value.tiles.todayKwhYielded.value = Number(apRawTodayWattage.toFixed(2));

  const toon = await useFetch("/api/toon/currentUsage");
  const toonRawCurrentWattage = toon.data.value
    ? toon.data.value.powerUsage.value
    : 0;
  const toonRawTodayWattage = toon.data.value
    ? Number((toon.data.value.powerUsage.dayLowUsage / 1000).toFixed(2))
    : 0;

  data.value.tiles.currentWattageConsumption.value = toonRawCurrentWattage;

  data.value.tiles.todayKwhConsumed.value = toonRawTodayWattage;

  // Remove this later
  data.value.toon = toon.data.value;
  data.value.apSystems = apSystems.data.value;

  fetchingData.value = false;
};

fetchData();

const triggerFetchData = () => {
  fetchData();
};

// Update each 5 minutes
setInterval(() => {
  fetchData();
}, 60000);
</script>
<template>
  <header class="w-full flex justify-center">
    <button
      class="bg-blue-500 text-white py-2 px-4 rounded-b-xl cursor-pointer hover:bg-blue-600 hover:pt-6 active:pt-8 absolute z-20 transition-all duration-200"
      @click="triggerFetchData"
      :disabled="fetchingData"
      :class="fetchingData && '-translate-y-12'"
    >
      Verversen
    </button>
  </header>
  <main class="w-screen h-screen">
    <div v-if="fetchingData" class="flex gap-2 items-center p-2 fixed">
      <Icon
        name="svg-spinners:90-ring-with-bg"
        size="24"
        class="text-blue-400"
      />
      <p class="text-blue-400 text-md">Data ophalen..</p>
    </div>
    <div class="w-screen h-screen justify-center gap-6 flex flex-col">
      <div
        class="w-[620px] gap-6 grid grid-cols-2 self-center justify-center relative"
      >
        <div
          v-for="tile in data.tiles"
          class="flex-shrink-0 bg-gray-50 rounded-3xl relative overflow-hidden"
        >
          <Icon
            :name="
              tile.tileType === 'input' ? 'ph:solar-panel' : 'ph:plug-charging'
            "
            size="48"
            class="text-gray-300 absolute top-2 right-2"
          />
          <RadialGauge
            :inputData="tile.value"
            :scaleData="(tile.value / tile.maxValue) * 100"
            :dataType="tile.dataType"
            :label="tile.label"
            :tileType="tile.tileType"
          />
        </div>
      </div>
    </div>
  </main>
</template>
