let word = "ibbrahim";

let count = 0;

let letter = word[0];
for (let index = 0; index < word.length; index++) {
  letter = word[index];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      count += 1;
    }
  }
  console.log(`Letter:${letter}\nCount:${count}`);
  count = 0;

  word = word.replaceAll(letter, "");
  index = 0;
}
console.log(`herf:${word[word.length - 1]}\nsay:${1}`);
