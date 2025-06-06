// --- DUMMY DATA ---
let currentStudentData = {
    name: "Alex Johnson",
    targetScore: 1400,
    latestScores: { total: 1250, rw: 620, math: 630, avgEocKhan: 78 },
    timeSpent: { studentAvg: 120, studentUnit: "min / day", classAvg: 130, classUnit: "min / day"},
    scoreTrend: { labels: ['Diag', 'Test 1', 'Test 2'], studentScores: [1130, 1220, 1250], classAvgScores: [1050, 1150, 1180] },
    overallSkillPerformance: { labels: ['Reading', 'Writing', 'Math'], studentAccuracy: [78, 82, 75], classAvgAccuracy: [75, 79, 72] },

    cbPracticeTests: [
        {
            name: "Diagnostic Test", date: "2024-03-01", rw: "550", math: "580", total: "1130",
            questions: [
                { id: "DT-Q1", subject: "math", skill: "Linear Equations", difficulty: "Easy", yourAnswer: "x = 4", correctAnswer: "x = 4", isCorrect: true, explanation: "To solve 3x - 7 = 5, add 7 to both sides to get 3x = 12, then divide by 3.", yourTime: 40, classAvgTime: 45, classPerformance: { correct: 85, incorrect: 10, unanswered: 5 }, source: "Diagnostic Test", text: "What is the value of x in the equation 3x - 7 = 5?" },
                { id: "DT-Q2", subject: "reading", skill: "Command of Evidence", difficulty: "Medium", yourAnswer: "Lines 20-25", correctAnswer: "Lines 30-35", isCorrect: false, explanation: "The best evidence is in the third paragraph, which directly discusses the author's main counter-argument. Look for keywords that align with the core idea presented in the question prompt. Pay close attention to subtle shifts in tone or argument.", yourTime: 90, classAvgTime: 75, classPerformance: { correct: 65, incorrect: 30, unanswered: 5 }, source: "Diagnostic Test", text: "Which lines best support the author's claim about the importance of ecological diversity?" },
                { id: "DT-Q3", subject: "writing", skill: "Transitions", difficulty: "Hard", yourAnswer: "However", correctAnswer: "Therefore", isCorrect: false, explanation: "The transition needs to indicate a result, not a contrast. The preceding sentence sets up a cause, and this sentence presents its effect. Therefore, 'Therefore' (or 'Consequently') is the appropriate choice to show a logical progression.", yourTime: 55, classAvgTime: 40, classPerformance: { correct: 50, incorrect: 45, unanswered: 5 }, source: "Diagnostic Test", text: "The city implemented new recycling policies; ______, waste decreased by 20%." },
                { id: "DT-Q4", subject: "math", skill: "Advanced Math", difficulty: "Hard", yourAnswer: "A", correctAnswer: "C", isCorrect: false, explanation: "This problem requires careful application of quadratic formula properties and understanding of complex numbers. The discriminant must be negative for non-real solutions, and specific conditions apply to the coefficients. Review the properties of polynomials and their roots.", yourTime: 180, classAvgTime: 120, classPerformance: { correct: 40, incorrect: 50, unanswered: 10 }, source: "Diagnostic Test", text: "For what value of k does the equation x^2 + 6x + k = 0 have exactly one real solution?" },
            ]
        },
        {
            name: "Official Practice Test 1", date: "2024-04-15", rw: "600", math: "620", total: "1220",
            questions: [
                { id: "OPT1-Q1", subject: "reading", skill: "Words in Context", difficulty: "Easy", yourAnswer: "convey", correctAnswer: "convey", isCorrect: true, explanation: "The word 'convey' in this context means to communicate or express. It fits the meaning of transmitting an idea.", yourTime: 30, classAvgTime: 35, classPerformance: { correct: 90, incorrect: 5, unanswered: 5 }, source: "Official Practice Test 1", text: "In line 15, the word 'articulate' most nearly means..." },
                { id: "OPT1-Q2", subject: "writing", skill: "Sentence Structure", difficulty: "Medium", yourAnswer: "is known for", correctAnswer: "are known for", isCorrect: false, explanation: "Subject-verb agreement: 'Birds' (plural) requires 'are'. The verb must agree with the true subject of the sentence, not a noun in a prepositional phrase.", yourTime: 45, classAvgTime: 40, classPerformance: { correct: 70, incorrect: 25, unanswered: 5 }, source: "Official Practice Test 1", text: "The flock of birds that migrate annually _____ for its vibrant plumage." },
            ]
        },
        { name: "Official Practice Test 2", date: "Not Attempted", rw: "-", math: "-", total: "-"},
    ],

    eocQuizzes: {
        reading: [
            {
                name: "Vocabulary in Context Quiz 1", date: "2024-05-01", latestScore: "85% (17/20)",
                questions: [
                    { id: "EOC-R1-Q1", subject: "reading", skill: "Words in Context", difficulty: "Easy", yourAnswer: "expand", correctAnswer: "expand", isCorrect: true, explanation: "Given the context of growth, 'expand' is the most appropriate word. The passage describes a rapidly growing phenomenon, making 'expansion' the logical choice.", classPerformance: { correct: 90, incorrect: 8, unanswered: 2 }, source: "Reading EOC Quiz 1", text: "The nascent industry began to rapidly ______ its reach." },
                    { id: "EOC-R1-Q2", subject: "reading", skill: "Words in Context", difficulty: "Medium", yourAnswer: "diminish", correctAnswer: "amplify", isCorrect: false, explanation: "The sentence implies an increase, not a decrease. The word 'amplify' means to increase the volume or intensity of something, which fits the context of strengthening a signal. 'Diminish' is an antonym here.", classPerformance: { correct: 70, incorrect: 25, unanswered: 5 }, source: "Reading EOC Quiz 1", text: "To ______ the signal, the engineer installed a booster." },
                ]
            }
        ],
        writing: [
            {
                name: "Transitions Quiz 1", date: "2024-05-10", latestScore: "70% (14/20)",
                questions: [
                    { id: "EOC-W1-Q1", subject: "writing", skill: "Transitions", difficulty: "Medium", yourAnswer: "Therefore", correctAnswer: "However", isCorrect: false, explanation: "The second part of the sentence contrasts the first. 'However' introduces a contradictory statement, whereas 'Therefore' introduces a conclusion or result. The context here clearly indicates a contrast.", classPerformance: { correct: 60, incorrect: 35, unanswered: 5 }, source: "Writing EOC Quiz 1", text: "The weather forecast predicted rain; ______, the picnic was a huge success." },
                ]
            }
        ],
        math: [
            {
                name: "Linear Equations Quiz 1", date: "2024-05-15", latestScore: "90% (18/20)",
                questions: [
                    { id: "EOC-M1-Q1", subject: "math", skill: "Linear Equations", difficulty: "Easy", yourAnswer: "y = 2x+1", correctAnswer: "y = 2x+1", isCorrect: true, explanation: "Standard form of a linear equation. To find the equation of a line, you typically need a slope and a point, or two points. Here, the equation is given, so simply identify its form.", classPerformance: { correct: 95, incorrect: 3, unanswered: 2 }, source: "Math EOC Quiz 1", text: "Which of the following is a linear equation?" },
                ]
            }
        ]
    },
    // Updated skills to include attempted status for sorting
    skills: {
        reading: [
            { name: "Command of Evidence", score: 55, classAvg: 65, attempted: true },
            { name: "Words in Context", score: 92, classAvg: 80, attempted: true },
            { name: "Main Idea & Purpose", score: 70, classAvg: 75, attempted: true },
        ],
        writing: [
            { name: "Transitions", score: 48, classAvg: 70, attempted: true },
            { name: "Sentence Structure", score: 65, classAvg: 75, attempted: true },
            { name: "Conventions of Punctuation", score: 80, classAvg: 78, attempted: true },
        ],
        math: [
            { name: "Linear Equations", score: 95, classAvg: 85, attempted: true },
            { name: "Advanced Math", score: 45, classAvg: 72, attempted: true },
            { name: "Problem Solving & Data Analysis", score: 80, classAvg: 78, attempted: true },
        ]
    },
};

