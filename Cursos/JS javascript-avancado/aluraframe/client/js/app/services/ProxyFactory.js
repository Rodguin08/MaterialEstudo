class ProxyFactory {
    static create(objeto, prop, acao) {

        return new Proxy(objeto, {
            get(target, prop, reciver) {
                if (_ehFuncao) {
                    return function () {
                        console.log(`Interceptando ${prop}`)
                        Reflect.apply(target[prop], target, arguments)
                        acao(target)
                    }
                }
                return Reflect.get(target, prop, reciver)
            },

            set(target, prop, value, receiver) {
                if(prop.includes(prop)) {
                    acao(target)
                    target(prop) = value
                }
                return Reflect.set(target, prop, value, receiver)
            }
        })
    }
    static _ehFuncao(func) {
        prop.includes(prop) && typeof (target[prop] == typeof (Function))
    }
}
