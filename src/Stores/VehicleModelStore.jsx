import { observable, action, makeObservable } from "mobx";

class VehicleModelStore {
    vehicleModel = {
        id:"",
        makeId: "",
        name:"",
        abrv:"",
    }

    constructor() {
        makeObservable(this, {
            vehicleModel: observable,
            setVehicleModel: action,
        })
        }

        setVehicleModel() {
            
        }
    }

export default VehicleModelStore;