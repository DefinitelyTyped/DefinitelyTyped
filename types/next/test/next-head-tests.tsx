import Head, * as head from 'next/head';
import * as React from 'react';

const elements: JSX.Element[] = head.defaultHead();
const jsx = (
  <Head>
    {elements}
  </Head>
);
