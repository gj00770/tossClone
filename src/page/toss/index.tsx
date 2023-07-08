import { FunctionComponent, useState } from "react";
import { cssObj } from "./style";
import { FindPurchase, TossBank } from "./component";

export const Toss: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<"tossBank" | "findPurchase">(
    "tossBank"
  );
  const renderTab = () => {
    if (currentTab === "tossBank") {
      return <TossBank />;
    } else if (currentTab === "findPurchase") {
      return <FindPurchase />;
    }
  };
  return (
    <div>
      <div css={cssObj.tabContainer}>
        <button
          type="button"
          css={cssObj.item(currentTab === "tossBank")}
          onClick={() => setCurrentTab("tossBank")}
        >
          내 토스뱅크
        </button>
        <button
          type="button"
          css={cssObj.item(currentTab === "findPurchase")}
          onClick={() => setCurrentTab("findPurchase")}
        >
          상품 찾기
        </button>
      </div>
      {renderTab()}
    </div>
  );
};
