import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';



function TicketList(props){
  console.log(props)
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map((ticket, index) =>
        <Ticket names={props.ticketList[ticket].names}
          location={props.ticketList[ticket].location}
          issue={props.ticketList[ticket].issue}
          formattedWaitTime={props.ticketList[ticket].formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={props.ticketList[ticket].id}
          onTicketSelection={props.onTicketSelection}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
}

export default TicketList;
