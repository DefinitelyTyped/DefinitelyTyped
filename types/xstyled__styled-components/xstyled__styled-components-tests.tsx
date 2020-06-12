import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';

interface WithFoo {
    foo: boolean;
}

const WithRequiredProp = styled.div<WithFoo>`
    ${({ foo }) => css`
        display: ${foo ? 'block' : 'none'};
    `}
`;

const WithOptionalProp = styled.div<Partial<WithFoo>>`
    ${({ foo }) => css`
        display: ${foo ? 'block' : 'none'};
    `}
`;

const StyledDiv = styled.div``;
const StyledDivBox = styled.divBox``;

const sum = (a: number) => a * a;
// $ExpectError
sum('b');

const Main = () => {
    return (
        <>
            <WithRequiredProp foo={true} />
            <WithRequiredProp foo={false} />
            // $ExpectError
            <WithRequiredProp />
            <WithOptionalProp />
            // $ExpectError
            <StyledDiv mt={2} />
            <StyledDivBox mt={2} />
        </>
    );
};
