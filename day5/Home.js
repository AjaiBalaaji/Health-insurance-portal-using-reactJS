import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
function Home() {
   const nav = useNavigate();
        const handleHome=()=>{
       nav("/Home")
        }
  return (
    <div className="home" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1341396989/photo/male-hand-holding-question-mark-icon-on-blue-background-banner-with-copy-space-place-for-text.jpg?s=612x612&w=0&k=20&c=PZ_igtqlscTyiJV_USjihS5tlp-WunfiEeyf498pg4o=)` }}>
      <div className="headerContainer">
        <h1> NSD</h1>
        <p> Nagapalayam s dharsith</p>
        <Link to="/">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;