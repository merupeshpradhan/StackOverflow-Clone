import React from "react";
import "../style/leftmenu.css";

import { GoHome } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";

function LeftMenu() {
  return (
    <div>
      <div className="left-container d-flex justify-content-center ">
        <div>
          <div className="d-flex flex-column mt-5">
            <div clas> <span className="me-3"><GoHome /></span> Home</div>
            <div className="dropdown mt-4">
              {/* <button
                className="btn dropdown-toggle btn-outline-white text-start"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Public
              </button> */}
              <div className="dropdown-toggle public" data-bs-toggle="dropdown" aria-expanded="false" type="button"> <span className="me-3"><AiOutlineGlobal /></span> Public</div>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4"> <span className="me-3"><MdGroups /></span> Collectives</div>
            <div className="mt-4"> <span className="me-3"><IoBriefcaseOutline /></span> Jobs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
