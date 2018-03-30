function beepBoop(number) {
  var numArray = [];
  for (var i = 0; i <= number; i++) {
    var strArray = i.toString().split('');
    if (i % 3 === 0) {
      numArray.push(" I'm sorry Dave. I'm afraid I can't do that.");
    } else if(strArray.includes("1")) {
      numArray.push(" Boop!");
    } else if (strArray.includes("0")) {
      numArray.push(" Beep!");
    } else {
      numArray.push(" " + i);
    }
  }
  return numArray;
}



$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    $("#output h3").text(beepBoop(userInput));
    $("#output").show();
  });
});
