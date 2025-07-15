const STATE_KEY = "reduxState";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};

export const localStorageMiddleware = (store) => (next) => (action) => {
  let result = next(action);
  const state = store.getState();

  saveState({
    notes: state.notes,
  });

  return result;
};
