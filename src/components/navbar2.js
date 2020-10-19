import React from "react";

function navbar2() {
  return (
    <div className="container text " id="top">
      <div className="row align-items ">
        <div className="col-12 col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link " id="super" href="#">
                    Recent <span class="sr-only">(current)</span>
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href="#" id="super">
                    Sent <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#" id="super">
                    Scheduled <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#" id="super">
                    Draft <span class="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default navbar2;