// Global array to hold all questions for easy access
let ALL_DASHBOARD_QUESTIONS = [];

// --- Date Formatting Helper ---
function formatDate(dateString) {
    if (!dateString || dateString === "N/A" || dateString === "Not Attempted") return dateString;
    try {
        const date = new Date(dateString + 'T00:00:00');
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    } catch (e) {
        console.error("Error formatting date:", dateString, e);
        return dateString;
    }
}

// This function will be called once the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // --- Chart.js Global Configuration ---
    Chart.defaults.font.family = 'Inter';
    Chart.defaults.plugins.legend.position = 'bottom';
    Chart.defaults.responsive = true;
    Chart.defaults.maintainAspectRatio = false;

    // Populate ALL_DASHBOARD_QUESTIONS from dummy data
    ALL_DASHBOARD_QUESTIONS = [
        ...(currentStudentData.cbPracticeTests.flatMap(t => t.questions || [])),
        ...(Object.values(currentStudentData.eocQuizzes).flat().flatMap(q => q.questions || []))
    ];

    loadAndDisplayData();
    setupEventListeners();
});

/**
 * Sets up all the interactive elements like tabs, mobile menu, and the refresh button.
 */
function setupEventListeners() {
    const mainTabs = document.querySelectorAll('.main-tab-button');
    const mainTabContents = document.querySelectorAll('.main-tab-content');
    const hamburgerButton = document.getElementById('hamburgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const refreshDataBtn = document.getElementById('refreshDataBtn');

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    hamburgerButton?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
    refreshDataBtn?.addEventListener('click', handleRefreshData);

    /**
     * Handles switching between main tabs.
     * @param {HTMLElement} tabElement - The button element that was clicked.
     */
    const switchMainTab = (tabElement) => {
        const targetTabName = tabElement.getAttribute('data-main-tab');

        // Deactivate all main tabs and hide all content
        mainTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.mobile-nav-link').forEach(link => link.classList.remove('active'));
        mainTabContents.forEach(content => content.classList.add('hidden'));

        // Activate the clicked tab and show its content
        document.querySelector(`.main-tab-button[data-main-tab="${targetTabName}"]`)?.classList.add('active');
        document.querySelector(`.mobile-nav-link[data-main-tab="${targetTabName}"]`)?.classList.add('active');
        document.getElementById(targetTabName + '-content')?.classList.remove('hidden');

        // Special handling for overview tab charts and subject tab sub-tabs
        if (targetTabName === 'overview') {
            initializeOverviewCharts(currentStudentData);
        } else if (['reading', 'writing', 'math'].includes(targetTabName)) {
            // For subject tabs, activate the default sub-tab (Skills Hub)
            const firstSubTabButton = document.querySelector(`#${targetTabName}-content .sub-tab-button[data-sub-tab="${targetTabName}-skills-hub"]`);
            if (firstSubTabButton) {
                switchSubTab(firstSubTabButton);
            }
        }

        // Hide mobile menu after selection
        mobileMenu?.classList.add('hidden');
    };

    // Attach event listeners to main tab buttons
    mainTabs.forEach(tab => tab.addEventListener('click', () => switchMainTab(tab)));
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            switchMainTab(link);
        });
    });

    /**
     * Handles switching between sub-tabs within a main tab.
     * @param {HTMLElement} subTabElement - The button element that was clicked.
     */
    const switchSubTab = (subTabElement) => {
        const parentMainContent = subTabElement.closest('.main-tab-content');
        const targetSubTabName = subTabElement.getAttribute('data-sub-tab');

        // Deactivate all sub-tabs and hide all sub-tab content panels in the current main tab
        parentMainContent.querySelectorAll('.sub-tab-button').forEach(st => st.classList.remove('active'));
        parentMainContent.querySelectorAll('.sub-tab-content-panel').forEach(panel => panel.classList.add('hidden'));

        // Activate the clicked sub-tab and show its content panel
        subTabElement.classList.add('active');
        document.getElementById(targetSubTabName + '-content')?.classList.remove('hidden');

        // Special rendering logic for Skills Hub when activated
        if (targetSubTabName.endsWith('-skills-hub')) {
            const subject = targetSubTabName.replace('-skills-hub', '');
            populateSkillsHub(subject, currentStudentData.skills[subject] || []);
        }
    };

    // Attach event listeners to sub-tab buttons
    document.querySelectorAll('.sub-tab-button').forEach(subTab => {
        subTab.addEventListener('click', () => switchSubTab(subTab));
    });

    // Manually trigger click on the initial active tab (Overview) to set up the dashboard
    document.querySelector('.main-tab-button[data-main-tab="overview"]')?.click();
}

