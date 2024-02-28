import { observable, action, makeObservable } from "mobx";
import VehicleMakeForm from "../Components/MakeVehicleForm";

class VehicleMakeStore {
  vehicleMakes = [];

  constructor() {
    this.form = new VehicleMakeForm({
      onSuccess: (form) => {
        return this.vehicleMakes = form.values();
      },
      onError: (form) => {
        alert(form.errors());
      },
    });
  
  makeObservable(this, {
      vehicleMakes: observable,

    });

  }
}

export default VehicleMakeStore;
