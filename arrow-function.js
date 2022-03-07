function apresentar(nome){
    return `meu nome é ${nome}`
} 


// Arrow  

const apresentarArrow = nome => `meu nome é ${nome}`;
 const soma = (num1, num2 ) => num1 + num2;

 //Arrow function com +1 linha de instruções ]

 const somaNumerosPequenos = (num1 , num2 ) =>  {
     if (num1 || num2 > 10 ){
         return "somente de numeros de 1 de 9 "
     }else {    
         return num1 + num2;
     }
 }

 //operador maior ou igual a que 
 // >=