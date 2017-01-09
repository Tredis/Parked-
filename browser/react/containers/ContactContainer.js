import {connect} from 'react-redux';
import store from '../store';
import Contact from '../components/Contact';

export default connect(({user}) => ({user}))(Contact)