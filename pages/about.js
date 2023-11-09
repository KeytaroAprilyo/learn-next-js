
import Head from "next/head";
import Navbar from "./component/navbar";
import Image from "next/image";

const About = () =>{
    return(
        <>
          <Head>
  
          <title> About </title>
          <meta name="keywords" content="next.js" />
          </Head>
          <Navbar />
        <Image src="./next.svg" width={300} height={300} alt="next.js logo" />
        <h1>About</h1>
          </>
       );
}
export default About;