// ข้อมูลคำถามเคมี 10 ข้อ
const rawQuestions = [
    {
        q: "สมบัติทั่วไปของของเหลวคือข้อใด?",
        options: ["รูปร่างเปลี่ยนตามภาชนะ ปริมาตรคงที่", "รูปร่างคงที่ ปริมาตรเปลี่ยนตามภาชนะ", "รูปร่างและปริมาตรคงที่", "รูปร่างและปริมาตรเปลี่ยนตามภาชนะ"],
        ansIndex: 0,
        exp: "ของเหลวมีแรงยึดเหนี่ยวระหว่างอนุภาคน้อยกว่าของแข็ง ทำให้โมเลกุลเคลื่อนที่ได้ รูปร่างจึงเปลี่ยนตามภาชนะ แต่ยังมีแรงพอให้ปริมาตรคงที่"
    },
    {
        q: "ของแข็งประเภทใดที่มีการจัดเรียงอนุภาคอย่างเป็นระเบียบ?",
        options: ["ของแข็งอสัณฐาน", "ของแข็งผลึก", "ของเหลวเย็นจัด", "พลาสติก"],
        ansIndex: 1,
        exp: "ของแข็งผลึก (Crystalline solid) มีการจัดเรียงอนุภาคอย่างเป็นระเบียบและมีรูปทรงเรขาคณิตที่แน่นอน"
    },
    {
        q: "ปัจจัยใดไม่มีผลต่อความดันไอของของเหลว?",
        options: ["อุณหภูมิ", "ชนิดของของเหลว", "ปริมาตรของของเหลว", "แรงยึดเหนี่ยวระหว่างโมเลกุล"],
        ansIndex: 2,
        exp: "ปริมาตรของของเหลวหรือขนาดของภาชนะไม่มีผลต่อความดันไอ ปัจจัยหลักคืออุณหภูมิและชนิดของสาร"
    },
    {
        q: "แรงยึดเหนี่ยวระหว่างโมเลกุลในน้ำ (H2O) ส่วนใหญ่คือแรงใด?",
        options: ["แรงลอนดอน", "แรงดึงดูดระหว่างขั้ว", "พันธะไฮโดรเจน", "พันธะไอออนิก"],
        ansIndex: 2,
        exp: "น้ำมีพันธะไฮโดรเจน ซึ่งเป็นแรงยึดเหนี่ยวระหว่างโมเลกุลที่แข็งแรงเป็นพิเศษ เกิดจาก H จับกับ O"
    },
    {
        q: "เมื่ออุณหภูมิเพิ่มขึ้น ความหนืดของของเหลวจะเป็นอย่างไร?",
        options: ["เพิ่มขึ้น", "ลดลง", "คงที่", "เพิ่มขึ้นแล้วลดลง"],
        ansIndex: 1,
        exp: "เมื่ออุณหภูมิสูงขึ้น พลังงานจลน์ของโมเลกุลจะเพิ่มขึ้น ทำให้เอาชนะแรงยึดเหนี่ยวได้ ความหนืดจึงลดลง (ไหลง่ายขึ้น)"
    },
    {
        q: "ปรากฏการณ์ที่ของเหลวสามารถซึมขึ้นไปในหลอดทดลองขนาดเล็กได้เรียกว่าอะไร?",
        options: ["Surface tension", "Viscosity", "Capillary action", "Vapor pressure"],
        ansIndex: 2,
        exp: "Capillary action (การซึมตามรูเล็ก) เกิดจากความสมดุลระหว่างแรงเชื่อมแน่น (Cohesion) และแรงยึดติด (Adhesion)"
    },
    {
        q: "ข้อใดคือลักษณะของของแข็งอสัณฐาน (Amorphous solid)?",
        options: ["มีจุดหลอมเหลวที่แน่นอน", "อนุภาคจัดเรียงเป็นระเบียบ", "มีจุดหลอมเหลวไม่คงที่ช่วงกว้าง", "มีโครงสร้างผลึกที่ชัดเจน"],
        ansIndex: 2,
        exp: "ของแข็งอสัณฐานเรียงตัวไม่เป็นระเบียบ ทำให้แรงยึดเหนี่ยวแต่ละจุดไม่เท่ากัน จึงสลายตัวที่อุณหภูมิต่างกัน (จุดหลอมเหลวไม่คงที่)"
    },
    {
        q: "การระเหย (Evaporation) เกิดขึ้นที่บริเวณใดของของเหลว?",
        options: ["ทั่วทั้งภาชนะ", "ก้นภาชนะ", "เฉพาะบริเวณผิวหน้าของของเหลว", "ตรงกลางของเหลว"],
        ansIndex: 2,
        exp: "การระเหยเกิดขึ้นเฉพาะที่ผิวหน้าของของเหลวเท่านั้น ต่างจากการเดือดที่เกิดทั่วทั้งของเหลว"
    },
    {
        q: "อุณหภูมิที่ความดันไอของของเหลวเท่ากับความดันบรรยากาศ เรียกว่าอะไร?",
        options: ["จุดหลอมเหลว", "จุดควบแน่น", "จุดเดือด", "จุดเยือกแข็ง"],
        ansIndex: 2,
        exp: "จุดเดือดคืออุณหภูมิที่ความดันไอของของเหลวมีค่าเท่ากับความดันบรรยากาศเหนือของเหลวนั้น"
    },
    {
        q: "ความตึงผิวของของเหลวเกิดจากอะไร?",
        options: ["แรงผลักระหว่างโมเลกุล", "แรงดึงดูดระหว่างโมเลกุลที่ผิวหน้าดึงเข้าหากัน", "ความดันบรรยากาศกดทับ", "แรงโน้มถ่วงของโลก"],
        ansIndex: 1,
        exp: "โมเลกุลที่ผิวหน้าถูกดึงดูดจากโมเลกุลด้านข้างและด้านล่าง (ไม่มีด้านบน) ทำให้เกิดแรงดึงเข้าสู่ภายใน หรือความตึงผิว"
    }
];