/**
 * Placeholder for future data refresh logic (e.g., Google App Script call).
 */
function handleRefreshData() {
    console.log("Refresh Data button clicked! (Future: Initiate Google App Script call)");
    // In a real application, you would make an API call here to re-fetch data
    // and then call loadAndDisplayData() again.
    // Example: google.script.run.withSuccessHandler(refreshedData => {
    //     currentStudentData = refreshedData;
    //     loadAndDisplayData();
    // }).fetchLatestData();
    alert("Data refresh initiated! (Check console for message)");
}

/**
 * Main function to load and display all dashboard data.
 * This is called once on DOMContentLoaded.
 */
function loadAndDisplayData() {
    document.getElementById('studentNameDisplay').textContent = `Welcome, ${currentStudentData.name}!`;

    populateOverview(currentStudentData);
    populatePracticeTestsTable(currentStudentData.cbPracticeTests);

    // Iterate through subjects to populate their specific sections
    ['reading', 'writing', 'math'].forEach(subject => {
        populateEOCPractice(subject, currentStudentData.eocQuizzes[subject] || []);
        populateKhanAcademy(subject, currentStudentData.khanAcademy[subject] || []);
        // Populate Skills Hub will be called by the switchSubTab when that tab is activated
        // by default.
    });
}

/**
 * Populates the entire overview tab, including KPIs and dynamic strengths/weaknesses.
 */
