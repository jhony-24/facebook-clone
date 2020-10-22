import React, { useContext, useReducer } from "react";
import TabChatReducer from "./ChatTabReducer";

const ChatTabContext = React.createContext();

export const ChatTabProvider = ({
  children,
  data,
  filterOptions,
  selectedFilterOption,
  onOptionSelected,
  onSearch
}) => {
  const [state, action] = useReducer(TabChatReducer, {
    searching: false,
    data : [],
    filterOptions,
    selectedFilterOption,
  });

  return (
    <ChatTabContext.Provider value={{ state, action, onOptionSelected, onSearch }}>
      {children}
    </ChatTabContext.Provider>
  );
};

export const useChatTabContext = () => useContext(ChatTabContext);
export default ChatTabContext;
