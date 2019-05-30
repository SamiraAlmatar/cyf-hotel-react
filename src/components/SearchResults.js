import React from "react";
import moment from "moment";
const rowResult = props => {
  return (
    <tr key={props.data.id}>
      <td>{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td>{props.data.roomId}</td>
      <td>{props.data.checkInDate}</td>
      <td>{props.data.checkOutDate}</td>
    </tr>
  );
};

const SearchResults = props => {
  //const searchResults = props.results;
  var resultsField = props.result.map(res => {
    // return <rowResult key={res.id} data = {res} />
    return (
      <tr>
        <td>{res.id}</td>
        <td>{res.title}</td>
        <td>{res.firstName}</td>
        <td>{res.surname}</td>
        <td>{res.email}</td>
        <td>{res.roomId}</td>
        <td>{res.checkInDate}</td>
        <td>{res.checkOutDate}</td>
        <td>
          {moment(res.checkOutDate).diff(moment(res.checkInDate), "days")}
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-hover col-5 ml-7">
      <thead>
        <tr>
          <th scope="col">Id </th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">Days In</th>
        </tr>
      </thead>
      <tbody>{resultsField}</tbody>
    </table>
  );
};
export default SearchResults;
