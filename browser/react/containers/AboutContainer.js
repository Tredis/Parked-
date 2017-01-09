import {connect} from 'react-redux';
import store from '../store';
import About from '../components/NavBar';

export default connect(({user}) => ({user}))(About)