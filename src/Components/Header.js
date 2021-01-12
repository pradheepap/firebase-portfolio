import React, { Component } from 'react';

class Header extends Component {
   render() {

      // if (this.props.data) {
      //    var name = this.props.data.name;
      //    var occupation = this.props.data.occupation;
      //    var description = this.props.data.description;
      //    var city = this.props.data.address.city;
      //    var networks = this.props.data.social.map(function (network) {
      //       return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      //    })
      // }

      return (
         <header className="header-area header-sticky">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <nav className="main-nav">
                        <ul className="nav">
                           <li><a href="#welcome" className="active">Home</a></li>
                           <li><a href="#blog">Blog Entries</a></li>
                           <li><a href="#projects">Projects</a></li>
                           <li><a href="#technologies">Technologies</a></li>
                           <li><a href="#videos">Videos</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </header>
      );
   }
}

export default Header;