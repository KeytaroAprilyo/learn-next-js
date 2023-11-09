import Image from "next/image";

import Head from "next/head";
import Navbar from "./component/navbar";

export default function Home () {
     return(
      <>
        <Head>

        <title> home </title>
        <meta name="keywords" content="next.js" />
        </Head>
        <Navbar />
      <Image src="./next.svg" width={300} height={300} alt="next.js logo" />
      <h1>home</h1>
        </>
     );
}