import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";

// You can 'rename' or alias a NAMED import.
// reducer --> formReducer.
// be more descriptive with the names

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
