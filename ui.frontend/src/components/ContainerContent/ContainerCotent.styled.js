import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;

    margin-top: 5rem;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;
