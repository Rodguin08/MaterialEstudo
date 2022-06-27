export class Conta{                                                                                                                      //cria uma conta recebendo saldo inicial, cliente e agencia 
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata.");       //exibe erro no console caso conta seja instanciada diretamente
        }
        this._saldo = saldoInicial;                                                                                                     //cria variaveis privadas e atribui a publicas que podem ser acessadas
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){                                                                                                             //define cliente e oque receber atribui a novoValor
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    get cliente(){
        return this.cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    //Metodo abstrato
    sacar(valor){
        throw new Error("o Método sacar da conta é abstrato.")
    }

    _sacar(valor, taxa){                                                                                                                //cria o metodo sacar, e atribui suas funções
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }



    depositar(valor){
        this._saldo += valor; 
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}