import {ChakraProvider} from "@chakra-ui/react";
import {DarkModeSwitch} from "../components/DarkModeSwitch";

import theme from "../theme";
import {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
            <DarkModeSwitch />
        </ChakraProvider>
    );
}

export default MyApp;
