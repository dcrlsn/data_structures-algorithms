// This is an example of why Typescript isn't the best language for this kind of thing.

// This is not an array.
// const b = [];
// This is similar to an array 
const a = new ArrayBuffer(6);
// a = { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a);
// Uint8Array(6)) [ 0, 0, 0, 0, 0, 0 ]
a8[0] = 1;
// Uint8Array(6)) [ 1, 0, 0, 0, 0, 0 ]
// a = { [Uint8Contents]: <01 00 00 00 00 00>, byteLength: 6 }
a8[2] = 2;
// Uint8Array(6)) [ 1, 0, 2, 0, 0, 0 ]
// a = { [Uint8Contents]: <01 00 02 00 00 00>, byteLength: 6 }

const a16 = new Uint16Array(a);
// a = { [Uint8Contents]: <01 00 02 00 00 00>, byteLength: 6 }

a16[2] = 0x4545;
// a = { [Uint8Contents]: <01 00 02 00 45 45>, byteLength: 6 }
/* This is an example of taking a contiguous block of memory
  interpreting it as a different type of data. */

a16[2] = 0x45;
// a = { [Uint8Contents]: <01 00 02 00 45 00>, byteLength: 6 }
/* The most significant byte is stored first. 
  Since the datatype we're using is 2 bytes in size,
  the most significant byte is [4]*/