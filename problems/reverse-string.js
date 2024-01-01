module.exports = function reverseString(string) {
  if(typeof string !== 'string') {
    throw new Error('The input must be a string!')
  }
  let inversed = '';

  for(let i = string.length - 1; i >= 0; i--) {
    inversed += string[i];
  }

  return inversed;
};
