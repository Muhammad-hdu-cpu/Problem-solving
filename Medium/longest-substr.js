// Find the length of the longest substring without repeating characters.
function longestSubStr(str) {
    let maxLength = 0;

    for (let i = 0; i < str.length; i++) {
        let seenChars = new Set(); // Use a Set to track unique characters
        for (let j = i; j < str.length; j++) {
            if (seenChars.has(str[j])) {
                break; // Stop when a duplicate character is found
            }
            seenChars.add(str[j]); // Add the character to the Set
        }
        maxLength = Math.max(maxLength, seenChars.size); // Update the max length
    }

    return maxLength;
}

console.log(longestSubStr("abcabc")); // Output: 3



