# Roman Numerals
This is a technical test for the BBC that generates a Roman Numeral when passed an integer. 

### To Install
```
$ git clone https://github.com/Daniel-Cross/roman-numerals.git
$ cd roman-numerals
$ npm install
$ npm start
```

### To Test 
```
$ npm test
```

### Built using
```
JavaScript
```

### Testing Utilities
```
Jest
```

### Approach
My initial approach was to go with a TDD method and employ an if statement to return the Roman Numerals that corresponded with the entered integers. I quickly realised this wasn't sustainable as I couldn't write out code for 3999 separate Roman Numerals, nor is that a very DRY approach to the problem.

After realising my current method was unsustainable, I looked into creating an object that holds all the Roman Numeral symbols and performs various math to ensure the correct Numerals are repeated and appended  to a string.

### Assumptions

* interface was not specified and therefore unnecessary.

### Caveats 
* To support integers between 1 and 3999 only.


### Author
Daniel Cross



