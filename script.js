// ฐานข้อมูลข้อสอบเคมี (ของแข็ง-ของเหลว) 10 ข้อ
const rawQuestions = [
    { q: "ความตึงผิวของเหลวจะลดลงเมื่อใด?", opts: ["อุณหภูมิเพิ่มขึ้น", "เพิ่มความดัน", "ลดปริมาตร", "ใส่เกลือลงไป"], ans: "อุณหภูมิเพิ่มขึ้น", desc: "อุณหภูมิที่สูงขึ้นทำให้แรงยึดเหนี่ยวระหว่างโมเลกุลลดลง ความตึงผิวจึงลดลง" },
    { q: "ปรากฏการณ์ 'Capillary Action' (การซึมตามรูเล็ก) เกิดจากแรงใด?", opts: ["แรงเชื่อมแน่นและแรงยึดติด", "แรงเชื่อมแน่นเท่านั้น", "แรงยึดติดเท่านั้น", "แรงลอนดอน"], ans: "แรงเชื่อมแน่นและแรงยึดติด", desc: "เกิดจาก Cohesion (ดึงดูดกันเอง) และ Adhesion (ดึงดูดกับผนังภาชนะ)" },
    { q: "ข้อใดเป็นสมบัติของ 'ของแข็งอสัณฐาน' (Amorphous)?", opts: ["ไม่มีจุดหลอมเหลวที่แน่นอน", "เรียงตัวเป็นระเบียบ", "นำไฟฟ้าได้ดี", "แตกหักตามรอยตัดเรียบ"], ans: "ไม่มีจุดหลอมเหลวที่แน่นอน", desc: "ของแข็งอสัณฐาน (เช่น แก้ว ยาง) อนุภาคไม่เป็นระเบียบ เมื่อได้รับความร้อนจะค่อยๆ อ่อนตัว" },
    { q: "ความหนืด (Viscosity) ของเหลวแปรผกผันกับสิ่งใด?", opts: ["อุณหภูมิ", "มวลโมเลกุล", "แรงยึดเหนี่ยว", "ความดัน"], ans: "อุณหภูมิ", desc: "เมื่ออุณหภูมิสูงขึ้น พลังงานจลน์เพิ่มขึ้น แรงยึดเหนี่ยวถูกทำลาย ทำให้ความหนืดลดลง (ไหลง่ายขึ้น)" },
    { q: "การระเหย (Evaporation) ต่างจากการเดือด (Boiling) อย่างไร?", opts: ["การระเหยเกิดเฉพาะที่ผิวหน้า", "การระเหยเกิดได้ที่จุดเดือดเท่านั้น", "การระเหยต้องใช้ความดันสูง", "การระเหยเกิดทุกส่วนของเหลว"], ans: "การระเหยเกิดเฉพาะที่ผิวหน้า", desc: "การระเหยเกิดที่อุณหภูมิใดก็ได้แต่เกิดเฉพาะที่ผิวหน้า ส่วนการเดือดเกิดทั่วทั้งของเหลวเมื่อถึงจุดเดือด" },
    { q: "พันธะใดที่ยึดเหนี่ยวระหว่างชั้นของแกรไฟต์ (Graphite)?", opts: ["แรงแวนเดอร์วาลส์", "พันธะโควาเลนต์", "พันธะโลหะ", "พันธะไอออนิก"], ans: "แรงแวนเดอร์วาลส์", desc: "ภายในชั้นเป็นโควาเลนต์ แต่ระหว่างชั้นถูกยึดด้วยแรงอ่อนๆ อย่างแวนเดอร์วาลส์ ทำให้มันเลื่อนไถลได้ (ใช้ทำไส้ดินสอ)" },
    { q: "จุดเดือดของของเหลวจะสูงขึ้นเมื่อใด?", opts: ["ความดันบรรยากาศสูงขึ้น", "ความดันบรรยากาศต่ำลง", "ใส่ในภาชนะที่กว้างขึ้น", "ลดปริมาณของเหลว"], ans: "ความดันบรรยากาศสูงขึ้น", desc: "ความดันภายนอกที่สูงขึ้นจะกดผิวของเหลวไว้ ทำให้ต้องใช้พลังงานความร้อนมากขึ้นในการทำให้อนุภาคหลุดเป็นไอ" },
    { q: "ข้อใดคือตัวอย่างของผลึกโครงตาข่าย (Network Covalent Solid)?", opts: ["เพชร", "น้ำแข็ง", "เกลือแกง", "ทองแดง"], ans: "เพชร", desc: "เพชรเกิดจากคาร์บอนต่อกันด้วยพันธะโควาเลนต์เป็นโครงตาข่าย 3 มิติ แข็งมากและจุดหลอมเหลวสูง" },
    { q: "กระบวนการที่ของแข็งเปลี่ยนสถานะเป็นแก๊สโดยไม่ผ่านของเหลวเรียกว่า?", opts: ["การระเหิด (Sublimation)", "การควบแน่น", "การหลอมเหลว", "การระเหย"], ans: "การระเหิด (Sublimation)", desc: "เช่น ลูกเหม็น นํ้าแข็งแห้ง การบูร เปลี่ยนจากของแข็งเป็นแก๊สโดยตรง" },
    { q: "เพราะเหตุใดน้ำแข็งจึงลอยน้ำได้?", opts: ["น้ำแข็งมีความหนาแน่นน้อยกว่าน้ำ", "น้ำแข็งมีมวลน้อยกว่าน้ำ", "น้ำแข็งมีแรงตึงผิวสูง", "น้ำแข็งไม่มีพันธะไฮโดรเจน"], ans: "น้ำแข็งมีความหนาแน่นน้อยกว่าน้ำ", desc: "เมื่อน้ำแข็งตัว โครงสร้างจะจัดเรียงตัวเป็นรูปหกเหลี่ยม ทำให้มีช่องว่าง ปริมาตรเพิ่มขึ้น ความหนาแน่นจึงลดลง" }
];

