import './app.css';
import img1 from './assets/newyork.jpg';
import ParisImg from './assets/paris.jpg';
import SanFranImg from './assets/sanfran.jpg';
// import CardImage from './components/Card/CardImage';
// import CardContent from './components/Card/CardContent';

import MyBtn from './components/UI/MyBtn';
import Icon from './components/UI/Icon';
import Card from './components/Card/Card';

const card1Data = {
  title: 'New York',
  image: img1,
  date: '2022-05-15',
  text: 'Heloo from new york',
};

const cardsData = [
  card1Data,
  {
    title: 'Paris',
    image: ParisImg,
    date: '2022-05-15',
    text: 'Welcome to Paris',
  },
];

const cards2Data = [
  {
    title: 'San Francisco',
    image: SanFranImg,
    date: '2022-05-15',
    text: 'Welcome to Paris',
  },
];

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
        <Card data={cardsData[0]} />
        <Card data={cardsData[1]} />
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
