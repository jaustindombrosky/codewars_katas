#Implement a function that adds two numbers together and 
#returns their sum in binary. The conversion can be done 
#before, or after the addition.
#The binary number returned should be a string.
#7kyu

def add_binary(a,b)
  (a+b).to_s(2)
end