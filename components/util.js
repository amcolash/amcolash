import { useEffect, useRef } from 'react';
import { style } from 'typestyle';

// Clever bit of code from: https://stackoverflow.com/a/53446665/2303432
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const fullHeight = style({
  height: ['100vh', '100svh'],
});
