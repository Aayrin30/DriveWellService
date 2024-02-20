import React from 'react'
import { Link } from 'react-router-dom'
import "./Services.css"

export default function Services() {
  return (
  <>
  <section className="firstsection">

    <div className="titleser">
    <h1 className='animated-ser'>OUR SERVICES</h1>
    </div>

    <div className="mainserviceimg animated-imgs">
        <div className="mainser1">
         <div class="container">
            <img class="hover" src="image9.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>CAR WASHING</p>
              <Link to="/carwashing">
              <button href="/carwashing">READ MORE</button>
              </Link>
            </div>
          </div>
          <div class="container">
            <img class="hover" src="image10.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>CAR PAINTING</p>
              <Link to="/carpainting">
              <button href="/painting">READ MORE</button>
              </Link>
            </div>
          </div>
          <div class="container">
            <img class="hover" src="image16.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>ENGINE DIAGNOSTICS</p>
              <Link to="/enginediagnostics">
              <button href="/enginediagnostics">READ MORE</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mainser2">
        <div class="container">
            <img class="hover" src="image4.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>CAR DENTING</p>
              <Link to="/cardenting">
              <button href="/cardenting">READ MORE</button>
              </Link>
            </div>
          </div>
          <div class="container">
            <img class="hover" src="image6.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>LUBE,OIL & FILTERS</p>
              <Link to="/oilnfilters">
              <button href="/oilnfilters">READ MORE</button>
              </Link>
            </div>
          </div>
          <div class="container">
            <img class="hover" src="image17.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>BREAK REPAIR & WHEEL SERVICES</p>
              <Link to="/breakrepair">
              <button href="/breakrepair">READ MORE</button>
              </Link>
            </div>
          </div>
        </div>
    </div>

  </section>
  </>
  )
}
