import { holiday } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case holiday.SET_HOLIDAY:
      return action.holiday
    default:
      return state
  }
}
