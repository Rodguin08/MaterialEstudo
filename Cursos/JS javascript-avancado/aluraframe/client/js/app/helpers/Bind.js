class Bind {
    constructor(model, view, prop) {
        let proxy = ProxyFactory.create(model, prop, () => view.update(model))
        
        view.update(model)
        return proxy
    }
}