import { ActionsUnion } from './types';
import { createAction } from './actionHelpers';

export const START_LOADING = '[ui] start loading';
export const STOP_LOADING = '[ui] stop loading';

export const Actions = {
  startLoading: () => createAction(START_LOADING),
  stopLoading: () => createAction(STOP_LOADING),
};

export type Actions = ActionsUnion<typeof Actions>;
