import { FunctionComponent, useEffect, useState } from "react";
import { cssObj } from "./style";
import { StepType } from "../TossBank";
import { FaChevronLeft } from "react-icons/fa";
import { css } from "@emotion/react";
interface GetMoneyProps {
  changeStep: (step: StepType) => void;
}
export const GetMoney: FunctionComponent<GetMoneyProps> = (props) => {
  return (
    <div css={cssObj.container}>
      <button
        type="button"
        onClick={() => props.changeStep("selectSection")}
        css={cssObj.buttonWrapper}
      >
        <FaChevronLeft />
      </button>
      <p css={cssObj.title}>사용자님의 정보를 확인해주세요</p>

      <div css={cssObj.inputContainer}>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.label}>이름</p>
          <input css={cssObj.input} />
        </div>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.label}>휴대폰 번호</p>
          <input css={cssObj.input} />
        </div>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.label}>이메일</p>
          <input css={cssObj.input} />
        </div>
        <div css={cssObj.inputWrapper}>
          <p css={cssObj.label}>집주소</p>
          <input css={cssObj.input} />
        </div>
        <div css={cssObj.inputWrapper}>
          <input css={cssObj.input} />
        </div>
      </div>
    </div>
  );
};
