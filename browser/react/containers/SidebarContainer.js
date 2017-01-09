
import {connect} from 'react-redux';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {setRadius, setDuration, setTimingType, setParkingType} from '../action-creators'

const mapDispatchToProps = dispatch => ({
    setRadius: e => dispatch(setRadius(+e.target.value)),
    setDuration: e => dispatch(setDuration(+e.target.value)),
    setTimingType: e => dispatch(setTimingType(e.target.value)),
    setParkingType: e => dispatch(setParkingType(e.target.value))
})

export default connect(state=>({state}), mapDispatchToProps)(Sidebar)

