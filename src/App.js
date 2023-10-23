import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import "./styles.scss";
import ProductsPage from "./product/ProductsPage.js";
import Navabr from "./navbar/Navbar.js";
import Cart from "./cart/Cart.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDescription from "./product/productDescription/productDescription";
import {Provider} from "react-redux";
import store from "./store/store";
import Notification from "./tools/notification";

function App() {


  const queryClient = new QueryClient();

  const [isCartOpened, setIsCartOpned] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
        setShowNotification(false);
    }, 3000);
  };

  return (
      <Provider store={store}>
    <QueryClientProvider client={queryClient}>

      <div className="App">
        <Cart isOpened={isCartOpened} onCloseClick={() => setIsCartOpned(false)} />
        <BrowserRouter>
          <Navabr onOpenCartClicked={() => setIsCartOpned(true)} />
          {showNotification && <Notification message={showNotification} />}
          <Routes>
            <Route path="/" element={<ProductsPage handleShowNotification={handleShowNotification}/> } />
            <Route path="product/:id" element={<ProductDescription handleShowNotification={handleShowNotification}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
        </Provider>
  );
}

export default App;
