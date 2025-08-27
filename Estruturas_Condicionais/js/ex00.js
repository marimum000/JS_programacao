var nome, idade

nome=prompt("Digite seu nome: ")
idade=parseInt (prompt("Digite seu idade: "))

if (idade>=18){
  alert(nome+ " Você pode tentar tirar a CNH")
}
else{
  alert(nome +" Você ainda não tem idade para tirar a CNH")
}