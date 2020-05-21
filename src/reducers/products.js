var initialState = [
  {
    id: 1,
    name: "iPhone 6 Plus",
    price: 400,
    status: true,
  },
  {
    id: 2,
    name: "SamSung s7",
    price: 300,
    status: false,
  },
  {
    id: 3,
    name: "Oppo F1S",
    price: 200,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
