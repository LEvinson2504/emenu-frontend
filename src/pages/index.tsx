import { Container } from "../components/Container";
import Menus from "../components/Menus";

const Index = ({ data }: any) => (
  <Container height="100vh">
    <Menus data={data} />
  </Container>
);

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/menus`);
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

export default Index;
