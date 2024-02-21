import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <>
      <section class="background firstsection">
        <div class="secondhalf">
          <center>
            {" "}
            <p class="text-big animated-text">
              Expert Technitians,Competitive Prices
            </p>
            <p class="text-small animated-text">
              We are commited to earning your trust by providing the expertise
              and value you expect
            </p>
            <Link to="/about">
              <button type="button" class="btnn btnn-sm btnn-text">
                MORE
              </button>
            </Link>
          </center>
        </div>
        <div class="firsthalf">
          <img src="Image/image1.jpg" alt="image1" />
        </div>
      </section>

      <section className="secondsection">
        <div className="main">
          <div className="titleapp">
            <h1>Make An Appointment </h1>
            <Link to="/appointment">
              <button type="button" class="btn">
                Appointment
              </button>
            </Link>
          </div>
          <div className="why">
            <h6 className="heading1">WHY CHOOSE US?</h6>
            <p>
              We are one of the leading auto repair shops serving customers in
              Ahmedabad.
              <br />
              All mechanic services are performed by highly qualified mechanics
            </p>
          </div>
          <div className="mainimg">
            <div className="imageclass1 imgclass ">
              <img src="service.png" alt="img1" className="block mx-auto" />
              <h1>Best Material</h1>
              <p>
                We have invested in all the latest specialist tools and
                diagnostic software that is specifically tailored for the
                software in your vehicle.
              </p>
            </div>
            <div className="imageclass2 imgclass">
              <img src="tow-truck.png" alt="img2" className="block mx-auto" />
              <h1>Proffessional Standards</h1>
              <p>
                Our auto repair shop is capable of servicing a variety of
                models. We only do the work that is needed to fix your problem.
              </p>
            </div>
            <div className="imageclass3 imgclass">
              <img
                src="video-conference.png"
                alt="img3"
                className="block mx-auto"
              />
              <h1>Every Job Is Personal</h1>
              <p>
                If you want the quality you would expect from the dealership,
                but with a more personal and friendly atmosphere, you have found
                it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="thirdsection">
        <div className="our">
          <h6 className="heading2">Our Services</h6>
          <p>
            We offer a full range of garage services to vehicle owners located
            in our area.
            <br />
            Our professinals know how to handle a wide range of car services.
          </p>
        </div>

        <div className="mainser">
          <div class="container">
            <img class="hover" src="image6.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>Oil Change</p>
              <Link to="/services">
                <button href="/services">READ MORE</button>
              </Link>
            </div>
          </div>

          <div class="container">
            <img class="hover" src="image8.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>Car wash</p>
              <Link to="/services">
                <button href="/services">READ MORE</button>
              </Link>
            </div>
          </div>

          <div class="container">
            <img class="hover" src="image10.jpg" alt="" />
            <div class="overlay"></div>
            <div class="undercontainer">
              <p>Car Paint</p>
              <Link to="/services">
                <button href="/services">READ MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="fourthsection">
        <div className="company">
          <h6 className="heading3">Company Overview</h6>
          <p>
            We can help you with everything from an oil change to an engine
            change.
            <br />
            We can handle any problem on both foreign and domestic vehicles.
          </p>
        </div>

        <div className="overviewmain">
          <div className="uppercontainer">
            <div className="overview">
              <h1>car Audio Service</h1>
              <div className="overviewdetail">
                <img src="woofer.png" alt="overview"></img>
                <p>
                  , our car audio service is designed to elevate your driving
                  experience to new heights. Whether you're a music aficionado
                  or a podcast enthusiast,we've got you covered.
                </p>
              </div>
            </div>
            <div className="overview">
              <h1> Free Oil Change</h1>
              <div className="overviewdetail">
                <img src="engine-oil.png" alt="overview"></img>
                <p>
                  As part of our commitment to providing comprehensive
                  automotive care, we are proud to offer a complimentary oil
                  change service to all our valued customers.
                </p>
              </div>
            </div>
            <div className="overview">
              <h1>Engine Diagnostics</h1>
              <div className="overviewdetail">
                <img src="mechanical.png" alt="overview"></img>
                <p>
                  Our state-of-the-art diagnostic equipment and skilled
                  technicians enable us to quickly and accurately assess the
                  health of your engine, identifying any potential issues or
                  areas of concern.
                </p>
              </div>
            </div>
          </div>

          <div className="lowercontainer">
            <div className="overview">
              <h1>Car A/C Recharge</h1>
              <div className="overviewdetail">
                <img src="air-conditioning.png" alt="overview"></img>
                <p>
                  Our expert technicians specialize in diagnosing and servicing
                  automotive air conditioning systems to ensure optimal
                  performance and reliability.
                </p>
              </div>
            </div>
            <div className="overview">
              <h1>Car Battery repairs</h1>
              <div className="overviewdetail">
                <img src="accumulator.png" alt="overview"></img>
                <p>
                  Your car's battery is its lifeline.Keep your vehicle powered
                  up and running smoothly with the professional car battery
                  repair service at DriveWellService.
                </p>
              </div>
            </div>
            <div className="overview">
              <h1> Car Sensors Calibration</h1>
              <div className="overviewdetail">
                <img src="car-alarm.png" alt="overview"></img>
                <p>
                  Ensure your vehicle's safety and performance.Modern vehicles
                  are equipped with an array of sensors that play a crucial role
                  in monitoring and ensuring optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
