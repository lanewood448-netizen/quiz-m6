// --- ข้อมูลข้อสอบ ---
const questions = [
    {
        q: "สารในสถานะของแข็งมีลักษณะเด่นอย่างไรเมื่อเทียบกับสถานะอื่น?",
        options: ["รูปร่างเปลี่ยนตามภาชนะ", "อนุภาคอยู่ห่างกันมาก", "แรงยึดเหนี่ยวระหว่างอนุภาคสูงมาก", "ปริมาตรไม่คงที่"],
        correct: 2,
        explain: "ของแข็งมีแรงยึดเหนี่ยวสูง ทำให้อนุภาคอยู่ชิดกันและคงรูปร่างได้ดี"
    },
    {
        q: "ของแข็งในข้อใดจัดเป็น 'ของแข็งอสัณฐาน' (Amorphous Solid)?",
        options: ["น้ำแข็ง", "แก้ว", "เกลือแกง", "เพชร"],
        correct: 1,
        explain: "แก้วไม่มีการจัดเรียงอนุภาคที่เป็นระเบียบยาวต่อเนื่อง จึงเป็นของแข็งอสัณฐาน"
    },
    {
        q: "ปรากฏการณ์ที่ของเหลวไหลทวนแรงโน้มถ่วงในหลอดรูเล็กเรียกว่าอะไร?",
        options: ["แรงตึงผิว", "ความหนืด", "การระเหย", "แคพิลลารี (Capillary action)"],
        correct: 3,
        explain: "Capillary action เกิดจากแรงเชื่อมแน่นและแรงยึดติด"
    },
    {
        q: "ปัจจัยใดต่อไปนี้มีผลทำให้ 'ความหนืด' ของของเหลวลดลง?",
        options: ["การเพิ่มอุณหภูมิ", "การเพิ่มความดัน", "การเพิ่มมวลโมเลกุล", "แรงดึงดูดระหว่างโมเลกุลที่มากขึ้น"],
        correct: 0,
        explain: "เมื่ออุณหภูมิสูงขึ้น พลังงานจลน์จะชนะแรงยึดเหนี่ยวทำให้ไหลได้ง่ายขึ้น"
    },
    {
        q: "จุดเดือดของของเหลวคือสภาวะที่?",
        options: ["อุณหภูมิเท่ากับ 100 องศาเสมอ", "ความดันไอเท่ากับความดันบรรยากาศ", "โมเลกุลหยุดเคลื่อนที่", "เกิดการหลอมเหลว"],
        correct: 1,
        explain: "จุดเดือดคืออุณหภูมิที่ความดันไอของของเหลวเท่ากับความดันภายนอก"
    },
    {
        q: "โครงสร้างของเพชรจัดเป็นผลึกประเภทใด?",
        options: ["ผลึกโมเลกุล", "ผลึกไอออนิก", "ผลึกร่างตาข่าย", "ผลึกโลหะ"],
        correct: 2,
        explain: "เพชรเกิดจากคาร์บอนต่อกันด้วยพันธะโคเวเลนต์เป็นโครงร่างตาข่าย"
    },
    {
        q: "ข้อใดคือคุณสมบัติของ 'แรงตึงผิว'?",
        options: ["พยายามขยายพื้นที่ผิว", "ทำให้ของเหลวมีรูปร่างแบนเสมอ", "พยายามลดพื้นที่ผิวให้เหลือน้อยที่สุด", "ไม่มีผลต่อแมลงที่เดินบนน้ำ"],
        correct: 2,
        explain: "แรงตึงผิวจะดึงรั้งโมเลกุลที่ผิวหน้าเพื่อลดพื้นที่ผิว (ทำให้หยดน้ำเป็นทรงกลม)"
    },
    {
        q: "การระเหยเกิดขึ้นที่บริเวณใดของของเหลว?",
        options: ["ก้นภาชนะ", "ทั่วทุกส่วน", "เฉพาะผิวหน้า", "จุดกึ่งกลาง"],
        correct: 2,
        explain: "การระเหยคือการที่โมเลกุลบริเวณ 'ผิวหน้า' หลุดออกไปเป็นแก๊ส"
    },
    {
        q: "ของแข็งไอออนิกมีสมบัติเด่นในข้อใด?",
        options: ["นำไฟฟ้าได้ดีเมื่อเป็นของแข็ง", "จุดหลอมเหลวต่ำ", "เปราะและแตกง่าย", "ระเหิดได้ง่าย"],
        correct: 2,
        explain: "ผลึกไอออนิกแข็งแต่เปราะ เมื่อมีแรงกระทำประจุชนิดเดียวกันจะผลักกันจนแตกออก"
    },
    {
        q: "น้ำมีจุดเดือดสูงกว่า H2S เพราะเหตุผลใด?",
        options: ["น้ำมีพันธะไฮโดรเจน", "น้ำมีมวลโมเลกุลมากกว่า", "H2S เป็นของแข็ง", "น้ำเป็นสารประกอบไอออนิก"],
        correct: 0,
        explain: "พันธะไฮโดรเจนในน้ำแข็งแรงมาก ทำให้ต้องใช้พลังงานสูงในการทำลายเพื่อเดือด"
    }
];

