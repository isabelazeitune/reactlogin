import React, { Component } from 'react';
import api from '../../services/api'

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeIdMot = this.onChangeIdMot.bind(this);
        this.onChangeIdVei = this.onChangeIdVei.bind(this);
        this.onChangeSaida = this.onChangeSaida.bind(this);
        this.onChangeDataS = this.onChangeDataS.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            ID_Viagem: '',
            ID_MOTORISTA: '',
            ID_VEICULO: '',
            SAIDA_VIAGEM: '',
            DTA_VIAGEM: '',
            HR_VIAGEM: '',
            CHEGADA_VIAGEM: '',
            DATA_CHEGADA: '',
            HORA_CHEGADA: '',
        }
    }
    onChangeId(e) {
        this.setState({
            id_veiculo: e.target.value
        });
    }
    onChangeVeiculo(e) {
        this.setState({
            nome_veiculo: e.target.value
        })
    }
    onChangeAno(e) {
        this.setState({
            ano_veiculo: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.state.id_veiculo,
            nome: this.state.nome_veiculo,
            ano: this.state.ano_veiculo
        };
        api.post('/viagens', obj)
            .then(res => console.log(res.data));

        this.setState({
            id_veiculo: '',
            nome_veiculo: '',
            ano_veiculo: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Cadastrar Veículos</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.id_veiculo}
                            onChange={this.onChangeId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Veículo </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.nome_veiculo}
                            onChange={this.onChangeVeiculo}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ano </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.ano_veiculo}
                            onChange={this.onChangeAno}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Salvar" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}