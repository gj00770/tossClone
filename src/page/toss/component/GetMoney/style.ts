import { css, keyframes } from "@emotion/react";

const slide = keyframes`
 0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }

`;

export const cssObj = {
  container: css`
    height: 400px;
    animation: ${slide} 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    position: relative;
  `,
  buttonWrapper: css`
    top: 20px;
    left: 10px;
    background: none;
    position: absolute;
    cursor: pointer;
    :hover {
      color: gray;
    }
  `,
  title: css`
    font-weight: 700;
    font-size: 18px;
    margin: 60px 0 22px 0;
    text-align: left;
  `,
  input: css`
    border-bottom: 1px solid black;
    padding: 8px;

    :focus {
      outline: 0;
      border-bottom: 1px solid #0064ff;
    }
  `,
  label: css`
    font-size: 12px;
    width: fit-content;
  `,
  inputWrapper: css`
    display: flex;
    flex-direction: column;
    :focus-within {
      > p {
        color: #0064ff;
      }
    }
  `,
  inputContainer: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};
