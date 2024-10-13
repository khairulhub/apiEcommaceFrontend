import React, { Fragment, useEffect } from 'react';

import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import About from '../components/others/About';



const AboutPage = () => {
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

        <About></About>

        <div className="Desktop">
        <FooterDesktop/>
        </div>

        <div className="Mobile">
        <FooterMobile/>
        </div>

   </Fragment>
    );
};

export default AboutPage;