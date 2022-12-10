function isPalindrome(value) {
	if (value < 0 || value !== 0 && value % 10 == 0) {
		return false
	}
	value = value.toString()
	const reversValue = value.toString().split("").reverse().join("")
	if (value == reversValue) {
		return true
	} else {
		return false
	}
}