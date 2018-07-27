export const Capitalize = function(sentence){
  let arr = sentence.split(' ');
  let capArr = arr.map(word=>{
    return word[0].toUpperCase() + word.slice(1)
  });
  return capArr.join(' ');
};
