var removeDuplicates = function (nums) {
	let numberUniqueValues = 1
	for (i = 1; i < nums.length; i++) {
		if (nums[i - 1] != nums[i]) {
			nums[numberUniqueValues] = nums[i]
			numberUniqueValues++
		}
	}
	return numberUniqueValues
};