import { Component } from "react";
import { observer, inject } from "mobx-react";


class NewVehicleMake extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    vehicleMakeStore.handleSubmit();
  };
  
  render() {
    const { form } = this.props.vehicleMakeStore;
    
    return (
      <>
        <h1>New VehicleMake</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={form.$("vehicleMakeName")}>{form.$("vehicleMakeName").label}</label>
          <input {...form.$("vehicleMakeName").bind()} />
          <p>{form.$("vehicleMakeName").error}</p>
          <br />

          <label htmlFor={form.$("vehicleMakeAbrv")}>{form.$("vehicleMakeAbrv").label}</label>
          <input {...form.$("vehicleMakeAbrv").bind()} />
          <p>{form.$("vehicleMakeAbrv").error}</p>
          <br />

          <button type="submit" onClick={form.onSubmit}>
            Submit
          </button>
          <button type="button" onClick={form.onClear}>
            Clear
          </button>
          
          <p>{form.error}</p>
        </form>
      </>
    );
  }
}

export default inject((i) => ({
  vehicleMakeStore: i.rootStore.vehicleMakeStore,
}))(observer(NewVehicleMake));
