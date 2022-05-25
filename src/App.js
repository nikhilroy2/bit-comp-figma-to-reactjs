import "./App.css";
import Base from "./Layout/Base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ...................Pages...................
import Homepage from "./Pages/Homepage/Homepage";
import BuyNftInvestory from "./Pages/BuyNftInvestory/BuyNftInvestory";
import NftInvestory from "./Pages/NftInvestory/NftInvestory";
// ...................Pages...................End

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Base> <Homepage></Homepage></Base>
          }></Route>
          <Route path="/buy_nft_investory" element={<BuyNftInvestory></BuyNftInvestory>}></Route>

          <Route path="/nft_investory" element={<NftInvestory></NftInvestory>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;