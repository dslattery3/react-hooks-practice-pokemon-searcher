import React from "react";

function Search({handleSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => handleSearch(e)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
