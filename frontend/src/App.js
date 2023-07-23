import { BrowserRouter, Routes,Route, } from "react-router-dom";
// import Add from "./pages/add";
// import Home from "./pages/home";
// import Show from "./pages/show";
// import MovieList from "./pages/MovieList";
// import Movie from "./pages/Movie";
// import Search from "./pages/search";

import "./styles/style.css";         // NOTE:: add style pages
import Add from "./pages/add";

function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/home" element={<Home />} />
          <Route exact path="/movie/:id" element={<Show/>} /> */}
          {/* <Route exact path="/movies" element={<MovieList />} />
          <Route exact path="/movie/:id" element={<Movie/>} /> */}
          <Route path="/add" element={<Add />} />
          {/* <Route path="/search" element={<Movies/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
