function targetTerdekat(arr) { 
	var O; 
	var X = []; 
	for(var i = 0 ; i < arr.length ; i ++){ 
		if(arr[i] === 'o') { 
			O = i; 
			} else if (arr[i] === 'x'){
				X.push(i); 
			} 
	} 
	var temp = [];
	for(var i = 0 ; i < X.length ; i ++){ 
		temp[temp.length] = X[i] - O;
		 if(temp[i] < 0){ temp[i] = temp[i] - (temp[i] * 2) 
		 } 
	} 
	var terdekat = temp[0]; 
	for(var i = 0 ; i < temp.length ; i ++){ 
		if(temp[i] < terdekat){ 
			terdekat = temp[i];
	  } 
	} 
	if(temp.length === 0){ 
		return 0; 
		}else{ 
			return terdekat; 
		}
} 
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
