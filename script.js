// 1. ชุดข้อสอบ เรื่องของแข็งและของเหลว
const originalQuestions = [
    {
        q: "ข้อใดคือลักษณะสำคัญของ 'ของแข็งอสัณฐาน' (Amorphous solid)?",
        o: ["มีการจัดเรียงอนุภาคอย่างเป็นระเบียบ", "มีจุดหลอมเหลวที่แน่นอน", "ไม่มีรูปทรงเรขาคณิตที่แน่นอน", "นำไฟฟ้าได้ดีมาก"],
        a: "ไม่มีรูปทรงเรขาคณิตที่แน่นอน",
        exp: "ของแข็งอสัณฐาน (เช่น แก้ว ยาง พลาสติก) อนุภาคจะจัดเรียงตัวไม่เป็นระเบียบ ทำให้ไม่มีรูปผลึกที่แน่นอนและจุดหลอมเหลวไม่คงที่"
    },
    {
        q: "ปรากฏการณ์ที่ของเหลวสามารถไหลขึ้นไปในหลอดทดลองขนาดเล็กได้ เรียกว่าอะไร?",
        o: ["ความหนืด (Viscosity)", "แรงตึงผิว (Surface tension)", "การระเหย (Evaporation)", "การซึมตามรูเล็ก (Capillary action)"],
        a: "การซึมตามรูเล็ก (Capillary action)",
        exp: "Capillary action เกิดจากความสมดุลระหว่างแรงเชื่อมแน่น (Cohesion) และแรงยึดติด (Adhesion)"
    },
    {
        q: "ปัจจัยใดที่ทำให้ความหนืด (Viscosity) ของของเหลว 'ลดลง'?",
        o: ["การลดอุณหภูมิ", "การเพิ่มอุณหภูมิ", "การเพิ่มมวลโมเลกุล", "การเพิ่มแรงยึดเหนี่ยวระหว่างโมเลกุล"],
        a: "การเพิ่มอุณหภูมิ",
        exp: "เมื่ออุณหภูมิสูงขึ้น พลังงานจลน์ของโมเลกุลจะมากขึ้น ทำให้เอาชนะแรงยึดเหนี่ยวระหว่างโมเลกุลได้ ของเหลวจึงไหลได้ง่ายขึ้น (ความหนืดลดลง)"
    },
    {
        q: "แมลงสามารถเดินบนผิวน้ำได้ เกิดจากสมบัติใดของของเหลว?",
        o: ["แรงตึงผิว", "ความหนืด", "การระเหย", "ความดันไอ"],
        a: "แรงตึงผิว",
        exp: "แรงตึงผิวเกิดจากแรงดึงดูดระหว่างโมเลกุลที่ผิวหน้าของของเหลว พยายามดึงตัวเข้าหากันให้มีพื้นที่ผิวน้อยที่สุด คล้ายแผ่นฟิล์มบางๆ"
    },
    {
        q: "ข้อใดจัดเป็น 'ผลึกโครงร่างตาข่าย' (Covalent network solid)?",
        o: ["น้ำแข็ง", "เพชร", "เกลือแกง", "ทองแดง"],
        a: "เพชร",
        exp: "เพชร แกรไฟต์ และควอตซ์ เป็นผลึกโครงร่างตาข่ายที่อะตอมยึดเหนี่ยวกันด้วยพันธะโคเวเลนต์ทั้งหมด แข็งแรงมากและจุดหลอมเหลวสูง"
    },
    {
        q: "นิยามของ 'จุดเดือด' (Boiling point) ที่ถูกต้องที่สุดคือข้อใด?",
        o: ["อุณหภูมิที่ของเหลวเริ่มกลายเป็นไอ", "อุณหภูมิที่ของเหลวมีความหนืดน้อยที่สุด", "อุณหภูมิที่ความดันไอของของเหลวเท่ากับความดันบรรยากาศ", "อุณหภูมิที่โมเลกุลหยุดนิ่ง"],
        a: "อุณหภูมิที่ความดันไอของของเหลวเท่ากับความดันบรรยากาศ",
        exp: "เมื่อความดันไอเท่ากับความดันบรรยากาศภายนอก ของเหลวจะเดือดและกลายเป็นไอได้ทั่วทั้งของเหลว ไม่ใช่แค่ที่ผิวหน้า"
    },
    {
        q: "ผลึกโลหะนำไฟฟ้าได้ดีเพราะเหตุใด?",
        o: ["มีไอออนบวกและลบเคลื่อนที่ได้", "มีอิเล็กตรอนอิสระ (Sea of electrons) เคลื่อนที่ได้ทั่วทั้งก้อน", "มีพันธะไฮโดรเจนที่แข็งแรง", "มีช่องว่างในโครงสร้างเยอะ"],
        a: "มีอิเล็กตรอนอิสระ (Sea of electrons) เคลื่อนที่ได้ทั่วทั้งก้อน",
        exp: "แบบจำลองทะเลอิเล็กตรอนอธิบายว่า เวเลนซ์อิเล็กตรอนของโลหะสามารถเคลื่อนที่ไปมาได้อย่างอิสระ ทำให้ส่งผ่านประจุไฟฟ้าและความร้อนได้ดี"
    },
    {
        q: "การระเหย (Evaporation) ต่างจากการเดือด (Boiling) อย่างไร?",
        o: ["การระเหยเกิดได้ทุกอุณหภูมิ แต่เกิดเฉพาะที่ผิวหน้าของเหลว", "การระเหยต้องใช้อุณหภูมิสูงกว่าจุดเดือด", "การระเหยเกิดทั่วทุกส่วนของของเหลว", "การระเหยเป็นการเปลี่ยนสถานะจากของแข็งเป็นไอ"],
        a: "การระเหยเกิดได้ทุกอุณหภูมิ แต่เกิดเฉพาะที่ผิวหน้าของเหลว",
        exp: "การระเหยเกิดบริเวณผิวหน้าและเกิดได้ทุกอุณหภูมิ ส่วนการเดือดเกิดเมื่ออุณหภูมิถึงจุดเดือดและเกิดทั่วทั้งภาชนะ"
    },
    {
        q: "น้ำแข็งแห้ง (Dry ice) เกิดการเปลี่ยนสถานะแบบใด?",
        o: ["การหลอมเหลว (Melting)", "การระเหิด (Sublimation)", "การควบแน่น (Condensation)", "การแข็งตัว (Freezing)"],
        a: "การระเหิด (Sublimation)",
        exp: "น้ำแข็งแห้ง (CO2 แข็ง) จะเปลี่ยนสถานะจากของแข็งเป็นก๊าซโดยตรง เรียกว่า การระเหิด"
    },
    {
        q: "ในของเหลวชนิดเดียวกัน หากพื้นที่ผิวสัมผัสมีขนาดใหญ่ขึ้น จะส่งผลต่ออัตราการระเหยอย่างไร?",
        o: ["อัตราการระเหยลดลง", "อัตราการระเหยเพิ่มขึ้น", "อัตราการระเหยคงที่", "ไม่สามารถระเหยได้"],
        a: "อัตราการระเหยเพิ่มขึ้น",
        exp: "การระเหยเกิดขึ้นที่ผิวหน้าของของเหลว ดังนั้นยิ่งพื้นที่ผิวมาก โมเลกุลก็มีโอกาสหลุดออกจากผิวหน้าได้มากขึ้น"
    }
];