function populateOverview(data) {
    // Populate KPI cards
    const kpiContainer = document.getElementById('overview-kpis');
    kpiContainer.innerHTML = `
        <div class="score-card"><h3 class="text-md font-medium text-gray-600">Latest Total Score</h3><p class="text-3xl font-bold score-value">${data.latestScores.total} <span class="text-lg text-gray-500">/ 1600</span></p></div>
        <div class="score-card"><h3 class="text-md font-medium text-gray-600">Latest R&W Score</h3><p class="text-3xl font-bold score-value">${data.latestScores.rw} <span class="text-lg text-gray-500">/ 800</span></p></div>
        <div class="score-card"><h3 class="text-md font-medium text-gray-600">Latest Math Score</h3><p class="text-3xl font-bold score-value">${data.latestScores.math} <span class="text-lg text-gray-500">/ 800</span></p></div>
        <div class="score-card"><h3 class="text-md font-medium text-gray-600">Avg EOC Score</h3><p class="text-3xl font-bold score-value">${data.latestScores.avgEocKhan}%</p></div>
        <div class="score-card"><h3 class="text-md font-medium text-gray-600">Your Target Score</h3><p class="text-3xl font-bold" style="color: #8a3ffc;">${data.targetScore}</p></div>`;

    // Populate Strengths & Weaknesses
    const allSkills = Object.values(data.skills).flat().filter(s => s.attempted);
    const strengths = [...allSkills].sort((a, b) => b.score - a.score).slice(0, 3);
    const weaknesses = [...allSkills].sort((a, b) => a.score - b.score).slice(0, 3);

    const renderList = (items) => items.map(item => `<li>${item.name} (${item.score}%)</li>`).join('');
    document.getElementById('overviewStrengthsContainer').innerHTML = `<ul class="list-disc list-inside space-y-1 text-gray-600">${renderList(strengths)}</ul>`;
    document.getElementById('overviewImprovementsContainer').innerHTML = `<ul class="list-disc list-inside space-y-1 text-gray-600">${renderList(weaknesses)}</ul>`;

    // Populate Time Spent
    document.getElementById('timeSpentOverview').innerHTML = `<p class="text-gray-600">Your Avg: <span class="font-semibold">${data.timeSpent.studentAvg} ${data.timeSpent.studentUnit}</span></p><p class="text-gray-600">Class Avg: <span class="font-semibold">${data.timeSpent.classAvg} ${data.timeSpent.classUnit}</span></p>`;
}

