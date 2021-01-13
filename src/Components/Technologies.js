import React, { Component } from 'react';

class Technologies extends Component {
  render() {
    return (
      <section className="mini" id="technologies">
        <div className="mini-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-3 col-lg-6">
                <div className="info">
                  <h1>Technologies</h1>
                  <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i><img src="images/work-process-item-01.png" alt="" /></i>
                  <strong>Node JS</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i><img src="images/work-process-item-01.png" alt="" /></i>
                  <strong>Android</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i><img src="images/work-process-item-01.png" alt="" /></i>
                  <strong>iOS</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i><img src="images/work-process-item-01.png" alt="" /></i>
                  <strong>AWS Services</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i><img src="images/work-process-item-01.png" alt="" /></i>
                  <strong>React</strong>
                  <span>Godard pabst prism fam cliche.</span>
                </a>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                <a href="#" className="mini-box">
                  <i><img src="images/work-process-item-01.png" alt="" /></i>
                  <strong>Identity & Security</strong>
                  <span>OAuth 2.0 and OIDC</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Technologies;