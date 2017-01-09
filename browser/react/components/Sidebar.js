import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  
  return (
    <sidebar>
      <img src="/carLogo.svg" className="logo"/>
      <section>
        <h4 className="menu-item">
          <select id="sidebarList" value={props.state.settings.radius} onChange={props.setRadius}>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>10</option>
            <option>12</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
          </select>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/'>Settings</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/'>Beacons</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/'>Etc</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">Apply Filters</h4>
        <h4>
          <Link className="btn btn-primary btn-block" to="/">
            <span className="glyphicon glyphicon-plus"></span> GO!
          </Link>
        </h4>
      </section>
      <hr />
      <ul className="list-unstyled">
        
      </ul>
    </sidebar>
  );
}
