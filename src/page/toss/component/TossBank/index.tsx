import { FunctionComponent, useState } from "react";
import { cssObj } from "./style";
import { SelectSection } from "../SelectSection";

export type StepType =
  | "selectSection"
  | "createBankAccount"
  | "getMoney"
  | "getMoneyWithFriend"
  | "getLimit";
export const TossBank: FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState<StepType>("selectSection");

  const changeStep = (step: StepType) => {
    setCurrentStep(step);
  };
  const renderStep = () => {
    if (currentStep === "selectSection") {
      return <SelectSection changeStep={changeStep} />;
    }
    if (currentStep === "getMoney") {
      return <div>qweqwe</div>;
    }
    if (currentStep === "getMoneyWithFriend") {
      return <div>qweqwe</div>;
    }
    if (currentStep === "getLimit") {
      return <div>qweqwe</div>;
    }
  };
  return <div css={cssObj.container}>{renderStep()}</div>;
};
