import { Cliente } from "../Cliente.js";

export class Conta{
    
    constructor(cliente, agencia, saldo){
        if (this.constructor == Conta){
            throw new Error("Você não pode instanciar a classe Conta")
        }
        if(cliente instanceof Cliente){
            this._cliente = cliente
        }
        this._agencia = agencia;
        this._saldo = saldo;
    }
    
    get saldo(){
        return this._saldo;
    }

    get cliente(){
        return this._cliente;
    }

    get agencia(){
        return this._agencia;
    }

    sacar(valor){
        throw new Error("O método sacar da classe Conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo < valorSacado) return 0;
        this._saldo -= valorSacado;
        return valorSacado;
    }

    depositar(valor){
        if(valor < 0) return;
        this._saldo += valor;
    }

    trasnferir(valor, conta){
        valorSacado = this.sacar(valor);
        conta.depositar(valor);
    }
}