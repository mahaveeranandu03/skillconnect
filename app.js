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
        { q: 'What is the Virtual DOM in React?',              options: ['A copy of real DOM in memory','A real DOM element','A server-side component','A CSS framework'], correct: 0 },
        { q: 'Which hook manages component state?',            options: ['useEffect','useState','useRef','useContext'], correct: 1 },
        { q: 'How do you pass data to child components?',      options: ['State','Props','LocalStorage','Context only'], correct: 1 },
        { q: 'What is the purpose of useEffect?',              options: ['Manage state','Handle side effects','Style components','Fetch data only'], correct: 1 },
        { q: 'What does JSX stand for?',                       options: ['Java Syntax Extension','JavaScript XML','JSON XML Syntax','JavaScript Extra'], correct: 1 },
        { q: 'Which method renders a React component to the DOM?', options: ['React.start()','ReactDOM.render()','React.mount()','ReactDOM.create()'], correct: 1 },
        { q: 'What is the key prop used for in lists?',        options: ['Styling elements','Helping React identify changed items','Setting focus','Routing'], correct: 1 },
        { q: 'What is a React fragment?',                      options: ['A broken component','A way to group elements without extra DOM nodes','A CSS class','A hook'], correct: 1 },
        { q: 'Which hook runs only once after mount?',         options: ['useState','useRef','useEffect with []','useCallback'], correct: 2 },
        { q: 'What is prop drilling?',                         options: ['Passing props through many nested components','Deleting props','Styling with props','Creating default props'], correct: 0 },
    ],
    'HTML/CSS': [
        { q: 'Which CSS property controls spacing inside an element?', options: ['margin','padding','border','outline'], correct: 1 },
        { q: 'What does the flexbox property do?',             options: ['Creates animations','Layouts items in a row or column','Manages state','Compresses files'], correct: 1 },
        { q: 'How do you select an element with id="hero"?',   options: ['.hero','#hero','hero{}','@hero'], correct: 1 },
        { q: 'What is a semantic HTML element?',               options: ['Large elements','Colorful elements','Elements with meaning like <header>','Deprecated elements'], correct: 2 },
        { q: 'Which HTML tag is used to link a CSS file?',     options: ['<style>','<script>','<link>','<css>'], correct: 2 },
        { q: 'What does CSS stand for?',                       options: ['Creative Style Sheets','Cascading Style Sheets','Computer Style Sheets','Colorful Style Sheets'], correct: 1 },
        { q: 'Which CSS property makes an element invisible but still takes space?', options: ['display:none','opacity:0','visibility:hidden','Both opacity:0 and visibility:hidden'], correct: 3 },
        { q: 'What is the CSS box model?',                     options: ['A 3D model','Content, padding, border, margin','Header and footer','Flexbox layout'], correct: 1 },
        { q: 'What does the z-index property control?',        options: ['Zoom level','Stacking order of elements','Horizontal position','Font size'], correct: 1 },
        { q: 'Which value of position makes an element scroll with the page but stay in a specific spot?', options: ['relative','absolute','sticky','fixed'], correct: 2 },
    ],
    'JavaScript': [
        { q: 'What is closure in JavaScript?',                 options: ['Ending a loop','Function with access to outer scope','Async operation','CSS property'], correct: 1 },
        { q: 'What does "this" refer to?',                     options: ['Variable','Current object context','Window always','Undefined'], correct: 1 },
        { q: 'How do you create a Promise?',                   options: ['new Promise()','promise()','Promise{}','async function'], correct: 0 },
        { q: 'What is destructuring?',                         options: ['Breaking code','Extracting values from objects/arrays','Deleting variables','Compiling code'], correct: 1 },
        { q: 'What does the spread operator (...) do?',        options: ['Creates loops','Expands iterable elements','Catches errors','Declares variables'], correct: 1 },
        { q: 'What is the difference between == and ===?',     options: ['No difference','=== checks type and value','== is faster','=== only works with numbers'], correct: 1 },
        { q: 'What does Array.map() return?',                  options: ['A number','The original array','A new array','Undefined'], correct: 2 },
        { q: 'What is event bubbling?',                        options: ['Creating events','Events propagating up the DOM tree','Async events','CSS animations'], correct: 1 },
        { q: 'What is the purpose of async/await?',            options: ['Styling','Handle promises more cleanly','Loop through arrays','Declare constants'], correct: 1 },
        { q: 'Which method removes the last element of an array?', options: ['shift()','pop()','splice()','slice()'], correct: 1 },
    ],
    'Node.js': [
        { q: 'What is npm?',                                   options: ['Node Package Manager','New Programming Module','Node Program Name','Network Package Manager'], correct: 0 },
        { q: 'How do you import a module?',                    options: ['include','require()','import statement','Both require and import'], correct: 3 },
        { q: 'What is Express?',                               options: ['A browser','Web framework for Node.js','A database','A testing tool'], correct: 1 },
        { q: 'How do you handle asynchronous code?',           options: ['Callbacks','Promises','Async/await','All of the above'], correct: 3 },
        { q: 'What is the event loop in Node.js?',             options: ['A for loop','Mechanism to handle async operations','A CSS animation loop','A database query'], correct: 1 },
        { q: 'What file defines project dependencies in Node?', options: ['index.js','server.js','package.json','config.js'], correct: 2 },
        { q: 'What is middleware in Express?',                  options: ['Database layer','Functions that execute during request/response cycle','Frontend components','Testing tools'], correct: 1 },
        { q: 'What does res.json() do in Express?',            options: ['Reads JSON','Sends a JSON response','Parses JSON','Validates JSON'], correct: 1 },
        { q: 'What is the purpose of the .env file?',          options: ['Store UI styles','Store environment variables','Store database records','Store test cases'], correct: 1 },
        { q: 'Which module is used to create an HTTP server in pure Node.js?', options: ['fs','path','http','os'], correct: 2 },
    ],
    'Python': [
        { q: 'What is pip in Python?',                         options: ['Package manager','Programming language','Compiler','IDE'], correct: 0 },
        { q: 'How do you create a list?',                      options: ['list()','[]','both','None'], correct: 2 },
        { q: 'What is a virtual environment?',                 options: ['Emulator','Isolated Python environment','Cloud server','Docker container'], correct: 1 },
        { q: 'What does *args do?',                            options: ['Multiple arguments','Pointer','Reference','Multiplication'], correct: 0 },
        { q: 'What is a Python decorator?',                    options: ['A CSS tool','A function that modifies another function','A type of loop','A class method'], correct: 1 },
        { q: 'What does the "self" parameter represent in a class?', options: ['A string','The class itself','The current instance','A module'], correct: 2 },
        { q: 'What is a list comprehension?',                  options: ['A list summary','A concise way to create lists','A sorting algorithm','A type of import'], correct: 1 },
        { q: 'What does the "with" statement do?',             options: ['Creates a loop','Manages context like file handling','Imports modules','Defines functions'], correct: 1 },
        { q: 'What is the difference between a list and a tuple?', options: ['No difference','Tuples are immutable','Lists are faster','Tuples hold more data'], correct: 1 },
        { q: 'What does __init__ do in a Python class?',       options: ['Deletes an object','Initializes an object','Copies an object','Imports a class'], correct: 1 },
    ],
    'Vue.js': [
        { q: 'What is Vue.js?',                                options: ['A database','JavaScript framework','CSS library','Backend language'], correct: 1 },
        { q: 'How do you bind data in Vue?',                   options: ['@bind','v-model','bind-data','data-bind'], correct: 1 },
        { q: 'What is a component in Vue?',                    options: ['CSS rule','Reusable Vue instance','HTML element','JavaScript function'], correct: 1 },
        { q: 'How do you handle events in Vue?',               options: ['onclick','v-on or @','@on','event-handler'], correct: 1 },
        { q: 'What is the Vue CLI used for?',                  options: ['Database management','Scaffolding Vue projects','Styling','Testing only'], correct: 1 },
        { q: 'What is a Vue directive?',                       options: ['A CSS class','Special HTML attributes like v-if, v-for','A router link','A lifecycle hook'], correct: 1 },
        { q: 'What does v-if do?',                             options: ['Loops over items','Conditionally renders an element','Binds data','Handles clicks'], correct: 1 },
        { q: 'What is Vuex used for?',                         options: ['Routing','Centralized state management','Styling','Testing'], correct: 1 },
        { q: 'What is a lifecycle hook in Vue?',               options: ['A CSS animation','Functions triggered at stages of a component\'s life','A router guard','A data validator'], correct: 1 },
        { q: 'What does the computed property do in Vue?',     options: ['Renders HTML','Returns cached reactive values','Fetches data','Creates methods'], correct: 1 },
    ],
    'Docker': [
        { q: 'What is Docker?',                                options: ['Database','Containerization platform','IDE','Cloud service'], correct: 1 },
        { q: 'What is a Docker image?',                        options: ['Photo file','Blueprint for containers','Running process','Configuration'], correct: 1 },
        { q: 'What command runs a container?',                 options: ['docker build','docker run','docker start','docker create'], correct: 1 },
        { q: 'What is Docker Compose?',                        options: ['Compress tool','Multi-container orchestration','Image creator','Network tool'], correct: 1 },
        { q: 'What is a Dockerfile?',                          options: ['A log file','A script to build a Docker image','A network config','A database file'], correct: 1 },
        { q: 'What does docker ps show?',                      options: ['System processes','Running containers','Images list','Network info'], correct: 1 },
        { q: 'What is a Docker volume used for?',              options: ['Network speed','Persisting data beyond container lifecycle','Scaling containers','Security'], correct: 1 },
        { q: 'What is Docker Hub?',                            options: ['A container runtime','A public registry for Docker images','A CI/CD tool','An orchestration platform'], correct: 1 },
        { q: 'What does the EXPOSE instruction in a Dockerfile do?', options: ['Opens a browser','Documents which port the container listens on','Starts the app','Installs packages'], correct: 1 },
        { q: 'What is the difference between CMD and ENTRYPOINT?', options: ['No difference','ENTRYPOINT sets main command; CMD provides defaults','CMD is mandatory','ENTRYPOINT is optional'], correct: 1 },
    ],
    'UI/UX Design': [
        { q: 'What is user research?',                         options: ['Studying code','Understanding user needs and behaviors','Testing UI','Writing docs'], correct: 1 },
        { q: 'What is wireframing?',                           options: ['Network setup','Low-fidelity layout sketch','Final design','Animation'], correct: 1 },
        { q: 'What does CTA mean?',                            options: ['Click To Add','Call To Action','Create Text Area','Cascading Tags'], correct: 1 },
        { q: 'What is information architecture?',              options: ['Building structure','Organizing and structuring content','Database design','Server setup'], correct: 1 },
        { q: 'What is a persona in UX?',                       options: ['A designer\'s nickname','A fictional user representing a target audience','A color palette','A font style'], correct: 1 },
        { q: 'What does usability mean in UX?',                options: ['How colorful a UI is','How easily users can accomplish tasks','How fast the server is','How secure the app is'], correct: 1 },
        { q: 'What is the purpose of A/B testing?',            options: ['Comparing two backend APIs','Comparing two design variations to see which performs better','Testing mobile vs desktop','Unit testing UI components'], correct: 1 },
        { q: 'What is a user journey map?',                    options: ['A GPS map','A visual representation of a user\'s experience with a product','A navigation menu','A sitemap'], correct: 1 },
        { q: 'What does accessibility mean in design?',        options: ['Fast loading','Designing so people with disabilities can use the product','Using dark mode','Mobile responsiveness'], correct: 1 },
        { q: 'What is the difference between UI and UX?',      options: ['No difference','UI is visual design; UX is the overall user experience','UX is only for mobile','UI includes backend'], correct: 1 },
    ],
    'Java': [
        { q: 'What is Java?',                                  options: ['A beverage','A platform-independent programming language','Database','Framework'], correct: 1 },
        { q: 'What is OOP?',                                   options: ['Object-Oriented Programming','Open Online Protocol','Object Operating Procedure','None'], correct: 0 },
        { q: 'What is a class?',                               options: ['A classroom','Blueprint for objects','A file','A method'], correct: 1 },
        { q: 'What is inheritance?',                           options: ['Money transfer','One class acquiring properties of another','Variables','Loops'], correct: 1 },
        { q: 'What is the JVM?',                               options: ['Java Variable Method','Java Virtual Machine','Java Version Manager','Java Visual Mode'], correct: 1 },
        { q: 'What is an interface in Java?',                  options: ['A UI screen','A contract of abstract methods','A type of loop','A data structure'], correct: 1 },
        { q: 'What does the "final" keyword do?',              options: ['Ends a program','Prevents modification of variables, methods, or classes','Declares a function','Creates a loop'], correct: 1 },
        { q: 'What is exception handling in Java?',            options: ['Handling CSS errors','Managing runtime errors using try/catch','Deleting variables','Importing packages'], correct: 1 },
        { q: 'What is polymorphism?',                          options: ['Multiple databases','The ability of objects to take many forms','A loop type','A data structure'], correct: 1 },
        { q: 'What is the difference between an abstract class and an interface?', options: ['No difference','Abstract classes can have implemented methods; interfaces cannot (before Java 8)','Interfaces are faster','Abstract classes are deprecated'], correct: 1 },
    ],
    'MongoDB': [
        { q: 'What is MongoDB?',                               options: ['SQL Database','NoSQL Document Database','Framework','Frontend library'], correct: 1 },
        { q: 'What is a document in MongoDB?',                 options: ['PDF file','A JSON-like data record','Code file','HTML file'], correct: 1 },
        { q: 'What format does MongoDB store data in?',        options: ['JSON','XML','BSON','CSV'], correct: 2 },
        { q: 'What is a collection in MongoDB?',               options: ['Group of databases','A group of documents (like a table)','Database backup','File'], correct: 1 },
        { q: 'What is Mongoose?',                              options: ['An animal','An ODM library for MongoDB and Node.js','A database GUI','A CSS framework'], correct: 1 },
        { q: 'What does the find() method do?',                options: ['Deletes documents','Queries and returns documents','Updates documents','Creates an index'], correct: 1 },
        { q: 'What is an index in MongoDB?',                   options: ['A table of contents','A data structure that improves query speed','A primary key','A schema'], correct: 1 },
        { q: 'What is an aggregation pipeline?',               options: ['A CI/CD tool','A framework for transforming and analyzing data in stages','A backup system','A connection pool'], correct: 1 },
        { q: 'What does $match do in an aggregation?',         options: ['Sorts documents','Filters documents by a condition','Groups documents','Projects fields'], correct: 1 },
        { q: 'What is a replica set in MongoDB?',              options: ['A duplicate database file','A group of MongoDB instances maintaining the same data for redundancy','A testing tool','A data migration tool'], correct: 1 },
    ],
    'Figma': [
        { q: 'What is Figma?',                                 options: ['Math tool','Cloud-based collaborative design software','Programming language','Database'], correct: 1 },
        { q: 'What is a frame in Figma?',                      options: ['Picture holder','An artboard or screen container for design','Code block','Animation'], correct: 1 },
        { q: 'Can Figma be used collaboratively in real time?', options: ['No','Yes, multiple designers can work simultaneously','Only offline','Not yet'], correct: 1 },
        { q: 'What is prototyping in Figma?',                  options: ['Taking photos','Creating interactive, clickable mockups','Coding','Testing'], correct: 1 },
        { q: 'What are components in Figma?',                  options: ['Plugins','Reusable design elements','Code snippets','Color palettes'], correct: 1 },
        { q: 'What is Auto Layout in Figma?',                  options: ['A plugin','A feature that auto-arranges and resizes elements','An export option','A color tool'], correct: 1 },
        { q: 'What is a variant in Figma components?',         options: ['A bug','Different states or versions of a component','A layer type','A grid setting'], correct: 1 },
        { q: 'What does the inspect panel in Figma show?',     options: ['Grammar errors','CSS values, dimensions, and assets for developers','User analytics','Font licensing'], correct: 1 },
        { q: 'What is a constraint in Figma?',                 options: ['A design limitation','A rule controlling how elements resize relative to their frame','A plugin restriction','A font rule'], correct: 1 },
        { q: 'What is the difference between a group and a frame in Figma?', options: ['No difference','Frames have layout properties and clip content; groups do not','Groups are for images only','Frames cannot be nested'], correct: 1 },
    ],
    'Adobe XD': [
        { q: 'What is Adobe XD?',                              options: ['Photo editor','A UI/UX design and prototyping tool','Video editor','Database'], correct: 1 },
        { q: 'Can you export prototypes from XD?',             options: ['No','Yes, as shareable links, videos and PDFs','Only images','Links only'], correct: 1 },
        { q: 'What is an artboard in XD?',                     options: ['A canvas/screen area for design','Background','Layer','Frame'], correct: 0 },
        { q: 'Does XD support plugins?',                       options: ['No','Yes, via the XD plugin ecosystem','Only paid version','Maybe'], correct: 1 },
        { q: 'What is Repeat Grid in Adobe XD?',               options: ['A CSS grid','A feature to duplicate and populate design elements quickly','A type of artboard','A color tool'], correct: 1 },
        { q: 'What does the Share mode in XD allow?',          options: ['Exporting fonts','Sharing prototypes for review and developer handoff','Uploading to social media','Printing designs'], correct: 1 },
        { q: 'What is a component in Adobe XD?',               options: ['A plugin','A reusable design element with master and instances','A screen layout','A color style'], correct: 1 },
        { q: 'What is voice prototyping in XD?',               options: ['Recording audio','Designing for voice UI interactions','Narrating a design','Adding subtitles'], correct: 1 },
        { q: 'What is the purpose of assets panel in XD?',     options: ['Exporting files','Managing reusable colors, character styles, and components','Installing plugins','Viewing user metrics'], correct: 1 },
        { q: 'What is coediting in Adobe XD?',                 options: ['Editing code','Real-time collaborative design with multiple users','Editing videos','Reviewing comments'], correct: 1 },
    ],
    'AWS': [
        { q: 'What is AWS?',                                   options: ['A website builder','Amazon\'s cloud computing platform','A programming language','A browser'], correct: 1 },
        { q: 'What is EC2?',                                   options: ['Email service','Elastic Compute Cloud — virtual servers','Database','Storage'], correct: 1 },
        { q: 'What is S3 in AWS?',                             options: ['A security service','Simple Storage Service for object storage','Server service','Search service'], correct: 1 },
        { q: 'Does AWS have a free tier?',                     options: ['No','Yes, with limited usage for new users','Only for enterprises','Only for 1 day'], correct: 1 },
        { q: 'What is AWS Lambda?',                            options: ['A database','A serverless compute service','A storage bucket','A CDN'], correct: 1 },
        { q: 'What is an IAM role?',                           options: ['A user profile','Permissions that define what AWS resources can be accessed','A security group','A VPC'], correct: 1 },
        { q: 'What is Amazon RDS?',                            options: ['A CDN','A managed relational database service','A file storage service','A DNS service'], correct: 1 },
        { q: 'What is a VPC in AWS?',                          options: ['Virtual Payment Center','Virtual Private Cloud — an isolated network','A compute service','A logging tool'], correct: 1 },
        { q: 'What is CloudFront used for?',                   options: ['Storing files','A CDN for delivering content with low latency','Running containers','Managing IAM'], correct: 1 },
        { q: 'What does auto-scaling do in AWS?',              options: ['Resizes images','Automatically adjusts compute capacity based on demand','Updates code','Backs up data'], correct: 1 },
    ],
    'CI/CD': [
        { q: 'What does CI stand for?',                        options: ['Computer Integration','Continuous Integration','Code Integration','Continuous Improvement'], correct: 1 },
        { q: 'What does CD stand for?',                        options: ['Continuous Design','Code Distribution','Continuous Deployment/Delivery','Computer Data'], correct: 2 },
        { q: 'What is a pipeline?',                            options: ['Water pipe','An automated sequence of build, test, and deploy steps','Code review','Testing only'], correct: 1 },
        { q: 'Popular CI/CD tools include?',                   options: ['Jenkins only','GitLab CI only','Jenkins, GitLab CI, GitHub Actions, CircleCI','None of these'], correct: 2 },
        { q: 'What is the purpose of automated testing in CI?', options: ['To replace developers','To catch bugs early before code is merged','To deploy code','To manage servers'], correct: 1 },
        { q: 'What is a build artifact?',                      options: ['A broken build','Output files produced by a build process (e.g. compiled code, Docker images)','A test report','A config file'], correct: 1 },
        { q: 'What is the difference between Continuous Delivery and Continuous Deployment?', options: ['No difference','Delivery requires manual approval to release; Deployment releases automatically','Delivery is faster','Deployment is older'], correct: 1 },
        { q: 'What is a rollback in CI/CD?',                   options: ['A new feature','Reverting to a previous working version after a bad deployment','A type of test','A build step'], correct: 1 },
        { q: 'What is a webhook in CI/CD context?',            options: ['A security hook','An HTTP callback that triggers a pipeline when code is pushed','A load balancer','A Docker command'], correct: 1 },
        { q: 'What does "shift left" mean in DevOps/CI?',      options: ['Moving servers left','Moving testing and security earlier in the development process','A Git branch strategy','Deploying to the left region'], correct: 1 },
    ],
};

