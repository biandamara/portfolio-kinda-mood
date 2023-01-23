import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-md-3 text-center">
        {/* copyright - start */}
        <div className="col">
          <p> &#169; 2023 by Tommy P. H.</p>
        </div>
        {/* copyright - end */}

        {/* navigation - start */}
        <div className="col d-flex justify-content-evenly pb-3">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            Project
          </a>
          <a className="nav-link" href="/">
            Pricing
          </a>
          <a className="nav-link" href="/">
            About
          </a>
        </div>
        {/* navigation - end */}

        {/* social media - start */}
        <div className="col">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter mx-3"></i>
          <i class="bi bi-instagram"></i>
        </div>
        {/* social media - end */}
      </footer>
    </div>
  );
}

export default Footer;
