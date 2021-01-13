import React, { Component } from 'react';

class Videos extends Component {
  render() {


    return (
      <section className="section" id="videos">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Latest Videos</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">React JS</h3>
                                <span>Singapore</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">AWS UserGroup</h3>
                                <span>Singapore</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="team-item">
                        <div className="team-content">
                            <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                            <div className="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div className="team-info">
                                <h3 className="user-name">Identity and Security Meetup</h3>
                                <span>Singapore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Videos;