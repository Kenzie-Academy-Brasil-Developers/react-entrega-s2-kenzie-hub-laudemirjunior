import Routes from "../src/routes/index";
import GlobalStyle from "../src/styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
