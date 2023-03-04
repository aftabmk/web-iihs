import About from "./components/About";
import Books from "./components/Books";
import Courses from "./components/Courses";
import Form from "./components/Form/Form";
import Social from "./components/Social";

import "./home.css";

const Home = () => {
  return (
    <div className="sticky">
      <About />
      <Books />
      <Courses />
      <Social />
      <Form />
    </div>
  );
};

export default Home;
