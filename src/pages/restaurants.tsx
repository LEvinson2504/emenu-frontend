import { Flex } from "@chakra-ui/react";
import Restaurant from "../components/Restaurant";

interface Restaurant {
  id: string;
  name: string;
  Description?: string;
  menu: {
    id: string;
  };
}

const Restaurants = (props: { data: any }) => {
  const { data } = props;
  return (
    <main>
      <Flex
        w="100vw"
        justify="flex-start"
        align="center"
        flexDir={["column", "row"]}
      >
        {data &&
          data.map((restaurant: Restaurant) => (
            <Restaurant restaurant={restaurant} />
          ))}
      </Flex>
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/restaurants`);
  const data = await res.json();

  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

export default Restaurants;
