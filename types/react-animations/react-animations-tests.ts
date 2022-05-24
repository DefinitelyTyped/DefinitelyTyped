import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const BounceDiv = styled.div`
    animation: infinite 5s ${keyframes`${bounce}`};
`;
