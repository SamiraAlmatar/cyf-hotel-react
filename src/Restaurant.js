import React, { Component } from "react";
import Order from "./components/Order";

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="restaurant">
        <h3>Restaurant Orders</h3>
        <ul>
          <Order orderType={"Pizza"} />
          <Order orderType={"Pasta"} />
          <Order orderType={"Salad"} />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
