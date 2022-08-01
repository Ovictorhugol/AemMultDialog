import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 8rem;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
  @media (max-width: 768px) {
    height: 5rem;
    margin-top: 1rem;
  }
`;

export const FooterText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #bdbdbd;
  font-size: 12px;
`;
