
const convert = (values) => {
    for (let i in values) {
        process.stdout.write([...values[i] + ''].map(Number).map(x => phonetic_table[x]).join('') + " ") // spread value at index map to phonetic table and rejoin word and print to std.out
    }  
}
const phonetic_table = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
convert(process.argv.slice(2))