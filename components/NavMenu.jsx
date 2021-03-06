import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Wrapper, Button, Menu, closeMenu } from 'react-aria-menubutton';
import { Menu as Burger } from 'react-feather';
import { cssRule, style } from 'typestyle';
import useDarkMode from 'use-dark-mode';

import { Link } from './Link';
import { Colors, interactiveStyle, OuterPadding } from '../lib/constants';
import Tooltip from 'the-only-react-tooltip';

const menuButtonClass = style(interactiveStyle);
const menuButtonId = 'MyMenuButton';

cssRule(`#${menuButtonId}-menu li`, {
  margin: 4,
});

export const NavMenu = () => {
  const darkMode = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => closeMenu(menuButtonId);

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method:
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, []);

  return (
    <Tooltip body="Site Menu">
      <Wrapper id={menuButtonId} style={{ position: 'relative' }}>
        <Button id={`${menuButtonId}-button`} className={menuButtonClass} style={{ display: 'flex', color: Colors.Black }}>
          <Burger />
        </Button>
        <Menu
          id={`${menuButtonId}-menu`}
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            zIndex: 99,
            textAlign: 'center',
            background: darkMode.value ? Colors.Black : Colors.White,
            padding: `calc(${OuterPadding} / 2)`,
            border: `1px solid ${darkMode.value ? Colors.White : Colors.Black}`,
          }}
          tabIndex=""
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/github">Github</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </Menu>
      </Wrapper>
    </Tooltip>
  );
};
