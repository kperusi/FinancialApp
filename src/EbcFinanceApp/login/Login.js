import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
export default function Login() {

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // dispatch(setForYou());
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password).then(() => {
        localStorage.setItem("ebcfinance-user", JSON.stringify(auth.currentUser));
        
        
        navigate("/ebcfinance/views");
        setLoading(false);
      }).catch((e)=>{
        setError("can't login. Check your network");
        console.log(e.message);
        setLoading(false);
        // popup(e.code)
      });
    }  catch (error) {
     
    }
  };


  return (
    <main className='login-main'>
        <section className="hero">
        <h1>EBCFinance</h1>
        <p>Login</p>
      </section>

      <div className="register-cx">
        <form className="register-form" onSubmit={(e)=>{handleLogin(e)}}>
          {/* <div className="name-cx">
            <label>Username:</label>
            <input className="name" type="text" name="username" required />
          </div> */}

          <div className="email-cx">
            <label>Email:</label>
            <input className="email" 
            onChange={(e)=>handleChange(e)}
            type="email" name="email" required />
          </div>

          <div className="password-cx">
            <label>Password:</label>
            <input
            onChange={(e)=>handleChange(e)}
              className="password"
              type="password"
              name="password"
              required
            />
          </div>

          <input className="form-btn" type="submit" value="Login" />
        </form>
        <p className="register-text">Not Yet Registered? <a href="/ebcfinance-register">Register</a></p>
      </div>
      
    </main>
  )
}
