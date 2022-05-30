import React, { useState } from "react";
import {
  Flex,
  Box,
  Divider,
  Avatar,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";

import { FiMenu, FiHome, FiBookmark } from "react-icons/fi";
import { AiFillDatabase, AiOutlineCloudUpload } from "react-icons/ai";

import NavItem from "../components/NavItem";

const navInfo = [
  {
    id: 1,
    title: "Home",
    icon: FiHome,
    description: "This is the Home page for Books Store App",
  },
  {
    id: 2,
    title: "Book List",
    icon: AiFillDatabase,
    description: "Looking for available books in the store?",
  },
  {
    id: 3,
    title: "To Rent/Sell",
    icon: AiOutlineCloudUpload,
    description: "Upload books to sell or rent",
  },
  {
    id: 4,
    title: "Bookmarked",
    icon: FiBookmark,
    description: "Mark books to review later!",
  },
];

const SideBar = () => {
  const [navSize, setNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      left="4"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize === "small" ? "4rem" : "12rem"}
      borderRadius={navSize === "small" ? "8px" : "16px"}
      flexDir="column"
      justifyContent="space-between"
      //   backgroundColor="black"

      backgroundImage="linear-gradient(to bottom, #0c0c08, #151c15, #122b27, #0a3941, #1c455e)"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "#95A5A6" }}
          icon={<FiMenu />}
          onClick={() => {
            navSize === "small" ? setNavSize("large") : setNavSize("small");
          }}
          border="1px solid #FFF"
          color="white"
        ></IconButton>

        {navInfo &&
          navInfo.map((info) => {
            return (
              <NavItem
                navSize={navSize}
                icon={info.icon}
                title={info.title}
                description={info.description}
              ></NavItem>
            );
          })}

        {/* <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the dashboard"
        ></NavItem>
        <NavItem navSize={navSize} icon={FiHome} title="Gallery"></NavItem>
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Setting"
          active
        ></NavItem> */}
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="/avatar.svg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm" color="white">
              Geraldine Corey
            </Heading>
            <Text color="white">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
