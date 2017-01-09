import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import store from '../store';
import Map from '../components/Map';

class MapContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.init_map(nextProps.settings);
  }

  componentDidMount() {
    this.init_map(this.props.settings);
    // this.unsubscribe = store.subscribe(() => {});
  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  init_map(mapState) {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(mapState.center.lat, mapState.center.long);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: Math.floor(12.64 + 50/(mapState.radius+6)),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    // var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // // Add the marker to the map
    // var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     title:"Hello World!"
    // });
    var map = new google.maps.Map(map_canvas_obj, mapOptions);

    // var bounds = new google.maps.LatLngBounds();
    console.log("request street segments from database")
    axios.get('/api/segs/')
    .then(res=>res.data)
    .then(segs=>{
      console.log("start sending segments to google")
      for(var seg of segs){
        var line = new google.maps.Polyline({
          path: [{lat:seg.lat1, lng:seg.long1},{lat:seg.lat2, lng:seg.long2}],
          geodesic: false,
          strokeColor: Math.random()<.5 ? 'red' : 'green',
          strokeOpacity: 1.0,
          strokeWeight: 2
        })
        line.setMap(map)
      }
    }).then(()=> console.log("out of my hands, up to google now."))
  }

  render() {
    return <Map />;
  }

}

export default connect( ({settings}) => ({settings}) )(MapContainer)