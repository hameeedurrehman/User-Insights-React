import "./main.css";
import { Link } from "react-router-dom";
import bookingimg from "../assets/booking-deals-background.png";
import footertopimg from "../assets/footer-top-bg.png";
import banner from "../assets/banner.png";

const Main = () => {
    return (
        <>
            <div className="header">
                <div className="div-row">
                    <div className="div-col-md">
                        <img
                            className="heading-link"
                            alt="Heading link"
                            src="https://c.animaapp.com/DmATvh4Y/img/heading-1---link.png"
                        />
                    </div>
                    <div className="div-info-box-wrapper">
                        <div className="div-info-box">
                            <img className="img" alt="I fa home" src="https://c.animaapp.com/DmATvh4Y/img/i-fa-home.png" />
                            <div className="div-info-text">
                                <div className="text-wrapper">Address</div>
                                <p className="example-england">
                                    <span className="span">Example England</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="div">
                            <img className="img" alt="I fa envelope" src="https://c.animaapp.com/DmATvh4Y/img/i-fa-envelope.png" />
                            <div className="div-info-text-2">
                                <div className="text-wrapper">Email Us</div>
                                <div className="link-example-booking">example@booking.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-phone-info-wrapper">
                        <div className="div-phone-info">
                            <div className="overlap-group">
                                <div className="div-phone-icon">
                                    <img className="pseudo" alt="Pseudo" src="https://c.animaapp.com/DmATvh4Y/img/pseudo.png" />
                                    <div className="i-fas">
                                        <div className="text-wrapper-2"></div>
                                    </div>
                                </div>
                                <div className="link">+1-234-000-2345</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-tj-nav-row">
                    <div className="div-tj-nav-holder">
                        <div className="nav-list">
                            <div className="item">
                                <div className="link-about-us"><Link to="/posts">POSTS</Link></div>
                            </div>
                            <div className="link-wrapper">
                                <div className="home-wrapper">
                                    <div className="home"><a href="/">HOME</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="design">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="section-section-wrapper">
                            <div className="section-section">
                                <div className="div-tj-heading-style">
                                    <div className="heading">
                                        <div className="text-wrapper">Our Services</div>
                                        <img className="pseudo" alt="Pseudo" src="https://c.animaapp.com/sSdaXKPg/img/pseudo@2x.png" />
                                    </div>
                                    <div className="p">
                                        <p className="lorem-ipsum-passages">
                                            Lorem Ipsum passages, and more recently with desktop publishing software
                                            <br />
                                            like aldus pageMaker including versions.
                                        </p>
                                    </div>
                                </div>
                                <div className="div-row">
                                    <div className="div-col-md">
                                        <div className="div-cab-service-box">
                                            <div className="div">
                                                <img className="figure" alt="Figure" src="https://c.animaapp.com/sSdaXKPg/img/figure-5.svg" />
                                                <div className="div-service-desc">
                                                    <div className="text-wrapper-2">Restaurants</div>
                                                    <div className="a-more-recently-with-wrapper">
                                                        <p className="a-more-recently-with">
                                                            A more recently with desktop softy like aldus
                                                            <br />
                                                            page maker.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlap-group">
                                        <div className="div-col-md">
                                            <div className="div-cab-service-box">
                                                <div className="div">
                                                    <img className="img" alt="Figure" src="https://c.animaapp.com/sSdaXKPg/img/figure-4.svg" />
                                                    <div className="div-service-desc-2">
                                                        <div className="heading-airports">Airports</div>
                                                        <div className="div-wrapper">
                                                            <p className="a-more-recently-with">
                                                                A more recently with desktop softy like aldus
                                                                <br />
                                                                page maker.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="div-cab-service-box-wrapper">
                                            <div className="div-cab-service-box">
                                                <div className="div">
                                                    <img className="img" alt="Figure" src="https://c.animaapp.com/sSdaXKPg/img/figure-1.svg" />
                                                    <div className="div-service-desc">
                                                        <div className="text-wrapper-2">Shopping Malls</div>
                                                        <div className="a-more-recently-with-wrapper">
                                                            <p className="a-more-recently-with">
                                                                A more recently with desktop softy like aldus
                                                                <br />
                                                                page maker.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-col-md-2">
                                        <div className="div-cab-service-box">
                                            <div className="div">
                                                <img className="img" alt="Figure" src="https://c.animaapp.com/sSdaXKPg/img/figure-3.svg" />
                                                <div className="div-service-desc-2">
                                                    <div className="heading-hospitals">Hospitals</div>
                                                    <div className="div-wrapper">
                                                        <p className="a-more-recently-with">
                                                            A more recently with desktop softy like aldus
                                                            <br />
                                                            page maker.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-col-md-3">
                                        <div className="div-cab-service-box">
                                            <div className="div">
                                                <img className="img" alt="Figure" src="https://c.animaapp.com/sSdaXKPg/img/figure-2.svg" />
                                                <div className="div-service-desc">
                                                    <div className="text-wrapper-2">Beaches</div>
                                                    <div className="a-more-recently-with-wrapper">
                                                        <p className="a-more-recently-with">
                                                            A more recently with desktop softy like aldus
                                                            <br />
                                                            page maker.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-col-md-4">
                                        <div className="div-cab-service-box">
                                            <div className="div">
                                                <img className="img" alt="Figure" src="https://c.animaapp.com/sSdaXKPg/img/figure.svg" />
                                                <div className="div-service-desc-2">
                                                    <div className="heading-wedding">Wedding Parties</div>
                                                    <div className="div-wrapper">
                                                        <p className="a-more-recently-with">
                                                            A more recently with desktop softy like aldus
                                                            <br />
                                                            page maker.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group-2">

                        </div>
                        <div className="section-wrapper">
                            <div className="section">
                                <div className="overlap">
                                    <div className="pseudo-2" style={{backgroundImage: `url(${banner})`}} />
                                    <div className="div-banner-inner-wrapper">
                                        <div className="div-banner-inner">
                                            <div className="strong-more-recently">Free changes for life.</div>
                                            <div className="hand-made-website-wrapper">
                                                <div className="hand-made-website">
                                                    Hand-made Website For
                                                    <br />
                                                    your Business
                                                </div>
                                            </div>
                                            <div className="div-banner-btns">
                                                <div className="link">
                                                    <div className="text-wrapper-3"></div>
                                                    <div className="book-call"> Book Call</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame">
                                        <div className="group-3">
                                            <img
                                                className="dollar-sign"
                                                alt="Dollar sign"
                                                src="https://c.animaapp.com/sSdaXKPg/img/dollar-sign.svg"
                                            />
                                            <div className="div-offer-info">
                                                <div className="text-wrapper-4">Best Price Guaranteed</div>
                                                <div className="p-2">
                                                    <p className="a-more-recently-with-2">
                                                        A more recently with desktop
                                                        <br />
                                                        softy like aldus page maker.
                                                    </p>
                                                </div>
                                            </div>
                                            <img
                                                className="headphones"
                                                alt="Headphones"
                                                src="https://c.animaapp.com/sSdaXKPg/img/headphones.svg"
                                            />
                                            <div className="div-offer-info-2">
                                                <div className="text-wrapper-4">24/7 Customer Care</div>
                                                <div className="p-2">
                                                    <p className="a-more-recently-with-2">
                                                        A more recently with desktop
                                                        <br />
                                                        softy like aldus page maker.
                                                    </p>
                                                </div>
                                            </div>
                                            <img className="home" alt="Home" src="https://c.animaapp.com/sSdaXKPg/img/home.svg" />
                                            <div className="div-offer-info-3">
                                                <div className="text-wrapper-4">Home Pickups</div>
                                                <div className="p-hd-ebbf">
                                                    <p className="a-more-recently-with-2">
                                                        A more recently with desktop
                                                        <br />
                                                        softy like aldus page maker.
                                                    </p>
                                                </div>
                                            </div>
                                            <img className="calendar" alt="Calendar" src="https://c.animaapp.com/sSdaXKPg/img/calendar.svg" />
                                            <div className="div-offer-info-4">
                                                <div className="text-wrapper-4">Easy Bookings</div>
                                                <div className="p-2">
                                                    <p className="a-more-recently-with-2">
                                                        A more recently with desktop
                                                        <br />
                                                        softy like aldus page maker.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="image" alt="mage" src="https://c.animaapp.com/sSdaXKPg/img/image-1.png" />
                                </div>
                                <div className="frame-2">
                                    <div className="section-section-2">
                                        <div className="div-about-info-wrapper">
                                            <div className="div-about-info">
                                                <div className="div-about-info-inner">
                                                    <p className="heading-everything">Bespoke Software &amp; Digital Transformation.</p>
                                                    <div className="p-hd-ceeb">
                                                        <p className="by-automating">
                                                            By automating processes and tasks, businesses can reduce costs and improve productivity.
                                                            <br />
                                                            Additionally, custom software tailored to the specific needs of a business can give them a
                                                            <br />
                                                            significant advantage over their competitors.
                                                        </p>
                                                    </div>
                                                    <div className="p-hd-bcba">
                                                        <p className="our-software">
                                                            Our software development agency has a team of experienced and skilled professionalswho can{" "}
                                                            <br />
                                                            create custom software solutions for your business. We understand the unique requirements
                                                            <br />
                                                            of each business and create tailor-made solutions that can help them achieve their goals.
                                                        </p>
                                                    </div>
                                                    <div className="strong">
                                                        <p className="like-always-like">Like Always. Like Never Before.</p>
                                                        <div className="pseudo-3" />
                                                    </div>
                                                    <div className="link-2">
                                                        <div className="pseudo-4" />
                                                        <div className="text-wrapper-5">Get A Quote</div>
                                                        <div className="text-wrapper-3"></div>
                                                    </div>
                                                </div>
                                                <div className="list">
                                                    <div className="item">
                                                        <div className="div-fact-inner">
                                                            <div className="span">
                                                                <div className="text-wrapper-6"></div>
                                                            </div>
                                                            <div className="strong-2">
                                                                <div className="text-wrapper-7">500</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-wrapper-8">Happy Customers</div>
                                                        <div className="pseudo-5" />
                                                    </div>
                                                    <div className="item">
                                                        <div className="div-fact-inner-2">
                                                            <div className="span-hd-afadd">
                                                                <div className="text-wrapper-9"></div>
                                                            </div>
                                                            <div className="strong-3">
                                                                <div className="text-wrapper-7">200</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-wrapper-8">Luxury Cars</div>
                                                        <div className="pseudo-6" />
                                                    </div>
                                                    <div className="item">
                                                        <div className="div-fact-inner-3">
                                                            <div className="span-hd-fc">
                                                                <div className="text-wrapper-9"></div>
                                                            </div>
                                                            <div className="strong-4">
                                                                <div className="text-wrapper-7">150</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-wrapper-8">Expert Drivers</div>
                                                        <div className="pseudo-7" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="div-welcome-banner-wrapper">
                                            <div className="div-welcome-banner">
                                                <div className="overlap-group-2">
                                                    <div className="about-style-fimg-jpg" />
                                                    <div className="div-work-info">
                                                        <div className="text-wrapper-10"></div>
                                                        <div className="strong-5">
                                                            <div className="won-award-in">WON AWARD IN</div>
                                                            <div className="year">YEAR 2023</div>
                                                        </div>
                                                    </div>
                                                    <div className="link-3">
                                                        <div className="text-wrapper-11"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-2" style={{ backgroundImage:`url(${bookingimg})` }}>
                                    <div className="div-container-wrapper">
                                        <div className="div-container">
                                            <div className="div-tj-heading-style-2">
                                                <div className="heading-2">
                                                    <div className="deals-on-booking">Deals On Booking</div>
                                                    <img
                                                        className="pseudo-8"
                                                        alt="Pseudo"
                                                        src="https://c.animaapp.com/sSdaXKPg/img/pseudo-1@2x.png"
                                                    />
                                                </div>
                                                <div className="p-hd-bea">
                                                    <p className="lorem-ipsum-passages-2">
                                                        Lorem Ipsum passages, and more recently with desktop publishing software and applications like
                                                        <br />
                                                        aldus pageMaker which has different variations.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="div-row-2">
                                                <div className="figure-wrapper">
                                                    <div className="figure-2">
                                                        <div className="deal" />
                                                        <div className="pseudo-9" />
                                                        <div className="div-deal-info">
                                                            <div className="heading-brooklyn">London</div>
                                                            <div className="span-hd-cfc">
                                                                <div className="text-wrapper-12">Starts from</div>
                                                                <div className="strong-day">$190/day</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="div-col-md-5">
                                                    <div className="figure-2">
                                                        <div className="deal-img-x" />
                                                        <div className="pseudo-9" />
                                                        <div className="div-deal-info-2">
                                                            <div className="heading-georgia">Marcin Nowak</div>
                                                            <div className="span-2">
                                                                <div className="text-wrapper-12">Starts from</div>
                                                                <div className="strong-day">$260/day</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="div-col-md-6">
                                                    <div className="figure-2">
                                                        <div className="deal-2" />
                                                        <div className="pseudo-9" />
                                                        <div className="div-deal-info-2">
                                                            <div className="heading-toronto">Toronto</div>
                                                            <div className="span-2">
                                                                <div className="text-wrapper-12">Starts from</div>
                                                                <div className="strong-day">$350/day</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-3" style={{backgroundImage: `url(${footertopimg})`}}>
                            <div className="div-row-wrapper">
                                <div className="div-row-3">
                                    <div className="heading-incredible-wrapper">
                                        <p className="heading-incredible">Incredible Destinations At Incredible Deals</p>
                                    </div>
                                    <div className="link-wrapper">
                                        <div className="link-4">
                                            <div className="text-wrapper-13">Book Now</div>
                                            <div className="text-wrapper-14"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-4">
                            <div className="div-row-4">
                                <div className="div-about-widget-wrapper">
                                    <div className="div-2">
                                        <div className="text-wrapper-15">Logo</div>
                                        <div className="p-hd-cfa">
                                            <p className="search-for-will">
                                                Search for will uncover many web sites
                                                <br />
                                                variables onto of passages of lorem ipsum
                                                <br />
                                                available but the majority the words all
                                                <br />
                                                predefined humour to met chunks recently
                                                <br />
                                                with desktop.
                                            </p>
                                        </div>
                                        <div className="list-2">
                                            <div className="item-link">
                                                <div className="text-wrapper-16"></div>
                                            </div>
                                            <div className="item-link-2">
                                                <div className="text-wrapper-16"></div>
                                            </div>
                                            <div className="item-link-3">
                                                <div className="text-wrapper-16"></div>
                                            </div>
                                            <div className="item-link-4">
                                                <div className="text-wrapper-16"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-links-widget-wrapper">
                                    <div className="div-2">
                                        <div className="text-wrapper-15">Quick Links</div>
                                        <div className="list-3">
                                            <div className="item-2">
                                                <div className="text-wrapper-17"></div>
                                                <div className="text-wrapper-18">About Us</div>
                                            </div>
                                            <div className="item-3">
                                                <div className="text-wrapper-17"></div>
                                                <div className="text-wrapper-18">Our Services</div>
                                            </div>
                                            <div className="item-4">
                                                <div className="text-wrapper-17"></div>
                                                <div className="text-wrapper-18">Featured Blog</div>
                                            </div>
                                            <div className="item-5">
                                                <div className="text-wrapper-17"></div>
                                                <div className="text-wrapper-18">Car Fleet</div>
                                            </div>
                                            <div className="item-6">
                                                <div className="text-wrapper-17"></div>
                                                <div className="text-wrapper-18">FAQ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-contact-info-wrapper">
                                    <div className="div-2">
                                        <div className="text-wrapper-15">Contact Info</div>
                                        <div className="list-4">
                                            <div className="item-7">
                                                <div className="text-wrapper-19"></div>
                                                <div className="span-hd-eaca">
                                                    <div className="text-wrapper-18">10A, San Andreno, USA</div>
                                                </div>
                                            </div>
                                            <div className="item-8">
                                                <div className="text-wrapper-20"></div>
                                                <div className="text-wrapper-18">example@booking.com</div>
                                            </div>
                                            <div className="item-9">
                                                <div className="text-wrapper-19"></div>
                                                <div className="text-wrapper-18">+1-333-444-555</div>
                                            </div>
                                            <div className="item-10">
                                                <div className="text-wrapper-19"></div>
                                                <div className="text-wrapper-18">www.example.com</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-5">
                            <div className="div-row-3">
                                <div className="div-col-md-7">
                                    <p className="text-wrapper-21">© Copyrights 2023 Logo. All Rights Reserved</p>
                                </div>
                                <div className="div-col-md-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Main;
