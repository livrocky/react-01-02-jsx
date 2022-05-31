import MyBtn from '../UI/MyBtn';

function CardContent(props) {
  console.log('Card Content props===', props);
  const { title, date, text } = props;
  return (
    <div className='card-content'>
      <h3>{title}</h3>
      <p className='date'>{date}</p>
      <p className='text'>{text}</p>
      <MyBtn text='Buy tickets' />
    </div>
  );
}
export default CardContent;
