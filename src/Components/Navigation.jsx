import React from "react";

function Navigation() {
  return (
    <div className="mx-4">
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center pt-0">
        <div className="container-fluid row border-bottom border-white">
          {/* logo brand - start */}
          <a className="navbar-brand col-6 text-light" href="/">
            Kinda Mood
          </a>
          {/* logo brand - end */}

          {/* expand button - start */}
          <button
            className="navbar-toggler col-1 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* expand button - end */}

          {/* menus - start */}
          <div
            className="collapse navbar-collapse col-6 justify-content-end text-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="/">
                  Project
                </a>
              </li>
              <li classNameName="nav-item">
                <a className="nav-link text-light" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  About
                </a>
              </li>
              <li className="nav-item ms-lg-5">
                <a className="nav-link text-light" href="/">
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* menus - end */}
      </nav>
    </div>
  );
}

export default Navigation;
