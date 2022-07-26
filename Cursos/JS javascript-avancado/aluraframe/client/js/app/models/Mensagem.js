class Mensagem {                        //modelo de mensagem, que possibilita modificação de seu valor pra ser acessado por NegociacaoController
    
    constructor(texto='') {
        
        this._texto = texto;
    }
    
    get texto() {
        
        return this._texto;
    }
    
    set texto(texto) {
        
        this._texto = texto;
    }
}