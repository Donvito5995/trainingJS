function toWeirdCase(string) {
    var check = string.split('')
    let newString = [];
    for (let i in check) {
        if (i % 2 === 0) {
            newString.push(check[i].toUpperCase());
        } else {
            newString.push(check[i].toLowerCase());
        }
    }
    return newString.join('');
}

function toWeirdCaseV2(string) {
    return string.split(' ')
        .map(word => {
            return word.split('')
                .map((char, index) => {
                    if (index % 2 === 0) return char.toUpperCase()
                    return char
                })
                .join('')
        })
        .join(' ')
}

