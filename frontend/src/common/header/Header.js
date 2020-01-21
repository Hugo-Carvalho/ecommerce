import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import logo from '../../imagens/logo.PNG';
import { FaSearch } from 'react-icons/fa';
import './styles/Header.css';

/**
 * Classe responsavel por renderizar o cabeçalho de acordo com as permissões
 */
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
        }
    }

    cleanSearch(){
        this.setState({
            isSearch: false,
            pesquisa: ''
        });
        document.getElementById("pesquisa").value = '';
        this.updatePage();
    }

    search(){
        if(this.state.pesquisa !== ''){
            this.setState({
                isSearch: true,
                pesquisa: ''
            });
            this.updatePage();
        }
    }

    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title"><img className="logo" src={logo} alt="logo-ecommerce" /></Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                            <div className="menu justify-content-center align-items-center">
                                { this.props.authenticated ? (
                                    <div className="row">
                                        <DropdownButton id="dropdown-basic-button" variant="outline-light" title="Perfil">
                                            <Dropdown.Item href="/perfil">Visualizar perfil</Dropdown.Item>
                                            <Dropdown.Item href="/altera-senha">Alterar senha</Dropdown.Item>
                                        </DropdownButton>
                                        <DropdownButton id="dropdown-basic-button" variant="outline-light" title="Negócios">
                                            <Dropdown.Item href="/anunciar">Anunciar</Dropdown.Item>
                                            <Dropdown.Item href="/hist-anuncio">Historico de anúncios</Dropdown.Item>
                                            <Dropdown.Item href="/vendas">Vendas</Dropdown.Item>
                                            <Dropdown.Item href="/compras">Compras</Dropdown.Item>
                                        </DropdownButton>
                                        <DropdownButton id="dropdown-basic-button" variant="outline-light" title="Categorias">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                ): (
                                    <div className="row">
                                        <Button variant="outline-light" href="/login">Entrar</Button>
                                        <Button variant="outline-light" href="/registrar">Registrar</Button>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                    <div className="row search">
                        <div className="col-sm-10 form-group form-item">
                            <input type="text" class="form-control searchTerm" placeholder="O que você procura?" id="pesquisa" name="pesquisa" onKeyUp={this.handleInputChange} />
                        </div>
                        <div className="col-sm-1 form-group form-item">
                            {this.state.isSearch ? 
                            <button onClick={this.cleanSearch.bind(this)} type="submit" class="searchButton">X</button>
                            :
                            <button onClick={this.search.bind(this)} type="submit" class="searchButton"><FaSearch /></button>
                            }
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;