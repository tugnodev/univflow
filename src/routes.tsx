import { FaClinicMedical, FaCalendarAlt, FaChartLine, FaBook } from "react-icons/fa";

export const routes = [
    { path: '/', name: 'Overview', icon: FaClinicMedical },
    { path: '/timetable', name: 'Timetable', icon: FaCalendarAlt },
    { path: '/exam-notes', name: 'Exam Notes', icon: FaChartLine },
    { path: '/notepad', name: 'Notepad', icon: FaBook }
];