let questions = [];
let userAnswers = [];
let userData = {};
let currentSlide = 0;
let timeLeft = 600; // 10 นาที
let timerInterval;

// DOM Elements
const formView = document.getElementById('view-form');
const quizView = document.getElementById('view-quiz');
const resultView = document.getElementById('view-result');
const topUI = document.getElementById('top-ui');
const track = document.getElementById('quiz-track');
const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const btnSubmit = document.getElementById('btn-submit');

// 1. ระบบสุ่มและเตรียมข้อสอบ
function initQuiz() {
    // สุ่มลำดับข้อ
    let shuffledQ = [...rawQuestions].sort(() => Math.random() - 0.5);
    
    questions = shuffledQ.map(q => {
        // สุ่มตัวเลือก
        let shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5);
        return { ...q, opts: shuffledOpts };
    });
    
    userAnswers = new Array(questions.length).fill(null);
    renderSlides();
}

// 2. Render ข้อสอบเป็น Slide แนวตั้ง
function renderSlides() {
    track.innerHTML = '';
    questions.forEach((q, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide honeycomb-bg';
        
        let optionsHTML = '';
        q.opts.forEach((opt, optIdx) => {
            optionsHTML += `<button class="option-btn" onclick="selectOption(${index}, ${optIdx}, this)">${opt}</button>`;
        });

        slide.innerHTML = `
            <div class="question-box">
                <span style="color:var(--primary-yellow); font-weight:bold;">ข้อที่ ${index + 1}</span>
                <h3>${q.q}</h3>
            </div>
            ${optionsHTML}
        `;
        track.appendChild(slide);
    });
    updateSlidePosition();
}

// 3. จัดการข้อมูลผู้ใช้ (เริ่มทำข้อสอบ)
document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    userData = {
        name: document.getElementById('fname').value + ' ' + document.getElementById('lname').value,
        class: document.getElementById('class').value,
        no: document.getElementById('no').value
    };
    
    initQuiz();
    formView.classList.remove('active');
    formView.classList.add('hidden');
    quizView.classList.remove('hidden');
    topUI.classList.remove('hidden');
    
    startTimer();
    
    // โหลด Auto-save ถ้ามี
    loadState();
});

// 4. การเลือกคำตอบ
window.selectOption = function(qIndex, optIndex, btnElement) {
    userAnswers[qIndex] = questions[qIndex].opts[optIndex];
    
    // ลบสีปุ่มเก่าในข้อนี้
    const siblings = btnElement.parentElement.querySelectorAll('.option-btn');
    siblings.forEach(btn => btn.classList.remove('selected'));
    
    // ไฮไลต์ปุ่มใหม่
    btnElement.classList.add('selected');
    
    saveState();
    updateProgress();

    // Auto เลื่อนลงข้อถัดไปถ้ายังไม่ถึงข้อสุดท้าย
    setTimeout(() => {
        if(currentSlide < questions.length - 1) {
            currentSlide++;
            updateSlidePosition();
        }
    }, 400); // ดีเลย์นิดนึงให้ผู้ใช้เห็นว่ากดติดแล้ว
}

