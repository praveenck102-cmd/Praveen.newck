/**
 * CK College of Engineering and Technology (CKCET) - Smart Result Portal
 * Initial Database & Sample Data
 * 
 * Production deployment must use a secure backend,
 * database, hashed passwords, authentication and
 * role-based authorization.
 */

const INITIAL_DATA = {
  students: [
    {
      name: "Praveen",
      registerNo: "CKCSE001",
      dob: "2008-08-08",
      department: "CSE",
      year: "2nd Year",
      semester: "III",
      email: "praveen.ckcse001@ckcet.edu.in",
      phone: "+91 98401 23456",
      bloodGroup: "O+",
      batch: "2024-2028",
      subjects: [
        {
          code: "CS2501",
          name: "Data Structures",
          internal: 22,
          external: 64,
          maxInternal: 25,
          maxExternal: 75
        },
        {
          code: "CS2502",
          name: "Java Programming",
          internal: 24,
          external: 67,
          maxInternal: 25,
          maxExternal: 75
        },
        {
          code: "MA2501",
          name: "Mathematics III",
          internal: 19,
          external: 55,
          maxInternal: 25,
          maxExternal: 75
        },
        {
          code: "CS2503",
          name: "Computer Networks",
          internal: 21,
          external: 61,
          maxInternal: 25,
          maxExternal: 75
        },
        {
          code: "CS2504",
          name: "Database Management Systems",
          internal: 23,
          external: 64,
          maxInternal: 25,
          maxExternal: 75
        }
      ]
    },
    {
      name: "Ananya Sharma",
      registerNo: "CKCSE002",
      dob: "2007-11-14",
      department: "CSE",
      year: "2nd Year",
      semester: "III",
      email: "ananya.ckcse002@ckcet.edu.in",
      phone: "+91 98401 54321",
      bloodGroup: "B+",
      batch: "2024-2028",
      subjects: [
        { code: "CS2501", name: "Data Structures", internal: 25, external: 71, maxInternal: 25, maxExternal: 75 },
        { code: "CS2502", name: "Java Programming", internal: 24, external: 69, maxInternal: 25, maxExternal: 75 },
        { code: "MA2501", name: "Mathematics III", internal: 23, external: 68, maxInternal: 25, maxExternal: 75 },
        { code: "CS2503", name: "Computer Networks", internal: 24, external: 70, maxInternal: 25, maxExternal: 75 },
        { code: "CS2504", name: "Database Management Systems", internal: 25, external: 72, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Vignesh Kumar",
      registerNo: "CKCSE003",
      dob: "2008-03-22",
      department: "CSE",
      year: "2nd Year",
      semester: "III",
      email: "vignesh.ckcse003@ckcet.edu.in",
      phone: "+91 97901 22334",
      bloodGroup: "A+",
      batch: "2024-2028",
      subjects: [
        { code: "CS2501", name: "Data Structures", internal: 16, external: 42, maxInternal: 25, maxExternal: 75 },
        { code: "CS2502", name: "Java Programming", internal: 18, external: 45, maxInternal: 25, maxExternal: 75 },
        { code: "MA2501", name: "Mathematics III", internal: 12, external: 26, maxInternal: 25, maxExternal: 75 }, // Below 50 -> FAIL
        { code: "CS2503", name: "Computer Networks", internal: 17, external: 44, maxInternal: 25, maxExternal: 75 },
        { code: "CS2504", name: "Database Management Systems", internal: 19, external: 48, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Deepa Rajan",
      registerNo: "CKCSE004",
      dob: "2008-05-19",
      department: "CSE",
      year: "2nd Year",
      semester: "III",
      email: "deepa.ckcse004@ckcet.edu.in",
      phone: "+91 98841 99887",
      bloodGroup: "AB+",
      batch: "2024-2028",
      subjects: [
        { code: "CS2501", name: "Data Structures", internal: 21, external: 60, maxInternal: 25, maxExternal: 75 },
        { code: "CS2502", name: "Java Programming", internal: 22, external: 63, maxInternal: 25, maxExternal: 75 },
        { code: "MA2501", name: "Mathematics III", internal: 20, external: 58, maxInternal: 25, maxExternal: 75 },
        { code: "CS2503", name: "Computer Networks", internal: 22, external: 61, maxInternal: 25, maxExternal: 75 },
        { code: "CS2504", name: "Database Management Systems", internal: 21, external: 59, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Karthik Subramanian",
      registerNo: "CKECE001",
      dob: "2007-09-05",
      department: "ECE",
      year: "3rd Year",
      semester: "V",
      email: "karthik.ckece001@ckcet.edu.in",
      phone: "+91 97102 33445",
      bloodGroup: "O+",
      batch: "2023-2027",
      subjects: [
        { code: "EC3501", name: "Signals and Systems", internal: 23, external: 62, maxInternal: 25, maxExternal: 75 },
        { code: "EC3502", name: "Digital Signal Processing", internal: 22, external: 65, maxInternal: 25, maxExternal: 75 },
        { code: "EC3503", name: "Microprocessors & Microcontrollers", internal: 24, external: 68, maxInternal: 25, maxExternal: 75 },
        { code: "EC3504", name: "Electromagnetic Fields", internal: 20, external: 59, maxInternal: 25, maxExternal: 75 },
        { code: "EC3505", name: "Communication Theory", internal: 21, external: 63, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Priya Mohan",
      registerNo: "CKECE002",
      dob: "2007-12-10",
      department: "ECE",
      year: "3rd Year",
      semester: "V",
      email: "priya.ckece002@ckcet.edu.in",
      phone: "+91 98403 66778",
      bloodGroup: "A-",
      batch: "2023-2027",
      subjects: [
        { code: "EC3501", name: "Signals and Systems", internal: 24, external: 69, maxInternal: 25, maxExternal: 75 },
        { code: "EC3502", name: "Digital Signal Processing", internal: 23, external: 67, maxInternal: 25, maxExternal: 75 },
        { code: "EC3503", name: "Microprocessors & Microcontrollers", internal: 25, external: 70, maxInternal: 25, maxExternal: 75 },
        { code: "EC3504", name: "Electromagnetic Fields", internal: 22, external: 64, maxInternal: 25, maxExternal: 75 },
        { code: "EC3505", name: "Communication Theory", internal: 23, external: 66, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Rahul Venkatesh",
      registerNo: "CKME001",
      dob: "2008-01-30",
      department: "MECH",
      year: "2nd Year",
      semester: "IV",
      email: "rahul.ckme001@ckcet.edu.in",
      phone: "+91 99401 11223",
      bloodGroup: "B+",
      batch: "2024-2028",
      subjects: [
        { code: "ME2401", name: "Thermodynamics", internal: 19, external: 52, maxInternal: 25, maxExternal: 75 },
        { code: "ME2402", name: "Fluid Mechanics", internal: 18, external: 49, maxInternal: 25, maxExternal: 75 },
        { code: "ME2403", name: "Strength of Materials", internal: 17, external: 45, maxInternal: 25, maxExternal: 75 },
        { code: "ME2404", name: "Manufacturing Technology", internal: 20, external: 55, maxInternal: 25, maxExternal: 75 },
        { code: "ME2405", name: "Kinematics of Machinery", internal: 18, external: 50, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Sneha Ramesh",
      registerNo: "CKIT001",
      dob: "2008-06-25",
      department: "IT",
      year: "1st Year",
      semester: "II",
      email: "sneha.ckit001@ckcet.edu.in",
      phone: "+91 98409 33221",
      bloodGroup: "O+",
      batch: "2025-2029",
      subjects: [
        { code: "IT1201", name: "Python Programming", internal: 24, external: 68, maxInternal: 25, maxExternal: 75 },
        { code: "MA1201", name: "Engineering Mathematics II", internal: 22, external: 61, maxInternal: 25, maxExternal: 75 },
        { code: "PH1201", name: "Physics for Information Science", internal: 23, external: 65, maxInternal: 25, maxExternal: 75 },
        { code: "EE1201", name: "Basic Electrical Engineering", internal: 21, external: 59, maxInternal: 25, maxExternal: 75 },
        { code: "GE1201", name: "Problem Solving & C", internal: 24, external: 67, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Arjun Reddy",
      registerNo: "CKEEE001",
      dob: "2007-04-12",
      department: "EEE",
      year: "3rd Year",
      semester: "V",
      email: "arjun.ckeee001@ckcet.edu.in",
      phone: "+91 97890 44556",
      bloodGroup: "A+",
      batch: "2023-2027",
      subjects: [
        { code: "EE3501", name: "Power Systems I", internal: 15, external: 28, maxInternal: 25, maxExternal: 75 }, // Arrear (43 < 50)
        { code: "EE3502", name: "Electrical Machines II", internal: 18, external: 46, maxInternal: 25, maxExternal: 75 },
        { code: "EE3503", name: "Control Systems", internal: 19, external: 51, maxInternal: 25, maxExternal: 75 },
        { code: "EE3504", name: "Power Electronics", internal: 17, external: 44, maxInternal: 25, maxExternal: 75 },
        { code: "EE3505", name: "Digital Logic Circuits", internal: 18, external: 47, maxInternal: 25, maxExternal: 75 }
      ]
    },
    {
      name: "Divya Krishnan",
      registerNo: "CKAIDS001",
      dob: "2008-09-18",
      department: "AI&DS",
      year: "1st Year",
      semester: "I",
      email: "divya.ckaids001@ckcet.edu.in",
      phone: "+91 98405 88776",
      bloodGroup: "AB+",
      batch: "2025-2029",
      subjects: [
        { code: "AD1101", name: "Fundamentals of AI", internal: 25, external: 72, maxInternal: 25, maxExternal: 75 },
        { code: "MA1101", name: "Matrices and Calculus", internal: 23, external: 66, maxInternal: 25, maxExternal: 75 },
        { code: "CY1101", name: "Engineering Chemistry", internal: 22, external: 63, maxInternal: 25, maxExternal: 75 },
        { code: "GE1101", name: "Python for Data Science", internal: 25, external: 74, maxInternal: 25, maxExternal: 75 },
        { code: "EN1101", name: "Communicative English", internal: 24, external: 69, maxInternal: 25, maxExternal: 75 }
      ]
    }
  ],
  departments: ["CSE", "ECE", "MECH", "IT", "EEE", "AI&DS"],
  years: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
  semesters: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"],
  curriculum: {
    "CSE": {
      "III": [
        { code: "CS2501", name: "Data Structures", maxInternal: 25, maxExternal: 75 },
        { code: "CS2502", name: "Java Programming", maxInternal: 25, maxExternal: 75 },
        { code: "MA2501", name: "Mathematics III", maxInternal: 25, maxExternal: 75 },
        { code: "CS2503", name: "Computer Networks", maxInternal: 25, maxExternal: 75 },
        { code: "CS2504", name: "Database Management Systems", maxInternal: 25, maxExternal: 75 }
      ],
      "IV": [
        { code: "CS2401", name: "Design & Analysis of Algorithms", maxInternal: 25, maxExternal: 75 },
        { code: "CS2402", name: "Operating Systems", maxInternal: 25, maxExternal: 75 },
        { code: "CS2403", name: "Software Engineering", maxInternal: 25, maxExternal: 75 },
        { code: "CS2404", name: "Theory of Computation", maxInternal: 25, maxExternal: 75 },
        { code: "MA2401", name: "Probability and Queueing Theory", maxInternal: 25, maxExternal: 75 }
      ]
    },
    "ECE": {
      "V": [
        { code: "EC3501", name: "Signals and Systems", maxInternal: 25, maxExternal: 75 },
        { code: "EC3502", name: "Digital Signal Processing", maxInternal: 25, maxExternal: 75 },
        { code: "EC3503", name: "Microprocessors & Microcontrollers", maxInternal: 25, maxExternal: 75 },
        { code: "EC3504", name: "Electromagnetic Fields", maxInternal: 25, maxExternal: 75 },
        { code: "EC3505", name: "Communication Theory", maxInternal: 25, maxExternal: 75 }
      ]
    },
    "MECH": {
      "IV": [
        { code: "ME2401", name: "Thermodynamics", maxInternal: 25, maxExternal: 75 },
        { code: "ME2402", name: "Fluid Mechanics", maxInternal: 25, maxExternal: 75 },
        { code: "ME2403", name: "Strength of Materials", maxInternal: 25, maxExternal: 75 },
        { code: "ME2404", name: "Manufacturing Technology", maxInternal: 25, maxExternal: 75 },
        { code: "ME2405", name: "Kinematics of Machinery", maxInternal: 25, maxExternal: 75 }
      ]
    },
    "IT": {
      "II": [
        { code: "IT1201", name: "Python Programming", maxInternal: 25, maxExternal: 75 },
        { code: "MA1201", name: "Engineering Mathematics II", maxInternal: 25, maxExternal: 75 },
        { code: "PH1201", name: "Physics for Information Science", maxInternal: 25, maxExternal: 75 },
        { code: "EE1201", name: "Basic Electrical Engineering", maxInternal: 25, maxExternal: 75 },
        { code: "GE1201", name: "Problem Solving & C", maxInternal: 25, maxExternal: 75 }
      ]
    },
    "EEE": {
      "V": [
        { code: "EE3501", name: "Power Systems I", maxInternal: 25, maxExternal: 75 },
        { code: "EE3502", name: "Electrical Machines II", maxInternal: 25, maxExternal: 75 },
        { code: "EE3503", name: "Control Systems", maxInternal: 25, maxExternal: 75 },
        { code: "EE3504", name: "Power Electronics", maxInternal: 25, maxExternal: 75 },
        { code: "EE3505", name: "Digital Logic Circuits", maxInternal: 25, maxExternal: 75 }
      ]
    },
    "AI&DS": {
      "I": [
        { code: "AD1101", name: "Fundamentals of AI", maxInternal: 25, maxExternal: 75 },
        { code: "MA1101", name: "Matrices and Calculus", maxInternal: 25, maxExternal: 75 },
        { code: "CY1101", name: "Engineering Chemistry", maxInternal: 25, maxExternal: 75 },
        { code: "GE1101", name: "Python for Data Science", maxInternal: 25, maxExternal: 75 },
        { code: "EN1101", name: "Communicative English", maxInternal: 25, maxExternal: 75 }
      ]
    }
  }
};

// Storage Key Constants
const STORAGE_KEYS = {
  STUDENTS: 'ckcet_students_v1',
  FACULTY_AUTH: 'ckcet_faculty_auth',
  STUDENT_AUTH: 'ckcet_student_auth',
  THEME: 'ckcet_theme'
};

/**
 * Initialize storage with default data if not present
 */
function initDataStore() {
  if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(INITIAL_DATA.students));
  }
}

/**
 * Get all students from LocalStorage
 */
function getStoredStudents() {
  initDataStore();
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STUDENTS);
    return raw ? JSON.parse(raw) : INITIAL_DATA.students;
  } catch (err) {
    console.error("Error parsing student data:", err);
    return INITIAL_DATA.students;
  }
}

/**
 * Save students to LocalStorage
 */
function saveStoredStudents(students) {
  localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
}

/**
 * Reset data back to default initial seed
 */
function resetDataToDefault() {
  localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(INITIAL_DATA.students));
  return INITIAL_DATA.students;
}

// Auto-run init
initDataStore();
