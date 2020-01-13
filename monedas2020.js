function coinConvert(dollars) {

  const solesPeruanos =  3.25;
  const pesosMexicanos = 18;
  const pesosChilenos =  660;

    var monedas = [];
    
    monedas[1] = soles*dollars;
    monedas[2] = pesosMexicanos*dollars;
    monedas[3] = pesosChilenos*dollars;
    
  return monedas;
};

console.log(coinConvert(45));
