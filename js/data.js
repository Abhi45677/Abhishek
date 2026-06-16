// Smart Computer Training Center — Static Content
// ====================================================

const BUSINESS = {
  name: "Smart Computer Training Center",
  nameHi: "स्मार्ट कंप्यूटर ट्रेनिंग सेंटर",
  shortName: "Smart CTC",
  phone: "+91 97719 07685",
  phoneRaw: "919771907685",
  email: "info@smartcomputertc.com",
  address: "Kahla Bishunpura, Kahla, Bihar 841232, India",
  addressHi: "कहला बिशुनपुरा, कहला, बिहार 841232",
  mapsQuery: "Kahla Bishunpura, Kahla, Bihar 841232",
  hours: "Daily 9:00 AM – 5:00 PM",
  hoursHi: "रोज़ाना सुबह 9 से शाम 5 तक",
  rating: 4.6,
  reviewsCount: 187,
};

const NAV_LINKS = [
  { href: "index.html", label: "Home", page: "home" },
  { href: "about.html", label: "About", page: "about" },
  { href: "courses.html", label: "Courses", page: "courses" },
  { href: "services.html", label: "Services", page: "services" },
  { href: "gallery.html", label: "Gallery", page: "gallery" },
  { href: "testimonials.html", label: "Reviews", page: "testimonials" },
  { href: "blog.html", label: "Blog", page: "blog" },
  { href: "faq.html", label: "FAQ", page: "faq" },
  { href: "contact.html", label: "Contact", page: "contact" },
];

const STATS = [
  { value: "500+", label: "Students Trained", labelHi: "प्रशिक्षित छात्र" },
  { value: "20+", label: "Courses Offered", labelHi: "उपलब्ध कोर्स" },
  { value: "5+", label: "Years Experience", labelHi: "वर्षों का अनुभव" },
  { value: "4.6/5", label: "Student Rating", labelHi: "छात्रों की रेटिंग" },
];

const FEATURES = [
  { icon: "graduation-cap", title: "Experienced Trainers", titleHi: "अनुभवी प्रशिक्षक", desc: "Industry experts with years of teaching experience." },
  { icon: "laptop", title: "Practical Learning", titleHi: "व्यावहारिक शिक्षा", desc: "Hands-on lab sessions on real computers, every day." },
  { icon: "briefcase", title: "Industry Courses", titleHi: "इंडस्ट्री कोर्स", desc: "Curriculum designed for today's job market needs." },
  { icon: "badge-check", title: "Certified Programs", titleHi: "मान्यता प्राप्त सर्टिफिकेट", desc: "Government-recognised certificate on course completion." },
  { icon: "indian-rupee", title: "Affordable Fees", titleHi: "किफायती फीस", desc: "Quality computer education at the most affordable cost." },
  { icon: "compass", title: "Career Guidance", titleHi: "करियर मार्गदर्शन", desc: "Personalised placement support and career counselling." },
];

