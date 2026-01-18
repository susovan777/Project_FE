const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id != action.payload),
      };

    default:
      return state;
  }
};

export default AppReducer;
