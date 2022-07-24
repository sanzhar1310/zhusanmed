import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { StyledEngineProvider } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/system';
import createEmotionCache from '../utils/createEmotionCache';
import { theme } from 'styles/theme';

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: Props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider theme={theme}>
          <GlobalStyles styles={() => ({})} />
          <Component {...pageProps} />
        </CssVarsProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default MyApp;
