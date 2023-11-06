#!/usr/bin/env python3

import sys

# read bytes from our valid JPEG and return them in a mutable bytearray 
def get_bytes(filename):

	f = open(filename, "rb").read()

	return bytearray(f)

if len(sys.argv) < 2:
	print("Usage: JPEGfuzz.py <valid_jpg>")

else:
	filename = sys.argv[1]
	data = get_bytes(filename)
	counter = 0
	for x in data:
		if counter < 10:
			print(x)
		counter += 1