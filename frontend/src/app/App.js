import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Header from '../common/header/Header';
import Home from '../home/Home';
import Login from '../login/Login';
import Registrar from '../registrar/Registrar';
import NotFound from '../common/not-found/NotFound';
import LoadingIndicator from '../common/loading-indicator/LoadingIndicator';
import Anunciar from '../negocio/anunciar/Anunciar'

import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { Helmet } from 'react-helmet';
import './styles/App.css';
import Axios from 'axios';

/**
 * Classe responsavel por renderizar a pagina solicitada
 */
class App extends Component {
  constructor(props) {
    super(props);
    Axios.defaults.baseURL = API_BASE_URL;
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });
    // Acessa o storage local para a obtenção do token
    const defaultOptions = {
      headers: {
        Authorization: localStorage.getItem(ACCESS_TOKEN) ? `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` : '',
      }
    };
    // Tenta acessar o token. Caso sucesso: usuario autenticado, caso erro: usuario deve autenticar
    Axios.get('/user/me', defaultOptions).then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
      Alert.success("Usuario logado!");
    }).catch(error => {
      this.setState({
        loading: false
      });
    });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("Você saiu com sucesso!");
  }

  componentWillMount() {
    // Chama função para verificar se existe algum usuario autenticado
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      // Se a pagina ainda esta carregando, renderiza o indicador de carregamento
      return (
          <LoadingIndicator />
      );
    }

    return (
      <div className="app">
        <Helmet htmlAttributes={{ lang: 'pt-br' }}>
          <meta charSet="utf-8" />
        </Helmet>
        <div className="app-top-box">
          <Header authenticated={this.state.authenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} />
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/" 
              render={(props) => <Home authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...props} />}></Route>

            <Route path="/login"
              render={(props) => <Login onLogin={this.loadCurrentlyLoggedInUser} authenticated={this.state.authenticated} {...props} />}></Route>

            <Route path="/registrar"
              render={(props) => <Registrar onLogin={this.loadCurrentlyLoggedInUser} authenticated={this.state.authenticated} {...props} />}></Route>
            
            <Route path="/anunciar"
              render={(props) => <Anunciar onLogin={this.loadCurrentlyLoggedInUser} authenticated={this.state.authenticated} {...props} />}></Route>

            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{ limit: 3 }}
          timeout={3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
