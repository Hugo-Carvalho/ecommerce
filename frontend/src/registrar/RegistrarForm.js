import React, { Component } from 'react';
import './styles/Registrar.css';
import Alert from 'react-s-alert';
import { ACCESS_TOKEN } from '../constants';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

/**
 * Classe responsavel pela validação e renderização do formulario de registrar
 */
class RegistrarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chapa: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Atribui ao state sempre que algum campo for alterado
     * @param {*} event 
     * @author Diego Armando de Freitas Matos
     */
    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    /**
     * Valida as informações para o registrar
     * @param {*} event 
     * @author Diego Armando de Freitas Matos
     */
    handleSubmit(event) {
        // Evita o react atualizar a pagina
        event.preventDefault();   
        // Transforma o state em um objeto
        const registrarRequest = Object.assign({}, this.state);
        // Envia para o servidor aguardando a resposta
        Axios.post('/auth/registrar', registrarRequest).then(response => {
            // Cria o token do usuario
            localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
            // Chama a função no props (Classe App)
            this.props.onRegistrar();
            this.props.history.push("/");
        }).catch(error => {
            if(error.message.includes('401')){
                Alert.error("Matricula ou senha inválidas");
            } else {
                Alert.error((error && error.message) || 'Algo deu errado. Por favor, tente novamente!');
            }
        });
    }
    
    render() {
        // Se possui um usuario logado, redireciona para a pagina pos acesso
        if (localStorage.getItem(ACCESS_TOKEN)) {
            return <Redirect to={{
                            pathname: "/",
                            state: { from: this.props.location }
                        }} 
                    />;
        }
        
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="formulario">
                    <div className="form-item">
                        <label className="control-label">E-mail:</label>
                        <input type="E-mail" name="mail" 
                            className="form-control" placeholder="E-mail"
                            value={this.state.chapa} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <label className="control-label">Nome:</label>
                        <input type="text" name="nome" 
                            className="form-control" placeholder="Nome"
                            value={this.state.chapa} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <label className="control-label">Senha:</label>
                        <input type="password" name="password" className="form-control" placeholder="Senha"
                            value={this.state.password} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <label className="control-label">Confirmar senha:</label>
                        <input type="password" name="conf-password" className="form-control" placeholder="Confirmar senha"
                            value={this.state.password} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <button type="submit" className="btn btn-block btn-primary">Registrar-se</button>
                    </div>
                </form>     
            </div>                    
        );
    }
}

export default RegistrarForm