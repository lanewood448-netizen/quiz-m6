const questions = [
    { q: "ข้อใดคือลักษณะของ 'ของแข็งอสัณฐาน'?", o: ["จัดเรียงอนุภาคเป็นระเบียบ", "จุดหลอมเหลวคงที่", "ไม่มีรูปทรงเรขาคณิตแน่นอน", "นำไฟฟ้าได้ดีมาก"], a: 2, exp: "ของแข็งอสัณฐาน เช่น แก้ว ยาง พลาสติก อนุภาคเรียงไม่เป็นระเบียบ จุดหลอมเหลวไม่คงที่" },
    { q: "ปรากฏการณ์ที่ของเหลวไหลขึ้นหลอดเล็กๆ เรียกว่า?", o: ["ความหนืด", "แรงตึงผิว", "การระเหย", "การซึมตามรูเล็ก (Capillary action)"], a: 3, exp: "เกิดจากแรงเชื่อมแน่นและแรงยึดติดทำงานร่วมกัน" },
    { q: "ปัจจัยใดทำให้ความหนืดของของเหลว 'ลดลง'?", o: ["ลดอุณหภูมิ", "เพิ่มอุณหภูมิ", "เพิ่มความดัน", "เพิ่มมวลโมเลกุล"], a: 1, exp: "อุณหภูมิสูงขึ้น พลังงานจลน์จะเอาชนะแรงยึดเหนี่ยวได้ดีขึ้น" },
    { q: "แมลงเดินบนผิวน้ำได้เพราะสมบัติใด?", o: ["แรงตึงผิว", "ความหนืด", "ความหนาแน่น", "ความดันไอ"], a: 0, exp: "แรงตึงผิวที่ผิวหน้าของน้ำทำหน้าที่คล้ายแผ่นฟิล์มตึง" },
    { q: "ข้อใดจัดเป็น 'ผลึกโครงร่างตาข่าย'?", o: ["น้ำแข็ง", "ทองแดง", "เกลือแกง", "เพชร"], a: 3, exp: "เพชรมีพันธะโคเวเลนต์ยึดกันเป็นโครงข่าย แข็งแรงมาก" },
    { q: "จุดเดือด คืออุณหภูมิที่ความดันไอเท่ากับอะไร?", o: ["0", "ความดันบรรยากาศ", "ความหนืด", "จุดเยือกแข็ง"], a: 1, exp: "เมื่อความดันไอเท่ากับบรรยากาศ ของเหลวจะเดือดทั่วทั้งภาชนะ" },
    { q: "ผลึกโลหะนำไฟฟ้าได้เพราะอะไร?", o: ["มีไอออนบวกเคลื่อนที่", "มีอิเล็กตรอนอิสระ", "มีพันธะไฮโดรเจน", "มีความร้อนสูง"], a: 1, exp: "อิเล็กตรอนอิสระ (Sea of electrons) สามารถเคลื่อนที่นำไฟฟ้าได้ทั่ว" },
    { q: "การระเหยต่างจากการเดือดอย่างไร?", o: ["ระเหยเกิดเฉพาะที่ผิวหน้า", "ระเหยต้องใช้อุณหภูมิสูงกว่า", "ระเหยเกิดทั่วทั้งภาชนะ", "ระเหยเป็นปฏิกิริยาเคมี"], a: 0, exp: "การระเหยเกิดเฉพาะผิวหน้าและเกิดได้ทุกอุณหภูมิ" },
    { q: "น้ำแข็งแห้ง (Dry ice) เปลี่ยนสถานะแบบใด?", o: ["หลอมเหลว", "ระเหย", "ระเหิด", "ควบแน่น"], a: 2, exp: "จากของแข็งกลายเป็นก๊าซโดยไม่ผ่านสถานะของเหลว" },
    { q: "ถ้าเพิ่มพื้นที่ผิวของเหลว อัตราการระเหยจะเป็นอย่างไร?", o: ["ลดลง", "เพิ่มขึ้น", "คงที่", "หยุดระเหย"], a: 1, exp: "พื้นที่ผิวมาก โมเลกุลมีโอกาสหลุดออกจากผิวหน้าได้มากขึ้น" }
];

let currentIdx = 0;
let answers = new Array(questions.length).fill(null);
let timeLeft = 15 * 60;
let timerId;

// Theme Toggle
document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
    document.getElementById('theme-toggle').innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

function startApp() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("ใส่ชื่อด้วยนะจ๊ะ 🎀");
    showPage('quiz-page');
    loadQuestion();
    startTimer();
}

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function loadQuestion() {
    const q = questions[currentIdx];
    document.getElementById('question-text').innerText = `${currentIdx + 1}. ${q.q}`;
    document.getElementById('q-count').innerText = `ข้อ ${currentIdx+1}/${questions.length}`;
    document.getElementById('progress-bar').style.width = `${((currentIdx+1)/questions.length)*100}%`;
    
    const list = document.getElementById('options-list');
    list.innerHTML = "";
    q.o.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = `option-btn ${answers[currentIdx] === i ? 'selected' : ''}`;
        btn.innerText = opt;
        btn.onclick = () => {
            answers[currentIdx] = i;
            loadQuestion();
        };
        list.appendChild(btn);
    });

    document.getElementById('prev-btn').classList.toggle('hidden', currentIdx === 0);
    document.getElementById('next-btn').classList.toggle('hidden', currentIdx === questions.length - 1);
    document.getElementById('finish-btn').classList.toggle('hidden', currentIdx !== questions.length - 1);
}

function nextQ() { if(currentIdx < questions.length-1) { currentIdx++; loadQuestion(); } }
function prevQ() { if(currentIdx > 0) { currentIdx--; loadQuestion(); } }

function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft/60);
        let s = timeLeft%60;
        document.getElementById('timer').innerText = `⏳ ${m}:${s<10?'0'+s:s}`;
        if(timeLeft <= 0) submitQuiz();
    }, 1000);
}

function showConfirm() {
    const unans = answers.filter(a => a === null).length;
    document.getElementById('unanswered-msg').innerText = unans > 0 ? `ยังไม่ตอบอีก ${unans} ข้อนะ!` : "ตอบครบแล้วจ้า!";
    document.getElementById('confirm-modal').classList.add('show');
}

function hideConfirm() { document.getElementById('confirm-modal').classList.remove('show'); }

function submitQuiz() {
    clearInterval(timerId);
    showPage('result-page');
    let score = 0;
    const correction = document.getElementById('correction-list');
    correction.innerHTML = "<h3>เฉลยข้อที่ผิด 💡</h3>";

    questions.forEach((q, i) => {
        if(answers[i] === q.a) {
            score++;
        } else {
            const div = document.createElement('div');
            div.className = "correct-item";
            div.innerHTML = `<b>ข้อ ${i+1}:</b> ${q.q}<br><span style="color:green">ที่ถูกคือ: ${q.o[q.a]}</span><br><small>${q.exp}</small>`;
            correction.appendChild(div);
        }
    });

    document.getElementById('score-num').innerText = score;
    document.getElementById('score-percent').innerText = (score/questions.length)*100 + "%";
    document.getElementById('score-bar').style.width = (score/questions.length)*100 + "%";
    document.getElementById('user-info-display').innerText = `${document.getElementById('user-name').value} ชั้น ${document.getElementById('user-class').value}`;
}
