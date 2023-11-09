import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPaymentState = (state) => state.payments || initialState;

export const selectStep = createSelector(selectPaymentState, (state) => state.step);
export const selectUser = createSelector(selectPaymentState, (state) => state.user);
export const selectPlan = createSelector(selectPaymentState, (state) => state.plan);
export const selectAddons = createSelector(selectPaymentState, (state) => state.addons);
export const selectSummary = createSelector(selectPaymentState, (state) => state.summary);
export const selectDuration = createSelector(selectPaymentState, (state) => state.duration);

export const selectSetPlan = createSelector(selectPaymentState, (state) => state.setPlan);
export const selectSetAddons = createSelector(selectPaymentState, (state) => state.setAddons);
