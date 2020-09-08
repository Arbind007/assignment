import React from "react";
import $ from "jquery";
import Player from "./Player.js";
import Pic1 from "../resources/photo/main1.jpeg";
import Pic2 from "../resources/photo/main2.jpg";
import Pic3 from "../resources/photo/main3.jpg";
import Pic4 from "../resources/photo/main4.jpg";
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

function Song() {
  return (
    <div className="" id="soup">
      <input id="myInput" type="text" placeholder="Search.."></input>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Song</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody id="myTable">
          <tr>
            <td>
              <img
                className="img-fluid w-40"
                src={Pic1}
                alt="Dusk Till Dawn"
                id="rain1"
                loading="lazy"
              />
            </td>
            <td>Dusk Till Dawn</td>
            <td>ZAYN</td>
          </tr>
          <tr>
            <td>
              <img
                className="img-fluid w-40"
                src={Pic2}
                alt="Perfect"
                id="rain1"
                loading="lazy"
              />
            </td>
            <td>Perfect</td>
            <td>Ed Sheeran</td>
          </tr>
          <tr>
            <td>
              <img
                className="img-fluid w-40"
                src={Pic3}
                alt="Something Just Like This"
                id="rain1"
                loading="lazy"
              />
            </td>
            <td>Something Just Like This</td>
            <td>The Chainsmokers & Coldplay</td>
          </tr>
          <tr>
            <td>
              <img
                className="img-fluid w-40"
                src={Pic4}
                alt="Happier"
                id="rain1"
                loading="lazy"
              />
            </td>
            <td>Happier</td>
            <td>Marshmello</td>
          </tr>
        </tbody>
      </table>
      <Player />
    </div>
  );
}
export default Song;
