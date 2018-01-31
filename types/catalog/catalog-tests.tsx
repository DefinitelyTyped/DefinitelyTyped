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
};

render(config, document.body);
<Catalog {...config} />;

markdown`
# Test

${<ReactSpecimen>
  <div />
</ReactSpecimen>}
`;