/**
 * Renders the main overview charts.
 * @param {object} data - The current student data.
 */
function initializeOverviewCharts(data) {
    ['scoreTrendChart', 'overallSkillChart'].forEach(id => {
        const instance = Chart.getChart(id);
        if (instance) instance.destroy(); // Destroy existing chart instance if it exists
    });

    new Chart('scoreTrendChart', { type: 'line', data: { labels: data.scoreTrend.labels, datasets: [{ label: 'Your Score', data: data.scoreTrend.studentScores, borderColor: '#2a5266', tension: 0.1 }, { label: 'Class Average', data: data.scoreTrend.classAvgScores, borderColor: '#757575', borderDash: [5, 5], tension: 0.1 }] } });
    new Chart('overallSkillChart', { type: 'bar', data: { labels: data.overallSkillPerformance.labels, datasets: [{ label: 'Your Accuracy', data: data.overallSkillPerformance.studentAccuracy, backgroundColor: 'rgba(42, 82, 102, 0.8)' }, { label: 'Class Average', data: data.overallSkillPerformance.classAvgAccuracy, backgroundColor: 'rgba(117, 117, 117, 0.7)' }] }, options: { scales: { y: { beginAtZero: true, max: 100 } } } });
}

// --- Subject-Specific Functions ---

/**
 * Populates the new combined "Skills Hub" tab.
 * This displays overall skill performance, sorted weakest first.
 * Clicking a skill here will open a modal showing incorrect questions for that skill.
 * @param {string} subject - The subject ('reading', 'writing', 'math').
 * @param {Array} skills - The list of skills for that subject.
 */
function populateSkillsHub(subject, skills) {
    const container = document.getElementById(`${subject}-skills-hub-body`);
    if (!container) return;

    skills.sort((a, b) => a.score - b.score); // Sort by weakest first

    container.innerHTML = skills.map(skill => {
        const performanceClass = skill.attempted ? (skill.score >= 85 ? 'performance-good' : skill.score >= 70 ? 'performance-average' : 'performance-poor') : 'performance-na';
        return `
        <div class="p-3 bg-gray-50 rounded-md border border-gray-200 mb-2 skill-item-container" onclick="openSkillIncorrectQuestionsModal('${skill.name}', '${subject}')">
            <div class="flex justify-between items-center mb-1">
                <span class="text-sm font-medium text-gray-800">${skill.name}</span>
                <span class="text-xs font-semibold">${skill.attempted ? skill.score + '%' : 'N/A'}</span>
            </div>
            <div class="progress-bar-container"><div class="progress-bar ${performanceClass}" style="width: ${skill.attempted ? skill.score : 0}%"></div></div>
            <p class="text-xs text-gray-500 mt-1">Class Avg: ${skill.classAvg}%</p>
        </div>`;
    }).join('');
}


/**
 * Populates the main table of CB Practice Tests.
 * Each row is clickable to open a modal with all questions from that test.
 * @param {Array} tests - Array of CB practice test objects.
 */
function populatePracticeTestsTable(tests) {
    const tableBody = document.getElementById('cb-practice-tests-table-body');
    if (!tableBody) return;
    tableBody.innerHTML = tests.map(test => {
        const isAttempted = test.date !== "Not Attempted";
        return `
        <tr class="${isAttempted ? 'clickable-row' : 'opacity-60'}" ${isAttempted ? `onclick="openTestQuestionsModal('${test.name}')"` : ''}>
            <td>${test.name}</td>
            <td>${formatDate(test.date)}</td>
            <td>${test.rw}</td>
            <td>${test.math}</td>
            <td>${test.total}</td>
        </tr>`;
    }).join('');
}

