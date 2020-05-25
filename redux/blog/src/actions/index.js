import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";

/**
 * Async/await syntax
 * When transpiled into ES5, results in a non-js plain object
 * being returned. This breaks the rules of redux, hence the
 * middleware alert error.
 *
 * If async/await not used, then fetch request still won't be
 * made by the time the function returns. Hence object's payload
 * will be undefined.
 */
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

/**
 * Redux-thunk allows async/await syntax as middleware only
 * handles the inner function, wrapped by the action creator.
 *
 * Once middle ware calls dispatch within the returned function
 * It passes the newly returned action, to the dispatch function
 * again, except this time with the proper payload from the AJAX
 * call.
 *
 * action creator (async) -> middleware -> dispatch -> reducers
 */

/**
 * The above is equivalent to below. With a function returning
 * another function, the first curly braces and return statement
 * can be removed.
 *
 * export const fetchPosts = () => {
 *   return async dispatch => {
 *   const response = await jsonPlaceholder.get("/posts");
 *
 *   dispatch({
 *     type: "FETCH_POSTS",
 *     payload: response
 *   });
 *  };
 * };
 */

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// memoize will allow axios to only be called once for every user
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
});

// Cannot memoize whatever you like. The axios call will still be invoked
// in both nested functions below
// export const fetchUser = function(id) {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//       type: "FETCH_USER",
//       payload: response.data
//     });
//   };
// };
