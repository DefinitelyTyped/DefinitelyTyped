// tslint:disable-next-line:no-relative-import-in-test
import styled, { createGlobalStyle } from '../macro';

// Check that the default export works.
const TitleFromMacro = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

// Check that named exports work as well.
const GlobalStyleFromMacro = createGlobalStyle`
    @font-face {
      font-family: 'Operator Mono';
      src: url('../fonts/Operator-Mono.ttf');
    }

    body {
        margin: 0;
    }
`;
