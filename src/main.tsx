import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./App/Root";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>
);
