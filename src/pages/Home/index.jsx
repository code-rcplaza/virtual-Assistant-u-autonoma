import { Link } from 'react-router-dom';
import './homepage.styles.scss';
import { AnimatedLink } from '../../components';

const HomePage = () => {
  return (
    <div>
      <h1>Asistente Virtual </h1>
      <AnimatedLink to='/assistant' text='Asistente' />
    </div>
  );
}

export default HomePage;