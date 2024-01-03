import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { StyledControlWrapper } from "./Atoms/elements";
import UserAccountButtonOption from "./Atoms/UserAccountButtonOption";
import ControlButtonOption from "./Atoms/ControlButtonOption";
import ButtonToMoreOptionsAccount from "./Elements/ButtonToMoreOptionsAccount";

const AccountControlSettings = ({
  hideButtonAccount = false
}: {
  hideButtonAccount?: boolean;
}) => (
  <StyledControlWrapper>
    {hideButtonAccount ? null : <UserAccountButtonOption />}
    <ControlButtonOption icon={FiPlus} />
    <ControlButtonOption icon={FaFacebookMessenger} />
    <ControlButtonOption icon={GoBell} />
    <ButtonToMoreOptionsAccount />
  </StyledControlWrapper>
);

export default AccountControlSettings;
