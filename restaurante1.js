module.exports = function restaurantBill(bill) {
  

// 1. Crea una variable llamada tax y as�gnale el resultado de multiplicar
// bill por 10%.
  

	var tax  = bill*0.10;

  

// 2. Crea una variable llamada total y as�gnale el resultado de sumar bill
// m�s tax
 

	var total = bill + tax;

  

// 3. Retorna el monto que cada una debe pagar, con el s�mbolo $ adelante
  

	return '$'+total/5;


};
