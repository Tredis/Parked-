import React, {Component} from 'react';
import store from '../store';

import SidebarContainer from '../containers/SidebarContainer';
import NavContainer from '../containers/NavContainer';

export default function (props) {
  return (
    <div id="main" className="container-fluid">
      <div className="row">
        <NavContainer />
      </div>
      <div className="row">
        <div className="col-xs-10">
          {props.children && React.cloneElement(props.children, store.getState())}
        </div>
        <div className="col-xs-2">
          <SidebarContainer />
        </div>
      </div>
      
    </div>
  );
}
