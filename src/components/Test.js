import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  onClick = async () => {
    const response = await axios.post("http://127.0.0.1:5000/");
    console.log(response);
  };

  render() {
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
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={this.onClick}
                >
                  Create Campaign
                </button>
              </form>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
