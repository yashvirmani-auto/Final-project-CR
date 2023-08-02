export const DUMMY_DATA = [
  {
    id: "01",
    name:"United States",
    gdp:20.89,
    population:339996563,
    area:9372610,
    incomePerCapita:59928,
    exports:3026233,
    imports:2407543,
    populationDensity:37,
    crimeRate:11.3
  },
  {
    id: "02",
    name:"China",
    gdp:14.72,
    population:1425671352,
    area:9706961,
    incomePerCapita:16842,
    exports:1753941,
    imports:2055590,
    populationDensity:149,
    crimeRate:7.2
  },
  {
    id: "03",
    name:"India",
    gdp:2.66,
    population:1428627663,
    area:3287590,
    incomePerCapita:7166,
    exports:457749,
    imports:599200,
    populationDensity:435,
    crimeRate:0.48
  },
  {
    id: "04",
    name:"Japan",
    gdp:5.06,
    population:123294513,
    area:377930,
    incomePerCapita:42067,
    exports:757460,
    imports:634577,
    populationDensity:326,
    crimeRate:0.02
  },
  {
    id: "05",
    name:"Germany",
    gdp:3.85,
    population:83294633,
    area:357114,
    incomePerCapita:52556,
    exports:1626387,
    imports:1171857,
    populationDensity:233,
    crimeRate:4.7
  },
  {
    id: "06",
    name:"United Kindom",
    gdp:2.67,
    population:67736802,
    area:242900,
    incomePerCapita:44920,
    exports:691826,
    imports:631859,
    populationDensity:277,
    crimeRate:4.3
  },
  {
    id: "07",
    name:"France",
    gdp:2.63,
    population:64756584,
    area:551695,
    incomePerCapita:44033,
    exports:675100,
    imports:569225,
    populationDensity:913,
    crimeRate:3
  },
];

export function getAllCountries() {
  return DUMMY_DATA;
}

export function getCountryById(id) {
  return DUMMY_DATA.find((event) => event.id === id);
}
