import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//ReactDOM.render(<Primeiro />, document.getElementById('root'))

// import BomDia from './componentes/BomDia'
// ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById('root'))

// import Multi, { BoaNoite } from './componentes/Multiplos'
// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))

// import Saudacao from './componentes/Saudacao'
// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// , document.getElementById('root'))

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva"> 
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))