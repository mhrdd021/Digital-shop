import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Telegram from '../../../assets/telegram.png'
import Twitter from '../../../assets/twitter.png'
import Instagram from "../../../assets/instagram.png"
import Github from "../../../assets/github.webp"

const Footer = () => {
  return (
    <div className="footer">
            <div className="container">     
                <div className="row">                       
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Simply dummy text</a></li>
                                <li><a href="#">The printing and typesetting </a></li>
                                <li><a href="#">Standard dummy text</a></li>
                                <li><a href="#">Type specimen book</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#">
                                    <img src={Telegram}></img>    
                                </a></li>
                                <li><a href="#">
                                    <img src={Instagram}></img>
                                </a></li>
                                <li><a href="#">
                                    <img src={Twitter}></img>
                                </a></li>
                                <li><a href="#">
                                    <img src={Github}></img>    
                                </a></li>
                            </ul>
                        </div>                          
                    </div>        
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2023 <a href="https://github.com/mhrdd021">MHRDD</a>.</p>
                    </div>              
                </div>              
            </div>
        </div>
  )
}

export default Footer