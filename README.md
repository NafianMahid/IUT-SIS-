# Islamic University of Technology (IUT) — Student Information System (SIS) Redesign

> **Academic UI/UX Assignment Deliverable**  
> Modern, interactive, desktop-first prototype designed to overcome legacy SIS usability hurdles with proactive feedback, persistent navigation, and streamlined workflows.

---

## 🚀 Quick Start — How to Run the Prototype

No build steps or npm installations are required. The prototype is built purely with clean, standard-compliant **HTML5, Vanilla CSS, and JavaScript**.

1. **Direct Browser Execution**:
   Simply open [`index.html`](index.html) in any modern web browser (Chrome, Safari, Edge, Firefox):
   - Double-click `index.html` in your file explorer, OR
   - Drag and drop `index.html` into a browser window, OR
   - Run a local static server if desired:
     ```bash
     python3 -m http.server 8080
     # then visit http://localhost:8080
     ```

2. **Demo Mode Credentials & Open Access**:
   - **Student ID**: `230042144`
   - **Password**: `Mahid123`
   - *(Tip: You can click the **"Auto-fill"** demo button on the login screen, or enter **any ID / password** — the prototype allows **universal open access** for demonstrational evaluations!)*

3. **🌓 Dark Mode Support**:
   - Easily toggle between **Light Mode** and **Dark Mode** at any time:
     - Click the Sun / Moon toggle button in the **top navigation bar**,
     - Click the theme switcher on the **login screen header**, or
     - Toggle the theme switch inside **Student Profile > Settings**.
   - Your theme preference is automatically remembered and saved in `localStorage`.

---

## 🏛️ IUT Closed-Credit Academic System (4 Years · 8 Semesters)

Unlike open-credit elective shopping models, the **Islamic University of Technology (IUT)** operates on a **Closed-Credit Academic Curriculum**:
- **Degree Structure**: **4 Academic Years** comprising a total of **8 Semesters** (**2 Semesters per Academic Year**).
  - **Year 1**: 1st & 2nd Semesters
  - **Year 2**: 3rd & 4th Semesters
  - **Year 3**: 5th & 6th Semesters
  - **Year 4**: 7th & 8th Semesters
- **Fixed Batch Package**: Every student in a given department and semester takes the **identical pre-assigned core syllabus** (theory courses and sessional laboratory classes) with synchronized timetable sections (e.g. Section 7A).
- **Curriculum Roadmap**: Students can review their batch term package as well as an interactive **4-Year / 8-Semester Roadmap** tracking completed, active in-progress, and upcoming semesters.

---

## 📱 Prototype Screen Index (6 Required Screens)

| Screen # | Screen Name | Key Features & UX Innovations |
|---|---|---|
| **1** | **Login** | 55/45 split-screen academic branding, demo credential autofill (`230042144` / `Mahid123`), open demo login access, password eye toggle, inline validation, theme toggle, forgot password modal. |
| **2** | **Student Dashboard** | "Good morning, Mahid 👋" banner, 4 stat summary cards (CGPA, Credits, Enrolled, Attendance), amber deadline countdown banner, Today's Schedule with active status tag, recent results, official announcements. |
| **3** | **Course Registration** | **IUT Closed-Credit System**: Fixed batch package (Section 7A), **4-Year / 8-Semester Curriculum Roadmap View**, live seat count, schedule conflict detection, running credit counter, modal confirmation summary. |
| **4** | **Academic Results** | **8 Semesters Tab Switcher** (1st through 8th Semesters across all 4 Academic Years + Cumulative Summary), GPA/CGPA summary KPIs, interactive GPA progression trendline chart with hover tooltips, one-click PDF transcript export. |
| **5** | **Class Routine** | Weekly timetable grid (Saturday–Thursday), color-coded course palette, active class highlight, click-to-expand class details popover, Weekly Grid vs. List View toggle, .ics calendar export. |
| **6** | **Student Profile** | 30% profile identity & advisor card, 70% tabbed management (Personal Info, Academic Info, Documents, Settings with **Dark Mode Switch**), inline profile editing with Save/Cancel, password change sub-form. |

