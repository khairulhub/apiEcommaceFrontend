import React, { useEffect } from 'react';

const MegaMenu = () => {
     useEffect(() => {
          MegaMenu();
     }, []);

     const MegaMenu = () => {
          var acc = document.getElementsByClassName("accordion");
          for (let i = 0; i < acc.length; i++) {
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
          <div className="accordionMenuDiv">
               <div className="accordionMenuDivInside">
               
                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" alt="icon" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem">Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem">Mans Tshirt 2</a></li>
                         </ul>
                    </div>

                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" alt="icon" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem">Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem">Mans Tshirt 2</a></li>
                         </ul>
                    </div>


                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>



                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>



                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>



                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>




                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>



                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>





                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>





                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>





                    <button className="accordion">
                         <img className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing
                    </button>
                    <div className="panel">
                         <ul>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                         </ul>
                    </div>












               </div>

          </div>
     );
};

export default MegaMenu;