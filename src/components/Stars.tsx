import uniqid from 'uniqid';
import Star from './Star';
import './Stars.css';

interface Props {
  count: number;
}

const Stars = ({ count = 0 } : Props)  => {
    if (count < 1 || count > 5) {
        return;
    }
  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map(() => (
        <Star key={uniqid()}/>
      ))}
    </ul>
  )
}

export default Stars;