// ตัวแปรสถานะ
let questions = [];
let currentQIndex = 0;
let userAnswers = [];
let userInfo = {};
let timeLeft = 15 * 60; // 15 นาที
let timerInterval;
let questionEntryTime = 0;
let timeSpentArray = new Array(10).fill(0);

// Elements
const el = {
    userInfoSec: document.getElementById('user-info-section'),
    quizSec: document.getElementById('quiz-section'),
    resultSec: document.getElementById('result-section'),
    themeBtn: document.getElementById('theme-toggle'),
    startBtn: document.getElementById('start-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitBtn: document.getElementById('submit-btn'),
    qContainer: document.getElementById('question-container'),
    qText: document.getElementById('question-text'),
    optContainer: document.getElementById('options-container'),
    progressBar: document.getElementById('progress-bar'),
    currentQNum: document.getElementById('current-q-num'),
    timeDisplay: document.getElementById('time-display'),
    summaryModal: document.getElementById('summary-modal'),
    cancelSubmit: document.getElementById('cancel-submit'),
    confirmSubmit: document.getElementById('confirm-submit')
};

// --- Helper: สลับลำดับ Array (Fisher-Yates) ---
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
    // 5. ระบบอัจฉริยะ: สลับข้อและสลับตัวเลือก
    questions = shuffleArray(originalQuestions).map(q => ({
        ...q,
        shuffledOptions: shuffleArray(q.o)
    }));
    userAnswers = new Array(10).fill(null);

    // 5. Auto-save โหลดข้อมูลเดิมถ้ามี
    const savedState = JSON.parse(localStorage.getItem('chemQuizState'));
    if (savedState) {
        if(confirm("พบข้อมูลการทำข้อสอบที่ค้างไว้ ต้องการทำต่อหรือไม่?")) {
            questions = savedState.questions;
            userAnswers = savedState.userAnswers;
            currentQIndex = savedState.currentQIndex;
            timeLeft = savedState.timeLeft;
            userInfo = savedState.userInfo;
            timeSpentArray = savedState.timeSpentArray || new Array(10).fill(0);
            startQuiz(true);
            return;
        } else {
            localStorage.removeItem('chemQuizState');
        }
    }
}

