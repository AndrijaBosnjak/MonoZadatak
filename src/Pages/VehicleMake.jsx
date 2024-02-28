import { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
class VehicleMake extends Component {
  render() {
    return (
      <>
        <h1>VehicleMake</h1>
        <Link to="newvehiclemake">
          <button>Add New VehicleMake</button>
        </Link>
        <Link to="vehiclemakelist">
          <button>VehicleMake List</button>
        </Link>
      </>
    );
  }
}

export default inject((i) => ({
  vehicleMakeStore: i.rootStore.vehicleMakeStore,
}))(observer(VehicleMake));
