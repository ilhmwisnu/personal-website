import Header from "./Pages/Header";
import Navbar from "./Components/Navbar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="px-4 pt-16 lg:px-20 xl:px-40" id="main">
      <Navbar />
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
