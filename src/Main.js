

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.js'
import FooterBar from './Components/Footer/FooterBar';
import Iphones from './Components/Products/Iphone/Iphones';
import Iwatch from './Components/Products/Iwatch/Iwatch.js';
import Ipads from './Components/Products/Ipad/Ipads.js';
import Imacs from './Components/Products/Imac/Imacs.js';
import Airpods from './Components/Products/Airpods/Airpodss.js';
import Four0Four from "./Components/PageNotFound/Four0Four.js";
import Homes from "./Components/Home/Homes.js";
import SignIn from "./Components/Login/SingIn.js";
import Support from "./Components/Support/Support.js";
import ProductDetails from "./Components/Product-details/ProductDetails.js";
import Buy from "./Components/Buy/Buys.js";

function Main() {
  return (
    <div>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="imac" element={<Imacs />} />
        {(() => {
          const routes = [];
          for (let i = 1; i <= 6; i++) {
            routes.push(
              <Route
                key={i}
                path={`imac/id=${i}`}
                element={<ProductDetails product="imac" />}
              />
            );
          }
          return routes;
        })()}
        <Route path="ipad" element={<Ipads />} />
        {(() => {
          const routes = [];
          for (let i = 1; i <= 4; i++) {
            routes.push(
              <Route
                key={i}
                path={`ipad/id=${i}`}
                element={<ProductDetails product="ipad"/>}
              />
            );
          }
          return routes;
        })()}
        <Route path="iphone" element={<Iphones />} />
        
        {(() => {
          const routes = [];
          for (let i = 1; i <= 8; i++) {
            routes.push(
              <Route
                key={i}
                path={`iphone/id=${i}`}
                element={<ProductDetails  product="iphone"/>}
              />
            );
          }
          return routes;
        })()}
  
        <Route path="iwatch" element={<Iwatch />} />
        {(() => {
          const routes = [];
          for (let i = 1; i <= 4; i++) {
            routes.push(
              <Route
                key={i}
                path={`iwatch/id=${i}`}
                element={<ProductDetails product="iwatch" />}
              />
            );
          }
          return routes;
        })()}
        <Route path="airpod" element={<Airpods />} />
        {(() => {
          const routes = [];
          for (let i = 1; i <= 4; i++) {
            routes.push(
              <Route
                key={i}
                path={`airpod/id=${i}`}
                element={<ProductDetails  product="airpod"/>}
              />
            );
          }
          return routes;
        })()}
        <Route path="support" element={<Support />} />
        <Route path="buy" element={<Buy/>} />

        <Route path="login" element={<SignIn />} />
        <Route path="*" element={<Four0Four />} /> 
      </Routes>
      <FooterBar />
    </Router>
  </div>  
  );
}

export default Main;
