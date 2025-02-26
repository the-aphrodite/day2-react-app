import Button from 'react-bootstrap/Button';


function MyButtons({ onIncrease, onDecrease }) {
  return (
    <>
    <Button variant="success" onClick={onIncrease}>Increase</Button>
      <Button variant="danger" onClick={onDecrease}>Decrease</Button>
    </>
  );
}

export default MyButtons;