import React from 'react'
// import { Link } from 'react-router-dom'
import "./Servicesdetails.css"


const pricingData = [
    { service: 'Oil Change', price: '$100' },
    { service: 'Painting', price: '$200' },
    { service: 'Engine Diagnostics', price: '$50' },
    { service: 'Denting', price: '$300' },
    { service: 'Washing', price: '$300' },
    // Add more services as needed
  ];

 const Oilnfilters =() => {
  return (
    <>
    <div className="firstsection">
    <div className="titlecar">
    <h1 className='animated-car'>OUR SERVICES</h1>
    </div>
    <div className="maincar">   
    <div className="mainimage-car">
            <div className="upperdivcar">
              <div className="img1car">
                <img src="image11.jpg" alt="abtimg" />
              </div>
              <div className="img2car">
                <img src="image14.jpg" alt="abtimg" />
              </div>
              <div className="img3car">
                <img src="image12.jpg" alt="abtimg" />
              </div>
            </div>
            <div className="lowerdivcar">
             
              <div className="img4car">
                <img src="image8.jpg" alt="abtimg" />
              </div>
              <div className="img6car">
                <img src="image2.jpg" alt="abtimg" />
              </div>
              <div className="img5car">
                <img src="image7.jpg" alt="abtimg" />
              </div>
            </div>
          </div>

          <div className="text1car">
            <div className="headcar">
                <li>LUBE,OIL AND FILTERS</li>
            </div>
            <div className="mainparaab">
              <p className="para1 animated-p1">We offer a full range of garage services to vehicle owners located in our area.
                All mechanic services are performed by highly qualified mechanics.
                We can handle any car problem</p>
              <p className="para2 animated-p2">We offer full range of garage services to vehicle owners in Ahmedabad.
                Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV,
                our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop.
                Whether you drive a medium sized truck or passenger car or SUV, our mechanics strive to ensure.</p>
            </div> 
            <div className="table1">
            <table border={2} className='tt'>
                {pricingData.map((item,index)=>
            <tr key={index}>
                <td>{item.service}</td>
                <td>{item.price}</td>
            </tr>
            )}
        </table>
            </div> 
          </div>
    </div>
    </div>
    </>
  )
}
export default Oilnfilters;