const PASS_SCORE = 7;

// ============ PERSISTENT STORAGE (localStorage) ============
// sc_users = JSON array of:
// { email, name, phone, sem, branch, password, verifiedSkills:[{name,icon,score}], failedSkills:{skillName:timestamp} }

function getAllUsers() {
    try { return JSON.parse(localStorage.getItem('sc_users') || '[]'); }
    catch { return []; }
}
function saveAllUsers(users) {
    localStorage.setItem('sc_users', JSON.stringify(users));
}
function getUserByEmail(email) {
    return getAllUsers().find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
}
function persistCurrentUser() {
    const users = getAllUsers();
    const idx   = users.findIndex(u => u.email.toLowerCase() === currentUser.email.toLowerCase());
    if (idx >= 0) users[idx] = currentUser;
    else users.push(currentUser);
    saveAllUsers(users);
}

// ============ SESSION STATE ============

let currentUser      = null;
let selectedSkills   = [];
let currentTestSkill = null;
let currentQuestion  = 0;
let testScore        = 0;

// ============ HELPERS ============

function isOnCooldown(skillName) {
    const ts = (currentUser?.failedSkills || {})[skillName];
    if (!ts) return false;
    return (Date.now() - ts) < 24 * 60 * 60 * 1000;
}
function cooldownRemaining(skillName) {
    const ts = (currentUser?.failedSkills || {})[skillName];
    if (!ts) return null;
    const ms = 24 * 60 * 60 * 1000 - (Date.now() - ts);
    if (ms <= 0) return null;
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    return `${h}h ${m}m`;
}

