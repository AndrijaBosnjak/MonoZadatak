import { makeObservable } from "mobx";

import VehicleMakeStore from "./VehicleMakeStore";
import VehicleModelStore from "./VehicleModelStore";

class RootStore {
    vehicleMakeStore;
    vehicleModelStore;

    constructor() {
        this.vehicleMakeStore = new VehicleMakeStore;
        this.vehicleModelStore = new VehicleModelStore;
    
        makeObservable(this);
    }
}

const rootStore = new RootStore();

export default rootStore;
