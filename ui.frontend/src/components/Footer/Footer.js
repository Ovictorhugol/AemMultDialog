import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Container, TextContent } from "./Footer.styled";
import "./footer.css";
function Footer({ text }) {
  const PropsText = `created by ${text} - devChallenges.io`;
  const TextDefault = "Digite algo";
  return (
    <div className='Container'>
      <p>{text ? PropsText : TextDefault}</p>
    </div>
  );
}

export default MapTo("reactapp/components/footer")(Footer);