// --- Theme Toggle (Dark Mode) ---
el.themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    el.themeBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// --- เริ่มทำข้อสอบ ---
el.startBtn.addEventListener('click', () => {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const uClass = document.getElementById('user-class').value;
    const roll = document.getElementById('roll-num').value;

    if (!fname || !lname || !uClass || !roll) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วนก่อนเริ่มทำข้อสอบนะคะ 🎀");
        return;
    }

    userInfo = { fname, lname, class: uClass, roll };
    startQuiz();
});

function startQuiz(resume = false) {
    el.userInfoSec.classList.remove('active');
    el.userInfoSec.classList.add('hidden');
    el.quizSec.classList.remove('hidden');
    el.quizSec.classList.add('active');

    loadQuestion();
    startTimer();
    questionEntryTime = Date.now();
}

// --- โหลดคำถาม ---
function loadQuestion() {
    const q = questions[currentQIndex];
    el.qText.innerText = `${currentQIndex + 1}. ${q.q}`;
    el.currentQNum.innerText = currentQIndex + 1;
    
    // Progress Bar
    const progress = ((currentQIndex + 1) / questions.length) * 100;
    el.progressBar.style.width = `${progress}%`;

    // Render Options
    el.optContainer.innerHTML = '';
    q.shuffledOptions.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        if (userAnswers[currentQIndex] === opt) {
            btn.classList.add('selected');
        }
        btn.onclick = () => selectOption(opt);
        el.optContainer.appendChild(btn);
    });

    // ปุ่ม Nav
    el.prevBtn.disabled = currentQIndex === 0;
    
    if (currentQIndex === questions.length - 1) {
        el.nextBtn.classList.add('hidden');
        el.submitBtn.classList.remove('hidden');
    } else {
        el.nextBtn.classList.remove('hidden');
        el.submitBtn.classList.add('hidden');
    }
}

// --- เลือกคำตอบ ---
function selectOption(opt) {
    userAnswers[currentQIndex] = opt;
    // อัปเดต UI ทันที
    Array.from(el.optContainer.children).forEach(btn => {
        btn.classList.remove('selected');
        if (btn.innerText === opt) btn.classList.add('selected');
    });
    saveState();
}

// --- เปลี่ยนข้อ ---
function changeQuestion(dir) {
    // 5. เก็บเวลาที่ใช้แต่ละข้อ
    const timeSpent = Math.floor((Date.now() - questionEntryTime) / 1000);
    timeSpentArray[currentQIndex] += timeSpent;

    currentQIndex += dir;
    questionEntryTime = Date.now();
    loadQuestion();
    saveState();
}

el.prevBtn.addEventListener('click', () => changeQuestion(-1));
el.nextBtn.addEventListener('click', () => changeQuestion(1));

