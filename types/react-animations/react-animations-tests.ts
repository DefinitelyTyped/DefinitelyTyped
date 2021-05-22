import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const BounceInAnimation = keyframes`${bounce}`;

const BounceDiv = styled.div`
  animation: infinite 5s ${BounceInAnimation};
`;
