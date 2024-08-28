import React, { Fragment } from 'react';

import {
    Route,
    Routes
  } from "react-router-dom";

import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import Home from '../pages/Home';
import NotificationPage from '../pages/NotificationPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import UserLoginPage from '../pages/UserLoginPage';
import Refund from '../components/others/Refund ';
const AppRoute = () => {
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/login" element={<UserLoginPage></UserLoginPage>} />
                <Route exact path="/contact" element={<ContactPage></ContactPage>} />


                <Route exact path="/purchase" element={<PurchasePage></PurchasePage>} />
                <Route exact path="/privacy" element={<PrivacyPage></PrivacyPage>} />
                <Route exact path="/refund" element={<RefundPage></RefundPage>} />

                <Route exact path="/productdetails" element={<ProductDetailsPage></ProductDetailsPage>} />
                <Route exact path="/notification" element={<NotificationPage></NotificationPage>} />
                <Route exact path="/favourite" element={<FavouritePage></FavouritePage>} />
                <Route exact path="/cart" element={<CartPage></CartPage>} />
            </Routes>
        </Fragment>
    );
};

export default AppRoute;