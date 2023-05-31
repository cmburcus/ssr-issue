import React, { ReactElement } from "react";
import Web from "~/components/Web";
import WebLayout from "~/components/WebLayout";
import { GetServerSideProps } from "next";

const Index = () => (
  <Web />
);

Index.getLayout = function getLayout(page: ReactElement) {
  return <WebLayout>{page}</WebLayout>;
};

export const getServerSideProps: GetServerSideProps = async () => ({
    props: {},
  });

export default Index;
