import quadrado from "./quadrado";
import numeroAleatorio from "./numeroAleatorio";


console.log(quadrado.perimetroQuadrado(5)); 
console.log(numeroAleatorio());


const precos = [
  'credito',
  'R$ 200',
  'R$ 400',
  'contas pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados'
];

const precosFilltro = precos.filter((precos) => {
  return precos.includes('R$');
});

const precosNumeros = precosFilltro.map((preco) =>
  Number(preco.replace ('R$ ', '')),
);

console.log(precosNumeros);