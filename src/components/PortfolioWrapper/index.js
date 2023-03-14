import React from "react";
import "./style.css";

function PortfolioWrapper(props) {
  return <main className="portfolio-wrapper">{props.children}</main>;
}

export default PortfolioWrapper;
