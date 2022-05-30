import React from "react";
import {
  Flex,
  Menu,
  Link,
  MenuButton,
  Icon,
  Text,
  MenuList,
} from "@chakra-ui/react";

import NavHover from "../components/NavHover";

const NavItem = (props) => {
  const { navSize, title, icon, active, description } = props;
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#5D6D7E "}
          px={3}
          py={2.5}
          borderRadius={6}
          _hover={{ textDecor: "none", backgroundColor: "#5D6D7E " }}
          w={navSize === "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#000" : "#85929E"}
                alignItems="center"
              ></Icon>
              <Text
                ml={5}
                display={navSize === "small" ? "none" : "flex"}
                color="white"
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>

        <MenuList py={0} border="none" h={200} w={200} ml={5}>
          <NavHover
            title={title}
            icon={icon}
            description={description}
          ></NavHover>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavItem;
