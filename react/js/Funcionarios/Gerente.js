import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(name, cpf, salario){
        super(name, cpf, salario);
        this._bonificacao = 1.1;
    }
}