---

## 🎨 Design System Specifications

| Token / Element | Implementation | Justification |
|---|---|---|
| **Frame Size** | `1440 × 1024` desktop-first (with mobile responsive break points) | Optimised for standard university workstation and laptop displays. |
| **Primary Color** | Deep Indigo `#3730A3` | Academic rigor, focus, modern institutional authority. |
| **Success Color** | Emerald `#10B981` | Positive academic milestones, passed grades, valid schedules. |
| **Warning Color** | Amber `#F59E0B` | Time-sensitive deadlines, pending submissions, low seat counts. |
| **Danger Color** | Crimson Red `#DC2626` | Live timetable collisions, validation errors, dropped courses. |
| **Surfaces** | Page: `#F8F9FC` · Cards: `#FFFFFF` | Crisp contrast, low visual fatigue during prolonged study sessions. |
| **Typography** | Inter & Manrope (24 / 18 / 14 / 12px scale) | Exceptional legibility in dense academic tables and schedule grids. |
| **Radius & Elevation** | `12px` cards, `8px` buttons/inputs, soft shadows | Friendly, modern SaaS portal aesthetic rather than rigid legacy 90s forms. |

---

## 🎓 Academic UX Rationale & Comparison Against Legacy University SIS

### 1. Persistent Left Navigation vs. Deep Nested Dropdowns
* **Legacy Problem**: Traditional university portals force students through multi-tiered header dropdowns (e.g. `Academics > Undergraduate > Term Enrollment > Form B`). If a student needs to check their class routine while picking courses, they lose context or have to open new browser tabs.
* **Redesign Solution**: A dedicated, persistent left sidebar with clear visual active indicators and notification badges. It reduces navigation depth to a single click, allowing students to switch between Dashboard, Registration, Results, Routine, and Profile without ever losing their session.

### 2. Live Proactive Schedule Collision Shield vs. Post-Submission Failures
* **Legacy Problem**: In legacy portals, students select 5–6 courses blindly, submit their form, and only receive a generic server error popup: *"Error 501: Section collision detected"*, with no indication of which specific courses overlap.
* **Redesign Solution**: The Course Registration screen implements a client-side reactive collision detector. When an overlapping course (e.g. `CSE 4711`, which shares `Sat & Mon 08:30–10:00 AM` with `CSE 4701`) is added to the cart:
  1. A prominent red collision alert immediately highlights both offending courses.
  2. The conflicting card in the cart is outlined in red with a "Conflict" badge.
  3. The "Confirm Registration" CTA is disabled until the student resolves the overlap.

### 3. Visual GPA Trend Progression vs. Fragmented Historical Tables
* **Legacy Problem**: To calculate their academic trajectory, students currently have to manually download individual semester grade PDFs and compare numbers.
* **Redesign Solution**: The Academic Results view features an interactive semester GPA and cumulative CGPA trend chart with hover tooltips, accompanied by a dynamic semester tab switcher that recalculates term KPIs instantly.

### 4. Consolidated Dashboard "Today at a Glance"
* **Legacy Problem**: Many university portals show a completely blank "Login Successful" splash page or an unorganized wall of text links.
* **Redesign Solution**: The redesigned dashboard answers the student's primary questions within 3 seconds:
  - *Where do I need to go right now?* → "Today's Schedule" widget highlights the active class and room number.
  - *Are there urgent deadlines?* → Amber countdown banner for Fall 2026 Registration.
  - *How am I doing academically?* → 4 summary cards covering CGPA, completed credits with visual progress meter, enrolled courses, and attendance eligibility.

---

## 💻 File Structure

```
SRS Assignment/
├── index.html          # Semantic HTML5 prototype containing all 6 screens, modals, & toasts
├── css/
│   └── styles.css      # Design system tokens, responsive grid, components, and animations
├── js/
│   └── app.js          # Navigation engine, live conflict detector, cart math, modal controller
└── README.md           # Assignment documentation and UX design rationale
```
