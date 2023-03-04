const Books = () => {
  return (
    <div className="container Books">
      <div className="glassmorphism">
        <div className="glass">
          <img
            src="https://iihs.co.in/wp-content/uploads/2023/01/LIB_Routledge-Handbook_316x162.jpg"
            alt="img"
          />
          <h2>Library</h2>
          <p>
            This book presents a unique, timely, comprehensive overview of
            livelihoods.
          </p>
          <button className="button">
            <a href="https://www.routledge.com/The-Routledge-Handbook-on-Livelihoods-in-the-Global-South/Nunan-Barnes-Krishnamurthy/p/book/9780367856359">
                Read More
            </a>
          </button>
        </div>
      </div>
      <div className="glassmorphism">
        <div className="glass">
          <img
            src="https://iihs.co.in/wp-content/uploads/2023/01/KG_SUMMARY_316x162.jpg"
            alt="img"
          />
          <h2>Knowledge Gateway</h2>
          <p>
            What the Latest Physical Science of Climate Change Means for Cities
            and Urban Areas by Laura Gallardo et al.
          </p>
          <button className="button">
            <a href="https://iihs.co.in/knowledge-gateway/what-the-latest-physical-science-of-climate-change-means-for-cities/">
                Read More
            </a>
          </button>
        </div>
      </div>
      <div className="glassmorphism">
        <div className="glass">
          <img
            src="https://iihs.co.in/wp-content/uploads/2023/02/Subaltern-Frontiers_316x162.jpg.webp"
            alt="img"
          />
          <h2>Publics</h2>
          <p>
            Thomas Cowan will be in conversation with Gautam Bhan about his
            latest book, ‘Subaltern Frontiers’.
          </p>
          <button className="button">
            <a href="https://bit.ly/3YX1woO">
                Register Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;
