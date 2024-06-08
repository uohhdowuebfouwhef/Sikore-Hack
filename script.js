pos = curpos;
question = document.getElementById("fop"+ pos);
start = document.getElementById("fstart")
startNumber = start.innerHTML;
LASTRESULT = 0;
calcType = question.innerHTML;
calcType = calcType.charAt(0);
qNumber = operands[pos]
num = 11

function calculateFirst() {
	if (calcType == "+") {
   	 let result = Number(startNumber) + Number(qNumber);
	 console.log(result);
	 LASTRESULT = result
	 return result;
	} else if (calcType == "-") {
		if (Number(startNumber1) < Number(qNumber1)) {
				let result = Number(qNumber1) - Number(startNumber1);
				console.log(result);
				LASTRESULT = result;
				return result;
		} else if (Number(qNumber1) < Number(startNumber1)) {
				let result = Number(startNumber1) - Number(qNumber1);
	 		        console.log(result);
	 		        LASTRESULT = result;
	 		        return result;
		}
	} else if (calcType == "*") {
	   let result = Number(startNumber) * Number(qNumber);
	   console.log(result);
	   LASTRESULT = result
	   return result;
	} else if (calcType == "/") {
		 if (Number(startNumber1) < Number(qNumber1)) {
				let result = Number(qNumber1) / Number(startNumber1);
				console.log(result);
				LASTRESULT = result;
				return result;
		} else if (Number(qNumber1) < Number(startNumber1)) {
				let result = Number(startNumber1) / Number(qNumber1);
	 		        console.log(result);
	 		        LASTRESULT = result
	 		        return result;
			}
  }
}
calculateFirst();
console.log(LASTRESULT)
function calculate(posit) {
		startNumber1 = LASTRESULT;
		question = document.getElementById("fop"+ posit);
		calcType = question.innerHTML;
		calcType = calcType.charAt(0);
		qNumber1 = operands[posit]
	        console.log("Last result: " + startNumber1 + " Current Number: " + qNumber1)
		if (calcType == "+") {
   	 	 let result = Number(startNumber1) + Number(qNumber1);
	         console.log(result);
	         LASTRESULT = result
	         return result;
		} else if (calcType == "-") {
			if (Number(startNumber1) < Number(qNumber1)) {
				let result = Number(qNumber1) - Number(startNumber1);
				console.log(result);
				LASTRESULT = result;
				return result;
			} else if (Number(qNumber1) < Number(startNumber1)) {
				let result = Number(startNumber1) - Number(qNumber1);
	 		        console.log(result);
	 		        LASTRESULT = result;
	 		        return result;
			}
		} else if (calcType == "*") {
	   		let result = Number(startNumber1) * Number(qNumber1);
	   		console.log(result);
	   		LASTRESULT = result
	   		return result;
		} else if (calcType == "/") {
		 	if (Number(startNumber1) < Number(qNumber1)) {
				let result = Number(qNumber1) / Number(startNumber1);
				console.log(result);
				LASTRESULT = result;
				return result;
			} else if (Number(qNumber1) < Number(startNumber1)) {
				let result = Number(startNumber1) / Number(qNumber1);
	 		        console.log(result);
	 		        LASTRESULT = result
	 		        return result;
			}
		}
}

position = 0;
while (num < 100) {
   position += 1
   calculate(position)
}
