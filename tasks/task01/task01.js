function reverseString(str) {
    const str2 = str.split('').sort(() => -Infinity).join('');
    console.log('str2: ', str2);

    return str2;
}

module.exports = reverseString;