import About from "./components/About";
import Books from "./components/Books";
import Courses from "./components/Courses";

import "./home.css";

const Home = () => {
  return (
    <div className="sticky">
      <About />
      <Books />
      <Courses />
      <Books />
      <Books />
    </div>
  );
};

export default Home;
