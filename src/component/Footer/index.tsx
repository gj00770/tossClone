import { FunctionComponent } from "react";
import { cssObj } from "./style";

export const Footer: FunctionComponent = () => {
  return (
    <div css={cssObj.container}>
      <div>홈</div>
      <div>혜택</div>
      <div>토스페이</div>
      <div>주식</div>
      <div>전체</div>
    </div>
  );
};
