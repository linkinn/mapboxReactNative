import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as userActions } from '../ducks/user';

export default function* userAdd(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.users}`);
    const isDuplicated = yield select(state => state.user.data.find(u => u.id === data.id));
    if (isDuplicated) {
      yield put(userActions.userFailure('Usuario duplicado'));
    } else {
      const repositoryUser = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        bio: data.bio,
        coord: action.payload.coord,
      };
      yield put(userActions.userSuccess(repositoryUser));
    }
  } catch (e) {
    yield put(userActions.userFailure('Usuario incorreto'));
  }
}
