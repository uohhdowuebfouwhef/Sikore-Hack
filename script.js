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
sleep(5000).then(() => { 
function calculate() {
		newPos = curpos;
		startNumber1 = LASTRESULT;
		question = document.getElementById("fop"+ newPos);
		calcType = question.innerHTML;
		calcType = calcType.charAt(0);
		qNumber = operands[newPos]
		if (calcType == "+") {
   	 	 let result = Number(startNumber1) + Number(qNumber);
	         console.log(result);
	         LASTRESULT = result
	         return result;
		} else if (calcType == "-") {
	 		let result = Number(startNumber1) - Number(qNumber);
	 		console.log(result);
	 		LASTRESULT = result
	 		return result;
		} else if (calcType == "*") {
	   		let result = Number(startNumber1) * Number(qNumber);
	   		console.log(result);
	   		LASTRESULT = result
	   		return result;
		} else if (calcType == "/") {
		 	let result = Number(startNumber1) / Number(qNumber);
		 	LASTRESULT = result
	 	 	console.log(result);
	   	return result;
  }
}
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
