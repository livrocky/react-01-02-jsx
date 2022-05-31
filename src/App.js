import './app.css';
import img1 from './assets/newyork.jpg';
import ParisImg from './assets/paris.jpg';
import CardImage from './components/Card/CardImage';
import CardContent from './components/Card/CardContent';

import MyBtn from './components/UI/MyBtn';
import Icon from './components/UI/Icon';
import Card from './components/Card/Card';

const card1Data = {
  title: 'newyork',
  image: img1,
  date: '2022-05-15',
  text: 'Heloo from new york',
};

// const card = (
//   <article className='card'>
//     <img className='card-image' src={img1} alt='Card' />
//     <div className='card-content'>
//       <h3>paris</h3>
//       <p className='date'>{new Date().toDateString()}</p>
//       <p className='text'>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
//     </div>
//   </article>
// );

// function add(n1, n2) {
//   return n1 + n2;
// }

function App() {
  return (
    <div className='App'>
      <MyBtn text='I am reusable component' />
      {/* <CardImage img={img1} /> */}
      <h1 className='main-title'>Back Again</h1>
      <div className='card-container'>
        {/* <Card data = {card1Data} /> */}
        <article className='card'>
          <CardImage img={img1} />
          <CardContent title='New York' date='Tue May 31 2022' text='Welcome to New York, have a great time' />
        </article>
        <article className='card'>
          <CardImage img={ParisImg} />
          <CardContent title='Paris' date='Tue May 31 2022' text='Welcome to Patis' />
        </article>
        <Card data={card1Data} />
      </div>

      <Icon icon={'fa-facebook-official'} />
      <Icon icon={'fa-instagram'} />
      <Icon icon={'fa-snapchat'} />
      <Icon icon={'fa-twitter'} />
      <Icon icon={'fa-pinterest'} />
      <Icon icon={'fa-linkedin'} />
    </div>
  );
}

export default App;
