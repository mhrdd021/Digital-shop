import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css'
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import P1 from '../../../assets/p1.jpg'
import P2 from '../../../assets/p2.jpg'
import P3 from '../../../assets/p5.jpg'
import P4 from '../../../assets/p6.jpg'
import P5 from '../../../assets/p7.jpg'
import P6 from '../../../assets/p8.jpg'
import Rate from './Rate'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      centerPadding: "600px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mx-4 my-8">
        
        <Slider {...settings}>
            <div className="mx-2 slider">
                <img src={P1} className="w-1/4 rounded-full mx-auto my-4"></img>
                <h2 className="text-center text-zinc-600 font-bold">Nima Hoseini</h2>
                <p className="px-4 text-center">
                In publishing and graphic design, Lorem ipsum 
                is a placeholder text commonly used to demonstrate 
                the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be 
                used as a placeholder before final copy is available.
                </p>
                <Rate/>
          </div>

          <div className="mx-2 slider">
                <img src={P2} className="w-1/4 rounded-full mx-auto my-4"></img>
                <h2 className="text-center text-zinc-600 font-bold">Shadi simin</h2>
                <p className="px-4 text-center">
                In publishing and graphic design, Lorem ipsum 
                is a placeholder text commonly used to demonstrate 
                the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be 
                used as a placeholder before final copy is available.
                </p>
                <Rate/>
          </div>

          <div className="mx-2 slider">
                <img src={P3} className="w-1/4 rounded-full mx-auto my-4"></img>
                <h2 className="text-center text-zinc-600 font-bold">Bahar samadi</h2>
                <p className="px-4 text-center">
                In publishing and graphic design, Lorem ipsum 
                is a placeholder text commonly used to demonstrate 
                the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be 
                used as a placeholder before final copy is available.
                </p>
                <Rate/>
          </div>

          <div className="mx-2 slider">
                <img src={P4} className="w-1/4 rounded-full mx-auto my-4"></img>
                <h2 className="text-center text-zinc-600 font-bold">Nozha hamidian</h2>
                <p className="px-4 text-center">
                In publishing and graphic design, Lorem ipsum 
                is a placeholder text commonly used to demonstrate 
                the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be 
                used as a placeholder before final copy is available.
                </p>
                <Rate/>
          </div>

          <div className="mx-2 slider">
                <img src={P5} className="w-1/4 rounded-full mx-auto my-4"></img>
                <h2 className="text-center text-zinc-600 font-bold">Amir stoudeh</h2>
                <p className="px-4 text-center">
                In publishing and graphic design, Lorem ipsum 
                is a placeholder text commonly used to demonstrate 
                the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be 
                used as a placeholder before final copy is available.
                </p>
                <Rate/>
          </div>

          <div className="mx-2 slider">
                <img src={P6} className="w-1/4 rounded-full mx-auto my-4"></img>
                <h2 className="text-center text-zinc-600 font-bold">Sara maleki</h2>
                <p className="px-4 text-center">
                In publishing and graphic design, Lorem ipsum 
                is a placeholder text commonly used to demonstrate 
                the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be 
                used as a placeholder before final copy is available.
                </p>
                <Rate/>
          </div>

        </Slider>
      </div>
    );
  }
}