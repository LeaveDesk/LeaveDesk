/**
 * LeaveDesk Configuration — edit this file once, all pages use it.
 */

/* ── Firebase ── */
var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCNaQ0qBnx1zcKbPqDC_CmM6-NQBq5uF18",
  authDomain:        "leavedesk2.firebaseapp.com",
  databaseURL:       "https://leavedesk2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "leavedesk2",
  storageBucket:     "leavedesk2.firebasestorage.app",
  messagingSenderId: "146563253578",
  appId:             "1:146563253578:web:077852e19950fb0b666db3"
};

/* ── Manager password (the only way to log in as manager) ── */
var MGR_PW = 'admin4321';

/* ── Leave entitlements per employee per year ── */
var ENTITLEMENTS = { 'Annual leave':4, 'Medical leave':4, 'Emergency leave':4, 'Unpaid leave':4, 'Other':4 };

/* ── EmailJS — for automatic email notifications to manager ──
 * FREE setup (200 emails/month):
 * 1. Go to https://www.emailjs.com and create a free account
 * 2. Add an Email Service (Gmail recommended) — copy the Service ID below
 * 3. Create an Email Template — copy the Template ID below
 *    Template variables to use: {{from_name}}, {{leave_type}}, {{start_date}}, {{end_date}}, {{days}}, {{reason}}
 * 4. Copy your Public Key from Account → API Keys
 * 5. Fill in the three values below
 * Set EMAILJS_ENABLED = true to activate
 */
var EMAILJS_ENABLED      = true;           // set to true once you fill in the values below
var EMAILJS_SERVICE_ID   = 'service_q3q9vlr';
var EMAILJS_TEMPLATE_ID  = 'template_nz6bmmm';
var EMAILJS_PUBLIC_KEY   = 'WCh4Whrr7GFnggLW1';
var MANAGER_EMAIL_TO     = 'leavedesk21@gmail.com'; // where notification emails go
