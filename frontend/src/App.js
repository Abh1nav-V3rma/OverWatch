import { BrowserRouter, Routes,Route, } from "react-router-dom";
// import Add from "./pages/add";
import Home from "./pages/home";
// import Search from "./pages/search";

// import "./style";          NOTE:: add style pages

function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<home/>} /> */}
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/add" element={<Add/>} /> */}
          {/* <Route path="/search" element={<Movies/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;


// this is eg or reference if something doesn't work
// function App() {
//   const [message,setMessage] = useState("");

//   useEffect(() =>{
//     fetch("http://localhost:8000/message")
//     .then((res) => res.json())
//     .then((data) => setMessage(data.message));
//   }, []);

//   return(
//     <div className="App">
//       <h1>{ message }</h1>
//     </div>
//   );
// }