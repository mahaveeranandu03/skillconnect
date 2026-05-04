// ============ DATA ============

const skillCategories = {
    'Frontend': [
        { name: 'React',      icon: '⚛️' },
        { name: 'HTML/CSS',   icon: '🎨' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'Vue.js',     icon: '💚' },
    ],
    'Backend': [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python',  icon: '🐍' },
        { name: 'Java',    icon: '☕' },
        { name: 'MongoDB', icon: '🍃' },
    ],
    'Design': [
        { name: 'UI/UX Design', icon: '🎨' },
        { name: 'Figma',        icon: '✏️' },
        { name: 'Adobe XD',     icon: '🎭' },
    ],
    'DevOps': [
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS',    icon: '☁️' },
        { name: 'CI/CD',  icon: '⚙️' },
    ],
};

const skillTests = {
    'React': [
        { q: 'What is the Virtual DOM in React?',       options: ['A copy of real DOM in memory','A real DOM element','A server-side component','A CSS framework'], correct: 0 },
        { q: 'Which hook manages component state?',     options: ['useEffect','useState','useRef','useContext'], correct: 1 },
        { q: 'How do you pass data to child components?', options: ['State','Props','LocalStorage','Context only'], correct: 1 },
        { q: 'What is the purpose of useEffect?',       options: ['Manage state','Handle side effects','Style components','Fetch data only'], correct: 1 },
    ],
    'HTML/CSS': [
        { q: 'Which CSS property controls spacing inside an element?', options: ['margin','padding','border','outline'], correct: 1 },
        { q: 'What does the flexbox property do?',     options: ['Creates animations','Layouts items in a row or column','Manages state','Compresses files'], correct: 1 },
        { q: 'How do you select an element with id="hero"?', options: ['.hero','#hero','hero{}','@hero'], correct: 1 },
        { q: 'What is a semantic HTML element?',       options: ['Large elements','Colorful elements','Elements with meaning like <header>','Deprecated elements'], correct: 2 },
    ],
    'JavaScript': [
        { q: 'What is closure in JavaScript?',         options: ['Ending a loop','Function with access to outer scope','Async operation','CSS property'], correct: 1 },
        { q: 'What does "this" refer to?',             options: ['Variable','Current object context','Window always','Undefined'], correct: 1 },
        { q: 'How do you create a Promise?',           options: ['new Promise()','promise()','Promise{}','async function'], correct: 0 },
        { q: 'What is destructuring?',                 options: ['Breaking code','Extracting values from objects/arrays','Deleting variables','Compiling code'], correct: 1 },
    ],
    'Node.js': [
        { q: 'What is npm?',                           options: ['Node Package Manager','New Programming Module','Node Program Name','Network Package Manager'], correct: 0 },
        { q: 'How do you import a module?',            options: ['include','require()','import statement','Both require and import'], correct: 3 },
        { q: 'What is Express?',                       options: ['A browser','Web framework for Node.js','A database','A testing tool'], correct: 1 },
        { q: 'How do you handle asynchronous code?',   options: ['Callbacks','Promises','Async/await','All of the above'], correct: 3 },
    ],
    'Python': [
        { q: 'What is pip in Python?',                 options: ['Package manager','Programming language','Compiler','IDE'], correct: 0 },
        { q: 'How do you create a list?',              options: ['list()','[]','both','None'], correct: 2 },
        { q: 'What is a virtual environment?',         options: ['Emulator','Isolated Python environment','Cloud server','Docker container'], correct: 1 },
        { q: 'What does *args do?',                    options: ['Multiple arguments','Pointer','Reference','Multiplication'], correct: 0 },
    ],
    'Vue.js': [
        { q: 'What is Vue.js?',                        options: ['A database','JavaScript framework','CSS library','Backend language'], correct: 1 },
        { q: 'How do you bind data in Vue?',           options: ['@bind','v-model','bind-data','data-bind'], correct: 1 },
        { q: 'What is a component in Vue?',            options: ['CSS rule','Reusable Vue instance','HTML element','JavaScript function'], correct: 1 },
        { q: 'How do you handle events in Vue?',       options: ['onclick','v-on','@on','event-handler'], correct: 1 },
    ],
    'Docker': [
        { q: 'What is Docker?',                        options: ['Database','Containerization platform','IDE','Cloud service'], correct: 1 },
        { q: 'What is a Docker image?',                options: ['Photo file','Blueprint for containers','Running process','Configuration'], correct: 1 },
        { q: 'What command runs a container?',         options: ['docker build','docker run','docker start','docker create'], correct: 1 },
        { q: 'What is Docker Compose?',                options: ['Compress tool','Multi-container orchestration','Image creator','Network tool'], correct: 1 },
    ],
    'UI/UX Design': [
        { q: 'What is user research?',                 options: ['Studying code','Understanding user needs','Testing UI','Writing docs'], correct: 1 },
        { q: 'What is wireframing?',                   options: ['Network setup','Low-fidelity layout sketch','Final design','Animation'], correct: 1 },
        { q: 'What does CTA mean?',                    options: ['Click To Add','Call To Action','Create Text Area','Cascading Tags'], correct: 1 },
        { q: 'What is information architecture?',      options: ['Building structure','Organizing content structure','Database design','Server setup'], correct: 1 },
    ],
    'Java': [
        { q: 'What is Java?',                          options: ['A beverage','Programming language','Database','Framework'], correct: 1 },
        { q: 'What is OOP?',                           options: ['Object-Oriented Programming','Open Online Protocol','Object Operating Procedure','None'], correct: 0 },
        { q: 'What is a class?',                       options: ['A classroom','Blueprint for objects','A file','A method'], correct: 1 },
        { q: 'What is inheritance?',                   options: ['Money','Code reusability','Variables','Loops'], correct: 1 },
    ],
    'MongoDB': [
        { q: 'What is MongoDB?',                       options: ['SQL Database','NoSQL Database','Framework','Frontend library'], correct: 1 },
        { q: 'What is a document?',                    options: ['PDF file','Data record in MongoDB','Code file','HTML file'], correct: 1 },
        { q: 'What format does MongoDB use?',          options: ['JSON','XML','BSON','All of above'], correct: 2 },
        { q: 'What is a collection?',                  options: ['Group of items','Table in MongoDB','Database backup','File'], correct: 1 },
    ],
    'Figma': [
        { q: 'What is Figma?',                         options: ['Math tool','Design software','Programming language','Database'], correct: 1 },
        { q: 'What is a frame in Figma?',              options: ['Picture holder','Artboard for design','Code block','Animation'], correct: 1 },
        { q: 'Can Figma be used collaboratively?',     options: ['No','Yes, real-time collaboration','Only offline','Not yet'], correct: 1 },
        { q: 'What is prototyping?',                   options: ['Taking photos','Creating interactive mockups','Coding','Testing'], correct: 1 },
    ],
    'Adobe XD': [
        { q: 'What is Adobe XD?',                      options: ['Photo editor','UI/UX design tool','Video editor','Database'], correct: 1 },
        { q: 'Can you export prototypes from XD?',     options: ['No','Yes, as videos and PDFs','Only images','Links only'], correct: 1 },
        { q: 'What is an artboard in XD?',             options: ['Canvas area','Background','Layer','Frame'], correct: 0 },
        { q: 'Does XD support plugins?',               options: ['No','Yes','Only paid version','Maybe'], correct: 1 },
    ],
    'AWS': [
        { q: 'What is AWS?',                           options: ['Website','Cloud services platform','Programming language','Browser'], correct: 1 },
        { q: 'What is EC2?',                           options: ['Email service','Compute service','Database','Storage'], correct: 1 },
        { q: 'What is S3 in AWS?',                     options: ['Security service','Simple Storage Service','Server service','Search service'], correct: 1 },
        { q: 'Is AWS free?',                           options: ['No cost','Has free tier','Extremely expensive','Unknown'], correct: 1 },
    ],
    'CI/CD': [
        { q: 'What does CI stand for?',                options: ['Computer Integration','Continuous Integration','Code Integration','Continuous Improvement'], correct: 1 },
        { q: 'What does CD stand for?',                options: ['Continuous Design','Code Distribution','Continuous Deployment','Computer Data'], correct: 2 },
        { q: 'What is a pipeline?',                    options: ['Water pipe','Automated process','Code review','Testing only'], correct: 1 },
        { q: 'Popular CI/CD tools include?',           options: ['Jenkins','GitLab CI','Both','Neither'], correct: 2 },
    ],
};

