import { all, takeLatest } from 'redux-saga/effects';

import { Types as userType } from '../ducks/user';
import userAdd from './user';

export default function* rootSaga() {
  yield all([takeLatest(userType.REQUEST, userAdd)]);
}
