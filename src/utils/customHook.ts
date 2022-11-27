import { useReducer, createContext } from 'react';

type Action = { type: 'open' } | { type: 'close' };
type State = { heightPercent: string };
type Contenxt = { state: State; open: () => void; close: () => void };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'open':
      return { heightPercent: '50%' };
    case 'close':
      return { heightPercent: '100%' };
    default:
      throw new Error();
  }
};

const initalContext: Contenxt = {
  state: {
    heightPercent: '100%',
  },
  open: () => {},
  close: () => {},
};

export const Context = createContext<Contenxt>(initalContext);

export const useCustomContext = (): Contenxt => {
  const [state, dispatch] = useReducer(reducer, { heightPercent: '100%' });

  const open = (): void => {
    dispatch({ type: 'open' });
  };

  const close = (): void => {
    dispatch({ type: 'close' });
  };

  return { state, open, close };
};
