import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>;
    console.log(props);
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
         {ticketInformation}
       </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
