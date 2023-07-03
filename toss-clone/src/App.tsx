import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { List } from "./component";
import { Footer } from "./component/Footer";
import { Toss } from "./page/toss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/toss" element={<Toss />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
