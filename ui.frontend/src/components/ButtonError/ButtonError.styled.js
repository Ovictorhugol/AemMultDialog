import styled from "styled-components";

export const ButtonText = styled.button`
  cursor: pointer;
  background: #333333;
  border: none;
  color: white;
  padding: 0.5rem;
  width: 10rem;
  height: 4rem;
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");
  font-family: "Space Mono", sans-serif !important;
  text-transform: uppercase;
  :hover {
    background: #4a4a4a;
  }
`;
