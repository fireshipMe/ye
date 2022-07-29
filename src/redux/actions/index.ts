import { createAction } from '@reduxjs/toolkit';
import { UserActions } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const setUserActionsList = createAction<UserActions[] | undefined>('userActions/set');
