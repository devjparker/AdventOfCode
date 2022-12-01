"""--- Day 1: Not Quite Lisp ---
Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.

Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Here's an easy puzzle to warm you up.

Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

For example:

(()) and ()() both result in floor 0.
((( and (()(()( both result in floor 3.
))((((( also results in floor 3.
()) and ))( both result in floor -1 (the first basement level).
))) and )())()) both result in floor -3.
To what floor do the instructions take Santa?"""

with open('/home/devin/repos/adventOfCode2015/day01input.txt', 'r') as f:
    input = f.read()
    #lines = input.split()

def findFloor(instructions, partNumber): #added after finishing part 1

    if(partNumber) == 1:

        count = 0

        for i in instructions:
            for j in i:
                #print(i) test print to verify the characters
                if i == "(":
                    count += 1
                else:
                    count -= 1
                #print(count) test to verify counting

        print("Santa should go to floor", count)
    
    elif(partNumber) == 2: #added to get the answer to part 2
        count = 0 #floor number symbolized by a count
        position = 0 #this was added to track which character position we are at

        for i in instructions:
            for j in i:
                if count == -1: #This if else was added to find the moment santa enters the basement
                    print("The character pushing Santa to the basement is in position", position)
                    return position
                else:
                    #print(i) test print to verify the characters
                    if i == "(":
                        count += 1
                    else:
                        count -= 1
                    #print(count) test to verify counting
                position += 1
                #print(count, position) test to verify floor and position tracking
    else:
        print("Enter 1 or 2 for partNumber")



findFloor(input, 1)


#Answer to part 1 is 280
"""Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

For example:

) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
What is the position of the character that causes Santa to first enter the basement?"""

findFloor(input, 2)