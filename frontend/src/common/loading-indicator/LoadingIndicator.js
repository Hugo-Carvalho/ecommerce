import React from 'react';
import { ClipLoader } from 'react-spinners';
import './styles/LoadingIndicator.css';
import logo from '../../imagens/logo.PNG';

export default function LoadingIndicator(props) {
    return (
        <div className="container">
            <div className="loading-container justify-content-center align-items-center">
                <div className="</div>-content">
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#000'}
                        loading={true}
                    />
                    <div>
                        <img className="logo" src={logo} alt="logo-ecommerce" />
                    </div>
                </div>
            </div>
        </div>
    );
}