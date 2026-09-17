/**
 * IUT STUDENT INFORMATION SYSTEM (SIS) — REDESIGN PROTOTYPE
 * Core Application Engine & State Controller
 */

// =============================================================================
// 1. APPLICATION STATE & SAMPLE DATA
// =============================================================================

const AppData = {
  currentUser: {
    name: "Nafian Nazat Mahid",
    shortName: "Mahid",
    studentId: "230042144",
    email: "mahid@iut-dhaka.edu",
    phone: "+880 1712 345678",
    department: "Computer Science & Engineering",
    program: "B.Sc. in CSE (Closed Credit)",
    batch: "2023",
    semester: "7th",
    academicYear: "4th Year (1st Semester)",
    cgpa: 3.62,
    creditsCompleted: 108.5,
    creditsRequired: 142.5,
    activeSemester: "Fall 2026 (7th Semester)"
  },

  // IUT Closed Credit 4-Year / 8-Semester Curriculum Roadmap
  curriculumRoadmap: [
    {
      year: "Year 1 (Freshman Year)",
      semesters: [
        {
          num: "1st Semester",
          term: "Fall 2023",
          status: "Completed",
          credits: 16.5,
          gpa: "3.45",
          courses: ["CSE 4101 Intro to Prog", "CSE 4102 Prog Lab", "MATH 4141 Calculus", "PHY 4143 Physics", "HUM 4145 Islamic Studies"]
        },
        {
          num: "2nd Semester",
          term: "Spring 2024",
          status: "Completed",
          credits: 18.0,
          gpa: "3.52",
          courses: ["CSE 4201 Discrete Math", "CSE 4202 OOP Lab", "CSE 4203 Data Structures", "CSE 4204 DS Lab", "MATH 4241 Linear Algebra", "CHEM 4243 Chemistry"]
        }
      ]
    },
    {
      year: "Year 2 (Sophomore Year)",
      semesters: [
        {
          num: "3rd Semester",
          term: "Fall 2024",
          status: "Completed",
          credits: 17.0,
          gpa: "3.60",
          courses: ["CSE 4301 OOP Concepts", "CSE 4302 OOP II Lab", "CSE 4303 Data Comm", "CSE 4305 Computer Arch", "MATH 4341 Diff Equations"]
        },
        {
          num: "4th Semester",
          term: "Spring 2025",
          status: "Completed",
          credits: 19.0,
          gpa: "3.58",
          courses: ["CSE 4401 DBMS", "CSE 4402 DBMS Lab", "CSE 4403 Algorithms", "MATH 4441 Probability & Stats", "EEE 4401 Digital Electronics"]
        }
      ]
    },
    {
      year: "Year 3 (Junior Year)",
      semesters: [
        {
          num: "5th Semester",
          term: "Fall 2025",
          status: "Completed",
          credits: 18.0,
          gpa: "3.69",
          courses: ["CSE 4501 Operating Systems", "CSE 4502 OS Lab", "CSE 4503 Microprocessors", "CSE 4504 Micro Lab", "HUM 4511 Islamic History"]
        },
        {
          num: "6th Semester",
          term: "Spring 2026",
          status: "Completed",
          credits: 19.5,
          gpa: "3.82",
          courses: ["CSE 4601 Distributed Systems", "CSE 4602 DS Lab", "CSE 4603 Compiler Design", "CSE 4604 Compiler Lab", "MATH 4641 Numerical Methods"]
        }
      ]
    },
    {
      year: "Year 4 (Senior Year)",
      semesters: [
        {
          num: "7th Semester",
          term: "Fall 2026 (Current Term)",
          status: "In Progress",
          credits: 18.0,
          gpa: "In Progress",
          courses: ["CSE 4701 Artificial Intelligence", "CSE 4702 AI Lab", "CSE 4703 Computer Graphics", "CSE 4704 Graphics Lab", "CSE 4700 Thesis I", "HUM 4715 Ethics", "MATH 4701 Modeling"]
        },
        {
          num: "8th Semester",
          term: "Spring 2027 (Upcoming)",
          status: "Upcoming",
          credits: 16.0,
          gpa: "Pending",
          courses: ["CSE 4800 Thesis II", "CSE 4801 Cyber Security", "CSE 4802 Cyber Sec Lab", "CSE 4803 Machine Learning", "CSE 4804 ML Lab", "HUM 4811 Tech & Society"]
        }
      ]
    }
  ],

  // Available Course Catalog for Registration
  catalogCourses: [
    {
      code: "CSE 4701",
      title: "Artificial Intelligence",
      dept: "CSE",
      credits: 3.0,
      seatsTotal: 40,
      seatsAvailable: 12,
      slot: "Sat & Mon 08:30 - 10:00 AM",
      slotKey: "SAT_MON_0830",
      instructor: "Prof. Dr. Hasan",
      room: "Room 302"
    },
    {
      code: "CSE 4702",
      title: "Artificial Intelligence Sessional",
      dept: "CSE",
      credits: 1.5,
      seatsTotal: 40,
      seatsAvailable: 8,
      slot: "Wed 10:15 AM - 12:45 PM",
      slotKey: "WED_1015_LAB",
      instructor: "Lect. Farhan",
      room: "Software Lab 3"
    },
    {
      code: "CSE 4703",
      title: "Computer Graphics",
      dept: "CSE",
      credits: 3.0,
      seatsTotal: 40,
      seatsAvailable: 16,
      slot: "Sun & Tue 08:30 - 10:00 AM",
      slotKey: "SUN_TUE_0830",
      instructor: "Dr. Tanvir",
      room: "Room 304"
    },
    {
      code: "CSE 4704",
      title: "Computer Graphics Sessional",
      dept: "CSE",
      credits: 1.5,
      seatsTotal: 40,
      seatsAvailable: 5,
      slot: "Thu 10:15 AM - 12:45 PM",
      slotKey: "THU_1015_LAB",
      instructor: "Dr. Tanvir",
      room: "Multimedia Lab"
    },
    {
      code: "HUM 4715",
      title: "Engineering Ethics & Professionalism",
      dept: "HUM",
      credits: 3.0,
      seatsTotal: 50,
      seatsAvailable: 22,
      slot: "Sat & Wed 02:00 - 03:30 PM",
      slotKey: "SAT_WED_1400",
      instructor: "Dr. Rahman",
      room: "Room 405"
    },
    {
      code: "MATH 4701",
      title: "Mathematical Modeling",
      dept: "MATH",
      credits: 3.0,
      seatsTotal: 40,
      seatsAvailable: 14,
      slot: "Sun & Tue 10:15 - 11:45 AM",
      slotKey: "SUN_TUE_1015",
      instructor: "Prof. Dr. Karim",
      room: "Room 201"
    },
    {
      code: "CSE 4700",
      title: "Project & Thesis Consultation",
      dept: "CSE",
      credits: 3.0,
      seatsTotal: 30,
      seatsAvailable: 6,
      slot: "Sat 03:45 - 05:15 PM",
      slotKey: "SAT_1545",
      instructor: "Dr. Mottalib",
      room: "Faculty Office 410"
    },
    {
      // INTENTIONAL CONFLICT COURSE FOR LIVE CONFLICT DEMONSTRATION
      code: "CSE 4711",
      title: "Machine Learning in Bioinformatics",
      dept: "CSE",
      credits: 3.0,
      seatsTotal: 40,
      seatsAvailable: 18,
      slot: "Sat & Mon 08:30 - 10:00 AM", // CONFLICTS WITH CSE 4701!
      slotKey: "SAT_MON_0830",
      instructor: "Dr. S. Islam",
      room: "Room 305"
    },
    {
      code: "CSE 4725",
      title: "Cloud Infrastructure & DevOps",
      dept: "CSE",
      credits: 3.0,
      seatsTotal: 40,
      seatsAvailable: 0, // FULL COURSE TEST
      slot: "Tue & Thu 02:00 - 03:30 PM",
      slotKey: "TUE_THU_1400",
      instructor: "Dr. Nazmul",
      room: "Software Lab 1"
    }
  ],

  // Currently Enrolled / Cart Courses (Prescribed 7th Semester load: 5 courses = 15.0 credits)
  cartCourses: [
    "CSE 4701",
    "CSE 4702",
    "CSE 4703",
    "HUM 4715",
    "MATH 4701"
  ],

  // Academic Results by Semester (8 Semesters across 4 Academic Years)
  resultsBySemester: {
    "Fall 2026": {
      gpa: "In Progress",
      cgpa: "3.62",
      credits: "15.0",
      status: "In Progress",
      courses: [
        { code: "CSE 4701", title: "Artificial Intelligence", credits: 3.0, grade: "Pending", gpa: "—", status: "Enrolled" },
        { code: "CSE 4702", title: "Artificial Intelligence Sessional", credits: 1.5, grade: "Pending", gpa: "—", status: "Enrolled" },
        { code: "CSE 4703", title: "Computer Graphics", credits: 3.0, grade: "Pending", gpa: "—", status: "Enrolled" },
        { code: "HUM 4715", title: "Engineering Ethics & Professionalism", credits: 3.0, grade: "Pending", gpa: "—", status: "Enrolled" },
        { code: "MATH 4701", title: "Mathematical Modeling", credits: 3.0, grade: "Pending", gpa: "—", status: "Enrolled" }
      ]
    },
    "Spring 2026": {
      gpa: "3.82",
      cgpa: "3.62",
      credits: "19.5",
      status: "Published",
      courses: [
        { code: "CSE 4601", title: "Distributed Systems & Cloud Computing", credits: 3.0, grade: "A+", gpa: "4.00", status: "Passed" },
        { code: "CSE 4602", title: "Distributed Systems Sessional", credits: 1.5, grade: "A+", gpa: "4.00", status: "Passed" },
        { code: "CSE 4603", title: "Compiler Design", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "CSE 4604", title: "Compiler Design Sessional", credits: 1.5, grade: "A+", gpa: "4.00", status: "Passed" },
        { code: "MATH 4641", title: "Numerical Methods & Analysis", credits: 3.0, grade: "A-", gpa: "3.50", status: "Passed" },
        { code: "HUM 4617", title: "Industrial Management", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "CSE 4610", title: "Software Development Project IV", credits: 1.5, grade: "A+", gpa: "4.00", status: "Passed" }
      ]
    },
    "Fall 2025": {
      gpa: "3.69",
      cgpa: "3.57",
      credits: "18.0",
      status: "Published",
      courses: [
        { code: "CSE 4501", title: "Operating Systems", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "CSE 4502", title: "Operating Systems Sessional", credits: 1.5, grade: "A+", gpa: "4.00", status: "Passed" },
        { code: "CSE 4503", title: "Microprocessor & Interfacing", credits: 3.0, grade: "A-", gpa: "3.50", status: "Passed" },
        { code: "CSE 4504", title: "Microprocessor Sessional", credits: 1.5, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "CSE 4505", title: "Design & Analysis of Algorithms", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "HUM 4511", title: "Islamic History & Culture", credits: 3.0, grade: "A+", gpa: "4.00", status: "Passed" }
      ]
    },
    "Spring 2025": {
      gpa: "3.58",
      cgpa: "3.54",
      credits: "19.0",
      status: "Published",
      courses: [
        { code: "CSE 4401", title: "Database Management Systems", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "CSE 4402", title: "Database Management Systems Lab", credits: 1.5, grade: "A+", gpa: "4.00", status: "Passed" },
        { code: "CSE 4403", title: "Data Communication", credits: 3.0, grade: "B+", gpa: "3.25", status: "Passed" },
        { code: "MATH 4441", title: "Probability & Statistics", credits: 3.0, grade: "A-", gpa: "3.50", status: "Passed" },
        { code: "EEE 4401", title: "Digital Electronics", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" }
      ]
    },
    "Fall 2024": {
      gpa: "3.60",
      cgpa: "3.51",
      credits: "17.0",
      status: "Published",
      courses: [
        { code: "CSE 4301", title: "Object-Oriented Programming Concepts", credits: 3.0, grade: "A-", gpa: "3.50", status: "Passed" },
        { code: "CSE 4302", title: "Object-Oriented Programming Lab", credits: 1.5, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "CSE 4305", title: "Computer Architecture & Organization", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "MATH 4341", title: "Differential Equations & Fourier Analysis", credits: 3.0, grade: "A-", gpa: "3.50", status: "Passed" },
        { code: "HUM 4347", title: "Sociology & Government", credits: 2.0, grade: "A+", gpa: "4.00", status: "Passed" }
      ]
    },
    "Spring 2024": {
      gpa: "3.52",
      cgpa: "3.48",
      credits: "18.0",
      status: "Published",
      courses: [
        { code: "CSE 4201", title: "Discrete Mathematics", credits: 3.0, grade: "B+", gpa: "3.25", status: "Passed" },
        { code: "CSE 4203", title: "Data Structures", credits: 3.0, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "CSE 4204", title: "Data Structures Lab", credits: 1.5, grade: "A+", gpa: "4.00", status: "Passed" },
        { code: "MATH 4241", title: "Linear Algebra & Matrices", credits: 3.0, grade: "A-", gpa: "3.50", status: "Passed" },
        { code: "CHEM 4243", title: "Engineering Chemistry", credits: 3.0, grade: "B+", gpa: "3.25", status: "Passed" }
      ]
    },
    "Fall 2023": {
      gpa: "3.45",
      cgpa: "3.45",
      credits: "16.5",
      status: "Published",
      courses: [
        { code: "CSE 4101", title: "Introduction to Computer Systems & Programming", credits: 3.0, grade: "A-", gpa: "3.50", status: "Passed" },
        { code: "CSE 4102", title: "Structured Programming Language Lab", credits: 1.5, grade: "A", gpa: "3.75", status: "Passed" },
        { code: "MATH 4141", title: "Differential & Integral Calculus", credits: 3.0, grade: "B+", gpa: "3.25", status: "Passed" },
        { code: "PHY 4143", title: "Physics (Electromagnetism & Waves)", credits: 3.0, grade: "B", gpa: "3.00", status: "Passed" },
        { code: "HUM 4145", title: "Islamic Studies & Moral Philosophy", credits: 2.0, grade: "A+", gpa: "4.00", status: "Passed" }
      ]
    },
    "ALL": {
      gpa: "3.62",
      cgpa: "3.62",
      credits: "108.5",
      status: "Cumulative Transcript (8 Semesters Program)",
      courses: [
        { code: "SEM-1", title: "Fall 2023 (1st Semester · Year 1)", credits: 16.5, grade: "Passed", gpa: "3.45", status: "Completed" },
        { code: "SEM-2", title: "Spring 2024 (2nd Semester · Year 1)", credits: 18.0, grade: "Passed", gpa: "3.52", status: "Completed" },
        { code: "SEM-3", title: "Fall 2024 (3rd Semester · Year 2)", credits: 17.0, grade: "Passed", gpa: "3.60", status: "Completed" },
        { code: "SEM-4", title: "Spring 2025 (4th Semester · Year 2)", credits: 19.0, grade: "Passed", gpa: "3.58", status: "Completed" },
        { code: "SEM-5", title: "Fall 2025 (5th Semester · Year 3)", credits: 18.0, grade: "Passed", gpa: "3.69", status: "Completed" },
        { code: "SEM-6", title: "Spring 2026 (6th Semester · Year 3)", credits: 19.5, grade: "Passed", gpa: "3.82", status: "Completed" },
        { code: "SEM-7", title: "Fall 2026 (7th Semester · Year 4)", credits: 15.0, grade: "In Progress", gpa: "—", status: "Enrolled" },
        { code: "SEM-8", title: "Spring 2027 (8th Semester · Year 4)", credits: 16.0, grade: "Upcoming", gpa: "—", status: "Planned" }
      ]
    }
  }
};

// =============================================================================
// 2. MAIN APPLICATION CONTROLLER
// =============================================================================

class SISApp {
  constructor() {
    this.currentScreen = "login";
    this.unreadNotifications = 3;
    this.isEditingProfile = false;
    this.init();
  }

  init() {
    this.initTheme();
    this.bindEvents();
    this.renderCatalogTable();
    this.renderCart();
    this.renderCurriculumRoadmap();
    this.renderResultsTable("Spring 2026");
    this.renderRoutineListView();
    this.initChartTooltips();
  }

  // Bind all interactive prototype listeners
  bindEvents() {
    // --- LOGIN FORM & AUTH ---
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => this.handleLoginSubmit(e));
    }

    const btnAutofill = document.getElementById("btn-autofill");
    if (btnAutofill) {
      btnAutofill.addEventListener("click", () => this.autofillDemoUser());
    }

    const btnTogglePwd = document.getElementById("btn-toggle-pwd");
    if (btnTogglePwd) {
      btnTogglePwd.addEventListener("click", () => this.togglePasswordVisibility());
    }

    const btnSsoLogin = document.getElementById("btn-sso-login");
    if (btnSsoLogin) {
      btnSsoLogin.addEventListener("click", () => this.handleSsoLogin());
    }

    const linkForgotPwd = document.getElementById("link-forgot-pwd");
    if (linkForgotPwd) {
      linkForgotPwd.addEventListener("click", (e) => {
        e.preventDefault();
        this.openModal("modal-forgot-pwd");
      });
    }

    const btnCancelForgot = document.getElementById("btn-cancel-forgot");
    const btnCloseForgot = document.getElementById("btn-close-forgot-pwd");
    if (btnCancelForgot) btnCancelForgot.addEventListener("click", () => this.closeModal("modal-forgot-pwd"));
    if (btnCloseForgot) btnCloseForgot.addEventListener("click", () => this.closeModal("modal-forgot-pwd"));

    const forgotForm = document.getElementById("forgot-pwd-form");
    if (forgotForm) {
      forgotForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.closeModal("modal-forgot-pwd");
        this.showToast("Password reset link dispatched to your university email!", "success");
      });
    }

    const linkHelpdesk = document.getElementById("link-helpdesk");
    if (linkHelpdesk) {
      linkHelpdesk.addEventListener("click", (e) => {
        e.preventDefault();
        this.showToast("IT Helpdesk: helpdesk@iut-dhaka.edu · Ext: 4100", "info");
      });
    }

    // --- NAVIGATION CONTROLLER ---
    // Sidebar nav buttons
    document.querySelectorAll(".nav-item").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const dest = btn.dataset.nav;
        if (dest) this.navigateTo(dest);
      });
    });

    // Logout
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => this.handleLogout());
    }

    // Topbar Profile Avatar
    const topbarProfileBtn = document.getElementById("topbar-profile-btn");
    if (topbarProfileBtn) {
      topbarProfileBtn.addEventListener("click", () => this.navigateTo("profile"));
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const portalSidebar = document.getElementById("portal-sidebar");
    if (mobileMenuBtn && portalSidebar) {
      mobileMenuBtn.addEventListener("click", () => {
        portalSidebar.classList.toggle("sidebar-open");
      });
    }

    // Notification dropdown toggle
    const btnNotifications = document.getElementById("btn-notifications");
    const notifDropdown = document.getElementById("notifications-dropdown");
    if (btnNotifications && notifDropdown) {
      btnNotifications.addEventListener("click", (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle("hidden");
      });

      document.addEventListener("click", (e) => {
        if (!notifDropdown.contains(e.target) && !btnNotifications.contains(e.target)) {
          notifDropdown.classList.add("hidden");
        }
      });
    }

    const btnMarkRead = document.getElementById("btn-mark-read");
    if (btnMarkRead) {
      btnMarkRead.addEventListener("click", () => {
        document.querySelectorAll(".notif-item").forEach((item) => item.classList.remove("unread"));
        const notifBadge = document.getElementById("notif-count");
        if (notifBadge) notifBadge.textContent = "0";
        this.showToast("All notifications marked as read", "info");
      });
    }

    // Notification item quick action clicks
    document.querySelectorAll(".notif-item").forEach((item) => {
      item.addEventListener("click", () => {
        const action = item.dataset.action;
        if (action) {
          notifDropdown.classList.add("hidden");
          this.navigateTo(action);
        }
      });
    });

    // Global Semester Select
    const semesterSelect = document.getElementById("global-semester-select");
    if (semesterSelect) {
      semesterSelect.addEventListener("change", (e) => {
        const term = e.target.value;
        this.showToast(`Active semester switched to ${term}`, "info");
        this.renderResultsTable(term);
      });
    }

    // Global Search & Command Palette (⌘K)
    const globalSearchInput = document.getElementById("global-search-input");
    if (globalSearchInput) {
      globalSearchInput.addEventListener("focus", () => this.openModal("modal-command-palette"));
    }

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        this.openModal("modal-command-palette");
      }
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    });

    const btnCloseCmd = document.getElementById("btn-close-cmd");
    if (btnCloseCmd) {
      btnCloseCmd.addEventListener("click", () => this.closeModal("modal-command-palette"));
    }

    document.querySelectorAll(".cmd-item").forEach((item) => {
      item.addEventListener("click", () => {
        const dest = item.dataset.dest;
        this.closeModal("modal-command-palette");
        if (dest) this.navigateTo(dest);
      });
    });

    // --- DASHBOARD SHORTCUTS ---
    const btnDashRegisterNow = document.getElementById("btn-dash-register-now");
    if (btnDashRegisterNow) {
      btnDashRegisterNow.addEventListener("click", () => this.navigateTo("registration"));
    }

    const dashBtnQuickReg = document.getElementById("dash-btn-quick-reg");
    if (dashBtnQuickReg) {
      dashBtnQuickReg.addEventListener("click", () => this.navigateTo("registration"));
    }

    const dashBtnQuickRoutine = document.getElementById("dash-btn-quick-routine");
    if (dashBtnQuickRoutine) {
      dashBtnQuickRoutine.addEventListener("click", () => this.navigateTo("routine"));
    }

    const btnDashViewRoutine = document.getElementById("btn-dash-view-routine");
    if (btnDashViewRoutine) {
      btnDashViewRoutine.addEventListener("click", () => this.navigateTo("routine"));
    }

    const btnDashViewResults = document.getElementById("btn-dash-view-results");
    if (btnDashViewResults) {
      btnDashViewResults.addEventListener("click", () => this.navigateTo("results"));
    }

    const cardStatCgpa = document.getElementById("card-stat-cgpa");
    if (cardStatCgpa) {
      cardStatCgpa.addEventListener("click", () => this.navigateTo("results"));
    }

    // --- COURSE REGISTRATION FILTERS & ACTIONS ---
    const courseSearchInput = document.getElementById("course-search-input");
    const filterDept = document.getElementById("filter-dept");
    const filterCredits = document.getElementById("filter-credits");
    const filterSeatsOnly = document.getElementById("filter-seats-only");

    [courseSearchInput, filterDept, filterCredits, filterSeatsOnly].forEach((el) => {
      if (el) {
        el.addEventListener("input", () => this.renderCatalogTable());
        el.addEventListener("change", () => this.renderCatalogTable());
      }
    });

    const btnConfirmRegistration = document.getElementById("btn-confirm-registration");
    if (btnConfirmRegistration) {
      btnConfirmRegistration.addEventListener("click", () => this.handleOpenRegistrationConfirmation());
    }

    const btnCloseConfirmReg = document.getElementById("btn-close-confirm-reg");
    const btnModalCancelReg = document.getElementById("btn-modal-cancel-reg");
    if (btnCloseConfirmReg) btnCloseConfirmReg.addEventListener("click", () => this.closeModal("modal-confirm-reg"));
    if (btnModalCancelReg) btnModalCancelReg.addEventListener("click", () => this.closeModal("modal-confirm-reg"));

    const btnModalSubmitReg = document.getElementById("btn-modal-submit-reg");
    if (btnModalSubmitReg) {
      btnModalSubmitReg.addEventListener("click", () => this.handleFinalizeRegistration());
    }

    // --- ACADEMIC RESULTS ACTIONS ---
    document.querySelectorAll(".semester-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".semester-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const term = tab.dataset.semester;
        this.renderResultsTable(term);
      });
    });

    const btnDownloadTranscript = document.getElementById("btn-download-transcript");
    if (btnDownloadTranscript) {
      btnDownloadTranscript.addEventListener("click", () => {
        this.showToast("Generating official transcript PDF...", "info");
        setTimeout(() => {
          this.showToast("Downloaded: Mahid_Nazat_Official_Transcript_2026.pdf", "success");
        }, 1200);
      });
    }

    // --- CLASS ROUTINE ACTIONS ---
    const btnRoutineGrid = document.getElementById("btn-routine-grid");
    const btnRoutineList = document.getElementById("btn-routine-list");
    const routineGridContainer = document.getElementById("routine-grid-container");
    const routineListContainer = document.getElementById("routine-list-container");

    if (btnRoutineGrid && btnRoutineList) {
      btnRoutineGrid.addEventListener("click", () => {
        btnRoutineGrid.classList.add("active");
        btnRoutineList.classList.remove("active");
        routineGridContainer.classList.remove("hidden");
        routineListContainer.classList.add("hidden");
      });

      btnRoutineList.addEventListener("click", () => {
        btnRoutineList.classList.add("active");
        btnRoutineGrid.classList.remove("active");
        routineGridContainer.classList.add("hidden");
        routineListContainer.classList.remove("hidden");
      });
    }

    const btnExportCalendar = document.getElementById("btn-export-calendar");
    if (btnExportCalendar) {
      btnExportCalendar.addEventListener("click", () => {
        this.showToast("Weekly routine schedule exported to calendar (.ics)!", "success");
      });
    }

    // Timetable class click popover
    document.querySelectorAll(".timetable-block").forEach((block) => {
      block.addEventListener("click", () => {
        this.openClassDetailModal(block.dataset);
      });
    });

    const btnCloseClassDetails = document.getElementById("btn-close-class-details");
    const btnCloseCdAction = document.getElementById("btn-close-cd-action");
    if (btnCloseClassDetails) btnCloseClassDetails.addEventListener("click", () => this.closeModal("modal-class-details"));
    if (btnCloseCdAction) btnCloseCdAction.addEventListener("click", () => this.closeModal("modal-class-details"));

    // --- STUDENT PROFILE ACTIONS ---
    document.querySelectorAll(".ptab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        this.switchProfileTab(tab);
      });
    });

    const btnEditProfileToggle = document.getElementById("btn-edit-profile-toggle");
    if (btnEditProfileToggle) {
      btnEditProfileToggle.addEventListener("click", () => this.toggleProfileEditMode());
    }

    const btnCancelPersonal = document.getElementById("btn-cancel-personal");
    const btnSavePersonal = document.getElementById("btn-save-personal");
    if (btnCancelPersonal) btnCancelPersonal.addEventListener("click", () => this.cancelProfileEdit());
    if (btnSavePersonal) btnSavePersonal.addEventListener("click", () => this.saveProfileEdit());

    const changePwdForm = document.getElementById("change-password-form");
    if (changePwdForm) {
      changePwdForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const cur = document.getElementById("current-pwd").value;
        const n1 = document.getElementById("new-pwd").value;
        const n2 = document.getElementById("confirm-new-pwd").value;

        if (n1.length < 8) {
          this.showToast("New password must be at least 8 characters long", "danger");
          return;
        }
        if (n1 !== n2) {
          this.showToast("New passwords do not match!", "danger");
          return;
        }

        changePwdForm.reset();
        this.showToast("Password updated successfully!", "success");
      });
    }

    // Settings switch toggles
    document.querySelectorAll(".settings-toggle-list input").forEach((sw) => {
      sw.addEventListener("change", (e) => {
        const label = e.target.closest(".toggle-row").querySelector(".toggle-title").textContent;
        const status = e.target.checked ? "enabled" : "disabled";
        this.showToast(`${label} ${status}`, "info");
      });
    });

    // --- THEME TOGGLE CONTROLLERS ---
    const themeToggleLogin = document.getElementById("theme-toggle-login");
    if (themeToggleLogin) {
      themeToggleLogin.addEventListener("click", () => this.toggleTheme());
    }

    const themeToggleTopbar = document.getElementById("theme-toggle-topbar");
    if (themeToggleTopbar) {
      themeToggleTopbar.addEventListener("click", () => this.toggleTheme());
    }

    const themeToggleSetting = document.getElementById("toggle-theme-setting");
    if (themeToggleSetting) {
      themeToggleSetting.addEventListener("change", () => this.toggleTheme());
    }

    // --- REGISTRATION VIEW SWITCHER (Package vs 8-Semester Roadmap) ---
    const btnRegPackage = document.getElementById("btn-view-reg-package");
    const btnRegRoadmap = document.getElementById("btn-view-reg-roadmap");
    const regPackageView = document.getElementById("reg-package-view");
    const regRoadmapView = document.getElementById("reg-roadmap-view");

    if (btnRegPackage && btnRegRoadmap) {
      btnRegPackage.addEventListener("click", () => {
        btnRegPackage.classList.add("active");
        btnRegRoadmap.classList.remove("active");
        if (regPackageView) regPackageView.classList.remove("hidden");
        if (regRoadmapView) regRoadmapView.classList.add("hidden");
      });

      btnRegRoadmap.addEventListener("click", () => {
        btnRegRoadmap.classList.add("active");
        btnRegPackage.classList.remove("active");
        if (regRoadmapView) regRoadmapView.classList.remove("hidden");
        if (regPackageView) regPackageView.classList.add("hidden");
        this.renderCurriculumRoadmap();
      });
    }

    // Avatar upload demo
    const btnUploadAvatar = document.getElementById("btn-upload-avatar");
    if (btnUploadAvatar) {
      btnUploadAvatar.addEventListener("click", () => {
        this.showToast("Photo upload feature ready for production photo asset.", "info");
      });
    }
  }

  // ===========================================================================
  // 3. AUTHENTICATION & LOGIN WORKFLOW
  // ===========================================================================

  handleLoginSubmit(e) {
    e.preventDefault();
    const idInput = document.getElementById("login-student-id");
    const pwdInput = document.getElementById("login-password");
    const alertBox = document.getElementById("login-alert");
    const spinner = document.getElementById("login-spinner");
    const btnText = document.querySelector("#btn-submit-login .btn-text");

    // Reset previous errors
    if (idInput) idInput.classList.remove("input-error");
    if (pwdInput) pwdInput.classList.remove("input-error");
    if (alertBox) alertBox.classList.add("hidden");

    let id = idInput ? idInput.value.trim() : "";
    let pwd = pwdInput ? pwdInput.value.trim() : "";

    // Open Demo Mode: Allow anyone to login!
    // If empty, supply default demo credentials
    if (!id) {
      id = "230042144";
      if (idInput) idInput.value = id;
    }
    if (!pwd) {
      pwd = "Mahid123";
      if (pwdInput) pwdInput.value = pwd;
    }

    // Update current user student ID to whatever was entered
    if (id) {
      AppData.currentUser.studentId = id;
      if (id.includes("@")) {
        AppData.currentUser.email = id;
      }
    }

    // Simulate auth request
    if (spinner) spinner.classList.remove("hidden");
    if (btnText) btnText.textContent = "Authenticating...";

    setTimeout(() => {
      if (spinner) spinner.classList.add("hidden");
      if (btnText) btnText.textContent = "Sign In";
      this.showToast(`Welcome, ${AppData.currentUser.shortName}! (Demo Mode: Open Access)`, "success");
      this.loginSuccess();
    }, 500);
  }

  autofillDemoUser() {
    const idInput = document.getElementById("login-student-id");
    const pwdInput = document.getElementById("login-password");
    if (idInput && pwdInput) {
      idInput.value = "230042144";
      pwdInput.value = "Mahid123";
      idInput.classList.remove("input-error");
      pwdInput.classList.remove("input-error");
      const alert = document.getElementById("login-alert");
      if (alert) alert.classList.add("hidden");
      this.showToast("Demo credentials loaded: 230042144 / Mahid123", "info");
    }
  }

  togglePasswordVisibility() {
    const pwdInput = document.getElementById("login-password");
    const eyeIcon = document.getElementById("eye-icon");
    if (pwdInput.type === "password") {
      pwdInput.type = "text";
      eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
    } else {
      pwdInput.type = "password";
      eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  }

  handleSsoLogin() {
    this.showToast("Authenticating via IUT Central Shibboleth SSO...", "info");
    setTimeout(() => {
      this.loginSuccess();
      this.showToast("Authenticated with University SSO Identity", "success");
    }, 600);
  }

  loginSuccess() {
    document.getElementById("screen-login").classList.remove("active");
    document.getElementById("screen-login").classList.add("hidden");
    document.getElementById("portal-shell").classList.remove("hidden");

    // Sync student ID and name displays across portal
    const idDisplay = document.getElementById("display-student-id");
    if (idDisplay) idDisplay.textContent = AppData.currentUser.studentId;
    const topbarSub = document.getElementById("topbar-user-sub");
    if (topbarSub) topbarSub.textContent = `CSE · ${AppData.currentUser.studentId}`;

    this.navigateTo("dashboard");
  }

  handleLogout() {
    document.getElementById("portal-shell").classList.add("hidden");
    document.getElementById("screen-login").classList.remove("hidden");
    document.getElementById("screen-login").classList.add("active");
    this.currentScreen = "login";
    this.showToast("Signed out of student portal", "info");
  }

  // --- THEME MANAGEMENT ENGINE ---
  initTheme() {
    const savedTheme = localStorage.getItem("sis_theme") || 
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    this.setTheme(savedTheme, false);
  }

  setTheme(theme, notify = true) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sis_theme", theme);
    this.updateThemeIcons(theme);
    if (notify) {
      this.showToast(`Switched to ${theme === "dark" ? "Dark" : "Light"} mode`, "info");
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    this.setTheme(newTheme, true);
  }

  updateThemeIcons(theme) {
    const isDark = theme === "dark";
    document.querySelectorAll(".btn-theme-toggle, .btn-login-theme-toggle").forEach((btn) => {
      const sun = btn.querySelector(".theme-icon-sun");
      const moon = btn.querySelector(".theme-icon-moon");
      if (sun && moon) {
        if (isDark) {
          sun.classList.remove("hidden");
          moon.classList.add("hidden");
        } else {
          sun.classList.add("hidden");
          moon.classList.remove("hidden");
        }
      }
      const label = btn.querySelector(".theme-text-status");
      if (label) {
        label.textContent = isDark ? "Light Mode" : "Dark Mode";
      }
    });

    const settingToggle = document.getElementById("toggle-theme-setting");
    if (settingToggle) {
      settingToggle.checked = isDark;
    }
  }

  // --- IUT 4-YEAR / 8-SEMESTER ROADMAP RENDERER ---
  renderCurriculumRoadmap() {
    const container = document.getElementById("roadmap-years-container");
    if (!container || !AppData.curriculumRoadmap) return;

    container.innerHTML = "";
    AppData.curriculumRoadmap.forEach((yearData) => {
      const yearCard = document.createElement("div");
      yearCard.className = "roadmap-year-card";

      let semestersHtml = "";
      yearData.semesters.forEach((sem) => {
        const isActive = sem.status === "In Progress";
        let statusBadgeClass = "badge-emerald";
        if (sem.status === "In Progress") statusBadgeClass = "badge-indigo";
        if (sem.status === "Upcoming") statusBadgeClass = "badge-secondary";

        let coursesChips = sem.courses.map((c) => `<span class="course-chip">${c}</span>`).join("");

        semestersHtml += `
          <div class="roadmap-semester-box ${isActive ? "active-term" : ""}">
            <div class="sem-box-head">
              <div>
                <strong class="sem-title">${sem.num}</strong>
                <span style="font-size:0.75rem; color:var(--text-muted); margin-left:6px;">(${sem.term})</span>
              </div>
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="badge ${statusBadgeClass} sem-credits-badge">${sem.status}</span>
                <span class="badge badge-subtle sem-credits-badge">${sem.credits} Cr</span>
              </div>
            </div>
            <div class="sem-courses-chips">
              ${coursesChips}
            </div>
          </div>
        `;
      });

      yearCard.innerHTML = `
        <div class="roadmap-year-header">
          <div class="year-title-group">
            <h4>${yearData.year}</h4>
            <span>2 Semesters · Fixed Batch Core Curriculum</span>
          </div>
        </div>
        <div class="roadmap-semesters-list">
          ${semestersHtml}
        </div>
      `;
      container.appendChild(yearCard);
    });
  }

  // ===========================================================================
  // 4. SCREEN NAVIGATION & ACTIVE STATES
  // ===========================================================================

  navigateTo(screenId) {
    // Hide all screen views
    document.querySelectorAll(".portal-main .screen-view").forEach((view) => {
      view.classList.remove("active");
      view.classList.add("hidden");
    });

    // Show target screen
    const targetView = document.getElementById(`screen-${screenId}`);
    if (targetView) {
      targetView.classList.remove("hidden");
      targetView.classList.add("active");
      this.currentScreen = screenId;
    }

    // Update Sidebar active state
    document.querySelectorAll(".nav-item").forEach((btn) => {
      if (btn.dataset.nav === screenId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Close mobile drawer if open
    const portalSidebar = document.getElementById("portal-sidebar");
    if (portalSidebar) {
      portalSidebar.classList.remove("sidebar-open");
    }

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ===========================================================================
  // 5. COURSE REGISTRATION & LIVE CONFLICT DETECTION ENGINE
  // ===========================================================================

  renderCatalogTable() {
    const tableBody = document.getElementById("catalog-table-body");
    const searchVal = (document.getElementById("course-search-input")?.value || "").toLowerCase();
    const deptVal = document.getElementById("filter-dept")?.value || "ALL";
    const creditsVal = document.getElementById("filter-credits")?.value || "ALL";
    const seatsOnly = document.getElementById("filter-seats-only")?.checked || false;

    if (!tableBody) return;

    // Filter courses
    const filtered = AppData.catalogCourses.filter((course) => {
      const matchesSearch =
        course.code.toLowerCase().includes(searchVal) ||
        course.title.toLowerCase().includes(searchVal) ||
        course.instructor.toLowerCase().includes(searchVal);

      const matchesDept = deptVal === "ALL" || course.dept === deptVal;
      const matchesCredits = creditsVal === "ALL" || course.credits.toString() === creditsVal;
      const matchesSeats = !seatsOnly || course.seatsAvailable > 0;

      return matchesSearch && matchesDept && matchesCredits && matchesSeats;
    });

    // Update count
    const countBadge = document.getElementById("course-catalog-count");
    if (countBadge) countBadge.textContent = `Showing ${filtered.length} courses`;

    tableBody.innerHTML = "";

    filtered.forEach((course) => {
      const isAdded = AppData.cartCourses.includes(course.code);
      const isFull = course.seatsAvailable === 0;

      let seatsClass = "seats-available";
      if (course.seatsAvailable <= 5 && course.seatsAvailable > 0) seatsClass = "seats-low";
      if (isFull) seatsClass = "seats-full";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <span class="catalog-course-code">${course.code}</span>
          <span class="catalog-course-title">${course.title}</span>
        </td>
        <td><strong>${course.credits.toFixed(1)}</strong> Cr</td>
        <td>
          <span class="seats-badge ${seatsClass}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
            ${course.seatsAvailable} / ${course.seatsTotal} seats
          </span>
        </td>
        <td>
          <span class="slot-time-text">${course.slot}</span>
          <span class="slot-days-text">📍 ${course.room}</span>
        </td>
        <td>${course.instructor}</td>
        <td style="text-align: right;">
          ${
            isAdded
              ? `<button type="button" class="btn-course-add is-added" disabled>Added ✓</button>`
              : isFull
              ? `<button type="button" class="btn-course-add" disabled style="opacity: 0.5;">Full</button>`
              : `<button type="button" class="btn-course-add" onclick="app.addCourseToCart('${course.code}')">+ Add</button>`
          }
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  addCourseToCart(courseCode) {
    if (AppData.cartCourses.includes(courseCode)) return;

    AppData.cartCourses.push(courseCode);
    this.renderCatalogTable();
    this.renderCart();

    const course = AppData.catalogCourses.find((c) => c.code === courseCode);
    if (course) {
      this.showToast(`Added ${course.code} (${course.credits} Cr) to cart`, "info");
    }
  }

  removeCourseFromCart(courseCode) {
    AppData.cartCourses = AppData.cartCourses.filter((code) => code !== courseCode);
    this.renderCatalogTable();
    this.renderCart();
    this.showToast(`Removed ${courseCode} from cart`, "info");
  }

  /**
   * Schedule Conflict Engine:
   * Inspects all selected courses in the cart and checks if any share the same timetable slotKey.
   */
  evaluateCartConflicts() {
    const selected = AppData.catalogCourses.filter((c) => AppData.cartCourses.includes(c.code));
    const slotMap = {};
    let conflictFound = null;

    for (const course of selected) {
      if (slotMap[course.slotKey]) {
        // CONFLICT FOUND!
        conflictFound = {
          courseA: slotMap[course.slotKey],
          courseB: course,
          slot: course.slot
        };
        break;
      }
      slotMap[course.slotKey] = course;
    }

    return conflictFound;
  }

  renderCart() {
    const container = document.getElementById("cart-items-container");
    const conflictAlert = document.getElementById("cart-conflict-alert");
    const conflictText = document.getElementById("conflict-message-text");
    const countBadge = document.getElementById("cart-item-count-badge");
    const creditText = document.getElementById("cart-credit-text");
    const creditBar = document.getElementById("cart-credit-bar");
    const statusNote = document.getElementById("cart-credit-status-note");
    const confirmBtn = document.getElementById("btn-confirm-registration");

    if (!container) return;

    const selectedCourses = AppData.catalogCourses.filter((c) => AppData.cartCourses.includes(c.code));
    const totalCredits = selectedCourses.reduce((sum, c) => sum + c.credits, 0);

    // Update Count badge
    if (countBadge) countBadge.textContent = `${selectedCourses.length} Courses`;

    // Update Credits
    if (creditText) creditText.innerHTML = `<strong>${totalCredits.toFixed(1)}</strong> / 18.0 Max`;
    const percentage = Math.min((totalCredits / 18.0) * 100, 100);
    if (creditBar) creditBar.style.width = `${percentage}%`;

    // Check conflict
    const conflict = this.evaluateCartConflicts();

    if (conflict) {
      conflictAlert.classList.remove("hidden");
      conflictText.innerHTML = `<strong>${conflict.courseA.code}</strong> and <strong>${conflict.courseB.code}</strong> both occupy the <strong>${conflict.slot}</strong> slot. Please remove one to proceed.`;
    } else {
      conflictAlert.classList.add("hidden");
    }

    // Check credit limits
    let validCreditRange = totalCredits >= 12.0 && totalCredits <= 18.0;

    if (statusNote) {
      if (totalCredits < 12.0) {
        statusNote.className = "meter-foot-note limit-exceeded";
        statusNote.innerHTML = `<span>⚠️ Minimum 12.0 credits required (${(12.0 - totalCredits).toFixed(1)} more needed)</span>`;
      } else if (totalCredits > 18.0) {
        statusNote.className = "meter-foot-note limit-exceeded";
        statusNote.innerHTML = `<span>⚠️ Maximum credit limit (18.0) exceeded by ${(totalCredits - 18.0).toFixed(1)} Cr</span>`;
      } else {
        statusNote.className = "meter-foot-note";
        statusNote.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg><span>Within allowed credit limit (12.0 – 18.0)</span>`;
      }
    }

    // Enable/Disable Confirm Button
    if (confirmBtn) {
      if (conflict || !validCreditRange) {
        confirmBtn.disabled = true;
        confirmBtn.style.opacity = "0.5";
        confirmBtn.style.cursor = "not-allowed";
      } else {
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = "1";
        confirmBtn.style.cursor = "pointer";
      }
    }

    // Render cart items
    if (selectedCourses.length === 0) {
      container.innerHTML = `
        <div class="empty-cart-view">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          <p class="empty-cart-text">No courses selected yet.<br>Browse the catalog and add courses to your plan.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    selectedCourses.forEach((c) => {
      const isConflicted =
        conflict && (conflict.courseA.code === c.code || conflict.courseB.code === c.code);

      const div = document.createElement("div");
      div.className = `cart-item-row ${isConflicted ? "has-conflict" : ""}`;
      div.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-top">
            <span class="cart-code">${c.code}</span>
            <span class="cart-credits">(${c.credits.toFixed(1)} Cr)</span>
            ${isConflicted ? `<span class="badge badge-red">Conflict</span>` : ""}
          </div>
          <div class="cart-item-title">${c.title}</div>
          <div class="cart-item-slot">🕒 ${c.slot}</div>
        </div>
        <button type="button" class="btn-cart-remove" title="Remove course" onclick="app.removeCourseFromCart('${c.code}')">✕</button>
      `;
      container.appendChild(div);
    });
  }

  handleOpenRegistrationConfirmation() {
    const selected = AppData.catalogCourses.filter((c) => AppData.cartCourses.includes(c.code));
    const totalCredits = selected.reduce((sum, c) => sum + c.credits, 0);

    const summaryCourses = document.getElementById("modal-summary-courses");
    const summaryCredits = document.getElementById("modal-summary-credits");
    const listContainer = document.getElementById("modal-courses-list");

    if (summaryCourses) summaryCourses.textContent = `${selected.length} Courses`;
    if (summaryCredits) summaryCredits.textContent = `${totalCredits.toFixed(1)} Credits`;

    if (listContainer) {
      listContainer.innerHTML = "";
      selected.forEach((c) => {
        const item = document.createElement("div");
        item.className = "modal-course-pill";
        item.innerHTML = `
          <div>
            <strong>${c.code}</strong> — ${c.title}
          </div>
          <div>
            <span class="badge badge-indigo">${c.credits.toFixed(1)} Cr</span>
          </div>
        `;
        listContainer.appendChild(item);
      });
    }

    this.openModal("modal-confirm-reg");
  }

  handleFinalizeRegistration() {
    this.closeModal("modal-confirm-reg");
    this.showToast("Registration for Fall 2026 confirmed successfully! Academic routine updated.", "success");
    setTimeout(() => {
      this.navigateTo("dashboard");
    }, 600);
  }

  // ===========================================================================
  // 6. ACADEMIC RESULTS & DYNAMIC SEMESTER SWITCHING
  // ===========================================================================

  renderResultsTable(semesterKey) {
    const data = AppData.resultsBySemester[semesterKey] || AppData.resultsBySemester["Spring 2026"];
    const tbody = document.getElementById("results-table-body");
    const tableHeading = document.getElementById("results-table-heading");
    const semGpa = document.getElementById("kpi-semester-gpa");
    const semSub = document.getElementById("kpi-sem-sub");
    const semCredits = document.getElementById("kpi-sem-credits");

    if (tableHeading) tableHeading.textContent = `Grade Breakdown — ${semesterKey}`;
    if (semGpa) semGpa.textContent = data.gpa;
    if (semSub) semSub.textContent = `${semesterKey} Term`;
    if (semCredits) semCredits.textContent = data.credits;

    if (!tbody) return;

    tbody.innerHTML = "";
    data.courses.forEach((c) => {
      let gradePillClass = "badge-a";
      if (c.grade === "A+") gradePillClass = "badge-aplus";
      if (c.grade === "A-") gradePillClass = "badge-aminus";
      if (c.grade === "Pending") gradePillClass = "badge-amber";

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong class="catalog-course-code">${c.code}</strong></td>
        <td>${c.title}</td>
        <td>${c.credits.toFixed(1)}</td>
        <td><span class="grade-badge ${gradePillClass}">${c.grade}</span></td>
        <td><strong>${c.gpa}</strong></td>
        <td><span class="badge ${c.status === "Passed" ? "badge-emerald" : "badge-indigo"}">${c.status}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  initChartTooltips() {
    const dots = document.querySelectorAll(".chart-dot");
    const tooltip = document.getElementById("chart-tooltip");
    const ttTerm = document.getElementById("tt-term");
    const ttGpa = document.getElementById("tt-gpa");
    const ttCgpa = document.getElementById("tt-cgpa");
    const container = document.getElementById("gpa-chart-container");

    if (!tooltip || !container) return;

    dots.forEach((dot) => {
      dot.addEventListener("mouseenter", (e) => {
        const term = dot.dataset.term;
        const gpa = dot.dataset.gpa;
        const cgpa = dot.dataset.cgpa;
        const sem = dot.dataset.sem;

        ttTerm.textContent = `${term} (${sem})`;
        ttGpa.textContent = gpa;
        ttCgpa.textContent = cgpa;

        const rect = dot.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        tooltip.style.left = `${rect.left - containerRect.left + 8}px`;
        tooltip.style.top = `${rect.top - containerRect.top - 10}px`;
        tooltip.classList.remove("hidden");
      });

      dot.addEventListener("mouseleave", () => {
        tooltip.classList.add("hidden");
      });
    });
  }

  // ===========================================================================
  // 7. CLASS ROUTINE & DETAILS MODAL
  // ===========================================================================

  openClassDetailModal(data) {
    const code = document.getElementById("cd-course-code");
    const title = document.getElementById("class-details-title");
    const timeRoom = document.getElementById("cd-time-room");
    const instructor = document.getElementById("cd-instructor");
    const room = document.getElementById("cd-room");

    if (code) code.textContent = data.courseCode || "CSE 4701";
    if (title) title.textContent = data.courseName || "Course Details";
    if (timeRoom) timeRoom.textContent = `${data.room} · ${data.slot}`;
    if (instructor) instructor.textContent = data.instructor || "Faculty Instructor";
    if (room) room.textContent = data.room || "Assigned Room";

    this.openModal("modal-class-details");
  }

  renderRoutineListView() {
    const container = document.getElementById("routine-list-container");
    if (!container) return;

    const daysSchedule = [
      {
        day: "Saturday",
        classes: [
          { code: "CSE 4701", name: "Artificial Intelligence", time: "08:30 – 10:00 AM", room: "Room 302", instructor: "Prof. Dr. Hasan" },
          { code: "HUM 4715", name: "Engineering Ethics", time: "10:15 – 11:45 AM", room: "Room 405", instructor: "Dr. Rahman" },
          { code: "CSE 4700", name: "Thesis Consultation", time: "03:45 – 05:15 PM", room: "Dept Office 410", instructor: "Dr. Mottalib" }
        ]
      },
      {
        day: "Sunday",
        classes: [
          { code: "CSE 4703", name: "Computer Graphics", time: "08:30 – 10:00 AM", room: "Room 304", instructor: "Dr. Tanvir" },
          { code: "MATH 4701", name: "Mathematical Modeling", time: "10:15 – 11:45 AM", room: "Room 201", instructor: "Prof. Dr. Karim" },
          { code: "HUM 4715", name: "Engineering Ethics", time: "02:00 – 03:30 PM", room: "Room 405", instructor: "Dr. Rahman" }
        ]
      },
      {
        day: "Monday",
        classes: [
          { code: "CSE 4701", name: "Artificial Intelligence", time: "08:30 – 10:00 AM", room: "Room 302", instructor: "Prof. Dr. Hasan" },
          { code: "CSE 4703", name: "Computer Graphics", time: "10:15 – 11:45 AM", room: "Room 304", instructor: "Dr. Tanvir" }
        ]
      },
      {
        day: "Tuesday",
        classes: [
          { code: "MATH 4701", name: "Mathematical Modeling", time: "10:15 – 11:45 AM", room: "Room 201", instructor: "Prof. Dr. Karim" }
        ]
      },
      {
        day: "Wednesday (Today)",
        isToday: true,
        classes: [
          { code: "CSE 4701", name: "Artificial Intelligence", time: "08:30 – 10:00 AM", room: "Room 302", instructor: "Prof. Dr. Hasan", current: true },
          { code: "CSE 4702", name: "AI Sessional Lab", time: "10:15 AM – 12:45 PM", room: "Software Lab 3", instructor: "Lect. Farhan" },
          { code: "HUM 4715", name: "Engineering Ethics", time: "02:00 – 03:30 PM", room: "Room 405", instructor: "Dr. Rahman" }
        ]
      },
      {
        day: "Thursday",
        classes: [
          { code: "CSE 4704", name: "Computer Graphics Lab", time: "10:15 AM – 12:45 PM", room: "Multimedia Lab", instructor: "Dr. Tanvir" }
        ]
      }
    ];

    container.innerHTML = "";
    daysSchedule.forEach((d) => {
      const card = document.createElement("div");
      card.className = `routine-day-card ${d.isToday ? "today" : ""}`;
      card.innerHTML = `
        <div class="routine-day-header">
          <h4 class="routine-day-title">${d.day}</h4>
          <span class="badge ${d.isToday ? "badge-emerald" : "badge-gray"}">${d.classes.length} Classes</span>
        </div>
        <div class="classes-schedule-list">
          ${d.classes
            .map(
              (c) => `
            <div class="class-item-card ${c.current ? "status-active" : ""}">
              <div class="class-time-badge">
                <span class="time-main">${c.time.split("–")[0]}</span>
                <span class="time-sub">${c.time.split("–")[1] || ""}</span>
              </div>
              <div class="class-item-divider"></div>
              <div class="class-item-info">
                <div class="class-code-row">
                  <span class="class-code">${c.code}</span>
                  ${c.current ? `<span class="badge badge-emerald">Now Active</span>` : ""}
                </div>
                <h5 class="class-name">${c.name}</h5>
                <div class="class-meta">
                  <span class="meta-item">📍 ${c.room}</span>
                  <span class="meta-item">👤 ${c.instructor}</span>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ===========================================================================
  // 8. STUDENT PROFILE TABS & INLINE EDITING
  // ===========================================================================

  switchProfileTab(tabKey) {
    document.querySelectorAll(".ptab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tabKey);
    });

    document.querySelectorAll(".ptab-content").forEach((pane) => {
      pane.classList.toggle("active", pane.id === `tab-content-${tabKey}`);
      pane.classList.toggle("hidden", pane.id !== `tab-content-${tabKey}`);
    });
  }

  toggleProfileEditMode() {
    this.switchProfileTab("personal");
    this.isEditingProfile = !this.isEditingProfile;

    const inputs = document.querySelectorAll(".profile-input");
    const actionsBar = document.getElementById("personal-edit-actions");
    const btnText = document.getElementById("edit-btn-text");

    inputs.forEach((input) => {
      input.readOnly = !this.isEditingProfile;
      input.classList.toggle("editable", this.isEditingProfile);
    });

    if (actionsBar) actionsBar.classList.toggle("hidden", !this.isEditingProfile);
    if (btnText) btnText.textContent = this.isEditingProfile ? "Editing..." : "Edit Profile";

    if (this.isEditingProfile) {
      document.getElementById("p-phone")?.focus();
    }
  }

  cancelProfileEdit() {
    this.isEditingProfile = false;
    const inputs = document.querySelectorAll(".profile-input");
    inputs.forEach((input) => {
      input.readOnly = true;
      input.classList.remove("editable");
    });
    document.getElementById("personal-edit-actions")?.classList.add("hidden");
    document.getElementById("edit-btn-text").textContent = "Edit Profile";
    this.showToast("Profile edits discarded", "info");
  }

  saveProfileEdit() {
    this.isEditingProfile = false;
    const inputs = document.querySelectorAll(".profile-input");
    inputs.forEach((input) => {
      input.readOnly = true;
      input.classList.remove("editable");
    });
    document.getElementById("personal-edit-actions")?.classList.add("hidden");
    document.getElementById("edit-btn-text").textContent = "Edit Profile";
    this.showToast("Profile information updated successfully!", "success");
  }

  // ===========================================================================
  // 9. MODALS & TOAST UTILITIES
  // ===========================================================================

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("hidden");
      const autofocusInput = modal.querySelector("input[autofocus], input");
      if (autofocusInput) setTimeout(() => autofocusInput.focus(), 100);
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add("hidden");
  }

  closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach((m) => m.classList.add("hidden"));
  }

  showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    if (type === "success") {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === "danger") {
      icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    }

    toast.innerHTML = `
      ${icon}
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(40px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Initialize Application when DOM is ready
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new SISApp();
  window.app = app; // Expose to window for inline onclick handlers
});
