import CardContent from './CardContent';
import CardImage from './CardImage';

function Card(props) {
  return (
    <article className='card'>
      <CardImage img={props.data.image} />
      <CardContent title={props.data.title} date={props.data.date} text={props.data.text} />
    </article>
  );
}

export default Card;