/**
 * Populates EOC Practice tables.
 * Each row (quiz) is clickable to open a modal with all questions from that quiz.
 * @param {string} subject - The subject ('reading', 'writing', 'math').
 * @param {Array} quizzes - Array of EOC quiz objects.
 */
function populateEOCPractice(subject, quizzes) {
    const tableBody = document.getElementById(`${subject}-eoc-tbody`);
    if (!tableBody) return;

    if (quizzes.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3" class="text-center text-gray-500">No EOC practice data available.</td></tr>`;
        return;
    }

    tableBody.innerHTML = quizzes.map(quiz => `
        <tr class="clickable-row" onclick="openEOCQuizQuestionsModal('${quiz.name}', '${subject}')">
            <td>${quiz.name}</td>
            <td>${formatDate(quiz.date)}</td>
            <td>${quiz.latestScore}</td>
        </tr>
    `).join('');
}

/**
 * Populates Khan Academy Practice sections.
 * (Currently just a placeholder as dummy data is empty for Khan)
 * @param {string} subject - The subject ('reading', 'writing', 'math').
 * @param {Array} khanData - Array of Khan Academy data.
 */
function populateKhanAcademy(subject, khanData) {
    const container = document.getElementById(`${subject}-khan-data`);
    if (!container) return;

    if (khanData.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center p-4">No Khan Academy data available.</p>';
        return;
    }
    // Implement rendering for Khan Academy data here when dummy data is available
    container.innerHTML = `<p class="text-gray-500 text-center p-4">Khan Academy data for ${subject} will be displayed here.</p>`;
}

// --- Modals and Detailed View Functions ---

const modal = document.getElementById('detailModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

/**
 * Opens the modal to show ALL incorrect questions for a specific skill,
 * triggered from the "Skills Hub" (by clicking a skill performance bar).
 * Questions are sorted by difficulty.
 * @param {string} skillName - The name of the skill to filter by.
 * @param {string} subject - The subject of the skill (e.g., 'reading').
 */
function openSkillIncorrectQuestionsModal(skillName, subject) {
    modalTitle.textContent = `Incorrect Questions: ${skillName} (${subject.charAt(0).toUpperCase() + subject.slice(1)})`;

    // Filter all questions for the specific skill and ensure they are incorrect
    const incorrectQuestions = ALL_DASHBOARD_QUESTIONS.filter(q =>
        q.skill === skillName && !q.isCorrect && q.subject === subject
    );

    // Sort by difficulty: Hard > Medium > Easy
    const difficultyOrder = { "Hard": 1, "Medium": 2, "Easy": 3 };
    incorrectQuestions.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);

    if (incorrectQuestions.length === 0) {
        modalBody.innerHTML = `<p class="text-center p-5 text-gray-600">No incorrect questions found for "${skillName}" in ${subject}.</p>`;
    } else {
        // Render each question as a detailed analysis card (without pacing here)
        modalBody.innerHTML = incorrectQuestions.map(q => renderQuestionAnalysisCard(q, true, false)).join('');
    }
    modal.style.display = "block";
    renderDynamicCharts(); // Render charts AFTER content is in the DOM
    addExplanationToggleListeners(); // Add listeners for explanation toggles
}

/**
 * Opens the modal to show ALL questions for a specific CB Practice Test,
 * and includes a pacing analysis table at the bottom.
 * @param {string} testName - The name of the test.
 */
