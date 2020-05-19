export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // DONT MUTATE!!!! hehehehe
      return [...state, action.payload];
    default:
      return state;
  }
};
