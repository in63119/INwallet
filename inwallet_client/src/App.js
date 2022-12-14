import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

// component
import Header from "./component/Header";
import ChainSelector from "./component/ChainSelector";
import Loading from "./component/Loading";
import OutWallet from "./component/OutWallet";

// page
import Main from "./page/Main";
import Avalanche from "./page/Avalanche";
import Binance from "./page/Binance";
import INBinance from "./component/BNB/INBinance";
import Ethereum from "./page/Ethereum";
import INEthereum from "./component/ETH/INEthereum";
import Harmony from "./page/Harmony";
import Klaytn from "./page/Klaytn";
import INKlaytn from "./component/KLAY/INKlaytn";
import Polygon from "./page/Polygon";
import Stacks from "./page/Stacks";

// recoil
import { useRecoilValue } from "recoil";
import { loadingState } from "./recoil/loading";

function App() {
  const isLoading = useRecoilValue(loadingState);
  return (
    <BrowserRouter>
      <Header />
      {isLoading.isLoading ? <Loading /> : null}
      <ChainSelector />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AVAX" element={<Avalanche />} />
        <Route path="/BNB" element={<Binance />} />
        <Route path="/INBNB" element={<INBinance />} />
        <Route path="/ETH" element={<Ethereum />} />
        <Route path="/INETH" element={<INEthereum />} />
        <Route path="/ONE" element={<Harmony />} />
        <Route path="/KLAY" element={<Klaytn />} />
        <Route path="/INKLAY" element={<INKlaytn />} />
        <Route path="/MATIC" element={<Polygon />} />
        <Route path="/STX" element={<Stacks />} />
      </Routes>
      <OutWallet />
    </BrowserRouter>
  );
}

export default App;