// --- Timer ---
function startTimer() {
    updateTimeDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimeDisplay();

        if (timeLeft <= 60) {
            document.querySelector('.timer').classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏰ หมดเวลาแล้ว ระบบจะส่งข้อสอบอัตโนมัติ!");
            submitQuiz();
        }
        saveState();
    }, 1000);
}

function updateTimeDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    el.timeDisplay.innerText = `${m}:${s}`;
}

// --- Auto Save ---
function saveState() {
    const state = { questions, userAnswers, currentQIndex, timeLeft, userInfo, timeSpentArray };
    localStorage.setItem('chemQuizState', JSON.stringify(state));
}

// --- ส่งข้อสอบ ---
el.submitBtn.addEventListener('click', () => {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        document.getElementById('unanswered-text').innerHTML = `ยังมีข้อที่ยังไม่ได้ตอบอีก <b>${unanswered}</b> ข้อนะคะ 🥺<br>แน่ใจนะว่าจะส่งเลย?`;
    } else {
        document.getElementById('unanswered-text').innerHTML = `คุณตอบครบทุกข้อแล้ว เก่งมาก! ✨<br>พร้อมดูคะแนนหรือยังคะ?`;
    }
    el.summaryModal.classList.remove('hidden');
});

el.cancelSubmit.addEventListener('click', () => el.summaryModal.classList.add('hidden'));

el.confirmSubmit.addEventListener('click', () => {
    el.summaryModal.classList.add('hidden');
    clearInterval(timerInterval);
    submitQuiz();
});

function submitQuiz() {
    localStorage.removeItem('chemQuizState'); // เคลียร์เซฟ
    el.quizSec.classList.remove('active');
    el.quizSec.classList.add('hidden');
    el.resultSec.classList.remove('hidden');
    el.resultSec.classList.add('active');

    // ตรวจคะแนน
    let score = 0;
    const reviewDiv = document.getElementById('review-container');
    reviewDiv.innerHTML = '<h3>📝 เฉลยข้อที่ผิด</h3>';
    let hasWrong = false;

    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer === q.a) {
            score++;
        } else {
            hasWrong = true;
            reviewDiv.innerHTML += `
                <div class="review-item">
                    <p><b>ข้อ ${index + 1}: ${q.q}</b></p>
                    <p style="color: var(--danger-color)">❌ คุณตอบ: ${userAnswer || 'ไม่ได้ตอบ'}</p>
                    <p style="color: var(--success-color)">✅ คำตอบที่ถูก: ${q.a}</p>
                    <p style="font-size: 0.9em; margin-top:5px;">💡 <b>คำอธิบาย:</b> ${q.exp}</p>
                </div>
            `;
        }
    });

    if (!hasWrong) {
        reviewDiv.innerHTML += `<p style="text-align:center; margin-top:10px;">เก่งมาก! ตอบถูกทุกข้อเลย 🎉✨</p>`;
    }

    // แสดงข้อมูลผู้ใช้
    document.getElementById('user-summary').innerHTML = `
        <p><b>ชื่อ:</b> ${userInfo.fname} ${userInfo.lname} <b>ชั้น:</b> ${userInfo.class} <b>เลขที่:</b> ${userInfo.roll}</p>
    `;

    // แสดงคะแนนและหลอด %
    document.getElementById('score-display').innerText = score;
    const percent = (score / 10) * 100;
    setTimeout(() => {
        document.getElementById('percent-bar').style.width = `${percent}%`;
        document.getElementById('percent-text').innerText = `${percent}%`;
    }, 500);

    // คำนวณเวลาที่ใช้ไปทั้งหมด
    const totalTimeUsed = (15 * 60) - Math.max(0, timeLeft);
    const m = Math.floor(totalTimeUsed / 60).toString().padStart(2, '0');
    const s = (totalTimeUsed % 60).toString().padStart(2, '0');
    document.getElementById('total-time-spent').innerText = `${m}:${s} นาที`;
}

// ทำใหม่อีกครั้ง
document.getElementById('restart-btn').addEventListener('click', () => {
    location.reload();
});

// เริ่มต้นระบบ
init();
