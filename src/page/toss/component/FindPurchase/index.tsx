import { FunctionComponent, useState } from "react";
import { cssObj } from "./style";
import { SelectSection } from "../SelectSection";
import { GetMoney } from "../GetMoney";

export type StepType =
  | "selectSection"
  | "createBankAccount"
  | "getMoney"
  | "getMoneyWithFriend"
  | "getLimit";
export const FindPurchase: FunctionComponent = () => {
  const [currentStep, setCurrentStep] = useState<StepType>("selectSection");
  const [unmounting, setUnmounting] = useState(false);

  const changeStep = (step: StepType) => {
    setCurrentStep(step);
  };

  const renderStep = () => {
    if (currentStep === "selectSection") {
      return <SelectSection changeStep={changeStep} />;
    }
    if (currentStep === "getMoney") {
      return <GetMoney changeStep={changeStep} />;
    }
    if (currentStep === "getMoneyWithFriend") {
      return <GetMoney changeStep={changeStep} />;
    }
    if (currentStep === "getLimit") {
      return <GetMoney changeStep={changeStep} />;
    }
    if (currentStep === "createBankAccount") {
      return <GetMoney changeStep={changeStep} />;
    }
  };
  return <div css={cssObj.container}>{renderStep()}</div>;
};
