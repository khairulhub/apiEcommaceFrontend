import React, { Component, Fragment, useEffect } from 'react'
import Favourite from '../components/Favourite/Favourite'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

const FavouritePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <Favourite /> 

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
    );
};

export default FavouritePage;