function openTestQuestionsModal(testName) {
    modalTitle.textContent = `Reviewing Test: ${testName}`;
    const test = currentStudentData.cbPracticeTests.find(t => t.name === testName);

    if (!test || !test.questions || test.questions.length === 0) {
        modalBody.innerHTML = `<p class="text-center p-5 text-gray-600">No questions found for ${testName}.</p>`;
        modal.style.display = "block";
        return;
    }

    // Render each question as a single question analysis card, including pacing
    let content = test.questions.map(q => renderQuestionAnalysisCard(q, true, true)).join('');

    // Append pacing analysis at the bottom if pacing data exists
    if (test.questions.some(q => q.yourTime !== undefined && q.classAvgTime !== undefined)) {
        const pacingRows = test.questions.map((p, index) => {
            const diff = p.yourTime - p.classAvgTime;
            const status = diff > 15 ? 'Slower' : diff < -15 ? 'Faster' : 'On Pace';
            const statusClass = `pacing-${status.toLowerCase().replace(' ', '-')}`;
            return `<tr><td>${index + 1}</td><td>${p.yourTime}s</td><td>${p.classAvgTime}s</td><td><span class="pacing-badge ${statusClass}">${status}</span></td><td class="${p.isCorrect ? 'text-good' : 'text-poor'} font-semibold">${p.isCorrect ? 'Correct' : 'Incorrect'}</td></tr>`;
        }).join('');
        content += `<h3 class="text-lg font-semibold text-gray-800 border-t pt-4 mt-6">Pacing Analysis</h3><div class="overflow-x-auto"><table class="min-w-full table"><thead><tr><th>Q#</th><th>Your Time</th><th>Class Avg</th><th>Pacing</th><th>Result</th></tr></thead><tbody>${pacingRows}</tbody></table></div>`;
    }

    modalBody.innerHTML = content;
    modal.style.display = "block";
    renderDynamicCharts(); // Render charts AFTER content is in the DOM
    addExplanationToggleListeners(); // Add listeners for explanation toggles
}

/**
 * Opens the modal to show ALL questions for a specific EOC Quiz.
 * Pacing data is NOT included for EOC quizzes.
 * @param {string} quizName - The name of the EOC quiz.
 * @param {string} subject - The subject of the EOC quiz.
 */
function openEOCQuizQuestionsModal(quizName, subject) {
    modalTitle.textContent = `Reviewing EOC Quiz: ${quizName} (${subject.charAt(0).toUpperCase() + subject.slice(1)})`;
    const quizzesForSubject = currentStudentData.eocQuizzes[subject] || [];
    const quiz = quizzesForSubject.find(q => q.name === quizName);

    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
        modalBody.innerHTML = `<p class="text-center p-5 text-gray-600">No questions found for ${quizName}.</p>`;
        modal.style.display = "block";
        return;
    }

    // Render each question as a single question analysis card, without pacing info
    let content = quiz.questions.map(q => renderQuestionAnalysisCard(q, true, false)).join(''); // `false` for pacing

    modalBody.innerHTML = content;
    modal.style.display = "block";
    renderDynamicCharts(); // Render charts AFTER content is in the DOM
    addExplanationToggleListeners(); // Add listeners for explanation toggles
}


/**
 * Closes the modal and cleans up any Chart.js instances to prevent memory leaks.
 */
function closeModal() {
    // Destroy all Chart.js instances within the modal body
    const canvases = modalBody.querySelectorAll('canvas');
    canvases.forEach(canvas => {
        const chart = Chart.getChart(canvas);
        if (chart) {
            chart.destroy();
        }
    });

    modal.style.display = "none";
    modalBody.innerHTML = ''; // Clear content to prevent old data flashing
}
window.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
};

// --- Reusable HTML Renderer for a Single Question ---

/**
 * Renders a self-contained card for a single question's analysis.
 * This function now includes class performance percentage and a toggle for explanation.
 * @param {object} q - The question object.
 * @param {boolean} includeExplanationToggle - Whether to show the explanation and toggle button.
 * @param {boolean} includePacing - Whether to show the pacing information for this question.
 * @returns {string} - The HTML string for the card.
 */
