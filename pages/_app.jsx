import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Footer } from '../components/Footer';
import { GreenSlide } from '../components/GreenSlide';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { fullHeight } from '../components/util';

// Disable SSR (so I can use state easily): https://dev.to/apkoponen/how-to-disable-server-side-rendering-ssr-in-next-js-1563
function SafeHydrate({ children }) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <SafeHydrate>
      <AnimatePresence>{router.pathname === '/' && <GreenSlide />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
        key="initialFade"
        className={fullHeight}
        style={{ display: 'flex', flexDirection: 'column', zIndex: 1, position: 'relative' }}
      >
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </motion.div>
    </SafeHydrate>
  );
}

export default MyApp;
