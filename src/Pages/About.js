import React from 'react'
import { Link } from 'react-router-dom';
import "./About.css"

export default function About() {
  return (
    <>
      <section className="firstsection">

        <div className="titleab">
          <h1 className='animated-ab'>ABOUT US</h1>
        </div>
        <div className="mainab">

          <div className="text1">
            <div className="mainparaab">
              <p className="para1 animated-p1">We offer a full range of garage services to vehicle owners located in our area.
                All mechanic services are performed by highly qualified mechanics.
                We can handle any car problem</p>
              <p className="para2 animated-p2">We offer full range of garage services to vehicle owners in Ahmedabad.
                Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV,
                our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop.
                Whether you drive a medium sized truck or passenger car or SUV, our mechanics strive to ensure.</p>
            </div>

            <div className="list-ab">
              <ul className="underlist-ab">
                <li className='li1'>We make auto repair and maintenance more convenient for you.</li>
                <li className='li1'>We are a friendly, helpful and professional group of people.</li>
                <li className='li1'>Our professionals know how to handle a wide range of car services.</li>
                <li className='li1'>We get the job done right — the first time.</li>
                <li className='li1'>Same day service for most repairs and maintenance.</li>
              </ul>
            </div>
            <div className="buttonser">
            <Link to="/services">
              <button type="button" class="serbtn" >Explore Services</button>
            </Link>
            </div>
          </div>

          <div className="mainimage-ab animated-img">
            <div className="upperdiv">
              <div className="img1">
                <img src="image11.jpg" alt="abtimg" />
              </div>
              <div className="img2">
                <img src="image14.jpg" alt="abtimg" />
              </div>
              <div className="img3">
                <img src="image12.jpg" alt="abtimg" />
              </div>
            </div>
            <div className="lowerdiv">
              <div className="img5">
                <img src="image7.jpg" alt="abtimg" />
              </div>
              <div className="img4">
                <img src="image8.jpg" alt="abtimg" />
              </div>
              <div className="img6">
                <img src="image2.jpg" alt="abtimg" />
              </div>
            </div>
          </div>




        </div>







      </section>
    
    </>
  )
}
