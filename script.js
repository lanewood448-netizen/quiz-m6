// ข้อมูลข้อสอบ (เพิ่มคำอธิบายที่ชัดเจนขึ้น)
const quizData = [
    {
        q: "สารในข้อใดมีแรงยึดเหนี่ยวระหว่างอนุภาคสูงสุด?",
        options: ["ก๊าซออกซิเจน", "น้ำแข็งแห้ง", "เหล็ก", "น้ำ"],
        correct: 2,
        info: "เหล็กเป็นของแข็งประเภทผลึกโลหะ มีแรงยึดเหนี่ยวสูงกว่าสถานะอื่นมาก"
    },
    {
        q: "ของแข็งที่มีการจัดเรียงอนุภาคไม่เป็นระเบียบเรียกว่าอะไร?",
        options: ["ผลึกโมเลกุล", "ของแข็งอสัณฐาน", "ผลึกไอออนิก", "ผลึกโลหะ"],
        correct: 1,
        info: "เช่น แก้ว หรือ พลาสติก เรียกว่า Amorphous solid"
    },
    {
        q: "ของเหลวชนิดใดมี 'ความตึงผิว' สูงที่สุด?",
        options: ["แอลกอฮอล์", "น้ำเปล่า", "ปรอท", "น้ำมันพืช"],
        correct: 2,
        info: "ปรอทมีแรงดึงดูดระหว่างอะตอมสูงมาก ทำให้มีแรงตึงผิวสูงกว่าของเหลวทั่วไป"
    },
    {
        q: "เมื่ออุณหภูมิเพิ่มขึ้น 'ความหนืด' ของของเหลวจะเป็นอย่างไร?",
        options: ["เพิ่มขึ้น", "ลดลง", "คงที่", "เท่ากับศูนย์"],
        correct: 1,
        info: "อุณหภูมิสูงขึ้นช่วยลดแรงต้านการไหล ทำให้ความหนืดลดลง"
    },
    {
        q: "การระเหยของของเหลวเกิดขึ้นได้ที่สภาวะใด?",
        options: ["ที่จุดเดือดเท่านั้น", "ที่อุณหภูมิใดๆ", "เฉพาะในที่มืด", "เมื่อความดันสูงมาก"],
        correct: 1,
        info: "การระเหยเกิดได้ทุกอุณหภูมิที่มีโมเลกุลผิวหน้าชนะแรงยึดเหนี่ยว"
    },
    {
        q: "ผลึกเพชรมีโครงสร้างแบบใด?",
        options: ["ไอออนิก", "โครงร่างตาข่าย", "โมเลกุลยึดด้วยแรงแวนเดอร์วาลส์", "โลหะ"],
        correct: 1,
        info: "เพชรเป็นผลึกร่างตาข่ายที่แข็งแรงที่สุด"
    },
    {
        q: "ปรากฏการณ์ที่ของเหลวไหลขึ้นตามหลอดรูเล็กๆ คืออะไร?",
        options: ["การแพร่", "Capillary Action", "ออสโมซิส", "การควบแน่น"],
        correct: 1,
        info: "เกิดจากแรง Adhesive และ Cohesive ทำงานร่วมกัน"
    },
    {
        q: "ข้อใดไม่ใช่คุณสมบัติของของแข็ง?",
        options: ["ปริมาตรคงที่", "รูปร่างคงที่", "ฟุ้งกระจายเต็มภาชนะ", "แรงยึดเหนี่ยวสูง"],
        correct: 2,
        info: "การฟุ้งกระจายเต็มภาชนะเป็นสมบัติของแก๊ส"
    },
    {
        q: "จุดเดือดของของเหลวจะเปลี่ยนไปอย่างไรเมื่อความดันบรรยากาศลดลง?",
        options: ["จุดเดือดสูงขึ้น", "จุดเดือดต่ำลง", "จุดเดือดคงที่", "ไม่สามารถหาได้"],
        correct: 1,
        info: "ความดันต่ำลง ทำให้โมเลกุลกลายเป็นไอได้ง่ายขึ้น จุดเดือดจึงต่ำลง"
    },
    {
        q: "เกลือแกง (NaCl) จัดเป็นของแข็งประเภทใด?",
        options: ["ผลึกโลหะ", "ผลึกร่างตาข่าย", "ผลึกไอออนิก", "ผลึกโมเลกุล"],
        correct: 2,
        info: "NaCl เกิดจากแรงดึงดูดทางไฟฟ้าของประจุบวกและลบ จึงเป็นผลึกไอออนิก"
    }
];

