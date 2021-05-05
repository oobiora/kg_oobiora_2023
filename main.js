


const convert = (values) => {

    for (let i in values) {
        word = [...values[i] + ''].map(Number)
        process.stdout.write(word.map(x => phonetic_table[x]).join('') + " ")
    }
    
}
const phonetic_table = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
convert(process.argv.slice(2))