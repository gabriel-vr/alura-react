import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{

    constructor(cliente, agencia){
        super(cliente, agencia, 0);
    }

    sacar(valor){
        return super._sacar(valor, 1.1)
    }
}