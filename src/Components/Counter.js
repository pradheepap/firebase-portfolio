import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
        <section className="counter">
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>1</strong>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-top">
                            <strong>6</strong>
                            <span>Posts</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item decoration-bottom">
                            <strong>1</strong>
                            <span>Awards Wins</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="count-item">
                            <strong>2</strong>
                            <span>Talks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Counter;