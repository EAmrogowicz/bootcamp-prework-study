//CODE EXCERCISE #1
// var topics = "HTML, CSS, GIT, JS";
// console.log(topics);

//CODE EXCERCISE #2
// var topic = "JS";
// if (topic === "HTML") {
//   console.log("Let's study HTML!");
// } else if (topic === "CSS") {
//   console.log("Let's study CSS!");
// } else if (topic === "GIT") {
//   console.log("Let's study Git!");
// } else if (topic === "JS" || topic === "JavaScript") {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log("Please try again!");
// }

//CODE EXCERCISE #3
//let topics = ["HTML", "CSS", "Git", "JavaScript"];
// for (var i = 0; i < topics.length; i++) {
//   console.log(`Let's study ${topics[i]}`);
// }

//CODE EXCERCISE #4
let topics = ["HTML", "CSS", "Git", "JavaScript"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "GIT") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

console.log("Here are the topics we learned through Pre-work:");
listTopics();

console.log("Which topic should we study first?");
selectTopic();
