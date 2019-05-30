import React, { Component } from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }
  AddOrder = () => {
    this.setState(lastOrder => ({
      orders: lastOrder.orders + 1
    }));
  };

  render() {
    return (
      <li className="m-2">
        {this.props.orderType}: {this.state.orders}{" "}
        <RestaurantButton Add={this.AddOrder} />
      </li>
    );
  }
}

export default Order;
