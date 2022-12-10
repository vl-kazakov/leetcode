const romanNums = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
}

function romanToInt(romanNumber) {
	let romanstring = romanNumber.split('')
	let newArr = romanstring.map(item => {
		for (let char in romanNums) {
			if (item == char) {
				item = romanNums[char]
				return item
			}
		}
	})
	newArr.reverse()
	let arab = []
	newArr.map((e, i) => {
		if (newArr[i + 1] < e) {
			arab.push(newArr[i] - newArr[i + 1])
			delete newArr[i + 1]
		} else {
			arab.push(e)
		}
	})
	const arabNumber = arab.reduce((sum, current) => sum + current)
	return arabNumber
}