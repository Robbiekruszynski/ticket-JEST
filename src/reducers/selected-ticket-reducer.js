import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';

export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_TICKET':
    return action.ticketId;
  default:
    return state;
  }
};
