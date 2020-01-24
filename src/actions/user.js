import { user } from '../constants'

const setUser = (payload) => {
  return {
    type: user.SET_USER,
    payload
  }
}

export default {
  setUser
}
