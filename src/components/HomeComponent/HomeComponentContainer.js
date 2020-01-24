import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions'
import HomeComponent from './HomeComponent'

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
)(HomeComponent)
