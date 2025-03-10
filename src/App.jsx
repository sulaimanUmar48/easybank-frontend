import './App.css'
import companyLogo from './assets/logo.svg'
import bgIntroMobile from './assets/bg-intro-mobile.svg'
import imageMockups from './assets/image-mockups.png'
import iconOnline from './assets/icon-online.svg'
import iconBudgeting from './assets/icon-budgeting.svg'
import iconOnboarding from './assets/icon-onboarding.svg'
import iconApi from './assets/icon-api.svg'
import imageCurrency from './assets/image-currency.jpg'
import imageRestaurant from './assets/image-restaurant.jpg'
import imagePlane from './assets/image-plane.jpg'
import imageConfetti from './assets/image-confetti.jpg'
import iconFacebook from './assets/icon-facebook.svg'
import iconYoutube from './assets/icon-youtube.svg'
import iconTwitter from './assets/icon-twitter.svg'
import iconPintrest from './assets/icon-pinterest.svg'
import iconInstagram from './assets/icon-instagram.svg'


function App() {

  return (
    <>
      <header>
        <div className="section1">
          <img src={companyLogo} alt="Company logo" />
        </div>

        <div className="section2">
          <button id="switch-btn" style={{width:"30px", height: "20px"}}></button>
          <ul id="menu-el">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="section3">
          <a href="#">Request Invite</a>
        </div>
      </header>

      <div class="heading-image">
        <img src={bgIntroMobile} class="main"/>
        <img src={imageMockups} alt="" class="abs" />
      </div>
    
      <section class="first-section">
        <p>Next generation digital banking</p>

        <p class="words">
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
        </p>

        <a href="">Request Invite</a>
      </section>

    <div class="boxes">
      <section class="second-section"> 
        <p>Why choose Easybank?</p>

        <p class="words">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>

      </section>
      <div class="grid">
        <section class="third-section section">
          
          <img src={iconBudgeting} />

          <p class="title">Online Banking</p>

          <p class="words">
            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
          </p>

        </section>

        <section class="fourth-section section">

          <img src={iconOnline} alt=""/>

          <p class="title">Simple Budgeting</p>

          <p class="words">
            See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.
          </p>

        </section>

        <section class="fifth-section section">

          <img src={iconOnboarding} alt="" />

          <p class="title">Fast Onboarding</p>

          <p class="words">
            We don't do branches. Open your account in minutes online and start taking control of your finances right away.
          </p>

        </section>

        <section class="sixth-section section">
          
          <img src={iconApi} alt=""/>

          <p class="title">Open API</p>
        
          <p class="words">
            Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
          </p>
        </section>
      </div>
    </div>
    

    <p class="Article-section">Latest Articles</p>
    <div class="article-color">
      <div class="article">
        {/* article 1 */}
        <div class="box">

          <div class="image">
            <img src={imageCurrency} alt="" />
          </div>

          <div class="name">
            <p>By Claire Robinson</p>
          </div>

          <div class="comment-head">
            <a href="#">
              Receive money in any currency with no fees
            </a>
          </div>

          <div class="comment">
            <p>
              The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …
            </p>
          </div>

        </div>
        {/* article 2 */}
        <div class="box">

          <div class="image">
            <img src={imageRestaurant} alt="" />
          </div>

          <div class="name">
            <p>By Wilson Hutton</p>
          </div>

          <div class="comment-head">
            <a href="#">
              Treat yourself without worrying about money
            </a>
          </div>

          <div class="comment">
            <p>
              Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
            </p>
          </div>

        </div>
        {/* article 3  */}
        <div class="box">

          <div class="image">
            <img src={imagePlane} alt="" />
          </div>

          <div class="name">
            <p>By Wilson Hutton</p>
          </div>

          <div class="comment-head">
            <a href="#">
              Take your Easybank card wherever you go
            </a>
          </div>

          <div class="comment">
            <p>
              We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …
            </p>
          </div>

        </div>
        {/* article 4 */}
        <div class="box">

          <div class="image">
            <img src={imageConfetti} alt="" />
          </div>

          <div class="name">
            <p>By Claire Robinson</p>
          </div>

          <div class="comment-head">
            <a href="#">
              Our invite-only Beta accounts are now live!
            </a>
          </div>

          <div class="comment">
            <p>
              After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...
            </p>
          </div>

        </div>
      
      </div>
    </div>
    <footer>
      <div class="main1">
        <div class="logo">
          <img src="images/logo copy.svg" alt="" />
        </div>
        <div class="social">
          <a href="#"><img src={iconFacebook} alt="" /></a>
          <a href="#"><img src={iconYoutube} alt="" /></a>
          <a href="#"><img src={iconTwitter} alt="" /></a>
          <a href="#"><img src={iconPintrest} alt="" /></a>
          <a href="#"><img src={iconInstagram} alt="" /></a>
        </div>
      </div>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <div class="main3">
        <div class="link">
          <a href="#">Request Invite</a>
        </div>
        <div class="copyright">
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Umar-Balogun Sulaiman</a>.
      </div>
    </footer>

    </>
  )
}

export default App
