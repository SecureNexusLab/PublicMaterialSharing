#!/usr/bin/env python3

import sys
import random

# read bytes from our valid JPEG and return them in a mutable bytearray 
def get_bytes(filename):

	f = open(filename, "rb").read()

	return bytearray(f)

def bit_flip(data):

	num_of_flips = int((len(data) - 4) * 0.01)

	indexes = range(4, (len(data) - 4))

	chosen_indexes = []

	# iterate selecting indexes until we've hit our num_of_flips number
	counter = 0
	while counter < num_of_flips:
		chosen_indexes.append(random.choice(indexes))
		counter += 1

	for x in chosen_indexes:
		current = data[x]
		current = (bin(current).replace("0b",""))
		current = "0" * (8 - len(current)) + current
		
		indexes = range(0,8)

		picked_index = random.choice(indexes)

		new_number = []

		# our new_number list now has all the digits, example: ['1', '0', '1', '0', '1', '0', '1', '0']
		for i in current:
			new_number.append(i)

		# if the number at our randomly selected index is a 1, make it a 0, and vice versa
		if new_number[picked_index] == "1":
			new_number[picked_index] = "0"
		else:
			new_number[picked_index] = "1"

		# create our new binary string of our bit-flipped number
		current = ''
		for i in new_number:
			current += i

		# convert that string to an integer
		current = int(current,2)

		# change the number in our byte array to our new number we just constructed
		data[x] = current

	return data


# create new jpg with mutated data
def create_new(data):

	f = open("mutated.jpg", "wb+")
	f.write(data)
	f.close()

if len(sys.argv) < 2:
	print("Usage: JPEGfuzz.py <valid_jpg>")

else:
	filename = sys.argv[1]
	data = get_bytes(filename)
	mutated_data = bit_flip(data)
	create_new(mutated_data)




