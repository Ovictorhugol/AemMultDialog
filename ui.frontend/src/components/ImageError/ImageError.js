import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ImgError } from "./ImageError.styled";
import ErrorImg from './404.jpeg'
const ImageError = ({ imageContent }) => {
  return <ImgError src={ErrorImg} />;
};

export default MapTo("reactapp/components/image-error")(ImageError);
