import {
  DISABEL_BALANCE_ON_ADD,
  DISABEL_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

const initialState = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: false,
  allowRegistration: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISABEL_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: !state.disableBalanceOnAdd
      };
    case DISABEL_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: !state.disableBalanceOnEdit
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: !state.allowRegistration
      };
    default:
      return state;
  }
}
