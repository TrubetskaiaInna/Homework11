import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { holiday } from '../../actions'
import AboutComponent from './AboutComponent'

const mapStateToProps = state => ({
  holiday: state.holiday
})
const mapDispatchToProps = (dispatch) => {
  const { setHoliday } = holiday
  return bindActionCreators({ setHoliday }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutComponent)
