// scripts.js
alert ('Surface area of triangle = a*h/2');

 function getTriangleArea(a, h) {
	if ((a>0) && (h>0)){
	return a*h/2;
	}else { 
	alert('Nieprawidłowe dane');
	} 	
 }
	

console.log(getTriangleArea(10, 6));
 var triangle1Area = getTriangleArea(10, 15);
 console.log(getTriangleArea(10, 15));
 var triangle2Area = getTriangleArea(-18, 15);
 var triangle3Area = getTriangleArea(0, 3);