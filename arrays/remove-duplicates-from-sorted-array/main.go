package main

func removeDuplicates(nums []int) int {
	x := 0

	for i := 0; i < len(nums); i++ {
		if nums[i] > nums[x] {
			x++
			nums[x] = nums[i]
		}
	}

	return x + 1
}
