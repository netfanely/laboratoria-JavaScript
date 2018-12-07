# laboratoria-JavaScript
pre-proyecto de laboratoria ENUNCIADOS, 

#EJERCICIO1: Escribe una función con el nombre coinConverter que convierte el valor de dólares a soles peruanos, pesos mexicano y pesos chilenos.

Utiliza las tasas de cambio siguientes:

soles = dólares * 3.25
pesosMexicanos = dólares * 18
pesosChilenos = dólares * 660

Ejemplo:

function coinConvert(dollar = 50) {
  soles = dollar * 3.25;
  pesosMexicanos = dollar * 18;
  pesosChilenos = dollar * 660;
  console.log(soles, pesosMexicanos, pesosChilenos); // --> [162.5, 900, 33000]
}

¡Mucha suerte!

#Ejercicio2: Imagina que has salido a comer con tus cuatro mejores amigas. La cuenta total del consumo es de 50 dólares, pero a eso debes agregarle el 10% de Impuesto al Valor Agregado (IVA). Quieres dividir la cuenta equitativamente entre las cinco. Para eso has creado este programa.

Sigue los pasos a continuación para que completes el programa y determines cuánto debe pagar cada una.

Crea una variable llamada tax (impuesto en inglés) y asígnale el resultado de multiplicar bill por 10%. Tip: 10% en decimal se escribe 0.10
Crea una variable llamada total y asígnale el resultado de sumar bill más tax
Retorna el monto que cada una debe pagar (total divido entre 5), con símbolo $ adelante (por ejemplo: $11). Tip: debes usar string concatenation para imprimir con el símbolo $ adelante.
Ejemplo:

var output = restaurantBill(50);
console.log(output); // --> $11

¡Mucha suerte!