// --- ตัวแปรควบคุม ---
let currentIdx = 0;
let userAnswers = new Array(questions.length).fill(null);
let shuffledQuestions = [];
let timeLeft = 600; // 10 นาที
let timerInterval;
let startTime;
let timeTakenPerQuestion = new Array(questions.length).fill(0);

// --- การจัดการ Theme ---
const toggleSwitch = document.querySelector('#checkbox');
toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
});

// --- เริ่มต้นระบบ ---
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const userData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        grade: document.getElementById('grade').value,
        no: document.getElementById('no').value
    };
    localStorage.setItem('studentInfo', JSON.stringify(userData));
    startQuiz();
});

function startQuiz() {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    
    // สุ่มข้อสอบ
    shuffledQuestions = questions.map((q, i) => ({...q, originalIdx: i}))
                         .sort(() => Math.random() - 0.5);
    
    // สุ่มตัวเลือกในแต่ละข้อ
    shuffledQuestions.forEach(q => {
        let optionsWithMeta = q.options.map((opt, i) => ({text: opt, isCorrect: i === q.correct}));
        optionsWithMeta.sort(() => Math.random() - 0.5);
        q.displayOptions = optionsWithMeta.map(o => o.text);
        q.newCorrectIdx = optionsWithMeta.findIndex(o => o.isCorrect);
    });

    startTime = Date.now();
    renderQuestion();
    startTimer();
}

function renderQuestion() {
    const qData = shuffledQuestions[currentIdx];
    document.getElementById('question-number').innerText = `ข้อที่ ${currentIdx + 1}/${shuffledQuestions.length}`;
    document.getElementById('question-text').innerText = qData.q;
    
    const optionsHtml = qData.displayOptions.map((opt, i) => `
        <button class="option-btn ${userAnswers[currentIdx] === i ? 'selected' : ''}" 
                onclick="selectOption(${i})">
            ${String.fromCharCode(65 + i)}. ${opt}
        </button>
    `).join('');
    
    document.getElementById('options-container').innerHTML = optionsHtml;
    
    // Progress Bar
    const progress = ((currentIdx + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    // ปุ่มควบคุม
    document.getElementById('prev-btn').disabled = currentIdx === 0;
    if (currentIdx === shuffledQuestions.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
}

function selectOption(idx) {
    userAnswers[currentIdx] = idx;
    renderQuestion();
    // Auto-save logic
    localStorage.setItem('tempAnswers', JSON.stringify(userAnswers));
}

document.getElementById('next-btn').onclick = () => {
    if(currentIdx < shuffledQuestions.length - 1) {
        currentIdx++;
        renderQuestion();
    }
};

document.getElementById('prev-btn').onclick = () => {
    if(currentIdx > 0) {
        currentIdx--;
        renderQuestion();
    }
};

// --- Timer ---
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let mins = Math.floor(timeLeft / 60);
        let secs = timeLeft % 60;
        const timerEl = document.getElementById('timer');
        timerEl.innerHTML = `<i class="fas fa-clock"></i> ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (timeLeft <= 60) timerEl.style.color = 'var(--danger)';
        if (timeLeft <= 0) submitQuiz();
    }, 1000);
}

// --- ตรวจคำตอบและแสดงผล ---
document.getElementById('submit-btn').onclick = () => {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`คุณยังไม่ได้ตอบอีก ${unanswered} ข้อ ยืนยันจะส่งหรือไม่?`)) return;
    }
    submitQuiz();
};

function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    const resultContainer = document.getElementById('analysis-container');
    resultContainer.innerHTML = '<h3>การวิเคราะห์คำตอบ:</h3>';

    shuffledQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.newCorrectIdx;
        if (isCorrect) score++;

        resultContainer.innerHTML += `
            <div class="review-item">
                <p><strong>ข้อที่ ${i+1}:</strong> ${q.q}</p>
                <p class="${isCorrect ? 'correct' : 'wrong'}">
                    ${isCorrect ? '✓ ถูกต้อง' : '✗ ผิด (คำตอบที่ถูกคือ: ' + q.displayOptions[q.newCorrectIdx] + ')'}
                </p>
                <small>คำอธิบาย: ${q.explain}</small>
            </div>
        `;
    });

    const student = JSON.parse(localStorage.getItem('studentInfo'));
    document.getElementById('user-summary').innerHTML = `
        <p>ชื่อ-นามสกุล: ${student.fname} ${student.lname}</p>
        <p>ห้อง: ${student.grade} เลขที่: ${student.no}</p>
    `;

    document.getElementById('final-score').innerText = score;
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
}
