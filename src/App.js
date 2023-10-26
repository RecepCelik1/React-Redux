import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Product from "./pages/product";
import Header from "./components/Header";
import Test from "./pages/test";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route index path="/" element={<Product/>}/>
          <Route index path="/test" element={<Test/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
