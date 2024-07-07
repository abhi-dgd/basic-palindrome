let input = document.getElementById("check")

const isPalindrome = () => {
    let entered = input.value;
    reversed = reverseInput(entered)
    if (entered != reversed){
        alert("Is not palindrome")
    } else {
        alert("Is a palindrome!")
    }

    // Set input value to empty string
    // Clear typed word
    input.value = ""
};

const reverseInput = (word) => {
    // Split word into array elements
    // reverse the order of elements
    // concat back into a string
    return word.split("").reverse().join("")
};
