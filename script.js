console.log("Script funcionando");

function somar(a, b) {
  return a + b;
}

function gerarResultado() {
  let nbr1 = parseFloat(document.getElementById("nbr01").value);
  let nbr2 = parseFloat(document.getElementById("nbr02").value);
  const resultado = somar(nbr1, nbr2);
  //alert(resultado);
  // let inputRes = document.getElementById("resultado");
  //inputRes.value = resultado;
  let spanRes = document.getElementById("txt_resultado");
  let text = nbr1 + " +  " + nbr2 + " = " + resultado + ".";
  spanRes.textContent = text;
}
