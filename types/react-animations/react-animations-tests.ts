import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

const BounceDiv = styled.div`
    animation: infinite 5s ${keyframes`${bounce}`};
`;
