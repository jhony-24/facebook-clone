import React from "react";
import Avatar from "@fb-components/common/Avatar";
import faker from "faker";
import { StyledUserAccountButton } from "./elements";

const UserAccountButtonOption = () => (
  <StyledUserAccountButton
    text={faker.name.firstName()}
    image={<Avatar src={faker.image.people()} dimension="30px" />}
  />
);

export default UserAccountButtonOption;
