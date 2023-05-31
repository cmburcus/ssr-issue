import React from "react";
import { styled } from "styled-components";
import { Text, theme } from "@local-logic/ui";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${theme["--ll-spacing-medium"]} ${theme["--ll-spacing-medium"]} 200px
    ${theme["--ll-spacing-medium"]};
`;

const PDFPreview = () => (
  <Container>
    <Text />
  </Container>
);

export const getServerSideProps = async () => ({
    props: {},
  });

export default PDFPreview;
