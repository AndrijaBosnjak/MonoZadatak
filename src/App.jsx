import { Component } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/Home";
import VehicleMake from "./Pages/VehicleMake";
import VehicleMakeList from "./Pages/VehicleMakeList";
import NewVehicleMake from "./Pages/NewVehicleMake";
import VehicleModel from "./Pages/VehicleModel";
import VehicleModelList from "./Pages/VehicleModelList";
import NewVehicleModel from "./Pages/NewVehicleModel";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "vehiclemake", element: <VehicleMake /> },
  { path: "vehiclemake/vehiclemakelist", element: <VehicleMakeList /> },
  { path: "vehiclemake/newvehiclemake", element: <NewVehicleMake /> },
  { path: "vehiclemodel", element: <VehicleModel /> },
  { path: "vehiclemodel/vehiclemodellist", element: <VehicleModelList /> },
  { path: "vehiclemodel/newvehiclemodel", element: <NewVehicleModel /> },
  // {
  //   path: "vehiclemake",
  //   element: <VehicleMake />,
  //   children: [
  //     { path: "vehiclemakelist", Component: <VehicleMakeList /> },
  //     { path: "newvehiclemake", Component: <NewVehicleMake /> },
  //   ],
  // },
  // {
  //   path: "vehiclemake",
  //   element: <VehicleModel />,
  //   children: [
  //     { path: "vehiclemodellist", element: <VehicleModelList /> },
  //     { path: "newvehiclemodel", element: <NewVehicleModel /> },
  //   ],
  // },
]);
class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
