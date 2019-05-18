// Types
export const Types = {
  MODAL: 'USER_MODAL',
  REQUEST: 'USER_REQUEST',
  SUCCESS: 'USER_SCCESS',
  CANCEL: 'USER_CANCEL',
  FAILURE: 'USER_FAILURE',
};

// Reducers
const INITIAL_STATE = {
  data: [],
  visible: false,
  coord: {},
  loading: false,
  error: false,
};

export default function user(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.MODAL:
      return { ...state, visible: true, coord: actions.payload.coord };
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        data: [...state.data, actions.payload.data],
        visible: false,
        loading: false,
        error: false,
        coord: {},
      };
    case Types.CANCEL:
      return {
        ...state, visible: false, coord: {}, error: false,
      };
    case Types.FAILURE:
      return { ...state, error: actions.payload.error, loading: false };
    default:
      return { ...state };
  }
}

// Actions
export const Creators = {
  userModal: coord => ({
    type: Types.MODAL,
    payload: { coord },
  }),
  userRequest: (users, coord) => ({
    type: Types.REQUEST,
    payload: { users, coord },
  }),
  userSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  userCancel: () => ({
    type: Types.CANCEL,
  }),
  userFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
};
