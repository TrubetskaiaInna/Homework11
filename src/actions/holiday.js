import { holiday } from '../constants'

const setHoliday = () => {
  return {
    type: holiday.SET_HOLIDAY
  }
}

export default {
  setHoliday
}
