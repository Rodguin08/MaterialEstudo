import { Conta } from "./Conta.js";                        //importa os valores de conta pra permitir serem acessados

export class ContaSalario extends Conta{                //extends é como se extendesse de Conta, como se estivesse escrevendo no final da pagina conta
    constructor(cliente){
        super(0, cliente, 100)
    }

    sacar(valor){                                                                           //define Sacar de Conta
        const taxa = 1.01;  
        return this._sacar(valor, taxa);                                                    //_sacar executa o metodo do arquivo conta

    }
}