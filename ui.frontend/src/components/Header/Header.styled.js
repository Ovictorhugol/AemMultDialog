import styled from "styled-components";

export const ErrorText = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&display=swap");
  font-family: "Inconsolata", sans-serif !important;
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: 1rem;
  color: #333333;
  text-transform: uppercase;
  @media (max-width: 768px) {
    margin: 0;
    font-size: 1.5rem;
  }
`;