// ตัวแปรระบบ
let questions = [];
let currentQ = 0;
let userAnswers = new Array(10).fill(null);
let timeSpent = new Array(10).fill(0);
let qStartTime = 0;
let userInfo = {};
let totalSeconds = 600; // 10 นาที
let timerInterval;

// 1. จัดการ User Form
document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    userInfo = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        studentClass: document.getElementById('student-class').value,
        number: document.getElementById('student-number').value
    };
    
    // ตรวจสอบ Auto-save
    const savedAns = localStorage.getItem('chinnabut_ans');
    if(savedAns) userAnswers = JSON.parse(savedAns);

    prepareQuestions();
    switchScreen('login-screen', 'quiz-screen');
    startTimer();
    loadQuestion();
});

// สลับหน้าจอ
function switchScreen(hideId, showId) {
    document.getElementById(hideId).classList.remove('active');
    document.getElementById(showId).classList.add('active');
}

// 2. เตรียมชุดคำถาม (Random ข้อและ Random ตัวเลือก)
function prepareQuestions() {
    let shuffledQ = [...rawQuestions].sort(() => Math.random() - 0.5);
    questions = shuffledQ.map(q => {
        let correctText = q.options[q.ansIndex];
        let shuffledOpts = [...q.options].sort(() => Math.random() - 0.5);
        let newAnsIndex = shuffledOpts.indexOf(correctText);
        return { ...q, options: shuffledOpts, correctIndex: newAnsIndex };
    });
}

// 3. โหลดคำถามปัจจุบัน
function loadQuestion() {
    qStartTime = Date.now();
    
    document.getElementById('question-tracker').innerText = `ข้อ ${currentQ + 1} / 10`;
    document.getElementById('progress-bar').style.width = `${((currentQ) / 10) * 100}%`;
    document.getElementById('question-text').innerText = questions[currentQ].q;
    
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    questions[currentQ].options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = `option ${userAnswers[currentQ] === index ? 'selected' : ''}`;
        div.innerText = opt;
        div.onclick = () => selectOption(index);
        optsContainer.appendChild(div);
    });

    // อัปเดตปุ่ม
    document.getElementById('btn-prev').disabled = currentQ === 0;
    
    if (currentQ === 9) {
        document.getElementById('btn-next').classList.add('hidden');
        document.getElementById('btn-summary').classList.remove('hidden');
    } else {
        document.getElementById('btn-next').classList.remove('hidden');
        document.getElementById('btn-summary').classList.add('hidden');
    }
}

