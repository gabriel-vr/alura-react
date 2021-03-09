import { SistemaAutenticacao } from "./Autenticacao.js";
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";


const Ricardo = new Cliente("Ricardo", 123456231)

const Gerent = new Gerente("Carlos", 11122233345, 50000);
Gerent.cadastrarSenha("3210")

console.log(SistemaAutenticacao.login(Gerent, "3210"))

