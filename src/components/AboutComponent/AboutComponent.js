import React, { Component } from 'react'
import './AboutComponent.scss'
import apiService from '../../services/apiService'
import TransitionsModal from '../../components/InfoComponent/InfoComponent'

class AboutComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      holidays: []
    }
  }

  componentDidMount () {
    this.setState({ holidays: apiService.display() })
    console.log(apiService.display())
  }

  render () {
    return (
      <div className='wrapperAboutComponent'>
        <div className='headerAbout' />
        <div className='text'> <span>Here you can order a holiday for every taste, in any format.
      We will offer different options for your event: full rental of the
        park (with the official, solemn part in the theater, buffet), rental
         of individual game stations, etc.</span></div>
        <TransitionsModal />
        <div className='wrapperHoliday'>
          {this.state.holidays.map((element) => {
            return (
              <div className='holiday' key={element.title}><h3> {element.title} </h3>
                {element.description}
              </div>
            )
          }
          )}
        </div>

      </div>
    )
  }
}

export default AboutComponent
