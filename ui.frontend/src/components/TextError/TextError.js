import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ErrorContainer, ErrorText } from "./TextError.styled";
import "./index.css";
const TextError = ({ textError }) => {
  return (
    <body>
      <ErrorContainer>
        <ErrorText>{textError}</ErrorText>
      </ErrorContainer>
    </body>
  );
};

export default MapTo("reactapp/components/text-error")(TextError);
