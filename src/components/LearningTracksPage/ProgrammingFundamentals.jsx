import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import './ProgrammingFundamentals.css'


function ProgrammingFundamentals() {

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:Y-s1sFXN/learning_tracks")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setTracks(data);
        } else {
          console.error("API Error: Received non-array data", data);
          setTracks([]);
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setTracks([]);
      });
  }, []);

  return (
    <>
      <div className="roadmap-page">
        <div className="container text-center px-5">
          <div className="row text-center mb-4">
            <div className="col">
              <h3>Explore Learning Tracks</h3>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {/* <!-- Card 1 --> */}
            <div className="col-md-5">
              <div className="learning-card">
                <i className="bi bi-code-slash"></i>
                <h5>Data Science Using Python & Intro to AI</h5>
                <p>
                  Embark on your journey to becoming a proficient Python developer.
                  This roadmap covers essential Python programming skills, from core syntax and logic to data structures and real-world projects.
                </p>
                <Link to="/learning-tracks/programming-fundamentals/python-fundamentals" className="btn btn-primary">Start Learning</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





export default ProgrammingFundamentals