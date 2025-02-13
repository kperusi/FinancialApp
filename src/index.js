import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store/store";
import { BrowserRouter } from "react-router-dom";
// import App from "./views2/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        {/* <App /> */}
       <App/>
      </Provider>
      
    </BrowserRouter>
  </React.StrictMode>
);
