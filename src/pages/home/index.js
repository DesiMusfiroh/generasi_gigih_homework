import React from 'react';
import "./style.css";
import Sidebar from "../../components/sidebar";
import Body from "../../components/body";
import Footer from "../../components/footer";

function Home({ spotify, code }) {
    return (
      <div className="home">
        <div className="home_body">
          <Sidebar />
          <Body spotify={spotify} code={code} />
        </div>
        <Footer spotify={spotify} />
      </div>
    );
  }

export default Home;