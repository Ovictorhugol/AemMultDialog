import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 8rem;
  margin-bottom: 1rem;
  width: 68%;
  @media (max-width: 768px) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    height: 6rem;
  }
`;
export const ErrorText = styled.p`
  color: #4f4f4f;
  text-align: justify;
  font-weight: 400;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 1.2rem;
  }
`;
