export class Funcionario{
    constructor(name, cpf, salario){
        if(this.constructor == Funcionario){
            throw new Error("A classe Funcionario é uma classe abstrata")
        }
        this._name = name;
        this._cpf = cpf;
        this._salario = salario;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return this._senha == senha;
    }
}