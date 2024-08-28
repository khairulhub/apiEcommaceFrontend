import React, { Fragment, useEffect } from 'react';

import axios from 'axios';

import AppUrl from '../api/AppUrl';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Categories from '../components/home/Categories';
import Collections from '../components/home/Collections';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
import HomeTopMobile from '../components/home/HomeTopMobile';
import NewArrival from '../components/home/NewArrival';


// <NavMenuDesktop></NavMenuDesktop>
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        GetVisitorDetails();
    }, []);


   // Define GetVisitorDetails function
   const GetVisitorDetails = () => {
    axios.get(AppUrl.VisitorUrl)
        .then(response => {
            console.log("Visitor details fetched successfully", response.data);
        })
        .catch(error => {
            console.error("Error fetching visitor details", error);
        });
};



    return (
        <Fragment>

            <div className="Desktop">
                <NavMenuDesktop />
                <HomeTop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
                <HomeTopMobile />
            </div>

            <FeaturedProducts></FeaturedProducts>
            <NewArrival></NewArrival>
            <Categories></Categories>
            <Collections></Collections>

            
            <div className="Desktop">
                <FooterDesktop />
            </div>

            <div className="Mobile">
                <FooterMobile />
            </div>

        </Fragment>
    );
};

export default Home;