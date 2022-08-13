import { TOGGLE_THEME } from "./constants";

interface IToggle {
  type: string,
  payload: string,
}

export const toggleTheme = (theme: string): IToggle => ({
  type: TOGGLE_THEME,
  payload: theme,
});