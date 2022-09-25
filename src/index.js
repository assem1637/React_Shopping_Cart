import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { HashRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
