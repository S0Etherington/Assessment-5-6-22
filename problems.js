const sumZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            } else {
                j += 0
            }
        }
    } return false
}

let array = [1, 2, 300, -300]

// console.log(sumZero(array))
// time complexity: 0(n^2)
// space complexity: 0(1)

const uniqueChar = (str) => {
    let char = ''
    for(let i = 0; i < str.length; i++){
        if(char.includes(str[i]) !== true){
            char += str[i]
        } else {
            i += 0
        }
    }

    if(char === str){
        return true
    } else if (char !== str){
        return false
    } else {
        return ('Functions broke')
    }
}

// console.log(uniqueChar('hii'))
// time complexity: 0(n)
// space complexity: 0(1)

const isPangram = (str) => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let strLower = str.toLowerCase()
    
    for(let i = 0; i < alphabet.length; i++){
        if(strLower.indexOf(alphabet[i]) < 0){
            return false
        } 
    }
    return true
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// time complexity: 0(1)
// space complexity: 0(1)

const longestWord = (arr) => {
    let big = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > big.length){
            big = array[i]
        }
    }
    return big.length
}

// console.log(longestWord(['hi', 'hello']))
// time complexity: 0(n)
// space complexity: 0(n)