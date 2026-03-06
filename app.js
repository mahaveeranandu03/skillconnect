// Data
const skillCategories = {
    'Frontend': [
        { name: 'React', icon: '⚛️' },
        { name: 'HTML/CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'Vue.js', icon: '💚' },
    ],
    'Backend': [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'Java', icon: '☕' },
        { name: 'MongoDB', icon: '🍃' },
    ],
    'Design': [
        { name: 'UI/UX Design', icon: '🎨' },
        { name: 'Figma', icon: '✏️' },
        { name: 'Adobe XD', icon: '🎭' },
    ],
    'DevOps': [
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'CI/CD', icon: '⚙️' },
    ],
};

const skillTests = {
    'React': [
        { q: 'What is the Virtual DOM in React?', options: ['A copy of real DOM in memory', 'A real DOM element', 'A server-side component', 'A CSS framework'], correct: 0 },
        { q: 'Which hook manages component state?', options: ['useEffect', 'useState', 'useRef', 'useContext'], correct: 1 },
        { q: 'How do you pass data to child components?', options: ['State', 'Props', 'LocalStorage', 'Context only'], correct: 1 },
        { q: 'What is the purpose of useEffect?', options: ['Manage state', 'Handle side effects', 'Style components', 'Fetch data only'], correct: 1 },
    ],
    'HTML/CSS': [
        { q: 'Which CSS property controls spacing inside an element?', options: ['margin', 'padding', 'border', 'outline'], correct: 1 },
        { q: 'What does the flexbox property do?', options: ['Creates animations', 'Layouts items in a row or column', 'Manages state', 'Compresses files'], correct: 1 },
        { q: 'How do you select an element with id="hero"?', options: ['.hero', '#hero', 'hero{}', '@hero'], correct: 1 },
        { q: 'What is a semantic HTML element?', options: ['Large elements', 'Colorful elements', 'Elements with meaning like <header>', 'Deprecated elements'], correct: 2 },
    ],
    'JavaScript': [
        { q: 'What is closure in JavaScript?', options: ['Ending a loop', 'Function with access to outer scope', 'Async operation', 'CSS property'], correct: 1 },
        { q: 'What does "this" refer to?', options: ['Variable', 'Current object context', 'Window always', 'Undefined'], correct: 1 },
        { q: 'How do you create a Promise?', options: ['new Promise()', 'promise()', 'Promise{}', 'async function'], correct: 0 },
        { q: 'What is destructuring?', options: ['Breaking code', 'Extracting values from objects/arrays', 'Deleting variables', 'Compiling code'], correct: 1 },
    ],
    'Node.js': [
        { q: 'What is npm?', options: ['Node Package Manager', 'New Programming Module', 'Node Program Name', 'Network Package Manager'], correct: 0 },
        { q: 'How do you import a module?', options: ['include', 'require()', 'import statement', 'Both require and import'], correct: 3 },
        { q: 'What is Express?', options: ['A browser', 'Web framework for Node.js', 'A database', 'A testing tool'], correct: 1 },
        { q: 'How do you handle asynchronous code?', options: ['Callbacks', 'Promises', 'Async/await', 'All of the above'], correct: 3 },
    ],
    'Python': [
        { q: 'What is pip in Python?', options: ['Package manager', 'Programming language', 'Compiler', 'IDE'], correct: 0 },
        { q: 'How do you create a list?', options: ['list()', '[]', 'both', 'None'], correct: 2 },
        { q: 'What is a virtual environment?', options: ['Emulator', 'Isolated Python environment', 'Cloud server', 'Docker container'], correct: 1 },
        { q: 'What does *args do?', options: ['Multiple arguments', 'Pointer', 'Reference', 'Multiplication'], correct: 0 },
    ],
    'Vue.js': [
        { q: 'What is Vue.js?', options: ['A database', 'JavaScript framework', 'CSS library', 'Backend language'], correct: 1 },
        { q: 'How do you bind data in Vue?', options: ['@bind', 'v-model', 'bind-data', 'data-bind'], correct: 1 },
        { q: 'What is a component in Vue?', options: ['CSS rule', 'Reusable Vue instance', 'HTML element', 'JavaScript function'], correct: 1 },
        { q: 'How do you handle events in Vue?', options: ['onclick', 'v-on', '@on', 'event-handler'], correct: 1 },
    ],
    'Docker': [
        { q: 'What is Docker?', options: ['Database', 'Containerization platform', 'IDE', 'Cloud service'], correct: 1 },
        { q: 'What is a Docker image?', options: ['Photo file', 'Blueprint for containers', 'Running process', 'Configuration'], correct: 1 },
        { q: 'What command runs a container?', options: ['docker build', 'docker run', 'docker start', 'docker create'], correct: 1 },
        { q: 'What is Docker Compose?', options: ['Compress tool', 'Multi-container orchestration', 'Image creator', 'Network tool'], correct: 1 },
    ],
    'UI/UX Design': [
        { q: 'What is user research?', options: ['Studying code', 'Understanding user needs', 'Testing UI', 'Writing docs'], correct: 1 },
        { q: 'What is wireframing?', options: ['Network setup', 'Low-fidelity layout sketch', 'Final design', 'Animation'], correct: 1 },
        { q: 'What does CTA mean?', options: ['Click To Add', 'Call To Action', 'Create Text Area', 'Cascading Tags'], correct: 1 },
        { q: 'What is information architecture?', options: ['Building structure', 'Organizing content structure', 'Database design', 'Server setup'], correct: 1 },
    ],
    'Java': [
        { q: 'What is Java?', options: ['A beverage', 'Programming language', 'Database', 'Framework'], correct: 1 },
        { q: 'What is OOP?', options: ['Object-Oriented Programming', 'Open Online Protocol', 'Object Operating Procedure', 'None'], correct: 0 },
        { q: 'What is a class?', options: ['A classroom', 'Blueprint for objects', 'A file', 'A method'], correct: 1 },
        { q: 'What is inheritance?', options: ['Money', 'Code reusability', 'Variables', 'Loops'], correct: 1 },
    ],
    'MongoDB': [
        { q: 'What is MongoDB?', options: ['SQL Database', 'NoSQL Database', 'Framework', 'Frontend library'], correct: 1 },
        { q: 'What is a document?', options: ['PDF file', 'Data record in MongoDB', 'Code file', 'HTML file'], correct: 1 },
        { q: 'What format does MongoDB use?', options: ['JSON', 'XML', 'BSON', 'All of above'], correct: 2 },
        { q: 'What is a collection?', options: ['Group of items', 'Table in MongoDB', 'Database backup', 'File'], correct: 1 },
    ],
    'Figma': [
        { q: 'What is Figma?', options: ['Math tool', 'Design software', 'Programming language', 'Database'], correct: 1 },
        { q: 'What is a frame in Figma?', options: ['Picture holder', 'Artboard for design', 'Code block', 'Animation'], correct: 1 },
        { q: 'Can Figma be used collaboratively?', options: ['No', 'Yes, real-time collaboration', 'Only offline', 'Not yet'], correct: 1 },
        { q: 'What is prototyping?', options: ['Taking photos', 'Creating interactive mockups', 'Coding', 'Testing'], correct: 1 },
    ],
    'Adobe XD': [
        { q: 'What is Adobe XD?', options: ['Photo editor', 'UI/UX design tool', 'Video editor', 'Database'], correct: 1 },
        { q: 'Can you export prototypes from XD?', options: ['No', 'Yes, as videos and PDFs', 'Only images', 'Links only'], correct: 1 },
        { q: 'What is artboard in XD?', options: ['Canvas area', 'Background', 'Layer', 'Frame'], correct: 0 },
        { q: 'Does XD support plugins?', options: ['No', 'Yes', 'Only paid version', 'Maybe'], correct: 1 },
    ],
    'AWS': [
        { q: 'What is AWS?', options: ['Website', 'Cloud services platform', 'Programming language', 'Browser'], correct: 1 },
        { q: 'What is EC2?', options: ['Email service', 'Compute service', 'Database', 'Storage'], correct: 1 },
        { q: 'What is S3 in AWS?', options: ['Security service', 'Simple Storage Service', 'Server service', 'Search service'], correct: 1 },
        { q: 'Is AWS free?', options: ['No cost', 'Has free tier', 'Extremely expensive', 'Unknown'], correct: 1 },
    ],
    'CI/CD': [
        { q: 'What does CI stand for?', options: ['Computer Integration', 'Continuous Integration', 'Code Integration', 'Continuous Improvement'], correct: 1 },
        { q: 'What does CD stand for?', options: ['Continuous Design', 'Code Distribution', 'Continuous Deployment', 'Computer Data'], correct: 2 },
        { q: 'What is a pipeline?', options: ['Water pipe', 'Automated process', 'Code review', 'Testing only'], correct: 1 },
        { q: 'Popular CI/CD tools include?', options: ['Jenkins', 'GitLab CI', 'Both', 'Neither'], correct: 2 },
    ],
};

