import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
  let style = {
    display: "flex",
    "justify-content": "end",
    "background-image":
      'url("https://iihs.co.in/wp-content/uploads/2023/01/Background-scaled.jpg")',
  };
  return (
    <div className="constainer">
      <div className="Carousel">
        <Carousel showArrows={true}>
          <div>
            <img src="https://iihs.co.in/wp-content/uploads/2022/11/kevin-young-icmOdYWXuQ-unsplash.jpg" />
            <p className="legend">
              <h2>
                The Summary for Urban Policymakers (SUP) series reports launched
                at COP 27
              </h2>
              <p>
                Sharm El-Sheikh, Egypt
                <br />
                11 November 2022
              </p>
              <button className="button">
                <a href="https://iihs.co.in/the-summary-for-urban-policymakers/">
                  Learn More
                </a>
              </button>
            </p>
          </div>
          <div>
            <img
              src="https://iihs.co.in/wp-content/uploads/2023/01/RA_8022.png"
              style={style}
            />
            <p className="legend">
              <h2>Indian Muncipal Finance 2022</h2>
              <p>
                Aromar Revi, Madhumitha Srinivasan, Amir Bazaz, Manish Dubey,
                Midhat Fatima Safdar
              </p>
              <button className="button">
                <a href="https://iihs.co.in/knowledge-gateway/indian-municipal-finance-2022/">
                  Learn More
                </a>
              </button>
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