// Inline field-level error display
function showFieldError(fieldId, msg) {
    const el = document.getElementById(fieldId);
    if (!el) return;
    el.classList.add('input-error');
    let err = el.parentElement.querySelector('.field-error');
    if (!err) {
        err = document.createElement('div');
        err.className = 'field-error';
        el.after(err);
    }
    err.textContent = msg;
}
function clearFieldErrors(...ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('input-error');
        const err = el.parentElement.querySelector('.field-error');
        if (err) err.remove();
    });
}

// ============ SCREEN MANAGEMENT ============

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId + '-screen').classList.add('active');
    if (screenId === 'skills') {
        document.getElementById('user-name-display').textContent = currentUser?.name || 'User';
        updateVerifiedDisplay();
        renderSkills();
        updateActionButtons();
    }
    if (screenId === 'profile') loadProfile();
}

// ============ AUTH TABS ============

function switchTab(tab) {
    document.getElementById('tab-signin').classList.toggle('tab-active', tab === 'signin');
    document.getElementById('tab-signup').classList.toggle('tab-active', tab === 'signup');
    document.getElementById('signin-form').style.display = tab === 'signin' ? 'block' : 'none';
    document.getElementById('signup-form').style.display = tab === 'signup' ? 'block' : 'none';
}

// ============ SIGN IN ============

