class ListaNegociacoes {                            //cria um array com todas as negociacoes, cria um metodo pra adicionar as negociacoes dentro da array que recebe os valores da negociacao, 
    
    constructor() {
        
        this._negociacoes = [];
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }
    
    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }
    
    esvazia() {                                     //limpa a array de negociacao
        this._negociacoes = []
    }
}
