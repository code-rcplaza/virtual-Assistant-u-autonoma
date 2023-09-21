import { Link } from 'react-router-dom';
import './animatedLink.styles.scss'

const AnimatedLink = ({ to, text }) => (<Link className="link" to={to}>{text}</Link>)

export default AnimatedLink;