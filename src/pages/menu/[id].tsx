import { useRouter } from "next/router";

const Menu = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return <p>{JSON.stringify(props.data)}</p>;
};

export default Menu;

export async function getServerSideProps({ query }) {
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
