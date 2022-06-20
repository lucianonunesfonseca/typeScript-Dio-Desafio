enum Profissao {
    Atriz,
    padeiro,
}

interface IPessoa {
    nome:string,
    idade: number,
    profissao: Profissao,
}

let pessoa1 : IPessoa = {
nome : "Sofia",
idade:25,
profissao: Profissao.Atriz,
}
let pessoa2 : IPessoa = {
nome: "Fernando",
idade : 42,
profissao :Profissao.padeiro,
}
let pessoa3:IPessoa = {
    nome: "Marlene",
    idade: 41,
    profissao: Profissao.Atriz
};

let pessoa4 : IPessoa = {
    nome: "Felizardo",
    idade: 18,
    profissao: Profissao.padeiro
}