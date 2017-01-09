import React from 'react';

export default function (props) {

  return (
    <div className="contact-container col-xs-10">
        <div id="contact"><br/><br/><br/><br/>
        Email me at tomi@tomi.com to tell me how great this site is :) 
  		<br/>Click the following button to use the email we have on file: {props.user.email}</div>
    </div>
  );
};
