import React, { useEffect } from 'react';

import { Button } from 'react-bootstrap';

const MegaMenuMobile = () => {
     // useEffect hook to handle componentDidMount equivalent
     useEffect(() => {
        MegaMenu();
    }, []);

    const MegaMenu = () => {
        var acc = document.getElementsByClassName("accordionMobile");
        var accNum = acc.length;
        for (let i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    };

    return (
        <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">

            <Button className="accordionMobile">
                <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" alt="icon" />&nbsp; Men's Clothing
            </Button>
            <div className="panelMobile">
                <ul>
                    <li><a href="#" className="accordionItemMobile"> Mans Tshirt 1</a></li>
                    <li><a href="#" className="accordionItemMobile"> Mans Tshirt 2</a></li>
                </ul>
            </div>

                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>




                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>


                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>


                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>


                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>





                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>




                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



            </div>

        </div>
    );
};

export default MegaMenuMobile;