<script setup lang="ts">
interface Props {
  inputData: number;
  scaleData: number;
  dataType: "Watt" | "kWh";
  label: string;
  tileType: "input" | "output";
  fetchingData: boolean;
}
const props = defineProps<Props>();

const gaugeColors =
  props.tileType === "input"
    ? ["#00ff9f", "#00ff9f", "#00ff9f"]
    : ["#ff8f00", "#ff8f00", "#ff8f00"];

const gaugeHeight = ref(350);

const responsiveHeight = () => {
  if (window.matchMedia("(max-width: 639px)").matches) {
    gaugeHeight.value = 225;
  } else {
    gaugeHeight.value = 350;
  }
};

responsiveHeight();

const chartOptions = {
  chart: {
    height: gaugeHeight.value,
    type: "radialBar",
    offsetY: 0,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      track: {
        background: "#484848",
      },
      dataLabels: {
        name: {
          fontSize: "16px",
          color: "#484848",
          offsetY: 120,
        },
        value: {
          offsetY: 76,
          fontSize: "22px",
          color: "#ffffff",
          formatter: function () {
            return `${props.inputData} ${props.dataType}`;
          },
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  },
  colors: gaugeColors,
  stroke: {
    dashArray: 4,
  },
  labels: [props.label],
};
</script>
<template>
  <div
    v-if="fetchingData"
    class="w-full h-full bg-black/50 flex flex-col justify-center items-center absolute z-20"
  >
    <Icon name="svg-spinners:90-ring-with-bg" size="32" class="text-white/30" />
    <p class="text-white/30 text-md">Data ophalen..</p>
  </div>
  <apexchart
    ref="realtimeChart"
    type="radialBar"
    :options="chartOptions"
    :series="[scaleData]"
    :height="chartOptions.chart.height"
  />
</template>
