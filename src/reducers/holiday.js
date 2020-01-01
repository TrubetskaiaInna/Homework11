const holiday = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HOLIDAY':
      return action.holiday
    default:
      return state
  }
}
export default holiday
