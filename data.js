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
      "I": [
        { code: "EN25C01", name: "English Essentials - I", maxInternal: 25, maxExternal: 75 },
        { code: "MA25C01", name: "Applied Calculus", maxInternal: 25, maxExternal: 75 },
        { code: "PH25C01", name: "Applied Physics - I", maxInternal: 25, maxExternal: 75 },
        { code: "CY25C01", name: "Applied Chemistry - I", maxInternal: 25, maxExternal: 75 },
        { code: "CS25C01", name: "Computer Programming: C", maxInternal: 25, maxExternal: 75 },
        { code: "CS25C03", name: "Essentials of Computing", maxInternal: 25, maxExternal: 75 },
        { code: "UC25H01", name: "Heritage of Tamils", maxInternal: 25, maxExternal: 75 }
      ],
      "II": [
        { code: "MA25C02", name: "Linear Algebra", maxInternal: 25, maxExternal: 75 },
        { code: "PH25C03", name: "Applied Physics (CS/IE) - II", maxInternal: 25, maxExternal: 75 },
        { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", maxInternal: 25, maxExternal: 75 },
        { code: "CS25C06", name: "Digital Principles and Computer Organization", maxInternal: 25, maxExternal: 75 },
        { code: "CS25C07", name: "Object Oriented Programming", maxInternal: 25, maxExternal: 75 },
        { code: "UC25H02", name: "Tamils and Technology", maxInternal: 25, maxExternal: 75 }
      ],
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

// Initial Master Subjects Seed (Faculty can edit, delete, add, and customize all subjects & codes)
const DEFAULT_INITIAL_SUBJECTS = [
  // Semester I & II Curriculum Subjects
  { code: "UC25H01", name: "Heritage of Tamils", department: "CSE", semester: "I", maxInternal: 25, maxExternal: 75, credits: 1 },
  { code: "CS25C03", name: "Essentials of Computing", department: "CSE", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "PH25C01", name: "Applied Physics - I", department: "CSE", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "CY25C01", name: "Applied Chemistry - I", department: "CSE", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "EN25C01", name: "English Essentials - I", department: "CSE", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "CS25C01", name: "Computer Programming: C", department: "CSE", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "MA25C01", name: "Applied Calculus", department: "CSE", semester: "I", maxInternal: 25, maxExternal: 75, credits: 4 },

  { code: "MA25C02", name: "Linear Algebra", department: "CSE", semester: "II", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "CS25C06", name: "Digital Principles and Computer Organization", department: "CSE", semester: "II", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "UC25H02", name: "Tamils and Technology", department: "CSE", semester: "II", maxInternal: 25, maxExternal: 75, credits: 1 },
  { code: "EE25C01", name: "Basic Electrical and Electronics Engineering", department: "CSE", semester: "II", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "PH25C03", name: "Applied Physics (CS/IE) - II", department: "CSE", semester: "II", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "CS25C07", name: "Object Oriented Programming", department: "CSE", semester: "II", maxInternal: 25, maxExternal: 75, credits: 3 },

  { code: "CS2501", name: "Data Structures", department: "CSE", semester: "III", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "CS2502", name: "Java Programming", department: "CSE", semester: "III", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "MA2501", name: "Mathematics III", department: "CSE", semester: "III", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "CS2503", name: "Computer Networks", department: "CSE", semester: "III", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "CS2504", name: "Database Management Systems", department: "CSE", semester: "III", maxInternal: 25, maxExternal: 75, credits: 3 },

  { code: "CS2401", name: "Design & Analysis of Algorithms", department: "CSE", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "CS2402", name: "Operating Systems", department: "CSE", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "CS2403", name: "Software Engineering", department: "CSE", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "CS2404", name: "Theory of Computation", department: "CSE", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "MA2401", name: "Probability and Queueing Theory", department: "CSE", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 4 },

  { code: "EC3501", name: "Signals and Systems", department: "ECE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "EC3502", name: "Digital Signal Processing", department: "ECE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "EC3503", name: "Microprocessors & Microcontrollers", department: "ECE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "EC3504", name: "Electromagnetic Fields", department: "ECE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "EC3505", name: "Communication Theory", department: "ECE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 3 },

  { code: "ME2401", name: "Thermodynamics", department: "MECH", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "ME2402", name: "Fluid Mechanics", department: "MECH", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "ME2403", name: "Strength of Materials", department: "MECH", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "ME2404", name: "Manufacturing Technology", department: "MECH", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "ME2405", name: "Kinematics of Machinery", department: "MECH", semester: "IV", maxInternal: 25, maxExternal: 75, credits: 3 },

  { code: "IT1201", name: "Python Programming", department: "IT", semester: "II", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "MA1201", name: "Engineering Mathematics II", department: "IT", semester: "II", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "PH1201", name: "Physics for Information Science", department: "IT", semester: "II", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "EE1201", name: "Basic Electrical Engineering", department: "IT", semester: "II", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "GE1201", name: "Problem Solving & C", department: "IT", semester: "II", maxInternal: 25, maxExternal: 75, credits: 3 },

  { code: "EE3501", name: "Power Systems I", department: "EEE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "EE3502", name: "Electrical Machines II", department: "EEE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "EE3503", name: "Control Systems", department: "EEE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "EE3504", name: "Power Electronics", department: "EEE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "EE3505", name: "Digital Logic Circuits", department: "EEE", semester: "V", maxInternal: 25, maxExternal: 75, credits: 3 },

  { code: "AD1101", name: "Fundamentals of AI", department: "AI&DS", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "MA1101", name: "Matrices and Calculus", department: "AI&DS", semester: "I", maxInternal: 25, maxExternal: 75, credits: 4 },
  { code: "CY1101", name: "Engineering Chemistry", department: "AI&DS", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "GE1101", name: "Python for Data Science", department: "AI&DS", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 },
  { code: "EN1101", name: "Communicative English", department: "AI&DS", semester: "I", maxInternal: 25, maxExternal: 75, credits: 3 }
];

// Storage Key Constants
const STORAGE_KEYS = {
  STUDENTS: 'ckcet_students_v1',
  SUBJECTS: 'ckcet_subjects_v1',
  FACULTY_AUTH: 'ckcet_faculty_auth',
  STUDENT_AUTH: 'ckcet_student_auth',
  THEME: 'ckcet_theme'
};

/**
 * Initialize storage with default data if not present, and auto-sync newly introduced master subjects
 */
function initDataStore() {
  if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(INITIAL_DATA.students));
  }
  
  const existingSubRaw = localStorage.getItem(STORAGE_KEYS.SUBJECTS);
  if (!existingSubRaw) {
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(DEFAULT_INITIAL_SUBJECTS));
  } else {
    try {
      let currentSubjects = JSON.parse(existingSubRaw);
      if (Array.isArray(currentSubjects)) {
        let updated = false;
        DEFAULT_INITIAL_SUBJECTS.forEach(defSub => {
          const found = currentSubjects.find(s => s.code.toUpperCase().trim() === defSub.code.toUpperCase().trim());
          if (!found) {
            currentSubjects.push(defSub);
            updated = true;
          }
        });
        if (updated) {
          localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(currentSubjects));
        }
      }
    } catch (e) {
      console.warn("Could not sync subjects to localStorage, resetting to default:", e);
      localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(DEFAULT_INITIAL_SUBJECTS));
    }
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
 * Get all configured subjects from LocalStorage (Subject Master)
 */
