import React from 'react';

export default function (props) {

  return (
    <div className="about-container col-xs-10">
        <div id="about"><br/><br/><br/><br/>
        Hi, {props.user.username}. This is an awesome side project!</div>
    </div>
  );
};
