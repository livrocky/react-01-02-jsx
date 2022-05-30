import './app.css';
import img1 from './newyork.jpg';
const username = 'James';

const card = (
  <article className='card'>
    <img className='card-image' src={img1} alt='Card' />
    <div className='card-content'>
      <h3>paris</h3>
      <p className='date'>{new Date().toDateString()}</p>
      <p className='text'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
    </div>
  </article>
);

function add(n1, n2) {
  return n1 + n2;
}

function App() {
  return (
    <div>
      <section>
        <article className='card'>
          <img className='card-image' src={img1} alt='Card' />
          <div className='card-content'>
            <h3>New york</h3>
            <p className='date'>{new Date().toDateString()}</p>
            <p className='text'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
