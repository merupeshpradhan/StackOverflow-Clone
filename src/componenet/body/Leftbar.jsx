import React from "react";

import "./css/leftbar.css";
import { GoHome } from "react-icons/go";
import LanguageIcon from "@mui/icons-material/Language";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar-container">
        <div className="leftbar-option">
          <div className="leftbar-option">
            <div style={{ display: "flex",alignItems:"center" }}>
              <GoHome style={{fontSize:"25px",marginRight:"5px"}}/>
              <a>Home</a>
            </div>
          </div>
          <div className="leftbar-option">
            <div style={{ display: "flex",alignItems:"center" }}>
              <LanguageIcon />
              <a>Public</a>
            </div>
            <div className="link">
              <div className="tags">
                <p>Questions</p>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="leftbar-option">
            <div style={{ display: "flex",alignItems:"center" }}>
              <GroupsOutlinedIcon />
              <a>Collectives</a>
            </div>
          </div>
          <div className="leftbar-option">
            <div style={{ display: "flex",alignItems:"center" }}>
              <BusinessCenterOutlinedIcon />
              <a>Jobs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
