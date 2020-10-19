import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand">Campaign Management</a>
        <form class="form-inline">
          <a class="nav-link sup" href="#">
            Dashboard
          </a>
          <a class="nav-link sup" href="#">
            Campaigns
          </a>
          <a class="nav-link sup" href="#">
            Mailing List
          </a>
          <a class="nav-link sup" href="#">
            Templates
          </a>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
