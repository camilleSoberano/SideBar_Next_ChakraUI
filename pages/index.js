import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Store | 2022</title>
        <meta
          name="description"
          content="books author published popular review"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <SideBar></SideBar>
      </Flex>
    </>
  );
}
