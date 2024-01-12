import "bootstrap/dist/css/bootstrap.min.css";

import "../style/nav.css";
import logo from "../Images/logo.png";

function navbar() {
  return (
    <>
      <nav className="shadow p-2 mb-5 bg-body-tertiary rounded">
        <div className="d-flex justify-content-between main align-items-center mx-5">
          <div>
            <a href="#logo">
              <img src={logo} width={"200px"} alt="Logo" />
            </a>
          </div>
          <div className="w-100 mx-4">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="d-flex">
            <div className="me-5">home</div>
            <div className="me-5">home</div>
            <div className="">home</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
