import { Component } from "react";
import { observer, inject } from "mobx-react";
class VehicleMake extends Component {
    render() {
      // const  { vehicleMakeStore } = this.props;
     
      return (
      <h1>VehicleMake</h1>
    )}
  }

export default inject(i => ({ vehicleMakeStore: i.rootStore.vehicleMakeStore }))(observer(VehicleMake));