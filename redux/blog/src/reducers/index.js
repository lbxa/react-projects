import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

/**
 * ---------------------------------------------------------
 *                    RULES OF REDUCERS
 * ---------------------------------------------------------
 * 1) Must return any value but 'undefined'.
 * 2) Anything produced by a given reducer can only be
 *    based off previous state or action
 * 3) Reducers must be pure. This means they should
 *    remain self-contained and only return computations
 *    based on the state + action objects passed into it.
 * 4) Must not MUTATE input arguments.
 */

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
