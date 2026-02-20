// ข้อมูลโจทย์ (ชุดคำถามเคมี ของแข็งและของเหลว 10 ข้อ)
const rawQuestions = [
    {
        question: "สมบัติใดเป็นสมบัติของ 'ของแข็ง' ที่แตกต่างจากของเหลวอย่างชัดเจน?",
        options: [
            { text: "รูปร่างและปริมาตรคงที่", isCorrect: true },
            { text: "ปริมาตรคงที่ แต่รูปร่างเปลี่ยนตามภาชนะ", isCorrect: false },
            { text: "อนุภาคเคลื่อนที่ได้อิสระตลอดเวลา", isCorrect: false },
            { text: "สามารถบีบอัดให้เล็กลงได้ง่ายมาก", isCorrect: false }
        ],
        explanation: "ของแข็งมีแรงยึดเหนี่ยวระหว่างอนุภาคสูงมาก ทำให้รูปร่างและปริมาตรคงที่ ส่วนของเหลวรูปร่างจะไม่คงที่"
    },
    {
        question: "การระเหย (Evaporation) ของของเหลว เกิดขึ้นที่บริเวณใด?",
        options: [
            { text: "เกิดขึ้นเฉพาะบริเวณผิวหน้าของของเหลว", isCorrect: true },
            { text: "เกิดขึ้นได้ทุกส่วนของของเหลว", isCorrect: false },
            { text: "เกิดขึ้นเฉพาะที่ก้นภาชนะที่ได้รับความร้อน", isCorrect: false },
            { text: "เกิดขึ้นบริเวณตรงกลางของภาชนะ", isCorrect: false }
        ],
        explanation: "การระเหยเกิดขึ้นเฉพาะผิวหน้าของของเหลวเท่านั้น ต่างจากการเดือดที่เกิดขึ้นได้ทุกส่วน"
    },
    {
        question: "ปัจจัยใดต่อไปนี้ **ไม่มีผล** ต่อความดันไอของของเหลว?",
        options: [
            { text: "ปริมาตรของของเหลว", isCorrect: true },
            { text: "อุณหภูมิ", isCorrect: false },
            { text: "ชนิดของของเหลว", isCorrect: false },
            { text: "แรงยึดเหนี่ยวระหว่างโมเลกุล", isCorrect: false }
        ],
        explanation: "ปริมาตรและรูปร่างของภาชนะไม่มีผลต่อความดันไอ ปัจจัยที่มีผลคือ อุณหภูมิ และ ชนิดของสาร (แรงยึดเหนี่ยว)"
    },
    {
        question: "อุณหภูมิที่ 'ความดันไอของของเหลว' มีค่าเท่ากับ 'ความดันบรรยากาศเหนือของเหลว' เรียกว่าอะไร?",
        options: [
            { text: "จุดเดือด (Boiling point)", isCorrect: true },
            { text: "จุดหลอมเหลว (Melting point)", isCorrect: false },
            { text: "จุดควบแน่น (Condensation point)", isCorrect: false },
            { text: "จุดเยือกแข็ง (Freezing point)", isCorrect: false }
        ],
        explanation: "นิยามของจุดเดือด คืออุณหภูมิที่ความดันไอของของเหลวเท่ากับความดันบรรยากาศเหนือของเหลวนั้น"
    },
    {
        question: "ของแข็งประเภทใดที่ตอนเป็นของแข็งไม่นำไฟฟ้า แต่เมื่อหลอมเหลวหรือละลายน้ำจะสามารถนำไฟฟ้าได้?",
        options: [
            { text: "ของแข็งไอออนิก", isCorrect: true },
            { text: "ของแข็งโคเวเลนต์ร่างตาข่าย", isCorrect: false },
            { text: "ของแข็งโมเลกุล", isCorrect: false },
            { text: "ของแข็งโลหะ", isCorrect: false }
        ],
        explanation: "ผลึกไอออนิกในสถานะของแข็ง ไอออนจะถูกยึดแน่น แต่เมื่อหลอมเหลวหรือละลายน้ำ ไอออนจะเคลื่อนที่ได้อิสระ จึงนำไฟฟ้าได้"
    },
    {
        question: "ปรากฏการณ์ที่ของแข็งเปลี่ยนสถานะเป็นไอโดยไม่ผ่านการเป็นของเหลว เรียกว่าอะไร?",
        options: [
            { text: "การระเหิด (Sublimation)", isCorrect: true },
            { text: "การหลอมเหลว (Melting)", isCorrect: false },
            { text: "การระเหย (Evaporation)", isCorrect: false },
            { text: "การควบแน่น (Condensation)", isCorrect: false }
        ],
        explanation: "การระเหิด คือการที่สารเปลี่ยนสถานะจากของแข็งกลายเป็นไอ (ก๊าซ) โดยตรง เช่น ลูกเหม็น หรือ น้ำแข็งแห้ง"
    },
    {
        question: "เหตุใดน้ำแข็ง (H₂O ของแข็ง) จึงมีความหนาแน่นน้อยกว่าน้ำ (H₂O ของเหลว)?",
        options: [
            { text: "เกิดพันธะไฮโดรเจนจัดเรียงตัวเป็นโครงร่างผลึกโปร่งมีช่องว่าง", isCorrect: true },
            { text: "โมเลกุลของน้ำมีขนาดใหญ่ขึ้นเมื่ออุณหภูมิลดลง", isCorrect: false },
            { text: "พันธะโคเวเลนต์ภายในโมเลกุลยืดออก", isCorrect: false },
            { text: "มวลของน้ำลดลงเมื่อกลายเป็นน้ำแข็ง", isCorrect: false }
        ],
        explanation: "เมื่อน้ำแข็งตัว โมเลกุลจะจัดเรียงตัวด้วยพันธะไฮโดรเจนเป็นรูปหกเหลี่ยมโปร่ง ทำให้มีช่องว่างมาก ปริมาตรจึงเพิ่มขึ้น ความหนาแน่นจึงลดลง"
    },
    {
        question: "ความตึงผิว (Surface tension) ของของเหลว เกิดจากแรงประเภทใด?",
        options: [
            { text: "แรงยึดเหนี่ยวระหว่างโมเลกุลของของเหลว (Cohesive force)", isCorrect: true },
            { text: "แรงดึงดูดระหว่างของเหลวกับภาชนะ (Adhesive force)", isCorrect: false },
            { text: "แรงดึงดูดของโลกที่กระทำต่อผิวของเหลว", isCorrect: false },
            { text: "แรงผลักระหว่างอนุภาคที่ผิวหน้า", isCorrect: false }
        ],
        explanation: "ความตึงผิวเกิดจากแรงดึงดูดระหว่างโมเลกุลชนิดเดียวกัน (Cohesion) ดึงรั้งโมเลกุลที่ผิวหน้าให้พยายามมีพื้นที่ผิวน้อยที่สุด"
    },
    {
        question: "เหตุใดโลหะจึงนำไฟฟ้าและความร้อนได้ดีมากในสถานะของแข็ง?",
        options: [
            { text: "มีเวเลนซ์อิเล็กตรอนที่เคลื่อนที่ได้อย่างอิสระทั่วทั้งก้อน (ทะเลอิเล็กตรอน)", isCorrect: true },
            { text: "มีพันธะโคเวเลนต์ที่แข็งแรงมาก", isCorrect: false },
            { text: "มีไอออนบวกและลบเรียงสลับกัน", isCorrect: false },
            { text: "โมเลกุลมีการสั่นสะเทือนรุนแรงตลอดเวลา", isCorrect: false }
        ],
        explanation: "พันธะโลหะอธิบายด้วยแบบจำลองทะเลอิเล็กตรอน อิเล็กตรอนที่เคลื่อนที่ได้อิสระทำหน้าที่นำไฟฟ้าและความร้อนได้ดี"
    },
    {
        question: "สารในข้อใดจัดเป็น 'ของแข็งโคเวเลนต์ร่างตาข่าย' (Network covalent solid)?",
        options: [
            { text: "เพชร (C)", isCorrect: true },
            { text: "น้ำแข็งแห้ง (CO₂)", isCorrect: false },
            { text: "เกลือแกง (NaCl)", isCorrect: false },
            { text: "ทองคำ (Au)", isCorrect: false }
        ],
        explanation: "เพชรและแกรไฟต์เป็นผลึกโคเวเลนต์ร่างตาข่ายที่อะตอมคาร์บอนต่อกันเป็นร่างแหตาข่าย ส่วนน้ำแข็งแห้งเป็นผลึกโมเลกุล เกลือเป็นไอออนิก"
    }
];