function handleSignIn() {
    const email    = document.getElementById('si-email').value.trim();
    const password = document.getElementById('si-password').value;
    clearFieldErrors('si-email', 'si-password');

    let valid = true;
    if (!email)    { showFieldError('si-email',    'Email is required');    valid = false; }
    if (!password) { showFieldError('si-password', 'Password is required'); valid = false; }
    if (!valid) return;

    const user = getUserByEmail(email);
    if (!user) { showFieldError('si-email', 'No account found with this email'); return; }
    if (user.password !== password) { showFieldError('si-password', '❌ Wrong password. Please try again.'); return; }

    currentUser    = user;
    selectedSkills = [];
    showScreen('skills');
}

// ============ SIGN UP ============

function handleSignUp() {
    const name    = document.getElementById('su-fullname').value.trim();
    const email   = document.getElementById('su-email').value.trim();
    const phone   = document.getElementById('su-phone').value.trim();
    const sem     = document.getElementById('su-sem').value;
    const branch  = document.getElementById('su-branch').value;
    const pass    = document.getElementById('su-password').value;
    const confirm = document.getElementById('su-confirm').value;

    clearFieldErrors('su-fullname','su-email','su-phone','su-sem','su-branch','su-password','su-confirm');

    let valid = true;
    if (!name)  { showFieldError('su-fullname', 'Full name is required'); valid = false; }

    if (!email) { showFieldError('su-email', 'Email is required'); valid = false; }
    else if (!email.includes('@') || !email.includes('.')) { showFieldError('su-email', 'Enter a valid college email'); valid = false; }
    else if (getUserByEmail(email)) { showFieldError('su-email', 'Account already exists with this email. Sign in instead.'); valid = false; }

    if (!phone)              { showFieldError('su-phone', 'Phone number is required'); valid = false; }
    else if (!/^\d{10}$/.test(phone)) { showFieldError('su-phone', 'Enter a valid 10-digit phone number'); valid = false; }

    if (!sem)    { showFieldError('su-sem',    'Please select a semester'); valid = false; }
    if (!branch) { showFieldError('su-branch', 'Please select a branch');   valid = false; }

    if (!pass)             { showFieldError('su-password', 'Password is required'); valid = false; }
    else if (pass.length < 6) { showFieldError('su-password', 'Password must be at least 6 characters'); valid = false; }

    if (!confirm)          { showFieldError('su-confirm', 'Please confirm your password'); valid = false; }
    else if (confirm !== pass) { showFieldError('su-confirm', '❌ Passwords do not match'); valid = false; }

    if (!valid) return;

    currentUser = { name, email, phone, sem, branch, password: pass, verifiedSkills: [], failedSkills: {} };
    persistCurrentUser();
    selectedSkills = [];
    showScreen('skills');
}

