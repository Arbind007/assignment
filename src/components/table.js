import React from "react";

function table() {
  return (
    <div className="container text " id="top">
      <div className="row align-items ">
        <div className="col-12 col-md-12">
          <table class="table">
            <thead className="thead">
              <tr>
                <th>Campaign</th>
                <th>Status</th>
                <th>Opens</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">test_notifications</a>
                </td>
                <td>
                  <span class="badge badge-pill badge-success">Draft</span>
                </td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <a href="#">Sunny Smiles</a>
                </td>
                <td>
                  <span class="badge badge-pill badge-success">Draft</span>
                </td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <a href="#">Academy by the Sea</a>
                </td>
                <td>
                  <span class="badge badge-pill badge-success">Draft</span>
                </td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <a href="#">Adirondack</a>
                </td>
                <td>
                  <span class="badge badge-pill badge-success">Draft</span>
                </td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <a href="#">Beaver Falls</a>
                </td>
                <td>
                  <span class="badge badge-pill badge-success">Draft</span>
                </td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td></td>
                <div class="text-center ">
                  <a href="#">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  </a>
                  <button type="button" class="btn btn-outline-primary mx-3">
                    1
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    2
                  </button>

                  <a href="#" className="mx-3">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default table;
