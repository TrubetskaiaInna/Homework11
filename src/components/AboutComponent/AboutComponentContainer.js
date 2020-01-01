import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setHoliday } from '../../actions/index'
import AboutComponent from './AboutComponent'

const mapStateToProps = state => ({
  holiday: state.holiday
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setHoliday }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutComponent)
