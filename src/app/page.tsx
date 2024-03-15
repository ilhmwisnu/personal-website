import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <main className="px-4 pt-16 lg:px-20 xl:px-64" id="main">
        <Navbar></Navbar>
        <Header></Header>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
