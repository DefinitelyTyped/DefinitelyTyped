/** @jsx jsx */
import { Flex, jsx, InitializeColorMode, ColorMode, Styled } from 'theme-ui';

export const Component = () => {
    return (
      <>
        <InitializeColorMode />
        <ColorMode />
        <Styled.a href="https://awesome.com">Awesome</Styled.a>
        <Styled
          as="article"
          sx={{
            ':hover': {
              backgroundColor: 'red',
            },
          }}
        >
          Works
        </Styled>
        <div sx={{ bg: 'red' }}>
          <Flex sx={{ backgroundColor: 'pink' }} />
        </div>
      </>
    );
};

const Success = () => (
  <>
    <div
      sx={{
        'body > div': {
          ':hover': {
            color: 'red',
          },
        },
      }}
    />
    <div
      sx={{
        '@media only screen and (max-width: 600px)': {
          'body > div': {
            ':hover': {
              color: 'red',
            },
          },
        },
      }}
    />
  </>
);
