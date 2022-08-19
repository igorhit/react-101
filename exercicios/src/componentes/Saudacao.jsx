import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }
    
    setTipo(e) {
        //nao editavel
        // this.props.tipo = e.target.value

        //editavel
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        //nao editavel
        // this.props.nome = e.target.value

        //editavel
        this.setState({ nome: e.target.value })
    }

    render() {
        //nao editavel
        // const { tipo, nome } = this.props

        //editavel
        const { tipo, nome } = this.state
        return (
            // <div>
            //     <h1>{tipo} {nome}!</h1>
            //     <hr />
            //     <input type="text" placeholder="Tipo..." 
            //         value={tipo} onChange={e => this.setTipo(e)}/>
            //     <input type="text" placeholder="Nome..." 
            //         value={nome} onChange={e => this.setNome(e)}/>
            // </div>

            //constructor
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." 
                    value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." 
                    value={nome} onChange={this.setNome} />
            </div>
        )
    }
}