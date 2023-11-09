import { produce } from 'immer';

import { SET_STEP, SET_ADDONS, SET_PLAN, SET_USER, SET_DURATION, SET_DEC_STEP, SET_SUMMARY } from './constants';

export const initialState = {
  step: 1,
  user: {},
  duration: 'monthly',
  setPlan: {},
  setAddons: [],
  plan: [
    {
      id: 1,
      title: 'Arcade',
      price: {
        monthly: 9,
        year: 90,
      },
    },
    {
      id: 2,
      title: 'Pro',
      price: {
        monthly: 12,
        year: 120,
      },
    },
    {
      id: 3,
      title: 'Advanced',
      price: {
        monthly: 15,
        year: 150,
      },
    },
  ],
  addons: [
    {
      id: 1,
      title: 'Online Service',
      desc: 'Access to multiplayer games',
      price: {
        monthly: 1,
        year: 10,
      },
    },
    {
      id: 2,
      title: 'Larger Storage',
      desc: 'Extra 1TB of cloud save',
      price: {
        monthly: 2,
        year: 20,
      },
    },
    {
      id: 3,
      title: 'Customizable profile',
      desc: 'Custom theme on your profile',
      price: {
        monthly: 2,
        year: 20,
      },
    },
  ],
  summary: {},
};

export const storedKey = ['user', 'setPlan', 'setAddons', 'summary', 'duration'];

const paymentReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_DEC_STEP:
        if (draft.step > 1) {
          draft.step -= 1;
        }
        break;
      case SET_USER:
        draft.user = action.user;
        break;
      case SET_PLAN:
        draft.setPlan = action.plan;
        break;
      case SET_ADDONS:
        draft.setAddons = action.addons;
        break;
      case SET_DURATION:
        draft.duration = action.duration;
        break;
      case SET_SUMMARY:
        draft.summary = action.summary;
        break;
    }
  });

export default paymentReducer;
