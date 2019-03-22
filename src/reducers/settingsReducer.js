import {
  DISABEL_BALANCE_ON_ADD,
  DISABEL_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case DISABEL_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: action.payload
      };
    case DISABEL_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: action.payload
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: action.payload
      };
    default:
      return state;
  }
}
