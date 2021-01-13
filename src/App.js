import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';
import Videos from './Components/Videos';
import Quote from './Components/Quote';
import Counter from './Components/Counter';
import PreLoader from './Components/PreLoader';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
     <>
        <PreLoader data={this.state.resumeData.main}/>
        <Header data={this.state.resumeData.main}/>
        <Home data={this.state.resumeData.main}/>
        <Blog data={this.state.resumeData.resume}/>
        <Projects data={this.state.resumeData.portfolio}/>
        <Technologies data={this.state.resumeData.testimonials}/>
        <Videos data={this.state.resumeData.main}/>
        <Quote data={this.state.resumeData.main}/>
        <Counter data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/> 
     </>
    );
  }
}

export default App;