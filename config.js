/**
 * LeaveDesk Configuration — FIXED VERSION
 */

var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCNaQ0qBnx1zcKbPqDC_CmM6-NQBq5uF18",
  authDomain:        "leavedesk2.firebaseapp.com",
  databaseURL:       "https://leavedesk2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "leavedesk2",
  storageBucket:     "leavedesk2.firebasestorage.app",
  messagingSenderId: "146563253578",
  appId:             "1:146563253578:web:077852e19950fb0b666db3"
};

/* SECURITY FIX: Manager password removed from here. Handled in manager.html local script. */

var ENTITLEMENTS = { 'Annual leave': 14, 'Medical leave': 14, 'Emergency leave': 7, 'Unpaid leave': 30, 'Other': 5 };

var EMAILJS_ENABLED      = true;
var EMAILJS_SERVICE_ID   = 'service_q3q9vlr';
var EMAILJS_TEMPLATE_ID  = 'template_nz6bmmm';
var EMAILJS_PUBLIC_KEY   = 'WCh4Whrr7GFnggLW1';
var MANAGER_EMAIL_TO     = 'leavedesk21@gmail.com';
