module.exports = function coinConvert(usDollars) {


  var arr = [];
  var peruvianSoles = usDollars * 3.25;
  
  var mexicanPesos = usDollars * 18 ;
  
  var chileanPesos = usDollars * 660;
  

  console.log(peruvianSoles, mexicanPesos, chileanPesos); 
 

	 // A�ade el monto equivalente en soles
  
	arr.push(peruvianSoles);

  

	// A�ade el monto equivalente en pesos mexicanos
  
	arr.push(mexicanPesos);

  

	// A�ade el monto equivalente en pesos chilenos

	  arr.push(chileanPesos);

 

return arr;


};