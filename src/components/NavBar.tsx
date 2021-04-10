import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <Flex w="100vw" justify="space-evenly" m="20px">
        <Text fontSize="20px">
          <Link href="/">Home</Link>
        </Text>
        <Text fontSize="20px">Menus</Text>
        <Text fontSize="20px">
          <Link href="/restaurants">Restaurants</Link>
        </Text>
        <Text fontSize="20px">Contact us</Text>
      </Flex>
    </nav>
  );
};

export default NavBar;
