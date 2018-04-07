const data = {
  models: [
    {
      name: "PRO RS3",
      price: 1220,
      available: {
        engine: [1, 2, 3, 4],
        gearbox: [2]
      }
    },
    {
      name: "UBER RS2",
      price: 760,
      available: {
        engine: [1, 2, 3],
        gearbox: [1, 2]
      }
    },
    {
      name: "STANDARD",
      price: 530,
      available: {
        engine: [2, 3, 4],
        gearbox: [1, 2]
      }
    },
    {
      name: "WK",
      price: 420,
      available: {
        engine: [4],
        gearbox: [1]
      }
    }
  ],
  engines: [
    { name: "5.2 532BHP", price: 1350, id: 1 },
    { name: "4.2 443BHP", price: 990, id: 2 },
    { name: "3.6L 374BHP", price: 840, id: 3 },
    { name: "2.0L 166BHP", price: 540, id: 4 }
  ],
  gearboxes: [
    { name: "Manual", price: 1000, id: 1 },
    { name: "Automatic", price: 500, id: 2 }
  ],
  colors: [
    { name: "Red", hex: "#FF0000" },
    { name: "Grey", hex: "#D0D0D0" },
    { name: "Brown", hex: "#D88756" },
    { name: "Dark", hex: "#181818" }
  ]
};

export default data;
