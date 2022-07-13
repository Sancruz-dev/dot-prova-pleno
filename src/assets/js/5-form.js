// JAVASCRIPT ------
function formatTel(mascara, documento) {
  var i = documento.value.length;
  var saida = mascara.substring(0, 1);
  var texto = mascara.substring(i);

  if (texto.substring(0, 1) != saida)
    documento.value += texto.substring(0, 1);

  else if (i == 0)
    documento.value += '(';

  else if (i == 3)
    documento.value += ') ';
}
