import users from '../users.json'
import holidays from '../holidays.json'

export default class apiService {
  static login (currentUser) {
    return new Promise((resolve, reject) => {
      users.forEach((user) => {
        if (user.userName === currentUser.userName && user.password === currentUser.password) {
          window.localStorage.setItem('success', 'true')
        }
      })
      if (window.localStorage.getItem('success') === 'true') {
        setTimeout(() => { resolve(currentUser) }, 700)
      } else {
        setTimeout(() => { reject(new Error(401)) }, 700)
      }
    })
  }

  static display () {
    return holidays
  }
}
