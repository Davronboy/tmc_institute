import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <div className="container"></div>
    </>
  );
};

export default App;
