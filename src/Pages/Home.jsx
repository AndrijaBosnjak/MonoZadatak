import { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
      return (
      <>
      <h1>Home Page</h1>
      <Link to="vehiclemake"><button >VehicleMake</button></Link> 
      <Link to="vehiclemake"><button >VehicleModel</button></Link>  
</>  
    )}
  }

export default HomePage;