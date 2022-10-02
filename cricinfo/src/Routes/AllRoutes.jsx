import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import News from "./News";
import Video from "./Videos";

function AllRoutes(){
    return(
        <>
          <Routes>
    <Route path="/" element={<Home></Home>}> </Route>
    <Route path="News" element={<News></News>}> </Route>
    <Route path="Video" element={<Video></Video>}> </Route>

  </Routes>
        </>
    )
}

export default AllRoutes;