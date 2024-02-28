import { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

class VehicleModel extends Component {
  render() {
    return (
      <>
        <h1>Vehicle Model</h1>
        <Link to="newvehiclemodel">
          <button>Add New VehicleModel</button>
        </Link>
      </>
    );
  }
}

export default inject((i) => ({
  vehicleModelStore: i.rootStore.vehicleModelStore,
}))(observer(VehicleModel));
