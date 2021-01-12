import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (



      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="social">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright">Copyright &copy; 2020 Pradheepa P</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;