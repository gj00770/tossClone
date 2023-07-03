import { css } from "@emotion/react";
export const cssObj = {
  label: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  `,
  item: css`
    border: 0.0625rem solid #0064ff;
    background: #0064ff;
    border-radius: 0.75rem;
    font-size: 1.25rem;
    width: 12.5rem;
    height: 2.5rem
    margin: 0;
    padding: 0.625rem;
    cursor: pointer;
    color: #ffffff;
    :hover {
      background: #0080ff;
    }
  `,
};
