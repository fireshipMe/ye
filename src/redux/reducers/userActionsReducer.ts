/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UserActions } from '../../types/index';
import { setUserActionsList } from '../actions';

interface InitialState {
  userActions: UserActions[] | undefined
}

const initialState: InitialState = { userActions: [] };

// eslint-disable-next-line import/prefer-default-export
export const userActionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserActionsList, (state, action) => { state.userActions = action.payload; });
});