// สถานะของแอพ (State Variables)
let quizData = {
    userInfo: {},
    questions: [],
    currentQuestionIndex: 0,
    answers: {}, // เก็บ { indexข้อ: ค่าตัวเลือกที่ตอบ }
    timeRemaining: 600, // 10 นาที (วินาที)
    timeSpentPerQuestion: {}
};

let timerInterval;

// DOM Elements
const screens = {
    register: document.getElementById('registerScreen'),
    quiz: document.getElementById('quizScreen'),
    result: document.getElementById('resultScreen')
};
const els = {
    form: document.getElementById('userForm'),
    resumeBtn: document.getElementById('resumeBtn'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    progressBar: document.getElementById('progressBar'),
    questionCount: document.getElementById('questionCount'),
    timer: document.getElementById('timer'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn'),
    confirmModal: document.getElementById('confirmModal'),
    cancelSubmit: document.getElementById('cancelSubmit'),
    confirmSubmit: document.getElementById('confirmSubmit'),
    unansweredWarning: document.getElementById('unansweredWarning'),
    scoreText: document.getElementById('scoreText'),
    userInfoDisplay: document.getElementById('userInfoDisplay'),
    wrongAnswersContainer: document.getElementById('wrongAnswersContainer'),
    restartBtn: document.getElementById('restartBtn'),
    darkModeBtn: document.getElementById('darkModeBtn')
};

// --- Utilities: ฟังก์ชันสุ่ม (Fisher-Yates Shuffle) ---
function shuffleArray(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- Initialization ---
function init() {
    checkDarkMode();
    const savedData = localStorage.getItem('chemistryQuizState');
    if (savedData) {
        els.resumeBtn.classList.remove('hidden');
    }
}

// --- Dark Mode ---
function checkDarkMode() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        els.darkModeBtn.textContent = '☀️ Light Mode';
    }
}
els.darkModeBtn.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        els.darkModeBtn.textContent = '🌙 Dark Mode';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        els.darkModeBtn.textContent = '☀️ Light Mode';
    }
});

