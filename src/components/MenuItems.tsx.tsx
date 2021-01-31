import { Container } from "./Container";

const MenuItems = ({ data }: any) => {
  return <Container>{JSON.stringify(data)}</Container>;
};

export default MenuItems;
