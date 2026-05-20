import e1 from "./images/blog-1.png";
import e2 from "./images/blog-2.png";
import e3 from "./images/blog-3.png";
import e4 from "./images/blog-4.png";
import e5 from "./images/blog-5.png";
import e6 from "./images/blog-6.png";

const Pages = () => {

  return (
    <div>
      {/* Blog  Page */}
      <section class="blog-section">
        <div class="container">
          <h1 class="section-title">Latest Blog</h1>
          <div class="row g-4">

            {/* <!-- Blog 1 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e1} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>

            {/* <!-- Blog 2 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e2} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Fresh organic vegetables available for healthy lifestyle.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>

            {/* <!-- Blog 3 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e3} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Green vegetables are very important for daily health.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Blog Page */}
      <section class="blog-section">
        <div class="container">
          <div class="row g-4">

            {/* <!-- Blog 1 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e4} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>

            {/* <!-- Blog 2 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e5} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Fresh organic vegetables available for healthy lifestyle.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
              </div>
            </div>

            {/* <!-- Blog 3 --> */}
            <div class="col-lg-4 col-md-6">
              <div class="blog-card">
                <img src={e6} class="blog-img" alt="blog" />
                <div class="blog-content">
                  <div class="blog-meta">
                    <span><i class="bi bi-calendar"></i> November 12, 2025</span>
                    <span><i class="bi bi-person"></i> By: Devide</span>
                    <span><i class="bi bi-chat"></i> 0 comments</span>
                  </div>
                  <h3 class="blog-title">
                    Green vegetables are very important for daily health.
                  </h3>
                  <a href="#" class="read-btn">Read More</a>
                </div>
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
export default Pages;


