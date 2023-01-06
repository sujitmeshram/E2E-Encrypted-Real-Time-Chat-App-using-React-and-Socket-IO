// this will be our reducer.
// It takes the current state and the action object we have just created to return a new state.

//initialiaze the function with two arguments
export const ProcessReducer = (state = {}, action) => {
  switch (action.type) {
    //returns updated state
    case "PROCESS":
      return { ...action.payload };

    //else the current state is retained
    default:
      return state;
  }
};
