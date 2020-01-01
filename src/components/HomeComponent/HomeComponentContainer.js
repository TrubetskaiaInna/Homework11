import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setUser } from '../../actions/index'
import HomeComponent from './HomeComponent'

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setUser }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)