// เลือกคำตอบ
function selectOption(index) {
    userAnswers[currentQ] = index;
    localStorage.setItem('chinnabut_ans', JSON.stringify(userAnswers));
    loadQuestion(); // re-render options
}

// เปลี่ยนข้อ
function nextQuestion() {
    saveTimeSpent();
    if (currentQ < 9) { currentQ++; loadQuestion(); }
}
function prevQuestion() {
    saveTimeSpent();
    if (currentQ > 0) { currentQ--; loadQuestion(); }
}

function saveTimeSpent() {
    timeSpent[currentQ] += (Date.now() - qStartTime) / 1000;
}

// 4. ระบบเวลา
function startTimer() {
    timerInterval = setInterval(() => {
        totalSeconds--;
        let m = Math.floor(totalSeconds / 60);
        let s = totalSeconds % 60;
        let timeString = `${m}:${s < 10 ? '0' : ''}${s}`;
        
        let timerBadge = document.getElementById('timer');
        timerBadge.innerText = `⏱️ ${timeString}`;
        
        if (totalSeconds <= 60) timerBadge.classList.add('danger');
        
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            submitQuiz(); // หมดเวลาส่งอัตโนมัติ
        }
    }, 1000);
}

// 5. หน้าสรุป
function showSummary() {
    saveTimeSpent();
    switchScreen('quiz-screen', 'summary-screen');
    const list = document.getElementById('summary-list');
    list.innerHTML = '';
    
    questions.forEach((q, i) => {
        let status = userAnswers[i] !== null ? '✅ ตอบแล้ว' : '❌ <span style="color:red">ยังไม่ได้ตอบ</span>';
        list.innerHTML += `<div class="summary-item"><span>ข้อ ${i + 1}</span> <span>${status}</span></div>`;
    });
}
function backToQuiz() {
    switchScreen('summary-screen', 'quiz-screen');
    loadQuestion();
}

// 6. ตรวจคำตอบและแสดงผล
function submitQuiz() {
    clearInterval(timerInterval);
    localStorage.removeItem('chinnabut_ans');
    switchScreen('summary-screen', 'result-screen');
    // กรณีหมดเวลาขณะอยู่หน้าควิซ
    if(document.getElementById('quiz-screen').classList.contains('active')) {
        switchScreen('quiz-screen', 'result-screen');
    }

    let score = 0;
    let expHtml = '';

    questions.forEach((q, i) => {
        if (userAnswers[i] === q.correctIndex) {
            score++;
        } else {
            let userAnsText = userAnswers[i] !== null ? q.options[userAnswers[i]] : "ไม่ได้ตอบ";
            expHtml += `
                <div class="exp-card">
                    <b>ข้อ ${i + 1}: ${q.q}</b><br>
                    <span style="color:red">คำตอบคุณ: ${userAnsText}</span><br>
                    <span style="color:green">เฉลย: ${q.options[q.correctIndex]}</span><br>
                    <small><i>อธิบาย: ${q.exp}</i></small>
                </div>
            `;
        }
    });

    document.getElementById('final-score').innerText = score;
    document.getElementById('user-info-display').innerHTML = `
        <h3>ข้อมูลผู้สอบ</h3>
        <p>คุณ ${userInfo.fname} ${userInfo.lname} <br> ชั้น: ${userInfo.studentClass} เลขที่: ${userInfo.number}</p>
        <p>ใช้เวลาไปทั้งหมด: ${Math.floor((600 - totalSeconds)/60)} นาที ${(600 - totalSeconds)%60} วินาที</p>
    `;
    document.getElementById('explanations-container').innerHTML = expHtml;
}

// 7. Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}
