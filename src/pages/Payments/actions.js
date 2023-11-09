import { SET_ADDONS, SET_DEC_STEP, SET_DURATION, SET_PLAN, SET_STEP, SET_SUMMARY, SET_USER } from './constants';

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const setDecStep = () => ({
  type: SET_DEC_STEP,
});

export const setPlan = (plan) => ({
  type: SET_PLAN,
  plan,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setAddons = (addons) => ({
  type: SET_ADDONS,
  addons,
});

export const setSummary = (summary) => ({
  type: SET_SUMMARY,
  summary,
});

export const setDuration = (duration) => ({
  type: SET_DURATION,
  duration,
});
