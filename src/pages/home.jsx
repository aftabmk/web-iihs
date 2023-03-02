import About from './components/About';
import Event from './components/Event';
import People from './components/People';
import Practice from './components/Practice';
import Research from './components/Research';
import Teaching from './components/Teaching';
import './home.css'

const Home = () => {
  return (
    <div className='wrapper'>
      <div className='page'>
        <About/>
      </div>
      <div className='page'>
        <Teaching />
      </div>
      <div className='page'>
        <Research />
      </div>
      <div className='page'>
        <Practice />
      </div>
      <div className='page'>
        <People />
      </div>
      <div className='page'>
        <Event />
      </div>
    </div>
  );
};

export default Home;
