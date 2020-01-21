import React, { Component } from 'react';
import './styles/Registrar.css';
import Alert from 'react-s-alert';
import RegistrarForm from './RegistrarForm'

/**
 * Classe responsavel por renderizar o registrar
 */
class Registrar extends Component {
    componentDidMount() {
        // Se o registrar do OAuth2 encontrar um erro, o usuário será redirecionado para a página / registrar com um erro.
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
                    <div className="registrar-container justify-content-center align-items-center">
                        <div className="registrar-content">
                            <h1 className="registrar-title">Registrar-se em Ecommerce</h1>
                            <RegistrarForm {...this.props} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registrar
