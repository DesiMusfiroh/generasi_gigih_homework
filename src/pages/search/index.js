import React from 'react';
import "./style.css";
import Sidebar from "../../components/sidebar";
import Footer from "../../components/footer";
import Body from "../../components/body";

function Search({ spotify }) {
    return (
      <div className="search">
        <div className="search_body">
          <Sidebar />
          <Body spotify={spotify} />
        </div>
        <Footer spotify={spotify} />
      </div>
    );
  }

export default Search;