import * as React from "react";
import { Config, render, markdown, Catalog, ReactSpecimen, Page } from "catalog";

const config: Config = {
  title: 'Test',
  pages: [
    {
      path: '/',
      title: 'Introduction',
      content: '/patd/to/file.md',
    },
    {
      path: '/materials',
      title: 'Materials',
      pages: [
        {
          path: '/materials/typeface',
          title: 'Typeface',
          component: <Page />,
        },
      ],
    },
  ],
  useBrowserHistory: true,
  basePath: '/doc',
  responsiveSizes: [
    { name: 'large', width: 978, height: 1100 },
    { name: 'medium', width: 640, height: 900 },
    { name: 'small', width: 471, height: 700 },
  ],
};

render(config, document.body);
<Catalog {...config} />;

markdown`
# Test

${<ReactSpecimen>
  <div />
</ReactSpecimen>}
`;
