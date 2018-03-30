function beepBoop(number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    var strArray = i.toString().split('');
    console.log(strArray);
    if (i === 0) {
      numArray.push("Beep!");
    } else if (i === 1) {
      numArray.push("Boop!");
    } else if (i % 3 === 0) {
      numArray.push("I'm sorry Dave. I'm afraid I can't do that.");
    } else {
      numArray.push(i);
    }
  }
  console.log(numArray);
}
