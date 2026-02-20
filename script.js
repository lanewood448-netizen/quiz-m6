const quizData = [
  {
    question: "1) ข้อใดอธิบายลักษณะของของแข็งได้ถูกต้องที่สุด",
    options: [
      "A) มีรูปร่างและปริมาตรไม่แน่นอน",
      "B) มีปริมาตรแน่นอน แต่รูปร่างไม่แน่นอน",
      "C) มีรูปร่างและปริมาตรแน่นอน",
      "D) อัดตัวได้ง่าย"
    ],
    correct: 2,
    explanation: "ของแข็งมีแรงยึดเหนี่ยวระหว่างอนุภาคมาก ทำให้มีรูปร่างและปริมาตรแน่นอน"
  },
  {
    question: "2) เพราะเหตุใดของเหลวจึงเปลี่ยนรูปร่างตามภาชนะได้",
    options: [
      "A) อนุภาคอยู่ห่างกันมาก",
      "B) อนุภาคเคลื่อนที่ผ่านกันได้",
      "C) ไม่มีแรงยึดเหนี่ยวเลย",
      "D) อัดตัวได้ดี"
    ],
    correct: 1,
    explanation: "ของเหลวมีแรงยึดเหนี่ยวปานกลาง อนุภาคจึงเคลื่อนที่ผ่านกันได้"
  },
  {
    question: "3) ข้อใดไม่ใช่สมบัติของของแข็ง",
    options: [
      "A) อัดตัวได้ยาก",
      "B) มีรูปร่างคงที่",
      "C) ไหลได้อิสระ",
      "D) มีปริมาตรคงที่"
    ],
    correct: 2,
    explanation: "ของแข็งไม่สามารถไหลได้อิสระแบบของเหลว"
  },
  {
    question: "4) การเปลี่ยนสถานะจากของแข็งเป็นของเหลวเรียกว่าอะไร",
    options: [
      "A) การระเหย",
      "B) การหลอมเหลว",
      "C) การควบแน่น",
      "D) การระเหิด"
    ],
    correct: 1,
    explanation: "การหลอมเหลว (melting) คือการเปลี่ยนจากของแข็งเป็นของเหลว"
  },
  {
    question: "5) ข้อใดเป็นตัวอย่างของของเหลว",
    options: [
      "A) น้ำแข็ง",
      "B) เหล็ก",
      "C) น้ำ",
      "D) เกลือ"
    ],
    correct: 2,
    explanation: "น้ำในอุณหภูมิห้องเป็นของเหลว"
  },
  {
    question: "6) ทำไมของแข็งจึงอัดตัวได้ยาก",
    options: [
      "A) อนุภาคอยู่ห่างกันมาก",
      "B) อนุภาคยึดกันแน่น",
      "C) ไม่มีแรงยึดเหนี่ยว",
      "D) มีช่องว่างมาก"
    ],
    correct: 1,
    explanation: "ของแข็งมีอนุภาคเรียงตัวแน่นและแรงยึดเหนี่ยวสูง"
  },
  {
    question: "7) ข้อใดกล่าวถูกต้องเกี่ยวกับของเหลว",
    options: [
      "A) มีรูปร่างแน่นอน",
      "B) มีปริมาตรแน่นอน",
      "C) ไม่มีปริมาตรแน่นอน",
      "D) อัดตัวง่ายมาก"
    ],
    correct: 1,
    explanation: "ของเหลวมีปริมาตรแน่นอน แต่รูปร่างไม่แน่นอน"
  },
  {
    question: "8) ปรากฏการณ์น้ำกลายเป็นไอเรียกว่าอะไร",
    options: [
      "A) การหลอมเหลว",
      "B) การควบแน่น",
      "C) การระเหย",
      "D) การแข็งตัว"
    ],
    correct: 2,
    explanation: "การระเหยคือการเปลี่ยนจากของเหลวเป็นแก๊ส"
  },
  {
    question: "9) ข้อใดเปรียบเทียบของแข็งกับของเหลวได้ถูกต้อง",
    options: [
      "A) ของแข็งไหลได้ดีกว่า",
      "B) ของเหลวมีรูปร่างคงที่",
      "C) ของแข็งมีแรงยึดเหนี่ยวมากกว่า",
      "D) ของเหลวอัดตัวไม่ได้เลย"
    ],
    correct: 2,
    explanation: "ของแข็งมีแรงยึดเหนี่ยวระหว่างอนุภาคมากกว่าของเหลว"
  },
  {
    question: "10) ข้อใดอธิบายการจัดเรียงอนุภาคของของเหลวได้ดีที่สุด",
    options: [
      "A) เรียงตัวเป็นระเบียบแน่นมาก",
      "B) เรียงตัวหลวม เคลื่อนที่ได้",
      "C) ไม่มีการยึดเหนี่ยว",
      "D) กระจายตัวเต็มภาชนะ"
    ],
    correct: 1,
    explanation: "ของเหลวมีการจัดเรียงไม่แน่นเท่าของแข็ง และเคลื่อนที่ผ่านกันได้"
  }
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");

function loadQuiz() {
  quizContainer.innerHTML = "";

  quizData.forEach((item, index) => {
    const questionEl = document.createElement("div");
    questionEl.classList.add("question");

    questionEl.innerHTML = `<h3>${item.question}</h3>`;

    item.options.forEach((option, i) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${i}">
        ${option}
      `;
      questionEl.appendChild(label);
      questionEl.appendChild(document.createElement("br"));
    });

    const explanationEl = document.createElement("div");
    explanationEl.id = `explanation${index}`;
    explanationEl.classList.add("explanation");
    questionEl.appendChild(explanationEl);

    quizContainer.appendChild(questionEl);
  });
}

function submitQuiz() {
  let score = 0;

  quizData.forEach((item, index) => {
    const selected = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    const explanationEl = document.getElementById(`explanation${index}`);

    if (selected) {
      const answer = parseInt(selected.value);
      if (answer === item.correct) {
        score++;
        explanationEl.innerHTML = "✅ ถูกต้อง! " + item.explanation;
        explanationEl.style.color = "#00ffcc";
      } else {
        explanationEl.innerHTML =
          "❌ ผิด! " +
          item.explanation +
          `<br>คำตอบที่ถูกคือ: ${item.options[item.correct]}`;
        explanationEl.style.color = "#ff6b81";
      }
    } else {
      explanationEl.innerHTML = "⚠️ ยังไม่ได้เลือกคำตอบ";
      explanationEl.style.color = "orange";
    }
  });

  resultContainer.innerHTML = `
    <h2>คะแนนของคุณ: ${score} / ${quizData.length}</h2>
  `;
}

function resetQuiz() {
  loadQuiz();
  resultContainer.innerHTML = "";
}

loadQuiz();