import { Container } from "../components/Container";
import Menus from "../components/Menus";

const Index = ({ data }) => (
  <Container height="100vh">
    Hello world
    <Menus data={data} />
  </Container>
);

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/menus`);
  const data = await res.json();

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

export default Index;
