export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case 'SELECT_TICKET':
    return action.ticketId;
  case 'ADD_TICKET':

    newState = state;
    newState[action.ticketId] = {
      ticketId: action.ticketId,
      names: action.names,
      location: action.location,
      issue: action.issue,
      timeOpen: action.timeOpen
    }
    return newState;
  default:
    return state;
  }
};
