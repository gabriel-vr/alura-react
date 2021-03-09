import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
    constructor(name, cpf, salario){
        super(name, cpf, salario);
        this._bonificacao = 2;
    }
}