const COURSES = {
  basic: [
    { slug: "computer-fundamentals", title: "Computer Fundamentals", titleHi: "कंप्यूटर की मूल बातें", duration: "1 Month", eligibility: "8th Pass", fee: 700, feeNote: "₹700 / lesson (Customized)", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["Introduction to Computers", "Operating System Basics (Windows)", "File Management", "Introduction to Internet"] },
    { slug: "ms-office", title: "MS Office", titleHi: "एम.एस. ऑफिस", duration: "2 Months", eligibility: "10th Pass", fee: 2000, feeNote: "Starts ₹2,000", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["MS Word", "MS Excel", "MS PowerPoint", "MS Outlook"] },
    { slug: "internet-email", title: "Internet & Email", titleHi: "इंटरनेट और ईमेल", duration: "1 Month", eligibility: "8th Pass", fee: 700, feeNote: "₹700 / lesson", image: "https://images.pexels.com/photos/5530447/pexels-photo-5530447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", syllabus: ["Web Browsing", "Email Setup & Etiquette", "Google Workspace", "Online Form Filling"] },
  ],
  professional: [
    { slug: "dca", title: "DCA", titleFull: "Diploma in Computer Applications", titleHi: "डी.सी.ए.", duration: "6 Months", eligibility: "10th Pass", fee: 4000, feeNote: "₹4,000 total", image: "https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", syllabus: ["Fundamentals of Computer", "MS Office Suite", "Internet & Email", "Tally Basics", "Basics of Programming"] },
    { slug: "adca", title: "ADCA", titleFull: "Advanced Diploma in Computer Applications", titleHi: "ए.डी.सी.ए.", duration: "12 Months", eligibility: "10th Pass", fee: 5500, feeNote: "₹5,500 total", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["DCA Topics +", "Tally Prime with GST", "Photoshop & CorelDraw", "HTML / CSS Basics", "DTP & Project Work"] },
    { slug: "tally-prime-gst", title: "Tally Prime with GST", titleHi: "टैली प्राइम विद जी.एस.टी.", duration: "3 Months", eligibility: "10th Pass", fee: 3000, feeNote: "₹3,000 total", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["Accounting Basics", "Tally Prime", "Inventory Management", "GST Returns & E-way Bill"] },
    { slug: "data-entry", title: "Data Entry Operator", titleHi: "डेटा एंट्री ऑपरेटर", duration: "2 Months", eligibility: "8th Pass", fee: 2500, feeNote: "₹2,500 total", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["Hindi & English Typing", "MS Excel for Data Entry", "Forms & Records", "Government Online Forms"] },
    { slug: "dtp", title: "DTP (Desktop Publishing)", titleHi: "डी.टी.पी. (डेस्कटॉप पब्लिशिंग)", duration: "2 Months", eligibility: "8th Pass", fee: 2500, feeNote: "₹2,500 total", image: "https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", syllabus: ["Photoshop Basics", "CorelDraw", "PageMaker / InDesign", "Print Design Project"] },
    { slug: "ccc", title: "CCC (NIELIT)", titleHi: "सी.सी.सी.", duration: "80 Hours", eligibility: "Open to All", fee: 2000, feeNote: "₹2,000 + Exam Fee", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["Introduction to Computer", "OS & MS Office", "Internet & WWW", "Digital Financial Tools"] },
  ],
  advanced: [
    { slug: "advanced-excel", title: "Advanced Excel", titleHi: "एडवांस्ड एक्सेल", duration: "1.5 Months", eligibility: "MS Office Basics", fee: 2200, feeNote: "₹2,200 total", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["Lookups (VLOOKUP, XLOOKUP)", "Pivot Tables & Charts", "Power Query Basics", "Dashboards & Macros"] },
    { slug: "graphic-designing", title: "Graphic Designing", titleHi: "ग्राफिक डिज़ाइनिंग", duration: "3 Months", eligibility: "10th Pass", fee: 4500, feeNote: "Starts ₹4,500", image: "https://images.pexels.com/photos/5530447/pexels-photo-5530447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", syllabus: ["Photoshop", "CorelDraw", "Illustrator", "Live Projects"] },
    { slug: "web-designing", title: "Web Designing", titleHi: "वेब डिज़ाइनिंग", duration: "3 Months", eligibility: "10th Pass", fee: 5000, feeNote: "Starts ₹5,000", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["HTML5", "CSS3 & Tailwind", "JavaScript Basics", "Portfolio Site"] },
    { slug: "digital-marketing", title: "Digital Marketing", titleHi: "डिजिटल मार्केटिंग", duration: "3 Months", eligibility: "12th Pass", fee: 5000, feeNote: "Starts ₹5,000", image: "https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", syllabus: ["SEO", "Social Media Marketing", "Google Ads", "Analytics"] },
    { slug: "python-programming", title: "Python Programming", titleHi: "पायथन प्रोग्रामिंग", duration: "3 Months", eligibility: "12th Pass", fee: 5500, feeNote: "Starts ₹5,500", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["Python Basics", "OOP Concepts", "Working with Files & APIs", "Mini-Projects"] },
    { slug: "typing", title: "Typing Course (Hindi + English)", titleHi: "टाइपिंग कोर्स", duration: "1 Month", eligibility: "Open to All", fee: 1500, feeNote: "Starts ₹1,500", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", syllabus: ["Keyboard Layout", "English Typing", "Hindi (Mangal/Krutidev)", "Speed Practice 30 WPM+"] },
  ],
};

const SERVICES = [
  { icon: "monitor", title: "Computer Training", titleHi: "कंप्यूटर प्रशिक्षण", desc: "Beginner to advanced courses with practical learning." },
  { icon: "wrench", title: "Computer Repair & Maintenance", titleHi: "कंप्यूटर रिपेयर एवं मेंटेनेंस", desc: "Hardware diagnosis, AMC and on-site service." },
  { icon: "download", title: "Software Installation", titleHi: "सॉफ्टवेयर इंस्टॉलेशन", desc: "OS, MS Office, Tally, Antivirus and more." },
  { icon: "printer", title: "Printer Setup", titleHi: "प्रिंटर सेटअप", desc: "Inkjet, laser, and network printer installation." },
  { icon: "file-text", title: "Online Form Filling", titleHi: "ऑनलाइन फॉर्म भरना", desc: "Sarkari forms, exam, scholarship & PAN/Aadhaar." },
  { icon: "smartphone", title: "Digital Services", titleHi: "डिजिटल सेवाएँ", desc: "Bill payment, recharge, ticket booking, KYC." },
  { icon: "headphones", title: "Technical Support", titleHi: "तकनीकी सहायता", desc: "Friendly support for any computer issue." },
  { icon: "award", title: "Certificate Services", titleHi: "सर्टिफिकेट सेवाएँ", desc: "Government recognised certificate after course." },
];

const TESTIMONIALS = [
  { name: "Rohit Kumar", nameHi: "रोहित कुमार", course: "DCA", rating: 5, text: "Sir bahut achha padhate hain. Practical knowledge milta hai aur fees bhi kam hai. Mera typing speed bhi achha ho gaya." },
  { name: "Priya Sharma", nameHi: "प्रिया शर्मा", course: "Tally Prime with GST", rating: 5, text: "I joined Tally course here and got placed at a CA firm within a month. Teaching style is very supportive." },
  { name: "Aman Singh", nameHi: "अमन सिंह", course: "ADCA", rating: 4, text: "Best computer institute in Kahla. Lab facility is good and trainers explain har topic dhyan se." },
  { name: "Sunita Devi", nameHi: "सुनीता देवी", course: "Data Entry Operator", rating: 5, text: "Maine yahan se data entry seekha. Ab main online form bhi bhar leti hoon, ghar baith kar kaam mil raha hai." },
  { name: "Ravi Yadav", nameHi: "रवि यादव", course: "Advanced Excel", rating: 5, text: "Excel ke pivot table aur lookup formulas yahi sikhe. Office mein ab senior bhi mujhse poochte hain!" },
  { name: "Anjali Kumari", nameHi: "अंजली कुमारी", course: "Graphic Designing", rating: 5, text: "Photoshop and CorelDraw ka acha course tha. Project work se confidence aa gaya, freelancing bhi shuru ki hai." },
];

const GALLERY = [
  { url: "https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "Students at work — Computer Lab" },
  { url: "https://images.pexels.com/photos/5530447/pexels-photo-5530447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "Practical session in progress" },
  { url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", caption: "Typing practice — daily routine" },
  { url: "https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", caption: "Office software training" },
  { url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", caption: "Programming class" },
  { url: "https://images.unsplash.com/photo-1709102884400-b50ca1a12bc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMGRlc2t8ZW58MHx8fHwxNzgxMDAxNjc5fDA&ixlib=rb-4.1.0&q=85", caption: "Computer repair & maintenance" },
  { url: "https://images.unsplash.com/photo-1778489769184-45868633c527?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbXB1dGVyJTIwbGFifGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85", caption: "Faculty guiding students" },
  { url: "https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "Group project session" },
];

const FAQS = [
  { q: "Where is Smart Computer Training Center located?", qHi: "स्मार्ट कंप्यूटर ट्रेनिंग सेंटर कहाँ स्थित है?", a: "We are located at Kahla Bishunpura, Kahla, Bihar 841232 — easy to find on Google Maps as '9G8Q+MQ Kahla'." },
  { q: "What are the working hours?", qHi: "खुलने का समय क्या है?", a: "We are open every day from 9:00 AM to 5:00 PM. You can also reach us on WhatsApp anytime." },
  { q: "Do you provide a certificate after the course?", qHi: "क्या कोर्स के बाद सर्टिफिकेट मिलता है?", a: "Yes, every student gets a recognised certificate after successful completion of the course." },
  { q: "What is the fee for the ADCA course?", qHi: "ADCA कोर्स की फीस कितनी है?", a: "ADCA fee is ₹5,500 for the full 12-month diploma. Easy monthly installments are also available." },
  { q: "Can I learn at my own pace with customized lessons?", qHi: "क्या मैं अपनी सुविधा अनुसार सीख सकता हूँ?", a: "Yes — customised lessons are available at ₹700 per lesson. Choose any topic and start at your pace." },
  { q: "Do you teach Hindi typing?", qHi: "क्या आप हिंदी टाइपिंग सिखाते हैं?", a: "Yes, we offer both Hindi (Mangal & Krutidev) and English typing as part of our Typing course." },
  { q: "How do I enrol in a course?", qHi: "नामांकन कैसे करें?", a: "Click on 'Enroll Now' on any course card or message us on WhatsApp at +91 97719 07685." },
];

const BLOG_POSTS = [
  { slug: "why-computer-skills-matter-2026", title: "Why Computer Skills Matter in 2026", excerpt: "From government job exams to remote work — basic computer literacy is no longer optional. Here's why every student should start now.", date: "Feb 12, 2026", image: "https://images.unsplash.com/photo-1778489769184-45868633c527?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbXB1dGVyJTIwbGFifGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85" },
  { slug: "ms-excel-tips-for-beginners", title: "10 MS Excel Tips Every Beginner Should Know", excerpt: "Simple Excel shortcuts and formulas that will save you hours every week — explained in plain English & Hindi.", date: "Jan 28, 2026", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwyfHx0eXBpbmclMjBvbiUyMGtleWJvYXJkfGVufDB8fHx8MTc4MTAwMTY3OXww&ixlib=rb-4.1.0&q=85" },
  { slug: "tally-prime-gst-career", title: "Career Scope after Tally Prime with GST", excerpt: "Accountant, billing executive, or your own practice? Discover what jobs and incomes await you after Tally certification.", date: "Jan 14, 2026", image: "https://images.pexels.com/photos/5530447/pexels-photo-5530447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
];

// Utilities
const WHATSAPP_LINK = (msg) => `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(msg)}`;
const ALL_COURSES = () => [...COURSES.basic, ...COURSES.professional, ...COURSES.advanced];
const FIND_COURSE = (slug) => ALL_COURSES().find((c) => c.slug === slug);
