import React from "react";
const rowResult = props => {
  return (
    <tr>
      <td>{res.id}</td>
      <td>{res.title}</td>
      <td>{res.firstName}</td>
      <td>{res.surname}</td>
      <td>{res.email}</td>
      <td>{res.roomId}</td>
      <td>{res.checkIn}</td>
      <td>{res.checkOut}</td>
    </tr>
  );
};

const SearchResults = props => {
  const results = props.Searchresults;
  const resultsField = results.map(res => <rowResult res />);
  return (
    <table class="table table-sm">
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
        </tr>
      </thead>
      <tbody>{resultsField}</tbody>
    </table>
  );
};
export default SearchResults;
