import {Cliente} from "./Cliente.js";                   //puxa os comandos dos outros arquivos na memoria
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Ricardo", 10000, 12345678900); 
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Rodrigo", 5000, 12345678901); 
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 32165498700, "321")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
console.log(gerenteEstaLogado, diretorEstaLogado);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "321");


console.log(clienteEstaLogado);