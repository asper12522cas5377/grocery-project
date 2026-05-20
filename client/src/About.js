import z1 from "./images/teamwork.png";

const About = () => {


    return (
        <div>
            {/* <!-- About Start --> */}
            <div class="container">
                <div class="about-start">
                    <a href="#">Home</a> / About Us
                </div>
            </div>

            {/* <!-- About Section --> */}
            <section class="about-section">
                <div class="container">
                    <div class="section-title">
                        <h1>About Us</h1>
                    </div>
                    <div class="row align-items-center g-5">

                        {/* <!-- Image --> */}
                        <div class="col-lg-6">
                            <div class="about-image">
                                <img src={z1} alt="about"></img>
                            </div>
                        </div>

                        {/* <!-- Content --> */}
                        <div class="col-lg-6">
                            <div class="about-content">
                                <h2>We Build Creative Digital Products</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Praesentium aut sequi autem ab, nihil dolorum. Doloremque
                                    voluptatum vero, aspernatur quod optio praesentium blanditiis,
                                    repudiandae magnam voluptatem sequi quo! Magni temporibus
                                    voluptatum odio, laudantium cupiditate soluta in tempora vero id
                                    sapiente! Nesciunt mollitia ratione unde error laborum placeat.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Praesentium aut sequi autem ab, nihil dolorum. Doloremque
                                    voluptatum vero, aspernatur quod optio praesentium blanditiis,
                                    repudiandae magnam voluptatem sequi quo! Magni temporibus.
                                </p>
                                <button class="btn btn-success px-4 py-2">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Features --> */}
            <section class="pb-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6">
                            <div class="feature-box">
                                <i class="fa-solid fa-bullseye"></i>
                                <h4>Our Mission</h4>
                                <p>
                                    Deliver high quality digital services with innovation
                                    and creativity.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="feature-box">
                                <i class="fa-solid fa-eye"></i>
                                <h4>Our Vision</h4>
                                <p>
                                    Become one of the leading creative technology companies
                                    worldwide.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="feature-box">
                                <i class="fa-solid fa-heart"></i>
                                <h4>Our Values</h4>
                                <p>
                                    Integrity, teamwork, passion and customer satisfaction
                                    are our values.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Counter Section --> */}
            <section class="counter-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-6 mb-4">
                            <div class="counter-box">
                                <h2>250+</h2>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-6 mb-4">
                            <div class="counter-box">
                                <h2>150+</h2>
                                <p>Clients</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-6 mb-4">
                            <div class="counter-box">
                                <h2>15+</h2>
                                <p>Years Experience</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-6 mb-4">
                            <div class="counter-box">
                                <h2>24/7</h2>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Page */}
            <footer class="footer">
                <div class="footer-container">

                    {/* <!-- Left Section --> */}
                    <div class="footer-col">
                        <div class="footer-logo">GROCERYBASKET</div>
                        <p class="footer-text">
                            Lorem ipsum, or lipsum as it is sometimes known,
                            is dummy text used in laying out print,
                            graphic or web designs the passage.
                        </p>
                        <h3 class="footer-title">Newsletter</h3>
                        <div class="newsletter">
                            <input type="email" placeholder="Your email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                    {/* <!-- My Account --> */}
                    <div class="footer-col">
                        <h3 class="footer-title">My Account</h3>
                        <ul class="footer-links">
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Manage Account</a></li>
                        </ul>
                    </div>

                    {/* <!-- Information --> */}
                    <div class="footer-col">
                        <h3 class="footer-title">Information</h3>
                        <ul class="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    {/* <!-- Contact --> */}
                    <div class="footer-col">
                        <h3 class="footer-title">Contact</h3>
                        <div class="contact-item">
                            <p><i class="fa-solid fa-location-dot"></i>
                                Ranganathan Street,<br></br>
                                T.Nagar, Chennai.
                            </p>
                        </div>
                        <div class="contact-item">
                            <p><i class="fa-solid fa-phone"></i>91+1234567890</p>
                        </div>
                        <div class="contact-item">
                            <p><i class="fa-regular fa-envelope"></i>grocery@gmail.com</p>
                        </div>
                        <div class="social-icons">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default About;