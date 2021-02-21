import { Button, Flex, Text } from "@chakra-ui/react";
import { Container } from "./Container";

const MenuItems = ({ data }: any) => {
  return (
    <Container>
      <Text>{}</Text>
      <Flex
        w="100vw"
        justify="center"
        align="center"
        flexDir={["column", "row"]}
      >
        <Flex
          h="100px"
          w="400px"
          margin="10px"
          key={data.id}
          // bgColor={bg}
          borderRadius="5%"
          align="center"
          justify="space-between"
          flexDir="row"
          wrap="wrap"
        >
          <Flex flexDir="column">
            <Text fontSize="2xl">{data.name}</Text>
            <Text textColor="gray.500">₹{data.price}</Text>
            <Text textColor="gray.500">{data.description}</Text>
          </Flex>
          <Button>Order now!</Button>
        </Flex>
      </Flex>
      {/* {JSON.stringify(data)} */}
    </Container>
  );
};

export default MenuItems;
