interface Data {
  tiles: {
    currentWattageYield: {
      value: number;
      maxValue: number;
      label: string;
      dataType: "Watt" | "kWh";
      tileType: "input" | "output";
    };
    todayKwhYielded: {
      value: number;
      maxValue: number;
      label: string;
      dataType: "Watt" | "kWh";
      tileType: "input" | "output";
    };
    currentWattageConsumption: {
      value: number;
      maxValue: number;
      label: string;
      dataType: "Watt" | "kWh";
      tileType: "input" | "output";
    };
    todayKwhConsumed: {
      value: number;
      maxValue: number;
      label: string;
      dataType: "Watt" | "kWh";
      tileType: "input" | "output";
    };
  };
  toon: {};
  apSystems: {};
}
