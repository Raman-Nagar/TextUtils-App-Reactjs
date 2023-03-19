import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#042743";
      showAlert("dark mode has been enabled", "success")
    } else {
      setmode("light");
      showAlert("light mode has been enabled", "primary")
      document.body.style.background = "white";
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout mode={mode} toggleMode={toggleMode} alert={alert} />
            }
          >
            <Route
              index
              element={
                <TextForm
                  heading={"Enter the text to analize below"}
                  mode={mode} showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
