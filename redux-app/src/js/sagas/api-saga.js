/*
The watcher is basically a generator function “watching” for every action we are interested in. In response to that action, 
the watcher will call a worker saga, which is another generator function for doing the actual API call.

The worker saga will call the remote API with the call method from redux-saga/effects.
*/

import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga); // for each action of this type spin up a workerSaga
}

function* workerSaga() {
  try {
    const payload = yield call(getData); // call function getData()
    yield put({ type: "DATA_LOADED", payload }); // dispatch () a "DATA_LOADED" action with a new payload
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}