function renderQuestionAnalysisCard(q, includeExplanationToggle = false, includePacing = false) {
    const resultText = q.isCorrect ? "Correct" : "Incorrect";
    const resultClass = q.isCorrect ? "text-good" : "text-poor";
    const sourceInfo = q.source ? `<p class="text-xs text-gray-500 mt-1">Source: ${q.source}</p>` : '';
    const questionTextDisplay = q.text ? `<p class="mb-2 text-gray-800 font-medium">${q.text}</p>` : `<p class="mb-2 text-gray-800 font-medium">Question ID: ${q.id}</p>`;

    const pacingHtml = includePacing && q.yourTime !== undefined ?
        `<p class="text-center text-sm mt-2">Pacing: <strong>${q.yourTime}s</strong> (Class Avg: ${q.classAvgTime}s)</p>` : '';

    const classCorrectPercentage = q.classPerformance ? q.classPerformance.correct : 'N/A';

    const explanationHtml = includeExplanationToggle && q.explanation ? `
        <button class="toggle-explanation-btn" data-target="explanation-q-${q.id}">Show Explanation</button>
        <div id="explanation-q-${q.id}" class="answer-explanation">
            <p class="font-semibold text-sm">Explanation</p>
            <p class="text-sm">${q.explanation}</p>
        </div>
    ` : '';

    return `
    <div class="question-analysis-card">
        <div class="question-analysis-header">
            <span class="font-semibold text-gray-700">${q.skill}</span>
            <span class="difficulty-badge difficulty-${q.difficulty}">${q.difficulty}</span>
            ${sourceInfo}
        </div>
        <div class="question-analysis-body">
            <div>
                ${questionTextDisplay}
                <p>Your Answer: <span class="font-semibold ${resultClass}">${q.yourAnswer}</span> <span class="font-bold">(${resultText})</span></p>
                ${!q.isCorrect ? `<p>Correct Answer: <span class="font-semibold text-good">${q.correctAnswer}</span></p>` : ''}
                ${explanationHtml}
            </div>
            <div>
                <p class="text-center text-sm font-semibold mb-2">Class Performance: ${classCorrectPercentage}% Correct</p>
                <div class="question-chart-container">
                    <canvas id="chart-q-${q.id}"></canvas>
                </div>
                ${pacingHtml}
            </div>
        </div>
    </div>`;
}

/**
 * Renders dynamic Chart.js charts for canvases present in the modalBody.
 * This must be called *after* the HTML content with the canvas elements is in the DOM.
 */
function renderDynamicCharts() {
    const canvases = modalBody.querySelectorAll('canvas[id^="chart-q-"]'); // Select only question charts
    canvases.forEach(canvas => {
        const chartId = canvas.id;
        const existingChart = Chart.getChart(chartId);
        if (existingChart) {
            existingChart.destroy(); // Destroy existing chart instance to prevent duplicates
        }

        const qId = chartId.split('-')[2];
        const qData = ALL_DASHBOARD_QUESTIONS.find(q => q.id === qId);

        if (qData && qData.classPerformance) {
            const correct = qData.classPerformance.correct || 0;
            const incorrect = qData.classPerformance.incorrect || 0;
            const unanswered = qData.classPerformance.unanswered || 0;

            new Chart(canvas, {
                type: 'doughnut',
                data: {
                    labels: ['Correct', 'Incorrect', 'Unanswered'],
                    datasets: [{
                        data: [correct, incorrect, unanswered],
                        backgroundColor: ['#28a745', '#dc3545', '#ffc107'], // Green, Red, Yellow
                        borderColor: '#ffffff',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 12,
                                font: {
                                    size: 10
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed !== null) {
                                        label += context.parsed + '%';
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    cutout: '60%', // Makes it a donut
                }
            });
        }
    });
}

/**
 * Adds event listeners to "Show Explanation" buttons to toggle explanation visibility.
 * This needs to be called every time new content is loaded into the modalBody.
 */
function addExplanationToggleListeners() {
    modalBody.querySelectorAll('.toggle-explanation-btn').forEach(button => {
        button.onclick = function() {
            const targetId = this.getAttribute('data-target');
            const explanationDiv = document.getElementById(targetId);
            if (explanationDiv) {
                explanationDiv.classList.toggle('expanded');
                this.textContent = explanationDiv.classList.contains('expanded') ? 'Hide Explanation' : 'Show Explanation';
            }
        };
    });
}



