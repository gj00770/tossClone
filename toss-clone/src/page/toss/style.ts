import { css } from "@emotion/react";

export const cssObj = {
  container: css``,
  tabContainer: css`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    border-bottom: 1px solid black;
  `,
  item: (active: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 10px 10px;
    color: ${active ? "black " : "gray"};
    background: none;
    border: 0;
    border-bottom: ${active ? "2px solid black" : "0"};
    cursor: pointer;
  `,
};
