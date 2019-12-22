function getSolutions( a, b, c)  {
let D = b*b - 4*a*c;
 if(D < 0)
     return {D: D};
 if(D == 0) {
  let x1 = - b / 2*a;
 return { roots: [ x1 ], D: D };
 }
 if(D > 0){
        
       let x1 = ((-b + Math.sqrt(D)) / (2 * a));
       let x2 = ((-b - Math.sqrt(D)) / (2 * a));
       return  { roots: [ x1, x2 ], D: D }
    }
}

function showSolutionsMessage( a, b, c )  {
	let result = getSolutions(a, b, c);
	console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}` );
	console.log (`Значение дискриминанта: D ${result.D}` );
	if (!result.roots)
		console.log ("Уравнение не имеет вещественных корней");
	else if (result.roots.length === 1)
		console.log (`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	else if (result.roots.length === 2)
		console.log (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
 }
 showSolutionsMessage(1,2,3);
 showSolutionsMessage(7,20,-3);
 showSolutionsMessage(2,4,2);

 function getAverageScore( data ) {
 for (key in data) {
  data[key] = average(data[key])
}
data.average = average(Object.values(data));
 return data;
 }

  function average (arr) {
 return arr.reduce((acc,mark)=> acc+mark,0) /  arr.length;
 }

console.log (getAverageScore ( {
algebra: [2,4,5,2,3,4],
geometry: [2,4,5],
russian:[3,3,4,5],
music:[2,2,5],
english:[4,4,3],
french:[4,4]
}));