const mockTeams = [
    { id: 1, name: 'Web Dev Dream Team', needsSkills: ['React', 'Node.js'], commonSkills: ['React'], members: 2, matchPercent: 85 },
    { id: 2, name: 'Full Stack Warriors', needsSkills: ['JavaScript', 'Node.js'], commonSkills: ['JavaScript'], members: 3, matchPercent: 72 },
    { id: 3, name: 'Modern Frontend Crew', needsSkills: ['React', 'HTML/CSS'], commonSkills: ['React', 'HTML/CSS'], members: 4, matchPercent: 95 },
];

// State
let currentUser = { email: '', name: '', password: '' };
let selectedSkills = [];
let verifiedSkills = [];
let currentTestSkill = null;
let currentQuestion = 0;
let testScore = 0;

// Initialize
window.addEventListener('DOMContentLoaded', function() {
    renderSkills();
});

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId + '-screen').classList.add('active');
    if (screenId === 'skills') {
        document.getElementById('user-name-display').textContent = currentUser.name;
        updateVerifiedDisplay();
    }
}

// Auth
function handleSignUp() {
    const email = document.getElementById('email-input').value;
    const name = document.getElementById('name-input').value;
    const password = document.getElementById('password-input').value;

    if (!email || !name || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    currentUser = { email, name, password };
    showScreen('skills');
}

// Skills
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
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-category">${category}</div>
            `;
            card.onclick = () => toggleSkill(skill);
            grid.appendChild(card);
        });

        categoryDiv.appendChild(grid);
        container.appendChild(categoryDiv);
    });
}

function toggleSkill(skill) {
    const isSelected = selectedSkills.some(s => s.name === skill.name);

    if (isSelected) {
        selectedSkills = selectedSkills.filter(s => s.name !== skill.name);
    } else {
        selectedSkills.push(skill);
    }

    updateSkillsDisplay();
    updateActionButtons();
}

function updateSkillsDisplay() {
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        const skillName = card.querySelector('.skill-name').textContent;
        if (selectedSkills.some(s => s.name === skillName)) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

function updateVerifiedDisplay() {
    const section = document.getElementById('verified-section');
    const badgesContainer = document.getElementById('verified-badges');

    if (verifiedSkills.length === 0) {
        section.classList.remove('show');
        return;
    }

    section.classList.add('show');
    badgesContainer.innerHTML = verifiedSkills.map(skill => `
        <div class="skill-badge">
            <span>${skill.icon}</span>
            <span>${skill.name}</span>
            <span class="score">${skill.score}/4</span>
        </div>
    `).join('');
}

function updateActionButtons() {
    const startBtn = document.getElementById('start-test-btn');
    const findBtn = document.getElementById('find-teams-btn');

    startBtn.style.display = selectedSkills.length > 0 ? 'block' : 'none';
    findBtn.style.display = verifiedSkills.length > 0 ? 'block' : 'none';
}

// Testing
function startTest() {
    if (selectedSkills.length === 0) return;

    currentTestSkill = selectedSkills[0];
    currentQuestion = 0;
    testScore = 0;

    renderTestQuestion();
    showScreen('test');
}

function renderTestQuestion() {
    const questions = skillTests[currentTestSkill.name] || [];
    const question = questions[currentQuestion];
    const totalQuestions = questions.length;

    document.getElementById('test-icon').textContent = currentTestSkill.icon;
    document.getElementById('test-skill-name').textContent = currentTestSkill.name;
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
    document.getElementById('test-question').textContent = question.q;
    document.getElementById('total-questions').textContent = totalQuestions;

    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.setAttribute('data-label', String.fromCharCode(65 + idx) + '.');
        btn.textContent = option;
        btn.onclick = () => handleAnswer(idx === question.correct);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) testScore++;

    const questions = skillTests[currentTestSkill.name] || [];
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderTestQuestion();
    } else {
        completeTest();
    }

    document.getElementById('test-score').textContent = testScore;
}

function completeTest() {
    verifiedSkills.push({
        ...currentTestSkill,
        score: testScore
    });

    selectedSkills = selectedSkills.filter(s => s.name !== currentTestSkill.name);
    currentTestSkill = null;

    showScreen('skills');
    updateVerifiedDisplay();
    updateActionButtons();
    updateSkillsDisplay();
}

// Team Matching
function findTeams() {
    const container = document.getElementById('teams-container');
    container.innerHTML = mockTeams.map(team => `
        <div class="team-card">
            <div class="team-header">
                <div class="team-info">
                    <h3>${team.name}</h3>
                    <p>${team.members} members • ${team.matchPercent}% match</p>
                </div>
                <div class="match-percent">${team.matchPercent}%</div>
            </div>

            <div class="skill-section">
                <div class="section-label">Common Skills</div>
                <div class="skill-tags">
                    ${team.commonSkills.map(s => `<span class="tag tag-success">✓ ${s}</span>`).join('')}
                </div>
            </div>

            <div class="skill-section">
                <div class="section-label">They Need</div>
                <div class="skill-tags">
                    ${team.needsSkills.map(s => `<span class="tag tag-secondary">${s}</span>`).join('')}
                </div>
            </div>

            <button class="btn-primary btn-team">Send Request →</button>
        </div>
    `).join('');

    showScreen('matching');
}

// Logout
function logout() {
    currentUser = { email: '', name: '', password: '' };
    selectedSkills = [];
    verifiedSkills = [];
    currentTestSkill = null;
    currentQuestion = 0;
    testScore = 0;

    document.getElementById('email-input').value = '';
    document.getElementById('name-input').value = '';
    document.getElementById('password-input').value = '';

    showScreen('landing');
}