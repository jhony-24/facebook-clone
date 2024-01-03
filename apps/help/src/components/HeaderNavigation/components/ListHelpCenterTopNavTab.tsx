import { useAtom } from "jotai";
import { styled } from "../../../lib/stitches.config";
import { tabsAtom } from "../../../stores/mainNavigation.store";
import HelpCenterTopNavTab from "./HelpCenterTopNavTab";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div", {
  display: "flex",
  "@max3": {
    display: "block",
    background: "$bg100",
    width: "100%"
  }
});

const ListHelpCenterTopNavTab = () => {
  const [state] = useAtom(tabsAtom);
  const navigate = useNavigate();

  return (
    <Wrapper>
      {state.map((item) => (
        <HelpCenterTopNavTab
          key={item.id}
          item={item}
          onSelectOption={(e) => navigate(e.option.id)}
        />
      ))}
    </Wrapper>
  );
};

export default ListHelpCenterTopNavTab;
