import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import './css/site.css';
import './js/bootstrap.min.js';
import './js/custome.js';
import './js/jquery.min.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <meta charset="utf-8" />
            <title>Kyazoonga - Buy Tickets for Concerts, Cricket, Events, Movies, Theatre, Sports, Amusement Parks, more.</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            <meta name="description" content="Kyazoonga - Buy Tickets for Concerts, Cricket, Events, Movies, Theatre, Sports, Amusement Parks, more." />
            <meta name="keywords" content="sport tickets, buy cricket tickets, concert tickets, cricket world cup tickets, buy movie tickets, movie tickets online, world cup 2015 ticket, cricket world cup hospitality package, event tickets booking, live event tickets, icc cricket tickets for sale, amusement parks tickets, buy cricket bats, cricket store, buy books online, buy sports merchandise, book online tickets, cricket match tickets, cricket world cup tickets, buy concert tickets online, buy tickets online"
            />
            <link rel="shortcut icon" href="images/favicon_green.ico" />
            <link rel="stylesheet" href="css/bootstrap.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="css/site.css" />
        </header> 

                <p className="App-intro"></p>
                <nav className="navbar navbar-inverse site-nav">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="site-logo" href="#"><img src={require("./images/kyazoonga.png")} alt="The Big Ticket" title="The Big Ticket" /></a>
                  </div>
                  <div className="collapse navbar-collapse navbar-right " id="myNavbar">
                    <ul className="nav navbar-nav top-nav hide-on-mobile">
                      <li><a href="#">Sign Up</a></li>
                      <li><a href="#">Sign In</a></li>
                      <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i
                          className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>
                      <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
                    </ul>
                    <ul className="nav navbar-nav top-nav hide-on-desktop">
                      <li><a href="#">Sign Up</a></li>
                      <li><a href="#">Sign In</a></li>
                      <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i
                          className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>
                      <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
                      <li><a href="#">Concerts</a></li>
                      <li><a href="#" className="blue-bg">Cricket</a></li>
                      <li><a href="#" className="orange-bg">Events</a></li>
                      <li><a href="#" className="green-bg">Sports</a></li>
                      <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
                      <li><a href="#" className="purple-bg">Restaurants</a></li>
                      <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
                      <li><a href="#">Parties</a></li>
                    </ul>
                  </div>
                </nav>


                {/* <!--START SLIDER-->
    <!-- Slider begins here --> */}
                <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
                  <h1>Tickets made simple for everyone, everywhere</h1>
                  <div className="site-manu container">
                    <div className="collapse navbar-collapse hide-on-mobile">
                      <ul className="nav navbar-nav sub-main-nav">
                        <li><a href="#">Concerts</a></li>
                        <li><a href="#" className="blue-bg">Cricket</a></li>
                        <li><a href="#" className="orange-bg">Events</a></li>
                        <li><a href="#" className="green-bg">Sports</a></li>
                        <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
                        <li><a href="#" className="purple-bg">Restaurants</a></li>
                        <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
                        <li><a href="#">Parties</a></li>
                      </ul>
                    </div>
                    <div className="banner-serch-box"><input id="txtSearchBox" className="" name="q" value="" placeholder="Search for an event, venue or city"
                      type="text" /><a href="javascript:void(0);" onclick="searchfor();"><i className="fa fa-search" aria-hidden="true"></i></a></div>
                  </div>
                  {/* <!-- Carousel items --> */}
                  <div className="carousel-inner">
                    {/* <!-- slide #1 --> */}
                    <div data-slide="0" className="item active">
                      <img src={require("http://content.kyazoonga.com/Footer/slider-1.jpg")} alt="" className="hide-on-desktop" />
                      <div className="hide-on-mobile">
                        <video title="0" id="bgvid0" autoplay loop muted poster={require("http://content.kyazoonga.com/Footer/slider-1.jpg")}>
                          <source src={require("http://content.kyazoonga.com/videos/video9.mp4")} type="video/mp4" />Your browser does not
                        support the video tag.</video>
                      </div>
                    </div>
                    <div data-slide="1" className="item">
                      <img src={require("http://content.kyazoonga.com/Footer/slider-1.jpg")} alt="" className="hide-on-desktop" />
                      <div className="hide-on-mobile">
                        <video title="1" id="bgvid1" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                          <source src={require("http://content.kyazoonga.com/videos/video1.mp4")} type="video/mp4" />Your browser does not
                        support the video tag.</video>
                      </div>
                    </div>
                    <div data-slide="2" className="item">
                      <img src={require("http://content.kyazoonga.com/Footer/slider-1.jpg")} alt="" className="hide-on-desktop" />
                      <div className="hide-on-mobile">
                        <video title="2" id="bgvid2" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                          <source src={require("http://content.kyazoonga.com/videos/video2.mp4")} type="video/mp4" />Your browser does not
                        support the video tag.</video>
                      </div>
                    </div>
                    <div data-slide="3" className="item">
                      <img src={require("http://content.kyazoonga.com/Footer/slider-1.jpg")} alt="" className="hide-on-desktop" />
                      <div className="hide-on-mobile">
                        <video title="3" id="bgvid3" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                          <source src={require("http://content.kyazoonga.com/videos/video3.mp4")} type="video/mp4" />Your browser does not
                        support the video tag.</video>
                      </div>
                    </div>
                    <div data-slide="4" className="item">
                      <img src={require("http://content.kyazoonga.com/Footer/slider-1.jpg")} alt="" className="hide-on-desktop" />
                      <div className="hide-on-mobile">
                        <video title="4" id="bgvid4" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                          <source src={require("http://content.kyazoonga.com/videos/video8.mp4")} type="video/mp4" />Your browser does not
                          support the video tag.
                      </video>
                      </div>
                    </div>

                  </div>
                  {/* <!-- end of '.carousel-inne/r' --> */}

                </div>
                {/* <!-- end of '#homepage_slider' -->
    <!-- Slider ends here -->
    <!--END SLIDER--> */}

                <section className="hot-ticket-sec ticket-boxes">
                  <div className="container">
                    <h2 className="site-title">Hot Tickets <small>Get tickets to your favourite events</small></h2>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-lg-4">
                        <div className="box">
                          <div className="dropdown visiter-icon">
                            <a href="#" className="dropdown-toggle" type="button" data-toggle="dropdown"><span className="glyphicon glyphicon-user"
                              aria-hidden="true"></span></a>
                            <div className="dropdown-menu">
                              <p>Who's attending (9)</p>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                              <a href="#"> <img src={require("http://www.kyazoonga.com/images/rsvp-blank-1.jpg")} alt="" /> </a>
                            </div>
                          </div>
                          <a href="#" className="block-link">
                            <div className="ticket-img">
                              <img src={require("http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif")} alt="" />
                              <span className="ticket-price">INR 50 - 2,500</span>
                            </div>
                            <div className="ticket-info">
                              <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                              <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
                              <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
                            </div>
                          </a>
                          <div className="social clearfix">
                            <div className="pull-left">
                              <a className="btn btn-default btn-xs ical" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                              <a className="btn btn-default btn-xs ml-10" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;Google</a>
                            </div>
                            <div className="pull-right">
                              < a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-facebook"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-6 col-lg-4">
                        <div className="box">
                          <a href="#" className="block-link">
                            <div className="ticket-img">
                              <img src={require("http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt="" />
                              <span className="ticket-price">INR 50 - 2,500</span>
                            </div>
                            <div className="ticket-info">
                              <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                              <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
                              <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
                            </div>
                          </a>
                          <div className="social clearfix">
                            <div className="pull-left">
                              <a className="btn btn-default btn-xs ical" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                              <a className="btn btn-default btn-xs ml-10" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;Google</a>
                            </div>
                            <div className="pull-right">
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-facebook"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-6 col-lg-4">
                        <div className="box">
                          <a href="#" className="block-link">
                            <div className="ticket-img">
                              <img src={require("http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt="" />
                              <span className="ticket-price">INR 50 - 2,500</span>
                            </div>
                            <div className="ticket-info">
                              <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                              <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
                              <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
                            </div>
                          </a>
                          <div className="social clearfix">
                            <div className="pull-left">
                              <a className="btn btn-default btn-xs ical" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                              <a className="btn btn-default btn-xs ml-10" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;Google</a>
                            </div>
                            <div className="pull-right">
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-facebook"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-6 col-lg-4">
                        <div className="box">
                          <a href="#" className="block-link">
                            <div className="ticket-img">
                              <img src={require("http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt="" />
                              <span className="ticket-price">INR 50 - 2,500</span>
                            </div>
                            <div className="ticket-info">
                              <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                              <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
                              <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
                            </div>
                          </a>
                          <div className="social clearfix">
                            <div className="pull-left">
                              <a className="btn btn-default btn-xs ical" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                              <a className="btn btn-default btn-xs ml-10" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;Google</a>
                            </div>
                            <div className="pull-right">
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-facebook"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-lg-4">
                        <div className="box">
                          <a href="#" className="block-link">
                            <div className="ticket-img">
                              <img src={require("http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt="" />
                              <span className="ticket-price">INR 50 - 2,500</span>
                            </div>
                            <div className="ticket-info">
                              <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                              <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
                              <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
                            </div>
                          </a>
                          <div className="social clearfix">
                            <div className="pull-left">
                              <a className="btn btn-default btn-xs ical" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                              <a className="btn btn-default btn-xs ml-10" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;Google</a>
                            </div>
                            <div className="pull-right">
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-facebook"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-lg-4">
                        <div className="box">
                          <a href="#" className="block-link">
                            <div className="ticket-img">
                              <img src={require("http://54.149.90.101/EventBuilder/Images/sport/ht-isl-jfc.gif" alt="" />
                              <span className="ticket-price">INR 50 - 2,500</span>
                            </div>
                            <div className="ticket-info">
                              <span className="time-info">SAT, FEB 10, 2018 20:00 Onward</span>
                              <h3 className="ticket-title">JamshedpurFC - ISL Season 4</h3>
                              <p className="venue-info">JRD Tata Sports Complex, Bhubaneshwar, Jamshedpur</p>
                            </div>
                          </a>
                          <div className="social clearfix">
                            <div className="pull-left">
                              <a className="btn btn-default btn-xs ical" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;iCal</a>
                              <a className="btn btn-default btn-xs ml-10" href="#">
                                <i className="fa fa-calendar"></i> &nbsp;Google</a>
                            </div>
                            <div className="pull-right">
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-facebook"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-twitter"></i></a>
                              <a className="btn btn-default btn-xs btn-circle" href="#">
                                <i className="fa fa-linkedin"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-sec text-center p-20 pt-0">
                      <a href="#" className="btn btn-primary btn-custome-lg">Discover More</a>
                    </div>
                  </div>
                </section>

                <section className="home-cat-sec text-center">
                  <div className="container">
                    <h2 className="site-title">Browse by top categories</h2>
                    <div className="row">
                      <div className="col-sm-4 cat-box">
                        <a href="#" className="block-link">
                          <div className="cat-txt">
                            <h3>Concerts</h3>
                          </div>
                          <img src={require("https://static2.kyazoonga.com/Images/kzconsumer/top-categories/concerts-cat1.jpg" alt="" className="img-full-width" />
                        </a>
                      </div>
                      <div className="col-sm-4 cat-box">
                        <a href="#" className="block-link">
                          <div className="cat-txt">
                            <h3>Cricket</h3>
                          </div>
                          <img src={require("https://static2.kyazoonga.com/Images/kzconsumer/top-categories/cricket-cat1.jpg" alt="" className="img-full-width" />
                        </a>
                      </div>
                      <div className="col-sm-4 cat-box">
                        <a href="#" className="block-link">
                          <div className="cat-txt">
                            <h3>Theatre & Arts</h3>
                          </div>
                          <img src={require("https://static2.kyazoonga.com/Images/kzconsumer/top-categories/theatre-cat.jpg" alt="" className="img-full-width" />
                        </a>
                      </div>
                      <div className="col-sm-4 cat-box">
                        <a href="#" className="block-link">
                          <div className="cat-txt">
                            <h3>Amusement Parks</h3>
                          </div>
                          <img src={require("https://static2.kyazoonga.com/Images/kzconsumer/top-categories/amusementparks-cat.jpg" alt="" className="img-full-width" />
                        </a>
                      </div>
                      <div className="col-sm-4 cat-box">
                        <a href="#" className="block-link">
                          <div className="cat-txt">
                            <h3>Sports</h3>
                          </div>
                          <img src={require("https://static2.kyazoonga.com/Images/kzconsumer/top-categories/sports-cat.jpg" alt="" className="img-full-width" />
                        </a>
                      </div>
                      <div className="col-sm-4 cat-box">
                        <a href="#" className="block-link">
                          <div className="cat-txt">
                            <h3>Restaurants</h3>
                          </div>
                          <img src={require("https://static2.kyazoonga.com/Images/kzconsumer/top-categories/restaurants-cat.jpg" alt="" className="img-full-width" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="home-cat-sec text-center">
                  <div className="container-fluid">
                    <h2 className="site-title">Sellers, use <a href="http://iticket.kyazoonga.com/" target="_blank"><img src={require("http://www.kyazoonga.com/images/iticket-logo.png"
                      style={{ width: '100px' }} /></a> to create and sell your event tickets online <small>Discover and purchase
                    tickets to cool events created and listed by organizers directly</small></h2>
                    <div className="row">
                      <div className="col-sm-6 cat-box">
                        <div id="dvYoutube">

                        </div>
                      </div>
                      <div className="col-sm-6 cat-box">
                        <a href="#" className="block-link">
                          <div className="cat-txt">
                            <h3>Kyazoonga Blog</h3>
                          </div>
                          <img src={require("https://static2.kyazoonga.com/Images/kzconsumer/kz-blog.jpg" alt="" className="img-full-width" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="home-featured-sec text-center">
                  <h2 className="site-title"><span>We've been featured in</span></h2>
                  <div className="container-fluid">
                    <a target="_blank" href="https://www.forbes.com/sites/julianmitchell/2017/06/08/this-ticketing-platform-aims-to-overthrow-ticketmaster-and-stubhub-as-global-leader/#2eee65851bc2">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/forbes-logo.jpg" alt="Forbes" /></a>

                    <a target="_blank" href="https://tech.co/technology-upgrading-events-industry-2017-06">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/techco-logo.jpg" alt="Forbes" /></a>
                    <a target="_blank" href="https://www.ausleisure.com.au/news/forbes-names-kyazoonga-as-the-fastest-growing-international-online-ticket-p/">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/ausleisure-logo.jpg" alt="INC" /></a>


                    <a target="_blank" href="http://www.inc.com/drew-hendricks/top-3-trends-driving-change-for-the-events-industry.html">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/inc-logo.jpg" alt="INC" /></a>
                    <a target="_blank" href="https://www.entrepreneur.com/article/289909">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/entrepreneur-magazine.jpg" alt="Entrepreneur Magazine" /></a>
                    <a target="_blank" href="https://www.youtube.com/watch?v=1aSuorjmrRs">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/cnbc.jpg" alt="CNBC" /></a>
                    <a target="_blank" href="http://zeenews.india.com/exclusive/guns-n-roses-in-delhi-waiting-with-impatience-for-the-next-time_5910.html">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/z-news.jpg" alt="Z News" /></a>
                    <a target="_blank" href="http://tech.economictimes.indiatimes.com/news/startups/ratan-tata-invests-undisclosed-amount-in-e-ticketing-startup-kyazoonga/52681961">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/the-economic-times.jpg" alt="The Economic Times" /></a>
                    <a target="_blank" href="http://timesofindia.indiatimes.com/australia-in-india-2009/top-stories/MCA-appoints-KyaZoonga-com-as-the-official-ticketing-partner/articleshow/5196286.cms">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/the-times-of-india.jpg" alt="Times of India" /></a>
                    <a target="_blank" href="http://www.business-standard.com/article/companies/ratan-tata-invests-in-kyazoonga-116061000326_1.html">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/business-standard.jpg" alt="Business Standard" /></a>
                    <a target="_blank" href="http://www.news18.com/news/buzz/guns-n-roses-india-tour-80-tickets-outlets-opened-524376.html">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/news18.jpg" alt="News 18" /></a>
                    <a target="_blank" href="https://sports.ndtv.com/india-vs-west-indies-2013-14/sachin-tendulkars-200th-test-tickets-sold-out-in-15-hours-kyazoongacom-1527446">
                      <img src={require("https://static3.kyazoonga.com/Images/featured-logo/ndtv.jpg" alt="NDTV" /></a>
                  </div>
                </section>

                <footer className="site-footer">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-3 cont-drop">
                        <div className="dropdown">
                          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="true">
                            Dropdown
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-9 home-newsletter">
                        <div className="row">
                          <div className="col-sm-5 news-subs-txt">
                            <h3>Subscribe to our Newsletter</h3>
                          </div>
                          <div className="col-sm-7">
                            <div className="input-group">
                              <input type="email" className="form-control" placeholder="Enter your email" />
                              <span className="input-group-btn">
                                <button className="btn btn-theme" type="submit">Subscribe</button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row footer-links">
                      <div className="col-sm-3">
                        <h6>Help</h6>
                        <ul>
                          <li><a href="#">24x7 Customer Service</a></li>
                          <li><a href="#">Regenerate your PAH e-Ticket</a></li>
                          <li><a href="#">Reprint Confirmation</a></li>
                          <li><a href="#">Regenerate-e-Ticket</a></li>
                          <li><a href="#">Track Courier</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h6>Company</h6>
                        <ul>
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Careers</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Media Center</a></li>
                          <li><a href="#">Policies</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3">
                        <h6>Popular Events</h6>
                        <ul>
                          <li><a href="#">EsselWorld</a></li>
                          <li><a href="#">KidZania</a></li>
                          <li><a href="#">Water Kingdom</a></li>
                          <li><a href="#">Water Kingdom</a></li>
                          <li><a href="#">Adventure Park</a></li>
                          <li><a href="#">Vineyard Tour & Cycling</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-3 country-flag-sec">
                        <h6>Popular Events</h6>
                        <ul>
                          <li><a href="http://www.kyazoonga.com.au/" target="_blank"><img src={require("./images/CountriesFlag/aus.png" />Australia</a></li>
                          <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={require("./images/CountriesFlag/ind.png" />India</a></li>
                          <li><a href="http://www.kyazoonga.ie/" target="_blank"><img src={require("./images/CountriesFlag/ireland.png" />Ireland</a></li>
                          <li><a href="http://www.kyazoonga.ae/" target="_blank"><img src={require("./images/CountriesFlag/uae.png" />United
                                Arab Emirates</a></li>
                          <li><a href="http://www.kyazoonga.com/" target="_blank"><img src={require("./images/CountriesFlag/usa.png" />United
                                States</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="footer-social text-center">
                      <h6>Follow Us</h6>
                      <ul>
                        <li><a className="f" href="https://www.facebook.com/kyazoonga" target="blank" rel="me">
                          <img src={require("./images/facebook.png" alt="Facebook" width="32" height="32" /></a></li>
                        <li><a className="t" href="https://twitter.com/kyazoonga" target="blank" rel="me">
                          <img src={require("./images/twitter.png" alt="Twitter" width="32" height="32" /></a></li>
                        <li><a className="ig" href="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
                          <img src={require("./images/instagram.png" alt="in" width="32" height="32" /></a></li>
                        <li><a className="sc" href="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
                          <img src={require("./images/snapchat.png" alt="in" width="32" height="32" /></a></li>
                        <li><a className="in" href="https://www.linkedin.com/company/kyazoonga" target="blank" rel="me">
                          <img src={require("./images/in.png" alt="Linkedin" width="32" height="32" /></a></li>
                        <li><a className="yt" href="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
                          <img src={require("./images/youtube.png" alt="Youtube" width="32" height="32" /></a></li>
                        <li><a className="g" href="https://plus.google.com/+kyazoongachannel" target="blank" rel="me">
                          <img src={require("./images/google.png" alt="Google Plus" width="32" height="32" /></a></li>
                        <li><a className="p" href="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
                          <img src={require("./images/pinterest.png" alt="Pinterest" width="32" height="32" /></a></li>
                      </ul>
                      <p className="copy-txt">Copyright ©Kyazoonga. All rights reserved. </p>
                    </div>

                  </div>

                </footer>




                <script src={require("./js/jquery.min.js"></script>
                <script src={require("./js/bootstrap.min.js"></script>
                <script src={require("./js/custome.js"></script>
                <script>
                  $(document).ready(function () {
                    $('#txtSearchBox').blur(function () {
                      $("#loading").hide()
                    }).focus(function () {
                      $("#loading").show()
                    })};
            $("#dvYoutube").html("<iframe style={{ width: '100%', height: '400px' }} src='https://www.youtube.com/embed/IyucJZev9wM' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
              });
    </script>

  </div>

              );
            }
          }
          
          export default App;
