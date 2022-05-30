import type { NextPage } from 'next';
import Head from 'next/head';
import Link from "next/link";

import Center from "../components/center";
import Footer from "../components/footer";


const Home: NextPage = () => {

  const Name = `
  ██████╗  █████╗ ███████╗███████╗    ██╗  ██╗
  ██╔══██╗██╔══██╗██╔════╝██╔════╝    ╚██╗██╔╝
  ██████╔╝███████║███████╗█████╗       ╚███╔╝
  ██╔══██╗██╔══██║╚════██║██╔══╝       ██╔██╗
  ██████╔╝██║  ██║███████║███████╗    ██╔╝ ██╗
  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝    ╚═╝  ╚═╝
  `;
  return (
    <>
      <div data-theme="night" >
        {console.log(Name)}
        <Head>
          <title>Base-X</title>
          <meta name="description" content="The converter that convert text into nitrogenous bases." />
          <meta name="image" content="../../public/logo.png" />

          <meta property="og:title" content="Base-X" />
          <meta property="og:description" content="The converter that convert text into nitrogenous bases." />
          <meta property="og:image" content="../../public/logo.png" />
          <meta property="og:url" content="https://base-x.netlify.app/" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="Adam Al-Rahman" />
          <meta name="twitter:title" content="Base-X" />
          <meta name="twitter:description" content="The converter that convert text into nitrogenous bases." />
          <meta name="twitter:image" content="../../public/logo.png" />
        </Head>
        <div className="flex flex-col w-full lg:flex-row min-h-screen bg-neutral ">
          <div className="hidden lg:grid m-5 p-5 max-w-sm flex-grow card bg-base-200 rounded-box">
            <div className="navbar p-2 max-h-16 bg-secondary text-primary-content rounded-box">
              <Link href="/" ><button className="btn btn-ghost text-center font-ruslanDisplay font-bold text-2xl">Base-X</button></Link>
            </div>
            <div className="mockup-code m-2 ">
              <footer className="footer-center p-4 bg-cyan-700 text-base-300 font-bold text-xl rounded-box m-6">
                <p>Text {`>>`} Base</p>
              </footer>
              <div className="flex flex-col -mb-6">
                <p className="ml-6 mr-6">It is a way to convert the text into nitrogenous bases. First the text is converted into binary and then the binary is converted into nitrogenous bases. And now you can download the converted nitrogenous bases as a <code>fasta(.fasta)</code> file.</p>
                <Link href="https://github.com/Adam-Al-Rahman/base-x#readme"><button className="btn btn-outline btn-primary w-32 m-4">Read More</button></Link>
              </div>
            </div>
            <footer className="footer sticky top-[100vh] max-h-24 footer-center p-2 bg-secondary text-base-content rounded-box">
              <div className="text-base-200 font-semibold" >
                <p>Design & Built by</p>
                <Link href="https://atiq-ur-rehaman.netlify.app/">
                  <button className="btn btn-ghost text-base font-bold">
                    Adam Al-Rahman</button></Link>
              </div>
            </footer>
          </div>
          <div className="m-5 p-8 sm:m-5 sm:p-20 lg:grid flex-grow card bg-base-200 rounded-box ">
            <div className="h-content-container">
              <div className="navbar p-2  bg-secondary text-primary-content rounded-box lg:hidden">
                <Link href="/" ><button className="btn btn-ghost text-center font-ruslanDisplay font-bold text-2xl">Base-X</button></Link>
              </div>
              <h2 className="mt-16 lg:mt-0 mb-8 text-xl sm:text-3xl sm:mb-8 font-bold font-mono">Base Converter</h2>
              <Center />
              <Footer />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home;
