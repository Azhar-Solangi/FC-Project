import React, { useState } from "react";
import ShopFooter from "../ShopList/components/footer/footer";
import { Link, Outlet } from "react-router-dom";

const Login = () => {


  const [userEmail, setUserEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [msgEmail, setMsgEmail] = useState('Enter Your Email ❌');

  const [userPassword, setUserPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [msgPasswoed, setMsgPassword] = useState('Enter Your Password ❌');

  const Emailhandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmail !== "") {
      setMsgEmail('Looks Good! ✔');
    }

  };

  const Passwordhandler = (e) => {
    setUserPassword(e.target.value);
    if (userPassword !== "") {
      setMsgPassword('Looks Good! ✔');
    }

  };
  const submitForm = (e) => {
    e.preventDefault();
    if (userEmail === '') {
      setShowEmailError(true);
    }
    if (userPassword === '') {
      setShowPasswordError(true);
    }
  };
  return (

    <>
      <div className="bg-light text-black py-2 mb-5  ">
        <div className="container  py-4">
          <div className="d-flex my-4 ">
            <div className="me-auto ">
              <h2><b>Login</b></h2>
            </div>
            <div className="justify-content-end gap-2 d-flex">
              <div>Home ➢ </div>
              <div>Pages ➢ </div>
              <div className="text-dark">Login</div>
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="row px-0 mx-0">
        <div className="col-md-4 px-0 mx-0"></div>
        <div className="col-md-4 px-0 mx-0">
          <form onSubmit={submitForm} className="container my-5 mb-5 shadow py-5" action="">
            <h2 className=""><b>Login</b></h2>
            <input value={userEmail} onChange={Emailhandler} className="col-md-12 p-2 rounded-2 my-2 form-control" type="text" placeholder="Your Email" />
            {showEmailError && <p className={` ${msgEmail === "Looks Good! ✔" ? "grencol" : "EroorColor"}`}>{msgEmail}</p>}
            <input value={userPassword} onChange={Passwordhandler} className="col-md-12 p-2 rounded-2 my-2 form-control" type="password" placeholder="Password" /> <br />
            {showPasswordError && <p className={` ${msgPasswoed === "Looks Good! ✔" ? "grencol" : "EroorColor"}`}>{msgPasswoed}</p>}
            <div className="row  py-2">
              <div className="col-md-4"><input type="checkbox" placeholder="" /><span className="ps-2">Remember me</span></div>
              <div className="col-md-4"></div>
              <div className="col-md-4 text-end"> <span>Forgot password?</span></div>
            </div>
            <button className="col-md-12 py-2 rounded-2 my-2 text-center bg-danger form-control  border-0" type="submit">Log In</button>
            <div className="row py-2">
              <div className="col-md-5"><hr /></div>
              <div className="col-md-2 text-center mx-0 px-0">OR</div>
              <div className="col-md-5"><hr /></div>
            </div>
            <div className="text-center  justify-coontent space-between py-3">
              <span className="">   <button className="text-white bg-primary px-5 py-2 rounded-2 border-0">Facebook</button> </span>
              <button className="text-white bg-danger px-5 py-2 rounded-2 border-0">Google</button> <br />
              <span className="my-3 boder">Don't Have an Account? <Link to='/Register'> Sign up now</Link> </span>
            </div>
          </form>
        </div>
        <div className="col-md-4 px-0 mx-0"></div>
      </div>
      <ShopFooter />
    </>
  )
};
export default Login;