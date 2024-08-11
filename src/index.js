const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const dividedToWords = expr.split('**********');
    console.log(dividedToWords)
    const getDecodedWord = dividedToWords.map((word) => {
      console.log(word)
        let letterArray = [];
        for (let i = 0; i < word.length; i += 10) {
            const letter = word.slice(i, i + 10);
            let codedLetter = '';
            for (let j=0; j < letter.length; j +=2) {
                if ((letter[j] + letter[j+1]) === '10') {
                    codedLetter += '.';
                }
                else if ((letter[j] + letter[j+1]) === '11') {
                    codedLetter += '-'
                }
                else if ((letter[j] + letter[j+1]) === '00') {
                    codedLetter += ''
                }
                console.log(codedLetter)
            }
            letterArray.push(MORSE_TABLE[codedLetter]);
            
        }
        return letterArray.join('');
    });
    return getDecodedWord.join(' ');
}
module.exports = {
    decode
}