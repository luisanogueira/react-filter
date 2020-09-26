import React from 'react';

export function Table(props) {
    let tableData = [
        ['ROSELAINE SOARES', 'MANDATA JUNTAS POR BARUERI', 'SP', 'Barueri', 'Sim', 'PSOL', 'Preta', 'Mulher Cis', 'Heterosexual',
         'Não', [{ url: 'https://www.facebook.com/edimaraceli.rj', icon: 'facebook-official'}] ],
        ['jose marcio ferreira reis ribeiro', 'Márcio Ribeiro Reis', 'RJ', 'Rio de Janeiro', 'Sim', 'PT', 'Preta', 'Mulher Cis', 'Heterosexual',
         'Não', [{ url: 'https://www.facebook.com/edimaraceli.rj', icon: 'facebook-official'}] ],
        ['Elaine Cristina da Silva', 'Pretas Juntas', 'PE', 'Recife', 'Sim', 'PDT', 'Parda', 'Mulher Cis', 'Bissexual',
         'Sim, indigena', [{ url: 'https://www.facebook.com/edimaraceli.rj', icon: 'facebook-official'},
                           { url: 'https://www.facebook.com/edimaraceli.rj', icon: 'instagram'},] 
        ],
    ];

    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nome na Urna</th>
                    <th scope="col">Candidatura Coletiva</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Favela/ Periferia</th>
                    <th scope="col">Partido</th>
                    <th scope="col">Raça/ Etnia</th>
                    <th scope="col">Gênero</th>
                    <th scope="col">Orientação Sexual</th>
                    <th scope="col">Povos Originários</th>
                    <th scope="col">Redes Sociais</th>
                </tr>
            </thead>
            <tbody>
                {tableData
                .filter(row => {
                    if(props.filter == "") return true;

                    let filters = props.filter.toLowerCase().split(" ");
                    for(let i=0; i < row.length; i++) {
                        if(Array.isArray(row[i])) continue;
                        let cell = row[i].toLowerCase().split(" ");

                        for(let j=0; j < filters.length; j++) {
                            let filter = filters[j];
                            if(cell.indexOf(filter) != -1) {
                                filters[j] = true;
                            }
                        }
                    }
                    if(filters.every(elm => elm === true)) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .map(row => 
                    <tr> {row.map(cell => 
                        <td>{
                            Array.isArray(cell) ? cell.map((icon) => <Icon data={icon} />) : cell
                        }</td>)} 
                    </tr>)}
            </tbody>
        </table>
    );
}

function Icon(props) {
    return(
        <a href={props.data.url} target="_blank">
            <i className={`fa fa-${props.data.icon}`} aria-hidden="true"></i>
        </a>
    )
}

