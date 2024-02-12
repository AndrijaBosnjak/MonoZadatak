import { observable, action, makeObservable } from "mobx";

class VehicleMakeStore {
    vehicleMake = {
        id:"",
        name:"",
        abrv:"",
    }

    constructor() {
        makeObservable(this, {
            vehicleMake: observable,
            setVehicleMake: action,
        })
        }

        setVehicleMake() {

        }
    }

export default VehicleMakeStore;