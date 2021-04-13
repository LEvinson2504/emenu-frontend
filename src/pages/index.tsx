import { Container } from "../components/Container";
import Menus from "../components/Menus";

import { signIn, signOut, useSession } from "next-auth/client";

export default function Index({ data }: any) {
  const [session] = useSession();
  return (
    <Container height="100vh">
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <Menus data={data} />
        </>
      )}
    </Container>
  );
}

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
