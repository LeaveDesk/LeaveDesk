// LeaveDesk Configuration
// Edit this file once — all pages use it.

// Firebase
var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCNaQ0qBnx1zcKbPqDC_CmM6-NQBq5uF18",
  authDomain:        "leavedesk2.firebaseapp.com",
  databaseURL:       "https://leavedesk2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "leavedesk2",
  storageBucket:     "leavedesk2.firebasestorage.app",
  messagingSenderId: "146563253578",
  appId:             "1:146563253578:web:077852e19950fb0b666db3"
};

// Manager password
var MGR_PW = 'admin4321';

// Leave entitlements (days per type per year)
var ENTITLEMENTS = {
  'Annual leave':    4,
  'Medical leave':   4,
  'Emergency leave': 4,
  'Unpaid leave':    4,
  'Other':           4
};

// EmailJS — sends email to manager when an employee submits a request
var EMAILJS_ENABLED     = true;
var EMAILJS_SERVICE_ID  = 'service_q3q9vlr';
var EMAILJS_TEMPLATE_ID = 'template_nz6bmmm';
var EMAILJS_PUBLIC_KEY  = 'WCh4Whrr7GFnggLW1';
var MANAGER_EMAIL_TO    = 'leavedesk21@gmail.com';
