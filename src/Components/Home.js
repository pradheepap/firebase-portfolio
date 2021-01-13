import React, { Component } from 'react';

class Home extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
     

<div className="welcome-area" id="welcome">

    <div className="header-text">
        <div className="container">
            <div className="row">
                <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                    <h1> <strong>Pradheepa P</strong><br/>Sr. Software Engineer</h1>
                    <p>Pradheepa is a Sr.Software Engineer at Discovery Networks Asia Pacific. She had no idea that she will be a developer while she graduated.
                      She stumbled upon it and now she enjoys talking about it. She likes to experiment and explore new technologies. When not working, she likes to read and can be found on Twitter and Medium at @pradheepa.</p>
                    <a href="#blog" className="main-button-slider">Discover More</a>
                </div>
            </div>
        </div>
    </div>
</div>


    );
  }
}

export default Home;