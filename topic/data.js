let rawData = [
  {
    product_id: 1,
    product_name: "Longos - Grilled Salmon With Bbq",
    product_type: 2,
    is_active: true,
    selling_price: 10.49,
    discount_price: 41.54,
  },
  {
    product_id: 2,
    product_name: "Wine - Magnotta, Merlot Sr Vqa",
    product_type: 2,
    is_active: true,
    selling_price: 16.03,
    discount_price: 62.21,
  },
  {
    product_id: 3,
    product_name: "Cheese - Cambozola",
    product_type: 2,
    is_active: false,
    selling_price: 28.31,
    discount_price: 62.53,
  },
  {
    product_id: 4,
    product_name: "Sauce - Balsamic Viniagrette",
    product_type: 2,
    is_active: true,
    selling_price: 55.87,
    discount_price: 52.11,
  },
  {
    product_id: 5,
    product_name: "Crab Brie In Phyllo",
    product_type: 1,
    is_active: false,
    selling_price: 71.54,
    discount_price: 43.14,
  },
  {
    product_id: 6,
    product_name: "Madeira",
    product_type: 2,
    is_active: true,
    selling_price: 65.38,
    discount_price: 39.6,
  },
  {
    product_id: 7,
    product_name: "Otomegusa Dashi Konbu",
    product_type: 4,
    is_active: false,
    selling_price: 86.44,
    discount_price: 81.76,
  },
  {
    product_id: 8,
    product_name: "Vacuum Bags 12x16",
    product_type: 2,
    is_active: true,
    selling_price: 59.43,
    discount_price: 48.83,
  },
  {
    product_id: 9,
    product_name: "Chocolate - Mi - Amere Semi",
    product_type: 1,
    is_active: false,
    selling_price: 26.76,
    discount_price: 87.29,
  },
  {
    product_id: 10,
    product_name: "Soup Campbells",
    product_type: 3,
    is_active: false,
    selling_price: 93.42,
    discount_price: 18.84,
  },
  {
    product_id: 11,
    product_name: "Noodles - Steamed Chow Mein",
    product_type: 4,
    is_active: false,
    selling_price: 51.43,
    discount_price: 93.06,
  },
  {
    product_id: 12,
    product_name: "Arizona - Green Tea",
    product_type: 2,
    is_active: true,
    selling_price: 79.61,
    discount_price: 25.48,
  },
  {
    product_id: 13,
    product_name: "Dome Lid Clear P92008h",
    product_type: 3,
    is_active: true,
    selling_price: 39.32,
    discount_price: 71.26,
  },
  {
    product_id: 14,
    product_name: "Apple - Delicious, Red",
    product_type: 4,
    is_active: true,
    selling_price: 4.46,
    discount_price: 58.94,
  },
  {
    product_id: 15,
    product_name: "Wine - Spumante Bambino White",
    product_type: 1,
    is_active: true,
    selling_price: 66.97,
    discount_price: 95.18,
  },
  {
    product_id: 16,
    product_name: "Flour - Bran, Red",
    product_type: 4,
    is_active: true,
    selling_price: 37.14,
    discount_price: 7.02,
  },
  {
    product_id: 17,
    product_name: "Plastic Arrow Stir Stick",
    product_type: 1,
    is_active: false,
    selling_price: 98.61,
    discount_price: 95.36,
  },
  {
    product_id: 18,
    product_name: "Sauce - Bernaise, Mix",
    product_type: 2,
    is_active: true,
    selling_price: 9.35,
    discount_price: 88.2,
  },
  {
    product_id: 19,
    product_name: "Temperature Recording Station",
    product_type: 2,
    is_active: false,
    selling_price: 75.06,
    discount_price: 75.46,
  },
  {
    product_id: 20,
    product_name: "Brownies - Two Bite, Chocolate",
    product_type: 2,
    is_active: false,
    selling_price: 26.8,
    discount_price: 13.27,
  },
  {
    product_id: 21,
    product_name: "Olives - Green, Pitted",
    product_type: 2,
    is_active: false,
    selling_price: 11.56,
    discount_price: 90.71,
  },
  {
    product_id: 22,
    product_name: "Beef - Top Sirloin - Aaa",
    product_type: 2,
    is_active: true,
    selling_price: 82.89,
    discount_price: 17.96,
  },
  {
    product_id: 23,
    product_name: "Chinese Lemon Pork",
    product_type: 3,
    is_active: true,
    selling_price: 89.72,
    discount_price: 37.51,
  },
  {
    product_id: 24,
    product_name: "Scallops 60/80 Iqf",
    product_type: 4,
    is_active: true,
    selling_price: 94.58,
    discount_price: 1.63,
  },
  {
    product_id: 25,
    product_name: "Containter - 3oz Microwave Rect.",
    product_type: 2,
    is_active: true,
    selling_price: 89.86,
    discount_price: 41.01,
  },
  {
    product_id: 26,
    product_name: "Cake - Box Window 10x10x2.5",
    product_type: 4,
    is_active: false,
    selling_price: 85.65,
    discount_price: 21.6,
  },
  {
    product_id: 27,
    product_name: "Chocolate - Semi Sweet",
    product_type: 3,
    is_active: false,
    selling_price: 57.63,
    discount_price: 51.83,
  },
  {
    product_id: 28,
    product_name: "Oneshot Automatic Soap System",
    product_type: 2,
    is_active: true,
    selling_price: 59.6,
    discount_price: 87.43,
  },
  {
    product_id: 29,
    product_name: "Soho Lychee Liqueur",
    product_type: 4,
    is_active: true,
    selling_price: 97.04,
    discount_price: 63.31,
  },
  {
    product_id: 30,
    product_name: "Salmon - Atlantic, Skin On",
    product_type: 2,
    is_active: true,
    selling_price: 50.56,
    discount_price: 42.89,
  },
  {
    product_id: 31,
    product_name: "Red Pepper Paste",
    product_type: 3,
    is_active: false,
    selling_price: 51.35,
    discount_price: 33.21,
  },
  {
    product_id: 32,
    product_name: "Spoon - Soup, Plastic",
    product_type: 2,
    is_active: true,
    selling_price: 89.02,
    discount_price: 91.07,
  },
  {
    product_id: 33,
    product_name: "Beer - Mill St Organic",
    product_type: 3,
    is_active: true,
    selling_price: 15.76,
    discount_price: 88.28,
  },
  {
    product_id: 34,
    product_name: "Orange - Canned, Mandarin",
    product_type: 1,
    is_active: false,
    selling_price: 82.26,
    discount_price: 94.67,
  },
  {
    product_id: 35,
    product_name: "Ice Cream Bar - Oreo Sandwich",
    product_type: 1,
    is_active: false,
    selling_price: 43.58,
    discount_price: 83.2,
  },
  {
    product_id: 36,
    product_name: "Rye Special Old",
    product_type: 1,
    is_active: true,
    selling_price: 43.89,
    discount_price: 78.62,
  },
  {
    product_id: 37,
    product_name: "Pancetta",
    product_type: 3,
    is_active: true,
    selling_price: 50.6,
    discount_price: 40.08,
  },
  {
    product_id: 38,
    product_name: "Truffle Shells - Semi - Sweet",
    product_type: 2,
    is_active: false,
    selling_price: 83.95,
    discount_price: 59.64,
  },
  {
    product_id: 39,
    product_name: "Sugar - Monocystal / Rock",
    product_type: 1,
    is_active: true,
    selling_price: 24.32,
    discount_price: 22.78,
  },
  {
    product_id: 40,
    product_name: "Bagel - Plain",
    product_type: 2,
    is_active: false,
    selling_price: 53.13,
    discount_price: 58.33,
  },
  {
    product_id: 41,
    product_name: "Veal - Inside Round / Top, Lean",
    product_type: 4,
    is_active: false,
    selling_price: 5.03,
    discount_price: 14.69,
  },
  {
    product_id: 42,
    product_name: "Rum - Cream, Amarula",
    product_type: 4,
    is_active: true,
    selling_price: 66.7,
    discount_price: 79.77,
  },
  {
    product_id: 43,
    product_name: "Tomatillo",
    product_type: 4,
    is_active: true,
    selling_price: 96.11,
    discount_price: 46.66,
  },
  {
    product_id: 44,
    product_name: "Doilies - 5, Paper",
    product_type: 2,
    is_active: false,
    selling_price: 79.71,
    discount_price: 44.1,
  },
  {
    product_id: 45,
    product_name: "Noodles - Cellophane, Thin",
    product_type: 4,
    is_active: true,
    selling_price: 85.28,
    discount_price: 74.49,
  },
  {
    product_id: 46,
    product_name: "Pasta - Ravioli",
    product_type: 4,
    is_active: false,
    selling_price: 87.29,
    discount_price: 62.98,
  },
  {
    product_id: 47,
    product_name: "Tarts Assorted",
    product_type: 2,
    is_active: false,
    selling_price: 66.11,
    discount_price: 49.69,
  },
  {
    product_id: 48,
    product_name: "Sambuca - Opal Nera",
    product_type: 3,
    is_active: false,
    selling_price: 31.9,
    discount_price: 45.51,
  },
  {
    product_id: 49,
    product_name: "Bulgar",
    product_type: 2,
    is_active: true,
    selling_price: 45.2,
    discount_price: 81.65,
  },
  {
    product_id: 50,
    product_name: "C - Plus, Orange",
    product_type: 4,
    is_active: false,
    selling_price: 9.28,
    discount_price: 58.1,
  },
];

const colors = ["black", "red", "green", "blue", "gold", "white"];
const sizes = ["M", "L", "X", "XL"];

rawData = rawData.map((dataItem) => {
  console.log(dataItem);
  return {
    ...dataItem,
    color: colors[Math.floor(Math.random(colors.length) * 10)],
    size: sizes[Math.floor(Math.random(sizes.length) * 10)],
    is_in_stock: Math.floor(Math.random(2) * 10) == 1 ? true : false,
  };
});

exports.data = rawData;