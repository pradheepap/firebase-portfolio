import React, { Component } from 'react';

class Quote extends Component {
  render() {

   

    return (
        <section className="section colored" id="quotes">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading">
                        <h2 className="section-title">Quote for the day</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="center-text">
                        <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                    </div>
                </div>
            </div>
            </div>
    </section>
    );
  }
}

export default Quote;