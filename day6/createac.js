// import React, { useState } from 'react';
// import "./LoginPage"
// import "./Signup.css"
// const SignupPage = () => {
//   const [name, setName ] = useState('');
//   const [phoneno, setPhoneNo ] = useState('');
//   const [adharNo, setAdharNo ] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
    
//     setName('');
//     setAdharNo('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setPhoneNo('');

//   };

//   return (
//     <div>
      
//       <form onSubmit={handleSubmit}>
//         <div class="box">
//         <img src="https://img.freepik.com/free-photo/full-shot-family-members-silhouettes-outdoors_23-2150039658.jpg?size=626&ext=jpg&ga=GA1.2.2109871475.1688912072&semt=ais" alt="health"></img>
//         </div>
//         <div class="signinfo">
//         <h2>Enter your details</h2>
//         <div>
//         <label>Name:</label>
//           <input
//             type="string"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//           <label>PhoneNumber:</label>
//           <input
//             type="number"
//             value={phoneno}
//             onChange={e => setPhoneNo(e.target.value)}
//           />
//           <label>AdharNo:</label>
//           <input
//             type="string"
//             value={adharNo}
//             onChange={e => setAdharNo(e.target.value)}
//           />
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//         <div class="reg">
//         <p>Have already an account? <a href="LoginPage" class="register-link">Login Here</a></p>
//                         </div>
//                         </div>
//       </form>
//     </div>
//   );
// }
// export default SignupPage;
import React from 'react'
import './createac.css';
function createac() {
  return (
    <body>
   <header class="header">
   </header>
    
    <div class="background"></div>
    <div class="text-item">
                <h1 className='heading'>MEDCARE+<br/><span>
                </span></h1>
                <p>"Simplify Your Healthcare Journey"</p>
            </div>
    <div class="container">
        <div class="item">
            <h2 class="logo"><i class='bx bxl-xing'></i></h2>
            
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>CREATE AN ACCOUNT</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="confirm password" placeholder='confirm Password'required/>
                    </div>
                    <button class="btn">Sign Up</button>
                    <div class="create-account">
                        <p>Have already an account? <a href="#" class="register-link">Login Here</a></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
    
  )
}

export default createac