import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ButtonText } from "./ButtonError.styled";
const ButtonError = ({ buttonText }) => {
  return <ButtonText>{buttonText}</ButtonText>;
};

export default MapTo("reactapp/components/button-error")(ButtonError);
