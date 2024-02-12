import { Component } from "react";
import { observer, inject } from "mobx-react";

class VehicleModel extends Component {
    render() {
      return (
      <h1>Vehicle Model</h1>
    )}
  }

  export default inject(i => ({ vehicleModelStore: i.rootStore.vehicleModelStore }))(observer(VehicleModel));