function countCharOccurrences(str, char) {
    let occurrence = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            occurrence++;
        }

    }
    return occurrence ;
}


module.exports = countCharOccurrences;
