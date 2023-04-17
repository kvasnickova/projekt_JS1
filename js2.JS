function check() {
    let input = document.getElementById("input").value;
    let answer = document.getElementById("answer").value;
    let result = Math.tan(input);
  
    if (result == answer) {
      document.getElementById("result").innerHTML = "Správně!";
    } else {
      document.getElementById("result").innerHTML = "Špatně!";
    }
  }