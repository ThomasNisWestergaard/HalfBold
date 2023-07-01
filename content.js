function makeHalfBold(text) {
    // Split the text into words
    var words = text.split(' ');

    // Iterate over each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        // Ignore words that are HTML tags
        if (word.startsWith('<') && word.endsWith('>')) {
            continue;
        }

        // Calculate the midpoint of the word
        var midpoint = Math.floor(word.length / 2);

        // Make the first half of the word bold
        var firstHalf = word.substring(0, midpoint);
        var secondHalf = word.substring(midpoint);

        // Combine the bold first half with the second half
        words[i] = '<b>' + firstHalf + '</b>' + secondHalf;
    }

    // Combine the words back into a single string
    return words.join(' ');
}

// Apply the function to all text nodes within <p> and <div> elements
document.querySelectorAll('p').forEach((node) => {
    node.innerHTML = makeHalfBold(node.innerHTML);
});
