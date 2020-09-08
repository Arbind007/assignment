import React from "react";

import Logo from "../resources/photo/main.jpg";

function Title() {
  return (
    <div className="container text-center " id="top">
      <div className="row align-items-center pt-5">
        <div className="col-12 col-md-6">
          <img src={Logo} alt="arbindlochanmishra" id="ram6" />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div
            className="font-weight-bold text-white"
            style={{ fontSize: "50px" }}
          >
            <h1>Play millions of songs and podcasts, for free.</h1>
            <button
              type="button"
              class="btn btn-light btn-outline-success btn-primary btn-lg"
            >
              GET SPOTIFY FREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
