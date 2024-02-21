/*  This file contains notes on O notation.

    O notation describes the time or memory
    requirements of an algorithm based on the
    input. It will not tell you how many cycles
    will be used, its just a generalization
    
    O notation is used to make decisions on 
    which data structures or algorithms to use
    knowing a general idea of how something will
    perform will allow you to make the best 
    programming decision
    
    Important Concepts
    1. Growth is with respect to the input
    2. Constants are dropped
    3. Worst case is usually the way we measure*/

/* O(N) Time Complexity
    The complexity of this function is directly
    proportional to the length of the input.
    The function must execute the entire length
    of the string.
    For each char added, the loop must be run
    one more time.*/

function sumCharCodes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }
    return sum;
}

/* O(N) Time Complexity
    The complexity of this function is also O(N)
    Constants in O notation are typically
    insignificant. You would not represent this
    as O(2N). In some cases O notation may not be
    completely representative of performance
    and algorithms should be reasoned to a
    particular size or data set*/

function sumCharCodesTwice(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }
    for (let i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i);
    }
    return sum;
}

// O(N) Time Complexity

function sumCharCodesIf(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        const charCode = n.charCodeAt(i);
        if (charCode === 100) {
            return sum;
        }
    }
    return sum;
}

/* O(N^2) Time Complexity
    For every character of the string the
    function will go over every character 
    of the string*/

function sumCharCodesSquared(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            sum += n.charCodeAt(i) * n.charCodeAt(j);
        }
    }
    return sum;
}

/* O(N^3)) Time Complexity
    For every character of the string the
    function will go over every character 
    of the string and then go over every
    character of the string again.
    
    A real world example of this is multiplying
    matrices*/

function sumCharCodesCubed(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            for (let k = 0; k < n.length; k++) {
                sum += n.charCodeAt(i) * n.charCodeAt(j) * n.charCodeAt(k);
            }
        }
    }
    return sum;
}

/* O(sqrt(N)) Time Complexity
    Very rare*/
function two_crystal_balls(breaks: boolean[]): number {

    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}