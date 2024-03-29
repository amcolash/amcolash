import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { cssRule, style } from 'typestyle';

import { usePrevious } from './util';
import { OuterPadding } from '../lib/constants';

cssRule('body', {
  margin: 0,
  fontFamily: 'Rubik, sans-serif',
  fontSize: '1.25rem',
  overflowX: 'hidden',
});

cssRule('@media print', {
  body: {
    background: 'none !important',
    color: 'black !important',
    textShadow: 'none !important',
  },
  a: {
    color: 'black !important',
    textShadow: 'none !important',
  },
  '.mainTitle': {
    display: 'none',
  },
});

const mainStyle = style({ flex: 1, padding: OuterPadding, width: `calc(100% - ${OuterPadding * 2})` });

export function Main(props) {
  const router = useRouter();
  const prevRoute = usePrevious(router.pathname);
  const title =
    router.pathname !== '/' && router.pathname.indexOf('/blog/') === -1 && router.pathname.indexOf('/projects/') === -1
      ? router.route.replace('/', '')
      : '';

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25, delay: prevRoute === '/' ? 0.75 : undefined } }}
        exit={{ opacity: 0, transition: { duration: prevRoute === '/' ? 0 : 0.15 } }}
        key={router.route}
        className={`main ${mainStyle}`}
      >
        {title && (
          <h1 style={{ textTransform: 'capitalize', marginTop: '-1rem', marginBottom: '3rem' }} className="mainTitle">
            {title}
          </h1>
        )}
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}
