// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/PalindromChecker-Solution#index.js

// Solution 👉 https://www.loom.com/share/2dd2d840dc5f4576a369524bdc3e8336


// Write a function that takes in string and checks if it is a Palindrome
// A palindrome is a word that is the same forwards and backwards!
// Ex: racecar -> racecar

function isPalindrome (string) {
    // Should return true IF it's a palindrome
    let palindrome = ''
    for(let i = string.lenght - 1; i >= 0; i--){
        palindrome += string.charAt(i)
    }
    if(palindrome == string){
        return true
    }else{
        return false
    }
  }
//Topics: Strings, loops