// Minimum score (out of 4) required to pass and earn directory access
const PASS_SCORE = 3;

// Sample directory data so the directory isn't empty on first load
const mockPeople = [
    { name: 'Arjun Sharma',  phone: '9876543210', sem: 'Semester 4', branch: 'CSE',      skills: ['React', 'Node.js', 'JavaScript'] },
    { name: 'Priya Reddy',   phone: '9765432109', sem: 'Semester 6', branch: 'CSE',      skills: ['Python', 'Docker', 'AWS'] },
    { name: 'Rahul Nair',    phone: '9654321098', sem: 'Semester 3', branch: 'ECE',      skills: ['HTML/CSS', 'Figma', 'UI/UX Design'] },
    { name: 'Sneha Iyer',    phone: '9543210987', sem: 'Semester 5', branch: 'CSE',      skills: ['Java', 'MongoDB', 'CI/CD'] },
    { name: 'Karthik Menon', phone: '9432109876', sem: 'Semester 7', branch: 'CSE',      skills: ['Vue.js', 'JavaScript', 'Node.js'] },
    { name: 'Divya Pillai',  phone: '9321098765', sem: 'Semester 2', branch: 'Civil',    skills: ['HTML/CSS', 'Figma'] },
];

// ============ STATE ============

let currentUser     = {};
let selectedSkills  = [];
let verifiedSkills  = [];
let failedSkills    = {};   // { skillName: timestamp } — tracks 24-hr lockout
let currentTestSkill = null;
let currentQuestion  = 0;
let testScore        = 0;
let lastTestPassed   = null; // true/false result of the most recent test

