// import { useRouter } from "next/router";
import { Container } from "../../components/Container";
import MenuItems from "../../components/MenuItems";

const Menu = ({ data }: any) => {
  // const router = useRouter();
  // const { id } = router.query;
  console.log(data);

  return (
    <Container>
      {data &&
        data.menu_items.map((menuitem: any) => (
          <MenuItems id={menuitem.id} data={menuitem}></MenuItems>
        ))}
    </Container>
  );
};

export default Menu;

export async function getServerSideProps({ query }: any) {
  const { id } = query;
  const res = await fetch(`http://localhost:1337/menus/${id}`);
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
