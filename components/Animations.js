import { keyframes } from "@emotion/react";

export const FadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10vh);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
