import { Form } from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

export default class MyForm extends Form {
  plugins() {
    return {
      dvr: dvr({ package: validatorjs }),
    };
  }

  setup() {
    return {
      fields: [{
        name: "vehicleMakeName",
        label: "VehicleMake Name",
        placeholder: "enter name",
        rules: "required|string",
      },
      {
        name: "vehicleMakeAbrv",
        label: "VehicleMake Abbreviation",
        placeholder: "enter abbreviation",
        rules: "required",
      }
    ],
    };
  }
 
}



