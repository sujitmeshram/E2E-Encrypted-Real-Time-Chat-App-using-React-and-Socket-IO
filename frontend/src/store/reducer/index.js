//here I import the reducer I have just created and
//call the action object.

import { ProcessReducer } from "./process";
import { combineReducers } from "redux";

//// define the object and call the action
const rootReducers = combineReducers({
  ProcessReducer: ProcessReducer,
});

// else return default root reducer
export default rootReducers;
