import { useLocation } from 'react-router';
import { ArrowBackOutlined, Movie } from '@material-ui/icons';
import './watch.scss';
import {Link} from 'react-router-dom'

export default function Watch() {
  // Refers back to the ListItem.jsx to the <Link> tag
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to='/'>
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
