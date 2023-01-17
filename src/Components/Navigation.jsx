import React from "react";

function Navigation() {
  return (
    <div className="mx-4">
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-center">
        <div className="container-fluid row border-bottom border-white">
          {/* logo brand - start */}
          <a className="navbar-brand col-6 text-light" href="/">
            Kinda Mood
          </a>
          {/* logo brand - end */}

          {/* menus - start */}
          <div className="collapse navbar-collapse col-6 row" id="navbarNav">
            {/* center menus - start */}
            <div className="col-8 border-start border-end border-white">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    href="/"
                  >
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
              </ul>
            </div>
            {/* center menus - end */}

            {/* right menus - start */}
            <div className="col-4 d-flex justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-link text-light" href="/">
                    Let's Talk
                  </a>
                </li>
              </ul>
            </div>
            {/* right menus - end */}
          </div>
          {/* menus - end */}

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
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
