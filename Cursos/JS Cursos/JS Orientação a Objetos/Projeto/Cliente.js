export class Cliente {      //criou a classe Cliente e exportou pro package.json, permitindo ser acessado pelo index
    get cpf(){              //get permite que todos que importarem cliente.js possam pegar a info de cpf
        return this._cpf;
    }

    constructor(nome, cpf, senha){ //construtor recebe os valores nome e cpf, depois this.nome atribui o nome recebido para a variavel nome
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;      
    }

    autenticar(){
        return true;
        
    }
}