import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Courses = () => {
        let style = {'display':'flex','justify-content':'end','background-image':'url("https://iihs.co.in/wp-content/uploads/2023/01/Background-scaled.jpg")'}
        return (
          <div className="Carousel">
            <Carousel
              showArrows={true}
            >
              <div>
                <img src='https://iihs.co.in/wp-content/uploads/2022/07/TASEP_HP-banner_856x373.jpeg.webp' />
                <p className="legend" >
                  <h4>Course on</h4>
                  <h2>The Art and Science of Economic Policy</h2>
                  <p>IIHS, in collaboration with Coursera, has launched its latest digital blended learning programme. 
                  <br/>The 5-week self-paced course helps learners understand the why, when, what and how of economic policymaking through a combination of concepts and ideas,
                  <br/> cases and examples and thought-provoking discussion questions.</p>
                  <button className="button">
                    <a href="https://www.coursera.org/learn/art-and-science-of-economic-policy?utm_source=organic_tasep&utm_medium=website_banner&utm_campaign=organic_tasep_website_banner" target='_blank'>
                    Learn More
                    </a>
                    </button>
                </p>
              </div>
              <div>
                <img src="https://iihs.co.in/wp-content/uploads/2023/01/Website-Banner-100.jpg"/>
                <p className="legend">
                  <h2>(Un)restricted – Confronting expression of cultures and connections in public spaces</h2>
                  <p>(Un)restricted presents collective dialogues focusing on public spaces beyond spatial configuration.</p>
                  <button className="button">
                    <a href="https://library.iihs.co.in/exhibitions/" target='_blank'>
                    Read More
                    </a>
                    </button>
                </p>
              </div>
              <div>
                <img src="https://iihs.co.in/wp-content/uploads/2022/09/SUF_Website-banner_856x373.jpg.webp"/>
                <p className="legend">
                  <h4>Course on</h4>  
                  <h2>Shaping Urban Futures</h2>
                  <p>Launched on Coursera, this new online course is a collaborative effort of five global institutions including IIHS.
                  <br/>Designed as a self-paced, 6-week course, it addresses the most pressing challenges faced by humanity in the 21st century by considering how cities can become sustainable.</p>
                  <button className="button">
                    <a href="https://www.coursera.org/learn/shaping-urban-futures?utm_source=iihs&utm_medium=institutions&utm_campaign=website_poster_shaping_urban_futures" target='_blank'>
                    Enrol here
                    </a>
                    </button>
                </p>
              </div>
            </Carousel>
          </div>
    );
  };
  
  export default Courses;
  