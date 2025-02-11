import React, { Component } from 'react';
import './styles/NotFound.css';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="page-not-found">
                    <h1 className="title">
                        404
                    </h1>
                    <div className="desc">
                        Página não encontrada
                    </div>
                    <Link to="/"><button className="go-back-btn btn btn-primary" type="button">Go Back</button></Link>
                </div>
            </div>
        );
    }
}

export default NotFound;