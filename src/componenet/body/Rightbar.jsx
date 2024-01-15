import React from "react";
import "./css/rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-conatianer">
        <div className="linked">
          <h2>Linked</h2>
          <div className="linked-lists">
            <div className="linked-list">12</div>
            <div className="linked-list">13</div>
            <div className="linked-list">42</div>
            <div className="linked-list">62</div>
            <div className="linked-list">82</div>   
          </div>
        </div>
        <div className="related">
          <h2>Related</h2>
          <div className="related-lists">
            <div className="related-list">87</div>
            <div className="related-list">87</div>
            <div className="related-list">37</div>
            <div className="related-list">17</div>
            <div className="related-list">897</div>
            <div className="related-list">897</div>
            <div className="related-list">897</div>
            <div className="related-list">897</div>
            <div className="related-list">897</div>
            <div className="related-list">897</div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