let currentIdx = 0;
let userAnswers = new Array(quizData.length).fill(null);
let shuffledData = [];
let timer;
let secondsLeft = 600;

// Theme Toggle
document.getElementById('theme-toggle').onclick = () => {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('#theme-toggle i').className = 'fas fa-sun';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        document.documentElement.removeAttribute('data-theme');
        document.querySelector('#theme-toggle i').className = 'fas fa-moon';
    }
};

// Start Quiz
document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    const info = {
        name: `${document.getElementById('fname').value} ${document.getElementById('lname').value}`,
        room: document.getElementById('grade').value,
        no: document.getElementById('no').value
    };
    localStorage.setItem('student', JSON.stringify(info));
    
    // Shuffle
    shuffledData = [...quizData].sort(() => Math.random() - 0.5);
    
    switchSection('auth-section', 'quiz-section');
    renderQuestion();
    startTimer();
};

function switchSection(from, to) {
    document.getElementById(from).classList.remove('active');
    setTimeout(() => {
        document.getElementById(from).style.display = 'none';
        document.getElementById(to).style.display = 'flex';
        setTimeout(() => document.getElementById(to).classList.add('active'), 50);
    }, 400);
}

function renderQuestion() {
    const data = shuffledData[currentIdx];
    document.getElementById('q-count').innerText = `${currentIdx + 1} / ${shuffledData.length}`;
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('progress-bar').style.width = `${((currentIdx + 1) / shuffledData.length) * 100}%`;

    const optionsBox = document.getElementById('options-container');
    optionsBox.innerHTML = '';

    data.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${userAnswers[currentIdx] === i ? 'selected' : ''}`;
        btn.innerText = opt;
        btn.onclick = () => {
            userAnswers[currentIdx] = i;
            renderQuestion();
        };
        optionsBox.appendChild(btn);
    });

    document.getElementById('prev-btn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    if (currentIdx === shuffledData.length - 1) {
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('submit-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('submit-btn').classList.add('hidden');
    }
}

document.getElementById('next-btn').onclick = () => { currentIdx++; renderQuestion(); };
document.getElementById('prev-btn').onclick = () => { currentIdx--; renderQuestion(); };

function startTimer() {
    timer = setInterval(() => {
        secondsLeft--;
        let m = Math.floor(secondsLeft / 60);
        let s = secondsLeft % 60;
        document.getElementById('timer').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (secondsLeft <= 0) finish();
    }, 1000);
}

document.getElementById('submit-btn').onclick = () => {
    if (userAnswers.includes(null)) {
        if (!confirm('คุณยังทำไม่ครบทุกข้อ ยืนยันจะส่งหรือไม่?')) return;
    }
    finish();
};

function finish() {
    clearInterval(timer);
    let score = 0;
    const analysis = document.getElementById('analysis-list');
    analysis.innerHTML = '';

    shuffledData.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        if (isCorrect) score++;
        
        analysis.innerHTML += `
            <div class="review-card" style="border-left: 5px solid ${isCorrect ? '#28a745' : '#dc3545'}">
                <p><strong>ข้อที่ ${i+1}:</strong> ${q.q}</p>
                <p style="color: ${isCorrect ? '#28a745' : '#dc3545'}">
                    ${isCorrect ? 'ถูกต้อง' : 'ผิด (เฉลย: ' + q.options[q.correct] + ')'}
                </p>
                <p style="font-size: 0.8rem; opacity: 0.8;">💡 ${q.info}</p>
            </div>
        `;
    });

    const std = JSON.parse(localStorage.getItem('student'));
    document.getElementById('user-info-display').innerHTML = `<p>${std.name} | ห้อง ${std.room} เลขที่ ${std.no}</p>`;
    document.getElementById('final-score').innerText = score;
    switchSection('quiz-section', 'result-section');
}
