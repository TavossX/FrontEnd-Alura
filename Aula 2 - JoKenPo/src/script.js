idade = prompt("Quantos anos você tem?")
if(idade < 18){
  alert("Você NÂO pode jogar JoKePo")
}

if(idade >= 18) {
  escolhaJogador = prompt("Digite 1 -Pedra, 2 - Papel, 3 - Tesoura?");
  escolhaComputador = Math.floor(Math.random() * 3) + 1
  
  if(escolhaJogador == escolhaComputador){
    alert("Empate!")
  }
  
  if(escolhaJogador == 1){
    if(escolhaComputador == 2){
      alert("Computador venceu, escolheu papel!")
    }
    if(escolhaComputador == 3){
      alert("Você Venceu! computador escolheu tesoura!")
    }
  }
  
  if(escolhaJogador == 2){
    if(escolhaComputador == 1){
      alert("Jogador venceu, computador escolheu Pedra!")
    }
    if(escolhaComputador == 3){
      alert("Computador Venceu, escolheu Tesoura!")
    }
  }
  
  if(escolhaJogador == 3){
    if(escolhaComputador == 1){
      alert("Computador Venceu, escolheu pedra!")
    }
    if(escolhaComputador == 2){
      alert("Jogador venceu! computador escolheu Papel!")
    }
  }
}