function getStoredSubjects() {
  initDataStore();
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SUBJECTS);
    return raw ? JSON.parse(raw) : DEFAULT_INITIAL_SUBJECTS;
  } catch (err) {
    console.error("Error parsing subjects data:", err);
    return DEFAULT_INITIAL_SUBJECTS;
  }
}

/**
 * Save configured subjects to LocalStorage
 */
function saveStoredSubjects(subjects) {
  localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
}

/**
 * Get subjects for a specific department and semester
 */
function getSubjectsForDeptSem(dept, sem) {
  const all = getStoredSubjects();
  return all.filter(s => {
    const matchDept = !dept || s.department === dept || s.department === 'ALL';
    const matchSem = !sem || s.semester === sem || s.semester === 'ALL';
    return matchDept && matchSem;
  });
}

/**
 * Add or update a subject in Subject Master
 * Optionally synchronizes changes to existing students having this subject code
 */
function addOrUpdateSubject(subjectData, oldCode = null, syncStudents = true) {
  try {
    let subjects = getStoredSubjects();
    const newCode = (subjectData.code || '').toUpperCase().trim();
    const targetCode = (oldCode || newCode).toUpperCase().trim();

    if (!newCode || !subjectData.name) {
      return { success: false, message: "Subject code and name are required." };
    }

    // Check if new code conflicts with another subject
    if (oldCode && oldCode.toUpperCase().trim() !== newCode) {
      const conflict = subjects.find(s => s.code.toUpperCase().trim() === newCode && s.code.toUpperCase().trim() !== targetCode);
      if (conflict) {
        return { success: false, message: `Subject code ${newCode} already exists for ${conflict.name}.` };
      }
    }

    const existingIdx = subjects.findIndex(s => s.code.toUpperCase().trim() === targetCode);

    const newSubject = {
      code: newCode,
      name: subjectData.name.trim(),
      department: subjectData.department || 'CSE',
      semester: subjectData.semester || 'III',
      maxInternal: Number(subjectData.maxInternal) || 25,
      maxExternal: Number(subjectData.maxExternal) || 75,
      credits: Number(subjectData.credits) || 3
    };

    if (existingIdx >= 0) {
      subjects[existingIdx] = newSubject;
    } else {
      subjects.push(newSubject);
    }
    saveStoredSubjects(subjects);

    // Sync to students if requested or if code/name changed
    if (syncStudents) {
      let students = getStoredStudents();
      let updated = false;

      students.forEach(student => {
        if (Array.isArray(student.subjects)) {
          student.subjects.forEach(sub => {
            if (sub.code.toUpperCase().trim() === targetCode) {
              sub.code = newSubject.code;
              sub.name = newSubject.name;
              sub.maxInternal = newSubject.maxInternal;
              sub.maxExternal = newSubject.maxExternal;
              updated = true;
            }
          });
        }
      });

      if (updated) {
        saveStoredStudents(students);
      }
    }

    return { success: true, subject: newSubject };
  } catch (err) {
    console.error("Error updating subject:", err);
    return { success: false, message: err.message || "Failed to update subject." };
  }
}

/**
 * Delete a subject from Subject Master
 */
function deleteStoredSubject(code) {
  const normCode = code.toUpperCase().trim();
  let subjects = getStoredSubjects();
  subjects = subjects.filter(s => s.code.toUpperCase().trim() !== normCode);
  saveStoredSubjects(subjects);
}

/**
 * Reset data back to default initial seed
 */
function resetDataToDefault() {
  localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(INITIAL_DATA.students));
  localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(DEFAULT_INITIAL_SUBJECTS));
  return { students: INITIAL_DATA.students, subjects: DEFAULT_INITIAL_SUBJECTS };
}

// Auto-run init
initDataStore();
