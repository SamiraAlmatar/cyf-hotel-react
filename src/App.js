import React, { Component } from "react";

import Bookings from "./Bookings";
import Heading from "./components/Heading";
import TouristInfoCard from "./components/TouristInfoCard";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Data from "./data/fakeBookings.json";
import "./App.css";

class App extends Component {
  render() {
    const address = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ];
    // const Searchresults = [{id : 1, title : "name", firstName:"Samm", surname:"S.M", email:"email@email.com", roomId: 001, checkIn:"09-05-2019", checkOut:"19-05-2019"},
    // {id : 1, title : "name", firstName:"Samm", surname:"S.M", email:"email@email.com", roomId: 001, checkIn:"09-05-2019", checkOut:"19-05-2019"},
    // {id : 1, title : "name", firstName:"Samm", surname:"S.M", email:"email@email.com", roomId: 001, checkIn:"09-05-2019", checkOut:"19-05-2019"}];
    return (
      <div className="App">
        <Heading />
        <div className="Container">
          <div className="row justify-content-around">
            <TouristInfoCard
              imge="https://www.visitmanchester.com/imageresizer/?image=%2fdbimgs%2fOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2"
              cityName="Manchester"
              cityDescription=" Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed."
              website="https://www.visitmanchester.com/"
            />

            <TouristInfoCard
              imge="https://cdn.londonandpartners.com/-/media/images/london/visit/homepage-images/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=88AC45AD4C671BEB81CF8F7262AA59DCBD838DC0"
              cityName="London"
              cityDescription=" London attractions and sightseeing, what's on, London events, theatre, tours, restaurants and hotels in London. Plan your trip to London with useful traveller information."
              website="https://www.visitlondon.com/"
            />

            <TouristInfoCard
              imge="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?w968h681"
              cityName="Glasgow"
              cityDescription=" Glasgow is a port city on the River Clyde in Scotland's western Lowlands."
              website="https://peoplemakeglasgow.com/"
            />
          </div>
        </div>
        <Bookings />
        <SearchResults result={Data} />
        <Footer list={address} />
      </div>
    );
  }
}

export default App;
