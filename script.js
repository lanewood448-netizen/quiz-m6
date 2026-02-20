const quiz = [
  {
    question: "ของแข็งมีลักษณะอย่างไร",
    choices: [
      "รูปร่างคงที่ ปริมาตรคงที่",
      "รูปร่างไม่คงที่",
      "ปริมาตรไม่คงที่"
    ]
  },
  {
    question: "ของเหลวมีลักษณะอย่างไร",
    choices: [
      "รูปร่างคงที่",
      "ปริมาตรคงที่ แต่เปลี่ยนรูปร่างตามภาชนะ",
      "ไม่มีปริมาตร"
    ]
  }
];

let current = 0;

function startQuiz(){
  document.getElementById("student-form").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

function showQuestion(){
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice=>{
    const btn = document.createElement("button");
    btn.innerText = choice;
    choicesDiv.appendChild(btn);
  });
}

function nextQuestion(){
  current++;
  if(current < quiz.length){
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML =
      "<h2>ทำครบแล้ว</h2>";
  }
}