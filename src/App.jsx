import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./components/CustomNavBar";
import Films from "./components/Films";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <>
        <CustomNavBar />
        <Routes>
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<Films />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
