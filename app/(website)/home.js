import Link from "next/link";
import Image from "next/image"
import "../../styles/css/templatemo-chain-app-dev.css"
import "../../styles/css/animated.css"
import "../../styles/css/owl.css"
import Container from "@/components/container";
import HomeContainer from "@/components/homeContainer";
import PostList from "@/components/postlist";

export default function Post({ posts }) {
  return (
    <>

      <HomeContainer>
        <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-6 align-self-center">
                    <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                      <div class="row">
                        <div class="col-lg-12" style={{ float: "left", width: "50%" }}>
                          <h2>Coming soon: A platform that lights up social gatherings !</h2>
                          <p>A collection of games and prompts for ice breaking and fun sessions among couples, a group of friends, office colleagues, strangers or acquaintances, or any party.</p>
                          <div class="col-lg-12">
                            <div class="white-button first-button scroll-to-section">
                              <a href="/img/Terms and Conditions.pdf">Terms and Condition <i class="fab fa-apple"></i></a>
                            </div>
                            <div class="white-button scroll-to-section">
                              <a href="/img/Privacy Policy.pdf">Privacy Policy <i class="fab fa-google-play"></i></a>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6" style={{ float: "right" }}>
                    <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                      <Image
                        src="/img/slider-dec.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </HomeContainer>
      <HomeContainer>
        <footer class="footer" style={{ borderWidth: "30px", borderColor: "red" }}>
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            About
          </h1>
          <div className="text-center dark:prose-invert">
            <p style={{marginLeft:"100px", marginRight:"100px", marginBottom:"40px", color:"rgba(191, 129, 52, 1)", fontWeight:"200"}}>
              At Kozyclan, we believe that every gathering is an opportunity for unforgettable fun and connection. Our mission is to transform any party, event, or casual get-together into a memorable experience with our unique, engaging social games. Whether you’re hosting a cozy family dinner, a lively birthday bash, or a corporate team-building event, Kozyclan has the perfect game to elevate the atmosphere and bring people closer together.
            </p>
            <h3 style={{fontSize:"30px", padding:"20px"}}>Why Choose Kozyclan?</h3>

            <div class="row">
              <div class="col-lg-6" style={{ width: "50%", float: "left", padding: "100px" }}>
              <b style={{fontSize:"20px", color:"grey"}}>Innovative Game Design</b>
                <p style={{ color: "rgba(91, 106, 233, 1)", fontWeight: "200" }}>                  Our creative team of game designers crafts original games that are easy to learn, inclusive, and endlessly entertaining. We focus on fostering laughter, teamwork, and meaningful interactions.
                </p>
              </div>
              <div class='col-mg-6' style={{ width: "50%", float: "left", padding: "100px" }}>
              <b style={{fontSize:"20px", color:"grey"}}>Versatile Options</b>
                <p style={{ color: "rgba(91, 106, 233, 1)", fontWeight: "200" }}>
                  From icebreakers to strategy games and hilarious party activities, our diverse game collection caters to all ages and preferences. No matter the occasion, you’ll find a game that fits your theme and audience.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6" style={{ width: "50%", float: "left", padding: "100px", paddingTop:"10px" }}>
                <b style={{fontSize:"20px", color:"grey"}}>User-Friendly Experience</b>
                <p style={{ color: "rgba(91, 106, 233, 1)", fontWeight: "200" }}>
                  Our games come with clear instructions and minimal setup, so you can spend more time enjoying the moment and less time figuring out the rules.
                </p>
              </div>
              <div class='col-mg-6' style={{ width: "50%", float: "right", padding: "100px" , paddingTop:"10px"}}>
              <b style={{fontSize:"20px", color:"grey"}}>Community and Connection</b>
                <p style={{ color: "rgba(91, 106, 233, 1)", fontWeight: "200" }}>                  At the heart of Kozyclan is our commitment to building connections. We design our games to break down social barriers, spark conversations, and create lasting memories. With Kozyclan, you’re not just playing a game; you’re sharing an experience.
                </p>
              </div>
            </div>

          </div>


          <div class="white-button scroll-to-section" style={{marginLeft:"1000px"}}>
            <a href="/contact">Get in touch <i class="fab fa-google-play"></i></a>
          </div>
        </footer>

      </HomeContainer>
    </>
  );
}
