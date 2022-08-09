 // exercicio 1
 let array = [];
function Somar(array) {
    for (var i = 0;i <100; i++) {
        if (i % 7 === 0) {
            array.push(i);
        }
    }  
   console.log(array);
   
}
//Somar(array);
  

//exercicio 2
let vezes= 2;
let texto = "textooo";
 let chamar = function(vezes, texto) {
    for (let i = 0; i < vezes; i++) {
        console.log(texto);
    }
};
//chamar(vezes, texto);


//exercicio 3
 function re(){

let btn =document.querySelector("#pai");
  
 btn.addEventListener("click", function() {
     let parent=this.parentNode;
      console.log(parent);
 });
 
};

//exercicio 4
  /*  document.querySelector("p").innerHTML = "texto alterado!"

        var divNova = document.createElement("p");
        var conteudoNovo = document.createTextNode("texto alterado 'last'!");
        divNova.appendChild(conteudoNovo); 
      
        var divAtual = document.getElementById("texto");
        document.body.insertBefore(divNova, divAtual);*/
       
        //exercicio 5
        var idade = prompt("Digite sua idade");

            idade >= 18 ? alert("OK, maior de idade."): alert("menor de idade");
  
        //exercicio 6
        /*let arr=[];
        var obj = {
            nomeObj: 'Mouse',
            pesoObj: '150g'
        };

          obj.nomeObj= 'teclado'
         obj.pesoObj= "500g"
         
         console.log(obj)*/




        


 