// --- เริ่มทำข้อสอบใหม่ ---
els.form.addEventListener('submit', (e) => {
    e.preventDefault();
    quizData.userInfo = {
        name: document.getElementById('fname').value + ' ' + document.getElementById('lname').value,
        class: document.getElementById('studentClass').value,
        number: document.getElementById('studentNumber').value
    };
    
    // เตรียมข้อมูลข้อสอบ: สุ่มข้อ และสุ่มตัวเลือก
    quizData.questions = shuffleArray(rawQuestions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
    }));
    
    quizData.currentQuestionIndex = 0;
    quizData.answers = {};
    quizData.timeRemaining = 600;
    quizData.timeSpentPerQuestion = {};
    
    saveState();
    startQuiz();
});

// --- ทำต่อจากที่ค้าง ---
els.resumeBtn.addEventListener('click', () => {
    const savedData = JSON.parse(localStorage.getItem('chemistryQuizState'));
    if (savedData) {
        quizData = savedData;
        startQuiz();
    }
});

function startQuiz() {
    switchScreen('quiz');
    renderQuestion();
    startTimer();
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// --- แสดงคำถาม ---
function renderQuestion() {
    const qIndex = quizData.currentQuestionIndex;
    const question = quizData.questions[qIndex];
    
    // อัปเดต UI หัวข้อ
    els.questionCount.textContent = `ข้อ ${qIndex + 1} / ${quizData.questions.length}`;
    els.progressBar.style.width = `${((qIndex + 1) / quizData.questions.length) * 100}%`;
    els.questionText.textContent = `${qIndex + 1}. ${question.question}`;
    
    // สร้างปุ่มตัวเลือก
    els.optionsContainer.innerHTML = '';
    question.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (quizData.answers[qIndex] === opt.text) {
            btn.classList.add('selected');
        }
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt.text, btn);
        els.optionsContainer.appendChild(btn);
    });

    // จัดการปุ่มนำทาง
    els.prevBtn.style.visibility = qIndex === 0 ? 'hidden' : 'visible';
    
    if (qIndex === quizData.questions.length - 1) {
        els.nextBtn.classList.add('hidden');
        els.submitBtn.classList.remove('hidden');
    } else {
        els.nextBtn.classList.remove('hidden');
        els.submitBtn.classList.add('hidden');
    }
}

// --- เลือกคำตอบ ---
function selectOption(text, btn) {
    const buttons = els.optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    
    quizData.answers[quizData.currentQuestionIndex] = text;
    saveState();
}

// --- นำทาง (ไปหน้า-ย้อนหลัง) ---
els.nextBtn.addEventListener('click', () => {
    if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
        quizData.currentQuestionIndex++;
        renderQuestion();
        saveState();
    }
});
els.prevBtn.addEventListener('click', () => {
    if (quizData.currentQuestionIndex > 0) {
        quizData.currentQuestionIndex--;
        renderQuestion();
        saveState();
    }
});