// 5. ระบบ Slide (Swipe) แบบ Douyin
function updateSlidePosition() {
    track.style.transform = `translateY(-${currentSlide * 100}vh)`;
    document.getElementById('q-counter').innerText = `${currentSlide + 1}/${questions.length}`;
    updateProgress();
    
    // จัดการแสดงปุ่มด้านข้าง
    btnUp.style.opacity = currentSlide === 0 ? '0.3' : '1';
    btnDown.style.opacity = currentSlide === questions.length - 1 ? '0.3' : '1';
    
    if (currentSlide === questions.length - 1) {
        btnSubmit.classList.remove('hidden');
    } else {
        btnSubmit.classList.add('hidden');
    }
}

// ปุ่มด้านข้าง
btnUp.onclick = () => { if(currentSlide > 0) { currentSlide--; updateSlidePosition(); } };
btnDown.onclick = () => { if(currentSlide < questions.length - 1) { currentSlide++; updateSlidePosition(); } };

// รองรับ Touch Swipe บนมือถือ
let touchStartY = 0;
let touchEndY = 0;
quizView.addEventListener('touchstart', e => { touchStartY = e.changedTouches[0].screenY; });
quizView.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});
function handleSwipe() {
    const swipeDist = touchStartY - touchEndY;
    if (swipeDist > 50 && currentSlide < questions.length - 1) { // Swipe Up
        currentSlide++; updateSlidePosition();
    } else if (swipeDist < -50 && currentSlide > 0) { // Swipe Down
        currentSlide--; updateSlidePosition();
    }
}

// 6. ระบบ Timer & Progress
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        document.getElementById('timer').innerText = `⏱️ ${m}:${s<10?'0':''}${s}`;
        
        if(timeLeft <= 60) document.getElementById('timer').style.color = "#e74c3c";
        if(timeLeft <= 0) submitQuiz();
    }, 1000);
}

function updateProgress() {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    const percent = (answeredCount / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

// 7. Auto-Save (LocalStorage)
function saveState() {
    const state = { userData, answers: userAnswers, questions };
    localStorage.setItem('quiz_state', JSON.stringify(state));
}

function loadState() {
    const saved = JSON.parse(localStorage.getItem('quiz_state'));
    if (saved && saved.userData.name === userData.name) {
        userAnswers = saved.answers;
        questions = saved.questions;
        renderSlides(); // Re-render เพื่อแปะคลาส selected
        
        // กู้คืน UI สีปุ่มที่เลือกไว้
        const slides = track.querySelectorAll('.slide');
        userAnswers.forEach((ans, i) => {
            if (ans) {
                const btns = slides[i].querySelectorAll('.option-btn');
                btns.forEach(btn => {
                    if (btn.innerText === ans) btn.classList.add('selected');
                });
            }
        });
        updateProgress();
    }
}

// 8. ส่งข้อสอบและตรวจคำตอบ
btnSubmit.onclick = () => {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`คุณยังมีข้อที่ไม่ได้ตอบ ${unanswered} ข้อ ต้องการส่งเลยไหม?`)) return;
    }
    submitQuiz();
};

function submitQuiz() {
    clearInterval(timerInterval);
    topUI.classList.add('hidden');
    quizView.classList.add('hidden');
    resultView.classList.remove('hidden');
    
    let score = 0;
    const reviewBox = document.getElementById('review-container');
    reviewBox.innerHTML = '';

    questions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.ans;
        if (isCorrect) score++;
        
        reviewBox.innerHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                <p><b>ข้อ ${i+1}:</b> ${q.q}</p>
                <p>คำตอบของคุณ: ${userAnswers[i] || '<span style="color:#e74c3c">ไม่ได้ตอบ</span>'}</p>
                ${!isCorrect ? `<p class="correct-text">เฉลย: ${q.ans}</p>` : ''}
                <small style="color:#aaa;">💡 ${q.desc}</small>
            </div>
        `;
    });

    document.getElementById('final-score').innerText = score;
    document.getElementById('user-summary').innerHTML = `<p>${userData.name} | ${userData.class} เลขที่ ${userData.no}</p>`;
    localStorage.removeItem('quiz_state'); // เคลียร์สถานะเมื่อส่งแล้ว
}
