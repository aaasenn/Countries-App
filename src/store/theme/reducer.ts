import { TOGGLE_THEME } from "./constants";

const initialState = {
  theme: 'dark',
}

export const themeReducer = (state = initialState, action: any) => {
  if (action.type === TOGGLE_THEME) {
    return {
      ...state,
      theme: action.payload
    }
  }

  return state;
}