import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Container, ContainerContent } from "./ContainerCotent.styled";
import ImageError from "../ImageError/ImageError";
import TitleError from "../TitleError/TitleError";
import TextError from "../TextError/TextError";
import ButtonError from "../ButtonError/ButtonError";
function ContainerCotent({ content }) {
  return (
    <>
      {content.map(
        ({ imageContent, titleError, textError, buttonText = {} }, index) => (
          <div key={index}>
            <Container>
              <ImageError imageContent={imageContent.src} />
              <ContainerContent>
                <TitleError titleError={titleError} />
                <TextError textError={textError} />
                <ButtonError buttonText={buttonText} />
              </ContainerContent>
            </Container>
          </div>
        )
      )}
    </>
  );
}

ContainerCotent.defaultProps = {
  content: [
    {
      imageContent: { src: "https://via.placeholder.com/150" },
      titleError: "Title",
      textError: "Text",
      buttonText: "Button",
    },
  ],
};

export default MapTo("reactapp/components/container-content")(ContainerCotent);