// ============ SCREEN MANAGEMENT ============

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId + '-screen').classList.add('active');

    if (screenId === 'skills') {
        document.getElementById('user-name-display').textContent = currentUser.name || 'User';
        updateVerifiedDisplay();
        renderSkills();
    }
    if (screenId === 'profile') loadProfile();
}

// ============ AUTH ============

function handleSignUp() {
    const name     = document.getElementById('auth-fullname').value.trim();
    const email    = document.getElementById('auth-email').value.trim();
    const phone    = document.getElementById('auth-phone').value.trim();
    const sem      = document.getElementById('auth-sem').value;
    const branch   = document.getElementById('auth-branch').value;
    const password = document.getElementById('auth-password').value;

    if (!name || !email || !phone || !sem || !password) {
        alert('Please fill in all fields');
        return;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    currentUser = { name, email, phone, sem, branch, password };
    showScreen('skills');
}

// ============ SKILLS ============

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    Object.entries(skillCategories).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skills-category';
        categoryDiv.innerHTML = `<h3 class="category-title">${category}</h3>`;

        const grid = document.createElement('div');
        grid.className = 'skills-grid';

        skills.forEach(skill => {
            const isSelected = selectedSkills.some(s => s.name === skill.name);
            const isVerified = verifiedSkills.some(v => v.name === skill.name);
            const isFailed   = isOnCooldown(skill.name);

            const card = document.createElement('div');
            card.className = 'skill-card'
                + (isSelected ? ' selected' : '')
                + (isVerified ? ' verified' : '')
                + (isFailed   ? ' failed'   : '');

            let badge = '';
            if (isVerified) badge = ' · ✓ verified';
            else if (isFailed) badge = ' · 🔒 retry in 24h';

            card.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-category">${category}${badge}</div>
            `;
            if (!isVerified && !isFailed) {
                card.onclick = () => toggleSkill(skill);
            }
            grid.appendChild(card);
        });

        categoryDiv.appendChild(grid);
        container.appendChild(categoryDiv);
    });
}

function toggleSkill(skill) {
    const idx = selectedSkills.findIndex(s => s.name === skill.name);
    if (idx >= 0) {
        selectedSkills.splice(idx, 1);
    } else {
        selectedSkills.push(skill);
    }
    renderSkills();
    updateActionButtons();
}

function updateVerifiedDisplay() {
    const section  = document.getElementById('verified-section');
    const badges   = document.getElementById('verified-badges');

    if (verifiedSkills.length === 0) {
        section.classList.remove('show');
        return;
    }
    section.classList.add('show');
    badges.innerHTML = verifiedSkills.map(skill => `
        <div class="skill-badge">
            <span>${skill.icon}</span>
            <span>${skill.name}</span>
            <span class="score">${skill.score}/4</span>
        </div>
    `).join('');
}

function updateActionButtons() {
    document.getElementById('start-test-btn').style.display  = selectedSkills.length > 0 ? 'block' : 'none';
    document.getElementById('find-people-btn').style.display = verifiedSkills.length > 0 ? 'block' : 'none';
}

// ============ COOLDOWN HELPERS ============

function isOnCooldown(skillName) {
    const ts = failedSkills[skillName];
    if (!ts) return false;
    const elapsed = Date.now() - ts;
    return elapsed < 24 * 60 * 60 * 1000; // 24 hours in ms
}

function cooldownRemaining(skillName) {
    const ts = failedSkills[skillName];
    if (!ts) return null;
    const ms = 24 * 60 * 60 * 1000 - (Date.now() - ts);
    if (ms <= 0) return null;
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    return `${h}h ${m}m`;
}

// ============ TESTING ============

function startTest() {
    if (selectedSkills.length === 0) return;
    currentTestSkill = selectedSkills[0];
    currentQuestion  = 0;
    testScore        = 0;
    lastTestPassed   = null;
    renderTestQuestion();
    showScreen('test');
}

function renderTestQuestion() {
    const questions    = skillTests[currentTestSkill.name] || [];
    const question     = questions[currentQuestion];
    const totalQ       = questions.length;

    document.getElementById('test-icon').textContent        = currentTestSkill.icon;
    document.getElementById('test-skill-name').textContent  = currentTestSkill.name;
    document.getElementById('question-number').textContent  = `Question ${currentQuestion + 1} of ${totalQ}`;
    document.getElementById('test-question').textContent    = question.q;
    document.getElementById('total-questions').textContent  = totalQ;
    document.getElementById('progress-fill').style.width    = ((currentQuestion + 1) / totalQ * 100) + '%';

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.setAttribute('data-label', String.fromCharCode(65 + idx) + '.');
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx === question.correct);
        container.appendChild(btn);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) testScore++;
    document.getElementById('test-score').textContent = testScore;

    const questions = skillTests[currentTestSkill.name] || [];
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderTestQuestion();
    } else {
        completeTest();
    }
}

function completeTest() {
    const passed = testScore >= PASS_SCORE;
    lastTestPassed = passed;

    if (passed) {
        // Add to verified skills and remove from selected
        verifiedSkills.push({ ...currentTestSkill, score: testScore });
        // Clear any previous cooldown for this skill (they passed now)
        delete failedSkills[currentTestSkill.name];
    } else {
        // Record failure timestamp for 24-hr lockout
        failedSkills[currentTestSkill.name] = Date.now();
    }

    // Remove from selected regardless of pass/fail
    selectedSkills = selectedSkills.filter(s => s.name !== currentTestSkill.name);

    showResultScreen(passed, currentTestSkill, testScore);
    currentTestSkill = null;
}

// ============ RESULT SCREEN ============

function showResultScreen(passed, skill, score) {
    document.getElementById('result-screen').classList.remove('hidden');
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('result-screen').classList.add('active');

    const icon    = document.getElementById('result-icon');
    const title   = document.getElementById('result-title');
    const msg     = document.getElementById('result-message');
    const subMsg  = document.getElementById('result-submessage');
    const actions = document.getElementById('result-actions');

    if (passed) {
        icon.textContent  = '🎉';
        title.textContent = 'Skill Verified!';
        title.className   = 'result-title result-pass';
        msg.textContent   = `You scored ${score}/4 on ${skill.name}. Well done!`;
        subMsg.textContent = 'You can now browse the People Directory.';
        actions.innerHTML = `
            <button class="btn-primary" onclick="showDirectory()">Browse People →</button>
            <button class="btn-secondary" onclick="showScreen('skills')">Back to Skills</button>
        `;
    } else {
        const remaining = cooldownRemaining(skill.name);
        icon.textContent  = '😔';
        title.textContent = 'Not Passed';
        title.className   = 'result-title result-fail';
        msg.textContent   = `You scored ${score}/4 on ${skill.name}. You need at least ${PASS_SCORE}/4 to pass.`;
        subMsg.textContent = `You can retake this test after 24 hours${remaining ? ' (in about ' + remaining + ')' : ''}.`;
        actions.innerHTML = `
            <button class="btn-secondary" onclick="showScreen('skills')">Back to Skills</button>
        `;
    }
}

// ============ DIRECTORY ============

function showDirectory() {
    // Only allow access if at least one skill is verified
    if (verifiedSkills.length === 0) {
        showAccessDeniedModal();
        return;
    }

    // Build the list: current user at the top, then mock people
    const people = [];

    if (currentUser.name) {
        people.push({
            name:    currentUser.name,
            phone:   currentUser.phone,
            sem:     currentUser.sem,
            branch:  currentUser.branch,
            skills:  verifiedSkills.map(v => v.name),
            isMe:    true,
        });
    }

    mockPeople.forEach(p => people.push(p));

    renderDirectory(people);
    showScreen('directory');
}

function showAccessDeniedModal() {
    const modal = document.getElementById('access-denied-modal');
    modal.classList.add('show');
}

function closeAccessDeniedModal() {
    document.getElementById('access-denied-modal').classList.remove('show');
}

function renderDirectory(people) {
    const grid = document.getElementById('people-grid');
    grid.innerHTML = people.map(person => {
        const initials = person.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);

        const skillsHtml = person.skills && person.skills.length > 0
            ? person.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')
            : '<span class="no-skills">No verified skills yet</span>';

        return `
            <div class="person-card${person.isMe ? ' person-card-me' : ''}">
                <div class="person-avatar">${initials}</div>
                <div class="person-name">
                    ${person.name}
                    ${person.isMe ? '<span class="you-badge">you</span>' : ''}
                </div>
                <div class="person-meta">
                    <span class="person-meta-row">📱 ${person.phone}</span>
                    <span class="person-meta-row">📚 ${person.sem} &nbsp;·&nbsp; ${person.branch}</span>
                </div>
                <div class="person-skills">${skillsHtml}</div>
            </div>
        `;
    }).join('');
}

// ============ PROFILE ============

function loadProfile() {
    document.getElementById('pf-name').textContent   = currentUser.name   || '—';
    document.getElementById('pf-email').textContent  = currentUser.email  || '—';
    document.getElementById('pf-sem').textContent    = currentUser.sem    || '—';
    document.getElementById('pf-branch').textContent = currentUser.branch || '—';
    document.getElementById('pf-phone').textContent  = currentUser.phone  || '—';

    const skillsEl = document.getElementById('pf-skills');
    if (verifiedSkills.length === 0) {
        skillsEl.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">No verified skills yet. Take a test!</p>';
    } else {
        skillsEl.innerHTML = verifiedSkills.map(s => `
            <div class="skill-badge">
                <span>${s.icon}</span>
                <span>${s.name}</span>
                <span class="score">${s.score}/4</span>
            </div>
        `).join('');
    }
}

// ============ LOGOUT ============

function logout() {
    currentUser      = {};
    selectedSkills   = [];
    verifiedSkills   = [];
    failedSkills     = {};
    currentTestSkill = null;
    currentQuestion  = 0;
    testScore        = 0;
    lastTestPassed   = null;

    ['auth-fullname', 'auth-email', 'auth-phone', 'auth-password'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    document.getElementById('auth-sem').value = '';

    showScreen('landing');
}

// ============ INIT ============

window.addEventListener('DOMContentLoaded', function () {
    renderSkills();
});