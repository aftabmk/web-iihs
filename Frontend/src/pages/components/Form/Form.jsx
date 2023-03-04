import "./form.css";
const Form = () => {
  return (
    <div className="cover">
      <div>
        <h2>Newsletters</h2>
      </div>
      <div className="Form">
        <form action="">
          <p>Sign In</p>
          <input type="email" placeholder="Email" />
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="">All IIHS Newsletters</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="">IIHS General Newsletters</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="">IIHS Research Newsletter</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="">IIHS Centre for Land Governance Newsletter</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="">
              IIHS Urban Practitioners’ Programme Newsletter
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <label htmlFor="">IIHS Digital Blended Learning Newsletter </label>
          </div>
          <button className="button neo">Sign up</button>
        </form>
        <div class="drops">
          <div class="drop"></div>
          <div class="drop"></div>
          <div class="drop"></div>
          <div class="drop"></div>
          <div class="drop"></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
