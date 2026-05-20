const Contact = () => {

    return (
        <div>
            {/* <!-- Breadcrumb --> */}
            <div class="container">
                <div class="cont-start">
                    <a href="/">Home</a> / Contact Us
                </div>
            </div>

            {/* <!-- Contact Section --> */}
            <section class="contact-section">
                <div class="container">

                    {/* <!-- Contact Info --> */}
                    <div class="row text-center text-md-start">

                        {/* <!-- Address --> */}
                        <div class="col-lg-4 col-md-4 mb-5">
                            <div class="contact-box">
                                <div class="contact-icon">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <h4>Address</h4>
                                <p>
                                    Ranganathan Street,<br></br>
                                    T.Nagar, Chennai.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Phone --> */}
                        <div class="col-lg-4 col-md-4 mb-5">
                            <div class="contact-box">
                                <div class="contact-icon">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <h4>Call center</h4>
                                <p>
                                    +33 555 444 333 <br></br>
                                    +33 555 444 333
                                </p>
                            </div>
                        </div>

                        {/* <!-- Email --> */}
                        <div class="col-lg-4 col-md-4 mb-5">
                            <div class="contact-box">
                                <div class="contact-icon">
                                    <i class="fa-regular fa-envelope"></i>
                                </div>
                                <h4>Products support</h4>
                                <p>
                                    support@example.com <br></br>
                                    hr@example.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Contact Form --> */}
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Enter your firstname" />
                            </div>

                            <div class="col-md-6">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Enter your lastname" />
                            </div>
                        </div>

                        <input type="email"
                            class="form-control"
                            placeholder="Enter your email" />

                        <textarea class="form-control"
                            placeholder="Enter your message"></textarea>

                        <button type="submit" class="btn-send">
                            Send message
                        </button>
                    </form>
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
export default Contact;