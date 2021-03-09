export class Cliente {
    
    constructor(name, cpf){
        this._name = name;
        this._cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }

    get name(){
        return this._name;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return this._senha == senha;
    }
}