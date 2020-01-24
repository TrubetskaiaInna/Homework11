import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions'
import LoginComponent from './LoginComponent'

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => {
  const { setUser } = user
  return bindActionCreators({ setUser }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)
