import './footer.css';
import logo1 from '../../../assets/images/visa.png'
import logo2 from '../../../assets/images/discover.png'
import logo3 from '../../../assets/images/master_card.png'
import logo4 from '../../../assets/images/paypal.png'
import logo5 from '../../../assets/images/amarican_express.png'
// Icons
import locationIcon from '../../../assets/images/icons/footerLocation.png'
import msgIcon from '../../../assets/images/icons/footermsg.png'
import phoneIcon from '../../../assets/images/icons/footerphone.png'


const Footer =()=>{
    return(
        <>
        {/* new */}
        <div className='bg-dark text-white'>
        <div class="container">
          <footer class="py-5">
            <div class="row">
            <div class="col-md-2  mb-3 text-white">
                <h4 className='text-white'><b>Contact Info</b></h4>
                <ul class="nav flex-column gap-2 pt-3">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img src={locationIcon} alt="" /> 123 Street, Old Trafford, New South London , UK</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img src={msgIcon} alt="" /> info@sitename.com</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img src={phoneIcon} alt="" /> + 457 789 789 65</a></li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3 text-white gap-2 ">
                <h4 className='text-white'><b>Useful Links</b></h4>
                <ul class="nav flex-column gap-2 pt-3">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About Us</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Location</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Affiliates</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact</a></li>
                </ul>
              </div>

              <div class="col-6 col-md-2 mb-3 text-white">
                <h4 className='text-white'><b>My Account</b></h4>
                <ul class="nav flex-column gap-2 pt-3">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">My Account</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Discount</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Returns</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Orders History</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Order Tracking</a></li>
                </ul>
              </div>

              <div class="col-md-5 offset-md-1 mb-3 text-white">
        <form>
          <h5>Subscribe our newsletter</h5>
          <p>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control rounded-5 py-3" placeholder="Email address"/>
            
          </div>
        </form>
      </div>

            </div>


          </footer>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white">
          <div className='container'>
            <div className='d-flex row'>
              <div className='col-md-9'><p>&copy; 2020 All Rights Reserved by Bestwebcreator</p></div>
              <div className='col-md-3'>
                <ul class="list-unstyled d-flex">
                  <li class="ps-2"><a class="link-body-emphasis" href="#"><img src={logo1} alt="" /></a></li>
                  <li class="ps-2"><a class="link-body-emphasis" href="#"><img src={logo2} alt="" /></a></li>
                  <li class="ps-2"><a class="link-body-emphasis" href="#"><img src={logo3} alt="" /></a></li>
                  <li class="ps-2"><a class="link-body-emphasis" href="#"><img src={logo4} alt="" /></a></li>
                  <li class="ps-2"><a class="link-body-emphasis" href="#"><img src={logo5} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* old */}

        </>
    )
};
export default Footer;