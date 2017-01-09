import {connect} from 'react-redux';
import store from '../store';
import NavBar from '../components/NavBar';

export default connect(({user}) => ({user}))(NavBar)