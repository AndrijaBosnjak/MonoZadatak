import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import App from "./App.jsx";
import rootStore from "./Stores/RootStore.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
