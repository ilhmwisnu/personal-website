import Header from "./Pages/Header";
import Navbar from "./Components/Navbar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";


function App() {
  return (
    <>
    <div className="px-4 pt-16 lg:px-20 xl:px-64" id="main">
      <Navbar />
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
      <Footer></Footer>
    </>
    
  );
}

export default App;
