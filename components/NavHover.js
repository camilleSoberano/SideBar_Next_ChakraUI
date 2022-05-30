import React from "react";
import { Flex, Icon, Heading, Text } from "@chakra-ui/react";

const NavHover = (props) => {
  const { title, icon, description } = props;

  return (
    <>
      <Flex
        pos="absolute"
        mt="calc(100px - 7.5px)"
        ml="-10px"
        width={0}
        height={0}
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid #5D6D7E"
      />
      <Flex
        h={180}
        w={200}
        flexDir="column"
        alignItems="center"
        justify="center"
        backgroundColor="#5D6D7E "
        borderRadius="10px"
        color="#000"
        textAlign="center"
      >
        <Icon as={icon} fontSize="2xl" mb={4} color="white"></Icon>
        <Heading size="md" fontWeight="normal" color="white" p={2}>
          {title}
        </Heading>
        <Text color="white" p={2}>
          {description}
        </Text>
      </Flex>
    </>
  );
};

export default NavHover;
