import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ErrorText } from "./Header.styled";
const Header = (props) => {
  const defaultText = "Digite algo";
  return <ErrorText>{props.text ? props.text : defaultText}</ErrorText>;
};

export default MapTo("reactapp/components/header")(Header);
