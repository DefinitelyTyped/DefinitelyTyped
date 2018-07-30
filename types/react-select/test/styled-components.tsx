import * as React from 'react';

export const Note = ({ Tag = 'div', ...props }: any) => (
  <Tag
    css={{
      color: 'hsl(0, 0%, 40%)',
      display: 'inline-block',
      fontSize: 12,
      fontStyle: 'italic',
      marginTop: '1em',
    }}
    {...props}
  />
);

export const H1 = (props: any) => <h1 css={{ marginTop: 0 }} {...props} />;
export const H2 = (props: any) => <h2 css={{ marginTop: '2em' }} {...props} />;
