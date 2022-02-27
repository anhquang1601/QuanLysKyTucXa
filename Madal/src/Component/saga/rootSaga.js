import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/fetchStudent"
import  watcherUser  from "./handlers/postUser";
import watcherGetUser from "./handlers/getUser";
import { fork } from 'redux-saga/effects';
import watcherKindRoomSaga from "./handlers/FetchApi/getKindRoom";
import watcherPostKindRoomSaga from "./handlers/AddApi/postKindRoom";
import { watcherDeleteKindRoom } from "./handlers/DeleteApi/deleteKindRoom";
import watcherpdateKindRoomSaga from "./handlers/UpdateApi/update";
export default function* rootSaga() {
  yield all([fork(watcherUserSaga),fork(watcherUser),fork(watcherGetUser),fork(watcherKindRoomSaga),
    fork(watcherPostKindRoomSaga),fork(watcherDeleteKindRoom),fork(watcherpdateKindRoomSaga)]);
}
