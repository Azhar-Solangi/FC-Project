import './footer.css';
// images
import logo1 from '../../../../assets/images/visa.png'
import logo2 from '../../../../assets/images/discover.png'
import logo3 from '../../../../assets/images/master_card.png'
import logo4 from '../../../../assets/images/paypal.png'
import logo5 from '../../../../assets/images/amarican_express.png'

import foterlogo from '../../../../assets/images/footer_logo.svg'
import socialIcon from '../../../../assets/images/socialicon.svg'
import locationIcon from '../../../../assets/images/icons/footerLocation.png'
import msgIcon from '../../../../assets/images/icons/footermsg.png'
import phoneIcon from '../../../../assets/images/icons/footerphone.png'




const ShopFooter = () => {
  return (
    <>
      {/* Contact Red Row */}
      <div className="bg-danger text-white">
        <div className="container  py-5">
          <div className="d-flex my-3 row">
            <div className='col-md-6'>
            <div className="me-auto">
              <h2 className="text-white"><b>Subscribe Our Newsletter</b></h2>
            </div>
            </div>
            <div className='col-md-6'>
            <div className="d-flex">
              <input  className="p-3 px-5 footerSearch" type="text" placeholder="Enter Email Address" />
              <button className="text-white bg-dark px-5">Subscribe</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer dark */}
      <div className='bg-dark text-white'>
        <div class="container">
          <footer class="py-5">
            <div class="row">
              <div class=" col-md-3 mb-3 text-white">
                <h4 className='text-white'><img src={foterlogo} alt="" /></h4>
                <ul class="nav flex-column text-white gap-2 pt-3">
                  <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-white">If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img src={socialIcon} alt="" /></a></li>
                </ul>
              </div>

              <div class=" col-md-2 mb-3 text-white gap-2 ">
                <h4 className='text-white'><b>Useful Links</b></h4>
                <ul class="nav flex-column gap-2 pt-3">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About Us</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Location</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Affiliates</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contact</a></li>
                </ul>
              </div>
              <div class=" col-md-2 mb-3 text-white">
                <h4 className='text-white'><b>Category</b></h4>
                <ul class="nav flex-column gap-2 pt-3">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Men</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Woman</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Kids</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Best Saller</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">New Arrivals</a></li>
                </ul>
              </div>

              <div class=" col-md-2 mb-3 text-white">
                <h4 className='text-white'><b>My Account</b></h4>
                <ul class="nav flex-column gap-2 pt-3">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">My Account</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Discount</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Returns</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Orders History</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Order Tracking</a></li>
                </ul>
              </div>

              <div class="col-md-3  mb-3 text-white">
                <h4 className='text-white'><b>Contact Info</b></h4>
                <ul class="nav flex-column gap-2 pt-3">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img src={locationIcon} alt="" /> 123 Street, Old Trafford, New South London , UK</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img src={msgIcon} alt="" /> info@sitename.com</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white"><img src={phoneIcon} alt="" /> + 457 789 789 65</a></li>
                </ul>
              </div>
            </div>


          </footer>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 mt-2 border-top text-white">
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
    </>
  )
};
export default ShopFooter;