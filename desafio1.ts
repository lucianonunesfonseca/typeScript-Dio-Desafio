const estudante = {
    code: 52,
    name: 'Manoel',
};


const estudante2: {name: string, code: number} = {
    name: 'Gustavo',
    code: 45
}


interface Estudante {  
    codigo: number,
    nome: string
};

const estudanteObj = {} as Estudante;
estudanteObj.codigo = 30;
estudanteObj.nome = 'Lucas';

const estudanteObj2: Estudante = {
    codigo: 18,
    nome: 'Matheus'
}
