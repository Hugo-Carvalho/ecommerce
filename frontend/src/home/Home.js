import React, { Component } from 'react';
import './styles/Home.css';
import Carousel from 'react-bootstrap/Carousel'


/**
 * Classe responsavel por renderizar o home
 */
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            produtos: [
                {
                    id: 0,
                    titulo: 'Pneu aro 20 - Gol GT',
                    imagem: 'https://static.carrefour.com.br/medias/sys_master/images/images/hb1/hf6/h00/h00/10087109689374.jpg',
                    descricao: 'Pneu em otima conservação do um GOL GT furtado na quebrada do conhecido Jamal',
                    preco: '125,00',
                    parcelamento: '12x'
                },
                {
                    id: 1,
                    titulo: 'Retrovisor - Brasilia',
                    imagem: 'https://http2.mlstatic.com/D_NQ_NP_823842-MLB27199695306_042018-V.jpg',
                    descricao: 'Retrovisor extremamente novo de uma legitima Brasilia apreendida',
                    preco: '36,00',
                    parcelamento: '2x'
                },
                {
                    id: 0,
                    titulo: 'Lanterna Ford Fusion',
                    imagem: 'https://img.jocar.com.br/351184_250.jpg',
                    descricao: 'Pneu em otima conservação do um GOL GT furtado na quebrada do conhecido Jamal',
                    preco: '500,00',
                    parcelamento: '2x'
                },
                {
                    id: 1,
                    titulo: 'Motor de Kombi',
                    imagem: 'https://img.olx.com.br/images/32/327820022306692.jpg',
                    descricao: 'Retrovisor extremamente novo de uma legitima Brasilia apreendida',
                    preco: '2.500,00',
                    parcelamento: '2x'
                },
                {
                    id: 0,
                    titulo: 'Pneu aro 20 - Gol GT',
                    imagem: 'https://static.carrefour.com.br/medias/sys_master/images/images/hb1/hf6/h00/h00/10087109689374.jpg',
                    descricao: 'Pneu em otima conservação do um GOL GT furtado na quebrada do conhecido Jamal',
                    preco: '125,00',
                    parcelamento: '12x'
                },
                {
                    id: 1,
                    titulo: 'Retrovisor - Brasilia',
                    imagem: 'https://http2.mlstatic.com/D_NQ_NP_823842-MLB27199695306_042018-V.jpg',
                    descricao: 'Retrovisor extremamente novo de uma legitima Brasilia apreendida',
                    preco: '36,00',
                    parcelamento: '2x'
                },
                {
                    id: 0,
                    titulo: 'Lanterna Ford Fusion',
                    imagem: 'https://img.jocar.com.br/351184_250.jpg',
                    descricao: 'Pneu em otima conservação do um GOL GT furtado na quebrada do conhecido Jamal',
                    preco: '500,00',
                    parcelamento: '2x'
                },
                {
                    id: 1,
                    titulo: 'Motor de Kombi',
                    imagem: 'https://img.olx.com.br/images/32/327820022306692.jpg',
                    descricao: 'Retrovisor extremamente novo de uma legitima Brasilia apreendida',
                    preco: '2.500,00',
                    parcelamento: '2x'
                },{
                    id: 0,
                    titulo: 'Pneu aro 20 - Gol GT',
                    imagem: 'https://static.carrefour.com.br/medias/sys_master/images/images/hb1/hf6/h00/h00/10087109689374.jpg',
                    descricao: 'Pneu em otima conservação do um GOL GT furtado na quebrada do conhecido Jamal',
                    preco: '125,00',
                    parcelamento: '12x'
                },
                {
                    id: 1,
                    titulo: 'Retrovisor - Brasilia',
                    imagem: 'https://http2.mlstatic.com/D_NQ_NP_823842-MLB27199695306_042018-V.jpg',
                    descricao: 'Retrovisor extremamente novo de uma legitima Brasilia apreendida',
                    preco: '36,00',
                    parcelamento: '2x'
                },
                {
                    id: 0,
                    titulo: 'Lanterna Ford Fusion',
                    imagem: 'https://img.jocar.com.br/351184_250.jpg',
                    descricao: 'Pneu em otima conservação do um GOL GT furtado na quebrada do conhecido Jamal',
                    preco: '500,00',
                    parcelamento: '2x'
                },
                {
                    id: 1,
                    titulo: 'Motor de Kombi',
                    imagem: 'https://img.olx.com.br/images/32/327820022306692.jpg',
                    descricao: 'Retrovisor extremamente novo de uma legitima Brasilia apreendida',
                    preco: '2.500,00',
                    parcelamento: '2x'
                }
            ]
        }
    }

    renderMenuBlocks() {
        if (!this.state.produtos) {
            return "";
        }
        return this.state.produtos.map((produto) => {
            return (
                <div className="col-sm-3 zoom">
                    <div className="block">
                        <a target="blank" href={produto.id}>
                            <div className="block-content text-item justify-content-center align-items-center">
                                <img src={produto.imagem} width="200px" height="200px" alt="logo sistema" />
                                <h3>R$ {produto.preco}</h3>
                                <h6>Em ate {produto.parcelamento} sem juros</h6>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="color-body">
                <div className="container">
                    <div className="justify-content-center align-items-center">
                        <div className="carousel">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://pracanovashopping.com.br/wp-content/uploads/2019/07/noticia_namorados.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://us.marquardt.com/fileadmin/breakpoints/6840/imghead-MIDAS_Bild_Headline_Teaser-1998x999.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://billboardmedia.co.uk/wp-content/uploads/sites/8/2019/07/clocks-go-forward-campaign-a-simple-but-effective-message-1998x999.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="menu-blocks">
                            <div className="row">
                                {this.renderMenuBlocks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home