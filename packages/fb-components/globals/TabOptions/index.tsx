import React, { Fragment, useCallback, useEffect, useState } from "react";
import {  StyledFlexSearch, StyledTabOptionSearch } from "./elements";

type TabOptionsTypes = {
  initialId : string;
  children : React.ReactNode;
  onSelectedOption ?: (selectedId : string) => void
}
const TabOptions = ({ initialId, children, onSelectedOption } : TabOptionsTypes) => {
  const [selectedId, setSelected] = useState<string>(initialId);

  // Active event onOptionSelected if the event property exists
  const selected = useCallback(() => {
    onSelectedOption && onSelectedOption(selectedId);
  },[selectedId,onSelectedOption]); 

  useEffect(() => {
    selected();
  }, [selected]);

  // Verify is the children is a fragment or not
  const crossChildren = children?.type === Fragment ? children?.props.children : children; 
  
  return (
    <StyledFlexSearch>
      {React.Children.map(crossChildren, (e) =>
        React.cloneElement(e, {
          selected: selectedId === e.props.optionId,
          onClick: () => setSelected(e.props.optionId),
        })
      )}
    </StyledFlexSearch>
  );
};


type OptionTypes = {
  text ?: string;
  optionId ?: string;
} & React.HTMLAttributes<{}>;

// Component item selected
TabOptions.Option = React.memo(
  ({ text,optionId, ...restProps } : OptionTypes) => (
    <StyledTabOptionSearch 
      {...restProps}
      optionId={optionId}
      data-testid={optionId}
      >{text}</StyledTabOptionSearch>
  )
);

export default TabOptions;