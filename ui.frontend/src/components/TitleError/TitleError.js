import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ErrorContainer, ErrorText } from "./TitleError.styled";
import "./index.css";
const TitleError = ({ titleError }) => {
  return (
    <body>
      <ErrorContainer>
        <ErrorText>{titleError}</ErrorText>
      </ErrorContainer>
    </body>
  );
};

export default MapTo("reactapp/components/title-rror")(TitleError);
