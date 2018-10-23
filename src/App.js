import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name : "John Smith",
      email : "johnsmith@example.com",
      picture : "https://bulma.io/images/placeholders/96x96.png"
    }
    this.responefacebook = this.responefacebook.bind(this)
  }

  responefacebook(respone){
    console.log(respone);
    axios.post('https://linebot59161100.herokuapp.com/alert/login/facebook', {
      id: 'U88dc267eda973b555aa930015dad10fd',
      img: respone.picture.data.url,
      name:respone.name
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({
      name : respone.name,
      email : respone.email,
      picture : respone.picture.data.url
    });
  }

  render() {
    return (
      <div className="App">
        <FacebookLogin
          appId="714280018931580"
          autoLoad={true}
          size="medium"
          scope="public_profile"
          fields="name,email,picture"
          callback={this.responefacebook}
          />
        <div className="card">

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={this.state.picture} alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.state.name}</p>
                <p className="subtitle is-6">{this.state.email}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
