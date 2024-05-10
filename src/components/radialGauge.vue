<script setup lang="ts">
interface Props {
  inputData: number;
  scaleData: number;
  dataType: "Watt" | "kWh";
  label: string;
  tileType: "input" | "output";
}
const props = defineProps<Props>();

const gaugeColors =
  props.tileType === "input"
    ? ["#00ff9f", "#00ff9f", "#00ff9f"]
    : ["#ff8f00", "#ff8f00", "#ff8f00"];

const chartOptions = {
  chart: {
    height: 350,
    type: "radialBar",
    offsetY: 0,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,

      dataLabels: {
        name: {
          fontSize: "16px",
          color: "#909090",
          offsetY: 120,
        },
        value: {
          offsetY: 76,
          fontSize: "22px",
          color: undefined,
          formatter: function (val: any) {
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
  <apexchart
    ref="realtimeChart"
    type="radialBar"
    height="250"
    :options="chartOptions"
    :series="[scaleData]"
  />
</template>
