/**
 * CKCET SMART RESULT PORTAL - Main Application Script
 * Vanilla JavaScript Engine for calculations, UI reactivity, storage, and analytics.
 * 
 * Production deployment must use a secure backend,
 * database, hashed passwords, authentication and
 * role-based authorization.
 */

// ==========================================================
// 1. INTELLIGENT RESULT CALCULATION ENGINE
// ==========================================================

const PASS_MARK_TOTAL = 50; // Minimum total mark required to pass a subject
const PASS_MARK_EXTERNAL = 35; // Minimum external marks (out of 75)

/**
 * Calculate grade and pass/fail for an individual subject
 */
function calculateSubjectGrade(internal = 0, external = 0) {
  const intVal = Math.max(0, Math.min(25, Number(internal) || 0));
  const extVal = Math.max(0, Math.min(75, Number(external) || 0));
  const total = intVal + extVal;

  let grade = 'F';
  if (total >= 90) grade = 'O';
  else if (total >= 80) grade = 'A+';
  else if (total >= 70) grade = 'A';
  else if (total >= 60) grade = 'B+';
  else if (total >= 50) grade = 'B';
  else if (total >= 40) grade = 'C';
  else grade = 'F';

  // Pass criteria: total >= 50 and extVal >= 27 (or 35 out of 75 / total >= 50)
  const isPass = total >= PASS_MARK_TOTAL && extVal >= 27 && grade !== 'F';
  const result = isPass ? 'PASS' : 'FAIL';

  return {
    internal: intVal,
    external: extVal,
    total,
    grade,
    result,
    isPass
  };
}

/**
 * Compute overall student academic result metrics
 */
function computeStudentMetrics(student) {
  if (!student || !Array.isArray(student.subjects) || student.subjects.length === 0) {
    return {
      totalMarks: 0,
      maxMarks: 0,
      percentage: 0,
      overallResult: 'N/A',
      isPass: false,
      subjectResults: []
    };
  }

  let totalObtained = 0;
  let maxPossible = 0;
  let hasFailure = false;

  const subjectResults = student.subjects.map(sub => {
    const calc = calculateSubjectGrade(sub.internal, sub.external);
    totalObtained += calc.total;
    maxPossible += (sub.maxTotal || 100);

    if (!calc.isPass) {
      hasFailure = true;
    }

    return {
      ...sub,
      total: calc.total,
      grade: calc.grade,
      result: calc.result,
      isPass: calc.isPass
    };
  });

  const percentage = maxPossible > 0 
    ? parseFloat(((totalObtained / maxPossible) * 100).toFixed(2))
    : 0;

  const overallResult = hasFailure ? 'FAIL' : 'PASS';

  return {
    totalMarks: totalObtained,
    maxMarks: maxPossible,
    percentage,
    overallResult,
    isPass: !hasFailure,
    subjectResults
  };
}

/**
 * Compute intelligent analytics for a student
 * (Calculated purely using JavaScript logic, no external AI API)
 */
function computeStudentAnalytics(student) {
  const metrics = computeStudentMetrics(student);
  const subjects = metrics.subjectResults;

  if (subjects.length === 0) {
    return {
      overallPercentage: 0,
      averageMark: 0,
      strongestSubject: null,
      weakestSubject: null,
      subjectPerformance: [],
      insightStrong: "No subjects recorded yet.",
      insightWeak: "No subjects recorded yet."
    };
  }

  // Sort subjects by total mark
  const sortedSubjects = [...subjects].sort((a, b) => b.total - a.total);
  const strongest = sortedSubjects[0];
  const weakest = sortedSubjects[sortedSubjects.length - 1];
  const average = parseFloat((metrics.totalMarks / subjects.length).toFixed(1));

  const subjectPerformance = subjects.map(sub => ({
    code: sub.code,
    name: sub.name,
    score: sub.total,
    percentage: sub.total, // assuming max 100
    grade: sub.grade,
    result: sub.result
  }));

  const insightStrong = `Your strongest subject is ${strongest.name} with ${strongest.total}% score (Grade ${strongest.grade}).`;
  const insightWeak = weakest.total < 60
    ? `${weakest.name} needs immediate improvement (${weakest.total}% score). Focus on core concepts.`
    : `${weakest.name} is your lowest score at ${weakest.total}%, but overall performance remains steady.`;

  return {
    overallPercentage: metrics.percentage,
    averageMark: average,
    strongestSubject: strongest,
    weakestSubject: weakest,
    subjectPerformance,
    insightStrong,
    insightWeak,
    metrics
  };
}

// ==========================================================
// 2. THEME & TOAST NOTIFICATION SYSTEM
// ==========================================================

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeToggleIcons(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  updateThemeToggleIcons(newTheme);
}

function updateThemeToggleIcons(theme) {
  const btns = document.querySelectorAll('.theme-toggle-btn');
  btns.forEach(btn => {
    btn.innerHTML = theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg = type === 'success'
    ? `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
    : type === 'error'
    ? `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
    : `<svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 250);
  }, 3500);
}

// ==========================================================
// 3. CONFIRMATION & MODAL HELPER
// ==========================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
  }
}

function confirmDialog(title, message, onConfirm) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-backdrop open';
  overlay.innerHTML = `
    <div class="modal-dialog" style="max-width: 420px;">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close-btn" id="confirmCloseBtn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="modal-body">
        <p style="color: var(--text-muted); font-size: 0.95rem;">${message}</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary btn-sm" id="confirmCancelBtn">Cancel</button>
        <button class="btn btn-danger btn-sm" id="confirmActionBtn">Confirm</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const cleanup = () => {
    overlay.classList.remove('open');
    setTimeout(() => overlay.remove(), 200);
  };

  overlay.querySelector('#confirmCloseBtn').onclick = cleanup;
  overlay.querySelector('#confirmCancelBtn').onclick = cleanup;
  overlay.querySelector('#confirmActionBtn').onclick = () => {
    cleanup();
    if (typeof onConfirm === 'function') onConfirm();
  };
}

// ==========================================================
// 4. ANIMATED COUNTER HELPER
// ==========================================================
function animateCounter(element, target, isPercentage = false, duration = 1200) {
  if (!element) return;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutQuad
    const ease = 1 - (1 - progress) * (1 - progress);
    const current = start + (target - start) * ease;

    if (isPercentage) {
      element.textContent = current.toFixed(1) + '%';
    } else {
      element.textContent = Math.round(current).toLocaleString();
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      if (isPercentage) {
        element.textContent = target.toFixed(1) + '%';
      } else {
        element.textContent = target.toString();
      }
    }
  }

  requestAnimationFrame(update);
}

// Initialize theme on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  // Bind all theme toggles
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
});
