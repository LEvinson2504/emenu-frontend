import { Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";

const Restaurant = (props: any) => {
  const {
    restaurant: {
      id,
      name,
      Description,
      menu: { _id },
    },
  } = props;
  const bg = useColorModeValue("gray.200", "gray.700");
  return (
    <main>
      <Flex
        h="200px"
        w="300px"
        margin="10px"
        key={id}
        bgColor={bg}
        borderRadius="5%"
        align="center"
        justify="space-evenly"
        flexDir="column"
        wrap="wrap"
      >
        <Text fontSize="2xl">{name}</Text>
        <Text
          fontSize="md"
          isTruncated
          maxW="200px"
          color="gray.500"
          noOfLines={2}
          align="center"
        >
          {Description} and a little more of text
        </Text>
        <Flex>
          <Text
            as="a"
            lineHeight="1"
            href={`http://localhost:3000/menu/${_id}`}
          >
            <Button colorScheme="red" minW="150px">
              Order now
            </Button>
          </Text>
        </Flex>
      </Flex>
    </main>
  );
};

export default Restaurant;
