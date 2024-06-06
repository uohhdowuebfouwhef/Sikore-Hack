pos = curpos;
question = document.getElementById("fop"+ pos);
start = document.getElementById("fstart")
startNumber = start.innerHTML;
LASTRESULT = 0;
calcType = question.innerHTML;
calcType = calcType.charAt(0);
qNumber = operands[pos]
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function calculateFirst() {
	if (calcType == "+") {
   	 let result = Number(startNumber) + Number(qNumber);
	 console.log(result);
	 LASTRESULT = result
	 return result;
	} else if (calcType == "-") {
	 let result = Number(startNumber) - Number(qNumber);
	 console.log(result);
	 LASTRESULT = result
	 return result;
	} else if (calcType == "*") {
	   let result = Number(startNumber) * Number(qNumber);
	   console.log(result);
	   LASTRESULT = result
	   return result;
	} else if (calcType == "/") {
		 let result = Number(startNumber) / Number(qNumber);
		 LASTRESULT = result
	 	 console.log(result);
	   return result;
  }
}
calculateFirst();
console.log(LASTRESULT)
function calculate() {
		startNumber1 = LASTRESULT;
	        pos = pos + 1
		question = document.getElementById("fop"+ pos);
		calcType = question.innerHTML;
		calcType = calcType.charAt(0);
		qNumber1 = operands[pos]
	        console.log(qNumber)
	        console.log("The new calculation is " + toString(startNumber1) +" " + toString(calcType)+" " + toString(qNumber1))
		if (calcType == "+") {
   	 	 let result = Number(startNumber1) + Number(qNumber1);
	         console.log(result);
	         LASTRESULT = result
	         return result;
		} else if (calcType == "-") {
	 		let result = Number(startNumber1) - Number(qNumber1);
	 		console.log(result);
	 		LASTRESULT = result
	 		return result;
		} else if (calcType == "*") {
	   		let result = Number(startNumber1) * Number(qNumber1);
	   		console.log(result);
	   		LASTRESULT = result
	   		return result;
		} else if (calcType == "/") {
		 	let result = Number(startNumber1) / Number(qNumber1);
		 	LASTRESULT = result
	 	 	console.log(result);
	   	return result;
  }
}
sleep(5000).then(() => { 
calculate()
calculate()
calculate()
calculate()
calculate()
calculate()
calculate()
calculate()
calculate()
calculate()
calculate()
});
