import { Text, Flex, Button, useColorModeValue, Stack } from "@chakra-ui/react";
import { Container } from "./Container";

const Menus = ({ data }: any) => {
  const bg = useColorModeValue("gray.200", "gray.700");
  return (
    <Container>
      <main>
        <Text align="center" fontSize="3xl">
          Menus
        </Text>
        <Flex
          w="100vw"
          justify={["center", "center", "flex-start"]}
          align="center"
          flexDir={["column", "row"]}
        >
          {data &&
            data.map((menu: any) => (
              <Flex
                h="200px"
                w="300px"
                margin="10px"
                key={menu.id}
                bgColor={bg}
                borderRadius="5%"
                align="center"
                justify="space-evenly"
                flexDir="column"
                wrap="wrap"
              >
                <Text fontSize="2xl">{menu.name}</Text>
                <Flex>
                  <Button colorScheme="red" minW="150px">
                    <Text lineHeight="1">Order now</Text>
                  </Button>
                </Flex>
              </Flex>
            ))}
        </Flex>
      </main>
    </Container>
  );
};

export default Menus;
