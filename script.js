document.getElementById("img").addEventListener("click", magicAnswer);

function magicAnswer() {
  let question = document.getElementById("question").value;
  let answer = document.getElementById("answer");
  let randNum = Math.random();

  if (question.length < 1) {
    answer.innerHTML = "Please ask a question...";
  } else if (question === "Does a magic 8 ball actually work?") {
    answer.innerHTML = "How dare you question my power!?";
  } else if (question === "Is javascript awesome?") {
    answer.innerHTML = "Of course!";
  } else if (question === "Am I going to fail my finals?") {
    answer.innerHTML = "You know the answer to that... of course you will!";
  } else if (question === "Do magic 8 balls lie?") {
    answer.innerHTML = "What do you take me for... I'm no con artist!";
  } else if (randNum <= 0.2 && question.length != 0) {
    answer.innerHTML = "Without a Doubt.";
  } else if (randNum <= 0.4 && question.length != 0) {
    answer.innerHTML = "As I see it, yes.";
  } else if (randNum <= 0.6 && question.length != 0) {
    answer.innerHTML = "Concentrate and ask again.";
  } else if (randNum <= 0.8 && question.length != 0) {
    answer.innerHTML = "Don't count on it.";
  } else if (randNum <= 1 && question.length != 0) {
    answer.innerHTML = "Outlook not so good";
  }
}
