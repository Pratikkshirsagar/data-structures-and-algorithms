package main

func reverseString(s []byte) {
	length := len(s)
	halfLength := length / 2

	for i := 0; i < halfLength; i++ {
		temp := s[i]
		s[i] = s[length-1-i]
		s[length-1-i] = temp
	}
}
