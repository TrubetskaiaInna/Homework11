import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './CarouselComponent.scss'
import img from '../../assets/images/4-5-1024x768.jpg'
import img1 from '../../assets/images/45.jpg'
import img2 from '../../assets/images/46.jpg'

class SimpleSlider extends React.Component {
  render () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className='wrapperCarousel'>
        <Slider {...settings}>
          <div>
            <img src={img} alt={'img'} />
          </div>
          <div>
            <img src={img1} alt={'img'} />
          </div>
          <div>
            <img src={img2} alt={'img'} />
          </div>
        </Slider>
      </div>
    )
  }
}

export default SimpleSlider
