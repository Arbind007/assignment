import React from "react";

function Title() {
  return (
    <div className="container text py-3" id="top">
      <div className="row align-items ">
        <div className="col-12 col-md-12">
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">Campaigns</a>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button type="button" class="btn btn-outline-primary">
                Create Campaign
              </button>
            </form>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Title;
