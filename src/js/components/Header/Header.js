import React from "react";

import HeaderCSS from "./Header.css";

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand">
            Arrow Paper Products
          </a>
          <div class="navbar-tools hidden-sm hidden-xs"></div>
        </div>
      </nav>
    );
  }
}