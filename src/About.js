import React from 'react';
import photo from '../src/images/photo.jpg';
import shooting from '../src/images/shooting.jpg';
import video from '../src/images/video.jpg';
import editing from '../src/images/editing.jpg';
import Common from './Common';

const About = () =>{
  return(
    <>
      <Common
      name='Welcome to About Page'
      imgsrc={photo}
      visit="/contact"
      btname="Contact Now" />
      <section className="services-section services-normal spad my-5">
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <div className="services-item">
                        <img src={shooting} alt=""/>
                        <h3>Shooting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="services-item">
                        <img src={video} alt=""/>
                        <h3>Videos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="services-item">
                        <img src={editing} alt=""/>
                        <h3>Editing</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>

            </div>
        </div>
      </section>
      <section class="services-option my-5">
        <div class="container-fluid mb-5">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="so-item">
                        <div class="so-title">
                            <div class="so-number">01</div>
                            <h5>Filming and Editing</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div class="so-item">
                        <div class="so-title">
                            <div class="so-number">02</div>
                            <h5>Engagement photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div class="so-item">
                        <div class="so-title">
                            <div class="so-number">03</div>
                            <h5>Comercial photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="so-item">
                        <div class="so-title">
                            <div class="so-number">04</div>
                            <h5>Social media photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div class="so-item">
                        <div class="so-title">
                            <div class="so-number">05</div>
                            <h5>Event Photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div class="so-item">
                        <div class="so-title">
                            <div class="so-number">06</div>
                            <h5>personal photography</h5>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;