// --- ระบบจับเวลา ---
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (quizData.timeRemaining > 0) {
            quizData.timeRemaining--;
            
            // เก็บเวลาที่ใช้แต่ละข้อ (เพิ่มวิละ 1 ในข้อปัจจุบัน)
            let curr = quizData.currentQuestionIndex;
            quizData.timeSpentPerQuestion[curr] = (quizData.timeSpentPerQuestion[curr] || 0) + 1;

            updateTimerUI();
            if (quizData.timeRemaining % 5 === 0) saveState(); // Auto-save ทุก 5 วินาที
        } else {
            clearInterval(timerInterval);
            finishQuiz(); // เวลาหมด ส่งออโต้
        }
    }, 1000);
}

function updateTimerUI() {
    const m = Math.floor(quizData.timeRemaining / 60).toString().padStart(2, '0');
    const s = (quizData.timeRemaining % 60).toString().padStart(2, '0');
    els.timer.textContent = `⏱️ ${m}:${s}`;
    
    if (quizData.timeRemaining <= 60) {
        els.timer.classList.add('warning');
    } else {
        els.timer.classList.remove('warning');
    }
}

// --- ตรวจสอบข้อที่ยังไม่ได้ทำก่อนส่ง ---
els.submitBtn.addEventListener('click', () => {
    const unanswered = [];
    quizData.questions.forEach((q, index) => {
        if (!quizData.answers[index]) unanswered.push(index + 1);
    });

    if (unanswered.length > 0) {
        els.unansweredWarning.textContent = `คุณยังไม่ได้ตอบข้อ: ${unanswered.join(', ')} ต้องการส่งข้อสอบเลยหรือไม่?`;
        els.confirmModal.classList.remove('hidden');
    } else {
        els.unansweredWarning.textContent = "คุณทำข้อสอบครบทุกข้อแล้ว ต้องการยืนยันการส่งข้อสอบหรือไม่?";
        els.confirmModal.classList.remove('hidden');
    }
});

els.cancelSubmit.addEventListener('click', () => {
    els.confirmModal.classList.add('hidden');
});

els.confirmSubmit.addEventListener('click', () => {
    els.confirmModal.classList.add('hidden');
    finishQuiz();
});

// --- ประมวลผลและแสดงผลลัพธ์ ---
function finishQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    let wrongAnswersHTML = '';

    quizData.questions.forEach((q, index) => {
        const userAnswer = quizData.answers[index];
        const correctOption = q.options.find(opt => opt.isCorrect).text;

        if (userAnswer === correctOption) {
            score++;
        } else {
            // สร้าง HTML เฉลยข้อผิด
            wrongAnswersHTML += `
                <div class="wrong-item">
                    <p><strong>ข้อ ${index + 1}:</strong> ${q.question}</p>
                    <p>❌ คำตอบของคุณ: ${userAnswer || '<span style="color:var(--danger)">ไม่ได้ตอบ</span>'}</p>
                    <p class="correct-ans">✅ คำตอบที่ถูกต้อง: ${correctOption}</p>
                    <p class="explanation">💡 ${q.explanation}</p>
                </div>
            `;
        }
    });

    // แสดงผล
    els.userInfoDisplay.innerHTML = `<p><strong>ผู้เข้าสอบ:</strong> ${quizData.userInfo.name} <strong>ชั้น:</strong> ${quizData.userInfo.class} <strong>เลขที่:</strong> ${quizData.userInfo.number}</p>`;
    els.scoreText.textContent = `${score} / ${quizData.questions.length}`;
    
    if (wrongAnswersHTML === '') {
        els.wrongAnswersContainer.innerHTML = '<h3>🎉 ยอดเยี่ยมมาก! คุณตอบถูกทุกข้อ</h3>';
    } else {
        els.wrongAnswersContainer.innerHTML = '<h3>💡 ทบทวนข้อที่ตอบผิด</h3>' + wrongAnswersHTML;
    }

    switchScreen('result');
    localStorage.removeItem('chemistryQuizState'); // ล้างข้อมูลเมื่อสอบเสร็จ
}

// --- การบันทึกและล้างข้อมูล ---
function saveState() {
    localStorage.setItem('chemistryQuizState', JSON.stringify(quizData));
}

els.restartBtn.addEventListener('click', () => {
    location.reload(); // โหลดหน้าใหม่
});

// รันเมื่อโหลดหน้า
init();
