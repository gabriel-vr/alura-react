import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(cliente, agencia, saldo){
        super(cliente, agencia, saldo);
    }
    
    sacar(valor){
        return super._sacar(valor, 1)
    }
}