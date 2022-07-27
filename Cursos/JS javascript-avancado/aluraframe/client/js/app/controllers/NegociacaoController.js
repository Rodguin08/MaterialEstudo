class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);                                                   //cria um atalho de seletor
        this._inputData = $('#data');                                                                    //recebe o valor dos formularios
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self = this
        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target, prop, reciver) {
                if(['adiciona', "esvazia"].includes(prop) && typeof(target[prop] == typeof(Function))){
                    return function() {
                        console.log(`Interceptando ${prop}`)
                        Reflect.apply(target[prop], target, arguments)
                        self._negociacoesView.update(target)
                    }
                }
                return Reflect.get(target, prop, reciver)
            }
        })   

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));                              //atribui a tabela em _negociacoesView
        this._negociacoesView.update(this._listaNegociacoes);                                            //chama o metodo .update com o valor _mensagem dentro de NegociacaoController pra sobreescrever o template atual de view.js através de mensagemView    
        
        this._mensagem = new Mensagem();                                                                 //atribui nova mensagem pra _mensagem
        this._mensagemView = new MensagemView($('#mensagemView'));                                       //atribui uma nova mensagem em _mensagemView
        this._mensagemView.update(this._mensagem);                                                       //chama o metodo update com o valor de this._mensagem que dentro de MensagemView é convertido em html que passa pro metodo update que aplica a mensagem no html

    }
    
    adiciona(event) {                                                                                    //cria o metodo adiciona
        
        event.preventDefault();                                                                          //inibe o comportamento padrão de formulario de recarregar a pagina
        this._listaNegociacoes.adiciona(this._criaNegociacao());                                         //acessa _listaNegociacoes criado no constructor anteriormente e adiciona o valor de _crianegociacao que cria uma negociacao atribuindo os valores necessarios. sendo assim adiciona uma negociacao na array de listanegociacoes
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';                                      //define o conteudo de mensagem
        this._mensagemView.update(this._mensagem);                                                       //atualiza o valor de mensagem_view, que é exibido acima do formulario, atribuindo o valor de mensagem passado acima
        
        // this._limpaFormulario();                                                                      //limpa o formulario pra uma nova negociacao ser feita
    }

    apaga() {                                                                                            //cria o metodo apaga
        this._listaNegociacoes.esvazia()                                                                 //executa a funcao esvazia que esta dentro de listaNegociacoes que define o valor da array de listaNegociacoes pra vazia
        this._mensagem.texto = "Negociações apagadas com sucesso"                                        //altera a mensagem
        this._mensagemView.update(this._mensagem)
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {                                                                                //define o valor de cada campo do formulario como 0 ou vazio
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }
}