import { css, keyframes } from "@emotion/react";

export const cssObj = {
  container: css`
    padding-left: 20px;
  `,
  itemHeader: css`
    width: 100%;
    text-align: left;
    font-size: 12px;
    margin: 22px 0 22px;
  `,
  itemWrapper: css`
    display: flex;
    gap: 16px;
    width: 100%;
    cursor: pointer;
  `,
  itemContainer: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  itemPicture: css`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background: pink;
  `,
  itemBody: css`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-top: 4px;
  `,
  itemTitle: css`
    font-size: 16px;
    font-weight: 600;
  `,
  itemSubTitle: css`
    font-size: 12px;
  `,
};
