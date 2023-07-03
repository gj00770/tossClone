import { css } from "@emotion/react";

export const cssObj = {
  container: css`
    height: 80px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    min-width: 400px;
    max-width: 400px;
    border-top: 1px solid black;
    align-items: center;
    width: 100%;
    > div {
      padding: 1.25rem;
    }
  `,
};
