function generateRandomString(charSetLength = 0, min = 4, max = 0) {
    const charset = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', /* 10 */
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', /* 26 + 10 = 36 */
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', /* 26 + 36 = 62*/
        '-', '.', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', ':', '<', '>', '?', /* 18 + 62 = 80 */
    ];
    if (charSetLength > charset.length - 1 || charSetLength < 10) {
        charSetLength = charset.length - 1;
    }

    const range = (max < min) ? min : (Math.round(Math.random() * (max - min)) + min);

    const chars = [];
    while (chars.length < range) {
        chars.push(charset[Math.round(Math.random() * charSetLength)]);
    }
    return chars.join('');
}

exports.generateRandomString = generateRandomString;
