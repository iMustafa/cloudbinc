export class Chart {
  caption: string;
  subcaption: string;
  theme: string;
}

export class Datum {
  label: string;
  value: string;
}

export class RootObject {
  chart: Chart;
  data: Datum[];
}

