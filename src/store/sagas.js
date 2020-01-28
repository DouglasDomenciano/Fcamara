import { takeEvery, put } from 'redux-saga/effects';

function* saveMessage(action) {
    yield put({ type: 'SUCCESS_SAVE_MESSAGE', payload: { data: action.payload } });
}

function* deleteMessage(action) {
    yield put({ type: 'SUCCESS_DELETE_MESSAGE', payload: { data: action.payload } });
}

export default function* root() {
  yield takeEvery('SAVE_MESSAGE', saveMessage)
  yield takeEvery('DELETE_MESSAGE', deleteMessage)
}