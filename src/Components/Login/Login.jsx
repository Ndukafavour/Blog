import React from "react";
import "./Login.css";
import { MdOutlineContactMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";



const Login = () => {
  // const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate()
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup.object().shape({
    email: yup.string().required("email is required"),
    password: yup.string().required("password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const userId = JSON.parse
    try {
      // setLoading(true);
      const res = await axios.post(
        "https://echo-sphere-blog.onrender.com/api/v1/login",
        data
      );
      const userInformation =res.data
      localStorage.setItem("userInformation",JSON.stringify({id:userInformation._id,
       email:userInformation.email,
       password:userInformation.password}))
      nav("/")
      console.log(userInformation)
      setLoading(false);
    } catch (err) {
      console.error(err)
      console.log(err.response, "err message");

      // setLoading(false);
    }
  };
 
  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="loginHold">
       <div className="options">
          <div className="optwrap">
            <div className="optimg">
              <img src="src/assets/EchoSphere.png" alt="" />
            </div>
            <h1>Welcome to Echosphere</h1>
            <h3>Create an account to unlock these benefits</h3>
           
            <hr  style={{backgroundColor: "green", color: "red", width: "60%"}}/>
            <div className="contt">
              <ul className="ull">
                <li className="lit">Comment on articles and express yourself</li>
                <li className="lit">Manage your Newsletters</li>
                <li className="lit">Access Privacy Setings</li>
                <li className="lit">Browse  Without the distract of pop-up ads</li>
              </ul>

            </div>
          
            
          </div>
          
          </div>
      <div className="loginWrap">
           <div className="echo">
             <img src="src/assets/EchoSphere.png" alt="" />
           </div>
        <div className="high">
          <div className="inf">
           
          </div>
          <div className="top">
            <MdOutlineContactMail style={{ fontSize: "12px" }} />
            <input
              type="email"
              placeholder="Email"
              {...register("email")}         
            />
            <p style={{ color: "red" }}> {errors.email?.message}</p>
          </div>
        </div>
        <div className="high">
          <div className="inf">
            {/* {errors.isError && error.type === "password" ? (
              <p style={{ color: "red", fontSize: "10px" }}>{error.message}</p>
            ) : null} */}
          </div>
          <div className="midz">
            <RiLockPasswordFill style={{ fontSize: "12px" }} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              
            />
            {showPassword ? (
              <FaRegEye
                onClick={handleShowPassword}
                style={{ fontSize: "12px" }}
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowPassword}
                style={{ fontSize: "12px" }}
              />
            )}
          </div>
        </div>
        <div className="forgot">
          <h5>forgotten password</h5>

        </div>

        <div className="login">
          
          <button >Login</button>
        
          <Link to="/land">Home</Link>
          {/* <button onClick={() => Nav("/home")}>SignUp</button> */}
        </div>
      </div>
    </div>
    </form>
    </>
    
  );
};

export default Login;