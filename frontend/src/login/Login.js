import React, { Component } from 'react';
import './styles/Login.css';
import Alert from 'react-s-alert';
import LoginForm from './LoginForm'

/**
 * Classe responsavel por renderizar o login
 */
class Login extends Component {
    componentDidMount() {
        // Se o login do OAuth2 encontrar um erro, o usuário será redirecionado para a página / login com um erro.
        // Aqui, exibimos o erro e, em seguida, removemos o parâmetro de consulta de erro do local.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
        return (
            <div className="full-body">
                <div className="container">
                    <div className="login-container justify-content-center align-items-center">
                        <div className="login-content">
                            <h1 className="login-title">Entrar em Ecommerce</h1>
                            <LoginForm {...this.props} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login