// ============ SKILLS ============

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    const verified = currentUser?.verifiedSkills || [];

    Object.entries(skillCategories).forEach(([category, skills]) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skills-category';
        categoryDiv.innerHTML = `<h3 class="category-title">${category}</h3>`;
        const grid = document.createElement('div');
        grid.className = 'skills-grid';

        skills.forEach(skill => {
            const isSelected = selectedSkills.some(s => s.name === skill.name);
            const isVerified = verified.some(v => v.name === skill.name);
            const isFailed   = isOnCooldown(skill.name);

            const card = document.createElement('div');
            card.className = 'skill-card'
                + (isSelected ? ' selected' : '')
                + (isVerified ? ' verified' : '')
                + (isFailed   ? ' failed'   : '');

            let badge = '';
            if (isVerified)   badge = ' · ✓ verified';
            else if (isFailed) badge = ' · 🔒 retry in 24h';

            card.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-category">${category}${badge}</div>
            `;
            if (!isVerified && !isFailed) card.onclick = () => toggleSkill(skill);
            grid.appendChild(card);
        });

        categoryDiv.appendChild(grid);
        container.appendChild(categoryDiv);
    });
}

function toggleSkill(skill) {
    const idx = selectedSkills.findIndex(s => s.name === skill.name);
    if (idx >= 0) selectedSkills.splice(idx, 1);
    else selectedSkills.push(skill);
    renderSkills();
    updateActionButtons();
}

function updateVerifiedDisplay() {
    const section  = document.getElementById('verified-section');
    const badges   = document.getElementById('verified-badges');
    const verified = currentUser?.verifiedSkills || [];
    if (verified.length === 0) { section.classList.remove('show'); return; }
    section.classList.add('show');
    badges.innerHTML = verified.map(skill => `
        <div class="skill-badge">
            <span>${skill.icon}</span>
            <span>${skill.name}</span>
            <span class="score">${skill.score}/10</span>
        </div>
    `).join('');
}

function updateActionButtons() {
    const verified = currentUser?.verifiedSkills || [];
    document.getElementById('start-test-btn').style.display  = selectedSkills.length > 0 ? 'block' : 'none';
    document.getElementById('find-people-btn').style.display = verified.length > 0        ? 'block' : 'none';
}

// ============ TESTING ============

function startTest() {
    if (selectedSkills.length === 0) return;
    currentTestSkill = selectedSkills[0];
    currentQuestion  = 0;
    testScore        = 0;
    renderTestQuestion();
    showScreen('test');
}

function renderTestQuestion() {
    const questions = skillTests[currentTestSkill.name] || [];
    const question  = questions[currentQuestion];
    const totalQ    = questions.length;

    document.getElementById('test-icon').textContent       = currentTestSkill.icon;
    document.getElementById('test-skill-name').textContent = currentTestSkill.name;
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${totalQ}`;
    document.getElementById('test-question').textContent   = question.q;
    document.getElementById('total-questions').textContent = totalQ;
    document.getElementById('progress-fill').style.width   = ((currentQuestion + 1) / totalQ * 100) + '%';

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
    if (currentQuestion < questions.length - 1) { currentQuestion++; renderTestQuestion(); }
    else completeTest();
}

function completeTest() {
    const passed = testScore >= PASS_SCORE;
    if (!currentUser.verifiedSkills) currentUser.verifiedSkills = [];
    if (!currentUser.failedSkills)   currentUser.failedSkills   = {};

    if (passed) {
        const existing = currentUser.verifiedSkills.findIndex(v => v.name === currentTestSkill.name);
        const entry    = { name: currentTestSkill.name, icon: currentTestSkill.icon, score: testScore };
        if (existing >= 0) currentUser.verifiedSkills[existing] = entry;
        else currentUser.verifiedSkills.push(entry);
        delete currentUser.failedSkills[currentTestSkill.name];
    } else {
        currentUser.failedSkills[currentTestSkill.name] = Date.now();
    }

    // Save so friends can see updated skills
    persistCurrentUser();
    selectedSkills = selectedSkills.filter(s => s.name !== currentTestSkill.name);
    showResultScreen(passed, currentTestSkill, testScore);
    currentTestSkill = null;
}

// ============ RESULT SCREEN ============

function showResultScreen(passed, skill, score) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('active');

    const icon    = document.getElementById('result-icon');
    const title   = document.getElementById('result-title');
    const msg     = document.getElementById('result-message');
    const subMsg  = document.getElementById('result-submessage');
    const actions = document.getElementById('result-actions');

    if (passed) {
        icon.textContent   = '🎉';
        title.textContent  = 'Skill Verified!';
        title.className    = 'result-title result-pass';
        msg.textContent    = `You scored ${score}/10 on ${skill.name}. Well done!`;
        subMsg.textContent = 'You can now browse the People Directory.';
        actions.innerHTML  = `
            <button class="btn-primary" onclick="showDirectory()">Browse People →</button>
            <button class="btn-secondary" onclick="showScreen('skills')">Back to Skills</button>
        `;
    } else {
        const remaining = cooldownRemaining(skill.name);
        icon.textContent   = '😔';
        title.textContent  = 'Not Passed';
        title.className    = 'result-title result-fail';
        msg.textContent    = `You scored ${score}/10 on ${skill.name}. You need at least ${PASS_SCORE}/10 to pass.`;
        subMsg.textContent = `You can retake this test after 24 hours${remaining ? ' (in about ' + remaining + ')' : ''}.`;
        actions.innerHTML  = `<button class="btn-secondary" onclick="showScreen('skills')">Back to Skills</button>`;
    }
}

// ============ DIRECTORY ============

function showDirectory() {
    const verified = currentUser?.verifiedSkills || [];
    if (verified.length === 0) { showAccessDeniedModal(); return; }

    const allUsers = getAllUsers();
    const people   = [];

    // Current user first
    people.push({
        name: currentUser.name, phone: currentUser.phone,
        sem: currentUser.sem, branch: currentUser.branch,
        skills: verified.map(v => v.name), isMe: true,
    });

    // Other registered users with at least one verified skill
    allUsers.forEach(u => {
        if (u.email.toLowerCase() === currentUser.email.toLowerCase()) return;
        if (!u.verifiedSkills || u.verifiedSkills.length === 0) return;
        people.push({
            name: u.name, phone: u.phone,
            sem: u.sem, branch: u.branch,
            skills: u.verifiedSkills.map(v => v.name), isMe: false,
        });
    });

    renderDirectory(people);
    showScreen('directory');
}

function showAccessDeniedModal() {
    document.getElementById('access-denied-modal').classList.add('show');
}
function closeAccessDeniedModal() {
    document.getElementById('access-denied-modal').classList.remove('show');
}

function renderDirectory(people) {
    const grid = document.getElementById('people-grid');
    grid.innerHTML = people.map(person => {
        const initials  = person.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
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
    if (!currentUser) return;
    document.getElementById('pf-name').textContent   = currentUser.name   || '—';
    document.getElementById('pf-email').textContent  = currentUser.email  || '—';
    document.getElementById('pf-sem').textContent    = currentUser.sem    || '—';
    document.getElementById('pf-branch').textContent = currentUser.branch || '—';
    document.getElementById('pf-phone').textContent  = currentUser.phone  || '—';

    const verified = currentUser.verifiedSkills || [];
    const skillsEl = document.getElementById('pf-skills');
    skillsEl.innerHTML = verified.length === 0
        ? '<p style="color:var(--text-muted);font-size:14px;">No verified skills yet. Take a test!</p>'
        : verified.map(s => `
            <div class="skill-badge">
                <span>${s.icon}</span><span>${s.name}</span>
                <span class="score">${s.score}/10</span>
            </div>`).join('');
}

// ============ LOGOUT ============

function logout() {
    currentUser = null; selectedSkills = []; currentTestSkill = null;
    currentQuestion = 0; testScore = 0;
    ['si-email','si-password','su-fullname','su-email','su-phone','su-password','su-confirm'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = '';
    });
    const sem = document.getElementById('su-sem'); if (sem) sem.value = '';
    switchTab('signin');
    showScreen('auth');
}

// ============ INIT ============
window.addEventListener('DOMContentLoaded', () => switchTab('signin'));