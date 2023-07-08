import { FunctionComponent } from "react";
import { cssObj } from "./style";
import { StepType } from "../TossBank";

interface SelectSectionProps {
  changeStep: (step: StepType) => void;
}
export const SelectSection: FunctionComponent<SelectSectionProps> = (props) => (
  <div css={cssObj.container}>
    <p css={cssObj.itemHeader}>계좌</p>
    <div css={cssObj.itemContainer}>
      <button
        type="button"
        css={cssObj.itemWrapper}
        onClick={() => props.changeStep("createBankAccount")}
      >
        <div css={cssObj.itemPicture} />
        <div css={cssObj.itemBody}>
          <p css={cssObj.itemSubTitle}>토스뱅크 통장</p>
          <p css={cssObj.itemTitle}>이어서 만들기</p>
        </div>
      </button>
      <button
        type="button"
        css={cssObj.itemWrapper}
        onClick={() => props.changeStep("getMoney")}
      >
        <div css={cssObj.itemPicture} />
        <div css={cssObj.itemBody}>
          <p css={cssObj.itemSubTitle}>돈 모으기 </p>
          <p css={cssObj.itemTitle}>저금 공간 만들기</p>
        </div>
      </button>
      <button
        type="button"
        css={cssObj.itemWrapper}
        onClick={() => props.changeStep("getMoneyWithFriend")}
      >
        <div css={cssObj.itemPicture} />
        <div css={cssObj.itemBody}>
          <p css={cssObj.itemSubTitle}>친구랑 함께 모으기</p>
          <p css={cssObj.itemTitle}>모임통장 만들기</p>
        </div>
      </button>
    </div>

    <p css={cssObj.itemHeader}>대출</p>
    <div css={cssObj.itemContainer}>
      <button
        type="button"
        css={cssObj.itemWrapper}
        onClick={() => props.changeStep("getLimit")}
      >
        <div css={cssObj.itemPicture} />
        <div css={cssObj.itemBody}>
          <p css={cssObj.itemSubTitle}>얼마나 빌릴 수 있을까?</p>
          <p css={cssObj.itemTitle}>한도 알아보기</p>
        </div>
      </button>
    </div>
    <p css={cssObj.itemHeader}>대출</p>
    <div css={cssObj.itemContainer}>
      <button
        type="button"
        css={cssObj.itemWrapper}
        onClick={() => props.changeStep("getLimit")}
      >
        <div css={cssObj.itemPicture} />
        <div css={cssObj.itemBody}>
          <p css={cssObj.itemSubTitle}>얼마나 빌릴 수 있을까?</p>
          <p css={cssObj.itemTitle}>한도 알아보기</p>
        </div>
      </button>
    </div>
  </div>
);
