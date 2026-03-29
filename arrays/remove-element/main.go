package main

func removeElement(nums []int, val int) int {
	x := 0

	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			nums[x] = nums[i]
			x++
		}
	}

	return x
}
