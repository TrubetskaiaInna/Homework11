import { user } from '../constants'
import update from 'immutability-helper'

export default (state = {}, action) => {
  switch (action.type) {
    case user.SET_USER:
      return update(state, {
        name: { $set: action.payload.name },
        password: { $set: action.payload.password }
      })
    default:
      return state
  }
}
