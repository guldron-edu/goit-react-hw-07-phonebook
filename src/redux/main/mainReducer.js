import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import mainActions from "./mainActions";

const onDeleteContact = (state, action) => {
  return (state = state.filter(({ id }) => id !== action.payload));
};

const itemToolkitReducer = createReducer([], {
  [mainActions.newContactSucces]: (state, action) => [...state, action.payload],
  [mainActions.getContactsSucces]: (state, action) => action.payload,

  [mainActions.delContactsSucces]: onDeleteContact,
});

const filterToolkitReducer = createReducer("", {
  [mainActions.changeFilter]: (state, action) => (state = action.payload),
  [mainActions.pushFilterToState]: (state, action) => (state = action.payload),
});

const loadingToolkitReducer = createReducer(false, {
  [mainActions.newContactRequst]: () => true,
  [mainActions.newContactSucces]: () => false,
  [mainActions.newContactError]: () => false,
  [mainActions.getContactsRequst]: () => true,
  [mainActions.getContactsSucces]: () => false,
  [mainActions.getContactsError]: () => false,
  [mainActions.delContactsRequst]: () => true,
  [mainActions.delContactsSucces]: () => false,
  [mainActions.delContactsError]: () => false,
});

export default combineReducers({
  items: itemToolkitReducer,
  filter: filterToolkitReducer,
  loading: loadingToolkitReducer,
});
