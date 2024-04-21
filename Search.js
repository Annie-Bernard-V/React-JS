
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Search = ({ handleSearchNote }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <input
            type="text"
            onChange={(event) => handleSearchNote(event.target.value)}
            className="form-control me-2"
            placeholder="Type to Search..."
          />
          <button className="btn btn-outline-success m-2" type="button">
            Search
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Search;
