import { FunctionComponent } from "react";
import { cssObj } from "./style";
import { useNavigate } from "react-router-dom";

export const List: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div css={cssObj.label}>
      <button type="button" css={cssObj.item} onClick={() => navigate("/toss")}>
        toss
      </button>
      <button type="button" css={cssObj.item}>
        toss bank
      </button>
    </div>
  );
};
