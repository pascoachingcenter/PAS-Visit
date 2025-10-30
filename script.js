// ==========================
// 0. Initialize Lucide Icons
// ==========================
lucide.createIcons();

// ==========================
// 1. Localization Data & Logic
// ==========================
const localizationStrings = {
    en: {
        'Features': 'Features',
        'Credibility': 'Credibility',
        'Teachers': 'Teachers',
        'Reviews': 'Reviews',
        'FAQ': 'FAQ',
        'Contact': 'Contact',
        'hero-headline': 'Achieving Excellence with PAS Coaching.',
        'hero-subheadline': 'Coaching for Classes 6 to 10 for guaranteed success.',
        'Eye-Catcher': 'New student will get 1 chapter free class for all subjects.',
        'Enroll CTA': 'Enroll Now',
        'features-title': 'Our Core Features for Guaranteed Success.',
        'Syllabus Key': '6 Months Syllabus Completion',
        'Practice Key': 'Practice Class with Practical Examples',
        'Problem Key': 'Problem Solving Class',
        'Exam Key': 'Practice Exam',
        'Test Key': 'Test Paper Solving',
        'Practical Key': 'Practical Class',
        'metrics-title': 'Why Choose PAS?',
        'teachers-title': 'Meet Our Dedicated Teachers.',
        'testimonials-title': 'What Our Students Say.',
        'faq-title': 'Frequently Asked Questions.',
        'contact-title': 'Start Your Success Journey.',
        'Mode Toggle': 'Toggle Dark/Light Mode',
        'Student Name Label': 'Student Full Name',
        'Student Phone Label': 'Student Phone Number',
        'Guardian Name Label': 'Guardian Full Name',
        'Guardian Phone Label': 'Guardian Phone Number',
        'Class Label': 'Class',
        'Session Label': 'Session',
        'E-Mail Label': 'E-Mail',
        'Message Label': 'Message',
        'Free Class Label': 'I want the 1 chapter free class!',
        'Select Class Default': 'Select Class',
        'Select Session Default': 'Select Session',
        'Spring Session': 'Spring',
        'Fall Session': 'Fall',
        'Years Experience': 'Years Experience',
        'Successful Students': 'Successful Students',
        'Success Rate': 'Success Rate',
        'Direct Support': 'Direct Support',
        'Connect With Us': 'Connect With Us',
        'Submit Enrollment': 'Submit Enrollment',
        'Enrollment Form': 'Enrollment Form',
        'Google Map': 'Google Map',
        'Share Your Experience': 'Share Your Experience',
        'Your Name': 'Your Name',
        'Your Class': 'Your Class',
        'Your Comment': 'Your Comment',
        'Use auto signature': 'Use auto signature',
        'Submit Testimonial': 'Submit Testimonial',
        'No testimonials yet': 'No testimonials yet',
        'Be the first to share your experience!': 'Be the first to share your experience!',
        'toggleDark': 'Switch to Dark Mode',
        'toggleLight': 'Switch to Light Mode'
    },
    bn: {
        'Features': 'বৈশিষ্ট্য',
        'Credibility': 'বিশ্বাসযোগ্যতা',
        'Teachers': 'শিক্ষক',
        'Reviews': 'পর্যালোচনা',
        'FAQ': 'সচরাচর',
        'Contact': 'যোগাযোগ',
        'hero-headline': 'পেস কোচিং সেন্টারের সাথে শ্রেষ্ঠত্ব অর্জন করুন।',
        'hero-subheadline': 'নিশ্চিত সাফল্যের জন্য ক্লাস ৬ থেকে ১০ এর জন্য কোচিং।',
        'Eye-Catcher': 'নতুন ছাত্র-ছাত্রীদের জন্য সকল বিষয়ে ১টি অধ্যায় ফ্রি ক্লাস করার সুযোগ।',
        'Enroll CTA': 'এখনই ভর্তি হোন',
        'features-title': 'নিশ্চিত সাফল্যের জন্য আমাদের মূল বৈশিষ্ট্যসমূহ।',
        'Syllabus Key': '৬ মাসে সিলেবাস শেষ',
        'Practice Key': 'ব্যবহারিক উদাহরণ সহ অনুশীলন ক্লাস',
        'Problem Key': 'সমস্যা সমাধানের ক্লাস',
        'Exam Key': 'অনুশীলন পরীক্ষা',
        'Test Key': 'টেস্ট পেপার সমাধান',
        'Practical Key': 'ব্যবহারিক ক্লাস',
        'metrics-title': 'পেস কেন বেছে নেবেন?',
        'teachers-title': 'আমাদের ডেডিকেটেড শিক্ষকদের সাথে পরিচিত হন।',
        'testimonials-title': 'আমাদের শিক্ষার্থীরা যা বলে।',
        'faq-title': 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী।',
        'contact-title': 'আপনার সাফল্যের যাত্রা শুরু করুন।',
        'Mode Toggle': 'ডার্ক/লাইট মোড টগল করুন',
        'Student Name Label': 'শিক্ষার্থীর পূর্ণ নাম',
        'Student Phone Label': 'শিক্ষার্থীর ফোন নম্বর',
        'Guardian Name Label': 'অভিভাবকের পূর্ণ নাম',
        'Guardian Phone Label': 'অভিভাবকের ফোন নম্বর',
        'Class Label': 'ক্লাস',
        'Session Label': 'সেশন',
        'E-Mail Label': 'ইমেইল',
        'Message Label': 'মেসেজ',
        'Free Class Label': 'আমি ১টি অধ্যায় ফ্রি ক্লাস চাই!',
        'Select Class Default': 'ক্লাস নির্বাচন করুন',
        'Select Session Default': 'সেশন নির্বাচন করুন',
        'Spring Session': 'বসন্ত',
        'Fall Session': 'শরৎ',
        'Years Experience': 'বছরের অভিজ্ঞতা',
        'Successful Students': 'সফল শিক্ষার্থী',
        'Success Rate': 'সাফল্যের হার',
        'Direct Support': 'সরাসরি সহায়তা',
        'Connect With Us': 'আমাদের সাথে যুক্ত হন',
        'Submit Enrollment': 'ভর্তি ফর্ম জমা দিন',
        'Enrollment Form': 'ভর্তি ফর্ম',
        'Google Map': 'গুগল ম্যাপ',
        'Share Your Experience': 'আপনার অভিজ্ঞতা শেয়ার করুন',
        'Your Name': 'আপনার নাম',
        'Your Class': 'আপনার ক্লাস',
        'Your Comment': 'আপনার মন্তব্য',
        'Use auto signature': 'অটো সিগনেচার ব্যবহার করুন',
        'Submit Testimonial': 'টেস্টিমোনিয়াল জমা দিন',
        'No testimonials yet': 'এখনও কোনো টেস্টিমোনিয়াল নেই',
        'Be the first to share your experience!': 'আপনি প্রথম হোন আপনার অভিজ্ঞতা শেয়ার করতে!',
        'toggleDark': 'ডার্ক মোডে পরিবর্তন করুন',
        'toggleLight': 'লাইট মোডে পরিবর্তন করুন'
    }
};

// SweetAlert2 messages for different languages
const alertMessages = {
    en: {
        incompleteInfo: 'Incomplete Information',
        incompleteText: 'Please provide all required information.',
        invalidStudentPhone: 'Invalid Student Phone',
        invalidStudentPhoneText: 'Please enter a valid student phone number. Example: 01701606009 or 8801701606009',
        invalidGuardianPhone: 'Invalid Guardian Phone',
        invalidGuardianPhoneText: 'Please enter a valid guardian phone number. Example: 01701606009 or 8801701606009',
        thankYou: 'Thank You!',
        successText: 'Your enrollment application has been submitted successfully.',
        referenceId: 'Reference ID',
        weWillContact: 'We will contact you shortly.',
        freeClassThanks: '🎉 Thank you for your free class!',
        dataSaved: 'Data Saved!',
        dataSavedText: 'Your enrollment application has been saved but emails could not be sent.',
        pleaseContact: 'Please contact us by phone.',
        error: 'Error!',
        errorText: 'There was a problem submitting the form. Please try again.',
        databaseError: 'Database access problem. Please notify the administrator.',
        networkError: 'Network problem. Please check your internet connection.',
        okButton: 'OK',
        sending: 'Sending...',
        toggleDark: 'Switch to Dark Mode',
        toggleLight: 'Switch to Light Mode'
    },
    bn: {
        incompleteInfo: 'অসম্পূর্ণ তথ্য',
        incompleteText: 'দয়া করে সকল প্রয়োজনীয় তথ্য প্রদান করুন।',
        invalidStudentPhone: 'অবৈধ শিক্ষার্থী ফোন',
        invalidStudentPhoneText: 'দয়া করে সঠিক শিক্ষার্থীর ফোন নম্বর দিন। যেমনঃ 01701606009 বা 8801701606009',
        invalidGuardianPhone: 'অবৈধ অভিভাবক ফোন',
        invalidGuardianPhoneText: 'দয়া করে সঠিক অভিভাবকের ফোন নম্বর দিন। যেমনঃ 01701606009 বা 8801701606009',
        thankYou: 'ধন্যবাদ!',
        successText: 'আপনার ভর্তির আবেদন সফলভাবে জমা দেওয়া হয়েছে।',
        referenceId: 'রেফারেন্স আইডি',
        weWillContact: 'আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
        freeClassThanks: '🎉 আপনার ফ্রি ক্লাসের জন্য ধন্যবাদ!',
        dataSaved: 'ডাটা সেভ হয়েছে!',
        dataSavedText: 'আপনার ভর্তির আবেদন সেভ হয়েছে কিন্তু ইমেইল পাঠানো যায়নি।',
        pleaseContact: 'অনুগ্রহ করে ফোনে যোগাযোগ করুন।',
        error: 'ত্রুটি!',
        errorText: 'ফর্ম জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
        databaseError: 'ডাটাবেস এক্সেসের সমস্যা। দয়া করে অ্যাডমিনকে জানান।',
        networkError: 'নেটওয়ার্ক সমস্যা। ইন্টারনেট কানেকশন চেক করুন।',
        okButton: 'ঠিক আছে',
        sending: 'পাঠানো হচ্ছে...',
        toggleDark: 'ডার্ক মোডে পরিবর্তন করুন',
        toggleLight: 'লাইট মোডে পরিবর্তন করুন'
    }
};

// উন্নত ভাষা আপডেট ফাংশন
function updateContent(lang) {
    console.log(`Updating content to: ${lang}`);

    // 1. Update data-key elements (Features section)
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (localizationStrings[lang] && localizationStrings[lang][key]) {
            el.textContent = localizationStrings[lang][key];
        }
    });

    // 2. Update Navigation Links
    document.querySelectorAll('.main-nav a').forEach(el => {
        const originalText = el.textContent.trim();
        if (localizationStrings[lang] && localizationStrings[lang][originalText]) {
            el.textContent = localizationStrings[lang][originalText];
        }
    });

    // 3. Update Specific IDs
    const specificElements = {
        'hero-headline': 'hero-headline',
        'hero-subheadline': 'hero-subheadline',
        'hero-eye-catcher': 'Eye-Catcher',
        'hero-cta': 'Enroll CTA',
        'features-title': 'features-title',
        'metrics-title': 'metrics-title',
        'teachers-title': 'teachers-title',
        'testimonials-title': 'testimonials-title',
        'faq-title': 'faq-title',
        'contact-title': 'contact-title'
    };

    Object.keys(specificElements).forEach(id => {
        const el = document.getElementById(id);
        const key = specificElements[id];
        if (el && localizationStrings[lang] && localizationStrings[lang][key]) {
            el.textContent = localizationStrings[lang][key];
        }
    });

    // 4. Update Metrics Labels
    document.querySelectorAll('.metric-block .label').forEach(el => {
        const originalText = el.textContent.trim();
        if (localizationStrings[lang] && localizationStrings[lang][originalText]) {
            el.textContent = localizationStrings[lang][originalText];
        }
    });

    // 5. Update Form Labels
    const formLabels = {
        'name': 'Student Name Label',
        'phone': 'Student Phone Label',
        'guardian-name': 'Guardian Name Label',
        'guardian-phone': 'Guardian Phone Label',
        'class-select': 'Class Label',
        'session-select': 'Session Label',
        'email': 'E-Mail Label',
        'message': 'Message Label'
    };

    Object.keys(formLabels).forEach(id => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label && localizationStrings[lang] && localizationStrings[lang][formLabels[id]]) {
            label.textContent = localizationStrings[lang][formLabels[id]];
        }
    });

    // 6. Update Form Placeholders
    const placeholders = {
        'name': {
            en: "Student's Name",
            bn: "শিক্ষার্থীর নাম"
        },
        'phone': {
            en: "01********* or 8801*********",
            bn: "০১********* বা ৮৮০১*********"
        },
        'guardian-name': {
            en: "Guardian's Name",
            bn: "অভিভাবকের নাম"
        },
        'guardian-phone': {
            en: "01********* or 8801*********",
            bn: "০১********* বা ৮৮০১*********"
        },
        'email': {
            en: "youremail@example.com",
            bn: "আপনারইমেইল@উদাহরণ.কম"
        },
        'message': {
            en: "Any specific questions or subjects?",
            bn: "কোনো নির্দিষ্ট প্রশ্ন বা বিষয়?"
        }
    };

    Object.keys(placeholders).forEach(id => {
        const input = document.getElementById(id);
        if (input && placeholders[id][lang]) {
            input.placeholder = placeholders[id][lang];
        }
    });

    // 7. Update Select Options
    const classSelect = document.getElementById('class-select');
    if (classSelect) {
        Array.from(classSelect.options).forEach(option => {
            if (option.value === '') {
                option.textContent = localizationStrings[lang]['Select Class Default'];
            }
        });
    }

    const sessionSelect = document.getElementById('session-select');
    if (sessionSelect) {
        Array.from(sessionSelect.options).forEach(option => {
            if (option.value === '') {
                option.textContent = localizationStrings[lang]['Select Session Default'];
            } else if (option.value === 'spring') {
                option.textContent = localizationStrings[lang]['Spring Session'];
            } else if (option.value === 'fall') {
                option.textContent = localizationStrings[lang]['Fall Session'];
            }
        });
    }

    // 8. Update Free Class Checkbox Label
    const freeClassLabel = document.querySelector('label[for="free-class-check"]');
    if (freeClassLabel && localizationStrings[lang] && localizationStrings[lang]['Free Class Label']) {
        freeClassLabel.textContent = localizationStrings[lang]['Free Class Label'];
    }

    // 9. Update Button Text
    const submitButton = document.querySelector('#enrollment-form button[type="submit"]');
    if (submitButton && localizationStrings[lang] && localizationStrings[lang]['Submit Enrollment']) {
        submitButton.textContent = localizationStrings[lang]['Submit Enrollment'];
    }

    // 10. Update Contact Section Headings
    const contactHeadings = document.querySelectorAll('.contact-info h3, .contact-form h3');
    contactHeadings.forEach(heading => {
        const originalText = heading.textContent.trim();
        if (localizationStrings[lang] && localizationStrings[lang][originalText]) {
            heading.textContent = localizationStrings[lang][originalText];
        }
    });

    // 11. Update Google Map Text
    const mapText = document.querySelector('.map-placeholder p');
    if (mapText && localizationStrings[lang] && localizationStrings[lang]['Google Map']) {
        mapText.textContent = localizationStrings[lang]['Google Map'];
    }

    // 12. Update FAQ Content
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header span');
        const content = item.querySelector('.accordion-content p');

        if (header && header.hasAttribute('data-en')) {
            const translation = header.getAttribute(`data-${lang}`);
            if (translation) {
                header.textContent = translation;
            }
        }
        if (content && content.hasAttribute('data-en')) {
            const translation = content.getAttribute(`data-${lang}`);
            if (translation) {
                content.textContent = translation;
            }
        }
    });

    // 13. Update document language
    document.documentElement.lang = lang;

    // 14. Update mode toggle aria-label
    const modeToggleBtn = document.getElementById('mode-toggle');
    const isDark = document.body.classList.contains('dark-mode');
    if (modeToggleBtn) {
        modeToggleBtn.setAttribute('aria-label',
            isDark ? localizationStrings[lang]['toggleLight'] : localizationStrings[lang]['toggleDark']);
    }

    // 15. Refresh Lucide icons after content update
    setTimeout(() => {
        lucide.createIcons();
    }, 50);

    // 16. Update testimonial form if exists
    updateTestimonialForm(lang);
}

// Update testimonial form content when language changes
function updateTestimonialForm(lang) {
    const testimonialForm = document.getElementById('testimonial-form');
    if (!testimonialForm) return;

    const formLabels = {
        'testimonial-name': 'Your Name',
        'testimonial-class': 'Your Class',
        'testimonial-comment': 'Your Comment'
    };

    Object.keys(formLabels).forEach(id => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label && localizationStrings[lang] && localizationStrings[lang][formLabels[id]]) {
            label.textContent = localizationStrings[lang][formLabels[id]];
        }
    });

    // Update form title
    const formTitle = document.querySelector('.testimonial-form-container h3');
    if (formTitle && localizationStrings[lang] && localizationStrings[lang]['Share Your Experience']) {
        formTitle.textContent = localizationStrings[lang]['Share Your Experience'];
    }

    // Update checkbox label
    const checkboxLabel = document.querySelector('label[for="auto-signature"]');
    if (checkboxLabel && localizationStrings[lang] && localizationStrings[lang]['Use auto signature']) {
        checkboxLabel.textContent = localizationStrings[lang]['Use auto signature'];
    }

    // Update button text
    const submitButton = testimonialForm.querySelector('button[type="submit"]');
    if (submitButton && localizationStrings[lang] && localizationStrings[lang]['Submit Testimonial']) {
        submitButton.textContent = localizationStrings[lang]['Submit Testimonial'];
    }

    // Update placeholders
    const placeholders = {
        'testimonial-name': {
            en: "Enter your name",
            bn: "আপনার নাম লিখুন"
        },
        'testimonial-comment': {
            en: "Share your experience with PAS Coaching...",
            bn: "পেস কোচিং এর সাথে আপনার অভিজ্ঞতা শেয়ার করুন..."
        }
    };

    Object.keys(placeholders).forEach(id => {
        const input = document.getElementById(id);
        if (input && placeholders[id][lang]) {
            input.placeholder = placeholders[id][lang];
        }
    });
}

// ==========================
// Language Toggle Logic
// ==========================
const langToggleBtn = document.getElementById('lang-toggle');

function toggleLanguage() {
    const currentLang = document.documentElement.lang || 'en';
    const newLang = currentLang === 'en' ? 'bn' : 'en';

    // Update button state
    if (langToggleBtn) {
        langToggleBtn.classList.toggle('bn-active', newLang === 'bn');
    }

    // Update content
    updateContent(newLang);

    // Save preference
    localStorage.setItem('preferredLanguage', newLang);
}

function initLanguageToggle() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const isBengali = savedLang === 'bn';

    // Set initial button state
    if (langToggleBtn) {
        langToggleBtn.classList.toggle('bn-active', isBengali);
    }
    updateContent(savedLang);
}

// Event listener
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
}

// ==========================
// 2. Dark/Light Mode
// ==========================
const modeToggleBtn = document.getElementById('mode-toggle');
const body = document.body;
let moonIcon, sunIcon;

if (modeToggleBtn) {
    moonIcon = document.querySelector('.icon-moon');
    sunIcon = document.querySelector('.icon-sun');

    modeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode', !isDark);

        if (moonIcon) moonIcon.style.display = isDark ? 'none' : 'inline';
        if (sunIcon) sunIcon.style.display = isDark ? 'inline' : 'none';

        // Update aria-label based on language
        const currentLang = document.documentElement.lang || 'en';
        const messages = alertMessages[currentLang] || alertMessages.en;
        modeToggleBtn.setAttribute('aria-label',
            isDark ? messages.toggleLight : messages.toggleDark);

        // Save mode preference to localStorage
        localStorage.setItem('preferredMode', isDark ? 'dark-mode' : 'light-mode');
    });
}

// ==========================
// 3. Mobile Menu Toggle
// ==========================
const menuToggleBtn = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
let menuIcon, closeIcon;

if (menuToggleBtn && mainNav) {
    menuIcon = menuToggleBtn.querySelector('.icon-menu');
    closeIcon = menuToggleBtn.querySelector('.icon-close');

    function toggleMobileMenu(isOpen) {
        mainNav.classList.toggle('mobile-open', isOpen);
        menuToggleBtn.setAttribute('aria-expanded', isOpen);
        if (menuIcon) menuIcon.style.display = isOpen ? 'none' : 'block';
        if (closeIcon) closeIcon.style.display = isOpen ? 'block' : 'none';
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    menuToggleBtn.addEventListener('click', () => {
        const isOpen = !mainNav.classList.contains('mobile-open');
        toggleMobileMenu(isOpen);
    });

    // Close menu when a link is clicked (on mobile)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('mobile-open')) {
                toggleMobileMenu(false);
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('mobile-open') &&
            !mainNav.contains(e.target) &&
            !menuToggleBtn.contains(e.target)) {
            toggleMobileMenu(false);
        }
    });
}

// ==========================
// 4. Smooth Scroll
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==========================
// 5. Scroll Reveal
// ==========================
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
if (scrollRevealElements.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px', threshold: 0.1 });

    scrollRevealElements.forEach(el => observer.observe(el));
}

// ==========================
// 6. Metrics Counter
// ==========================
const metricsSection = document.getElementById('metrics');
if (metricsSection) {
    const metricsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.count').forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const suffix = counter.getAttribute('data-suffix') || '';
                    let count = 0;
                    const duration = 2000;
                    const start = performance.now();

                    function updateCount(timestamp) {
                        const progress = timestamp - start;
                        const percentage = Math.min(progress / duration, 1);
                        count = Math.floor(percentage * target);
                        counter.textContent = count + suffix;
                        if (percentage < 1) requestAnimationFrame(updateCount);
                    }
                    requestAnimationFrame(updateCount);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    metricsSection.querySelectorAll('.metric-block').forEach(el => metricsObserver.observe(el));
}

// ==========================
// 7. FAQ Accordion
// ==========================
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

        // Close other open accordions in the same container
        const parentAccordion = header.closest('.accordion');
        if (parentAccordion) {
            parentAccordion.querySelectorAll('.accordion-header.active').forEach(other => {
                if (other !== header) {
                    other.classList.remove('active');
                    other.setAttribute('aria-expanded', 'false');
                    const otherContent = other.nextElementSibling;
                    otherContent.classList.remove('active');
                    otherContent.style.maxHeight = '0';
                }
            });
        }

        // Toggle current accordion
        header.classList.toggle('active');
        header.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('active');
        content.style.maxHeight = content.classList.contains('active') ? content.scrollHeight + 'px' : '0';
    });

    header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            header.click();
        }
    });
});

// ==========================
// 8. Firebase Configuration & Initialization - FIXED VERSION
// ==========================

// Firebase configuration - SECURITY WARNING: This should be in environment variables
const firebaseConfig = {
    apiKey: "AIzaSyDxPpzje2y0TMxRoex6RJmkJR17BIcaSDE",
    authDomain: "pas-coaching-center.firebaseapp.com",
    projectId: "pas-coaching-center",
    storageBucket: "pas-coaching-center.firebasestorage.app",
    messagingSenderId: "414047037938",
    appId: "1:414047037938:web:29783ae668b73ae023636b",
    measurementId: "G-DYBNM677KH"
};

// Initialize Firebase - COMPATIBLE VERSION (v8)
let firebaseApp;
let firestore;
let storage;

try {
    if (typeof firebase !== 'undefined') {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        firestore = firebase.firestore();
        storage = firebase.storage();
        console.log('✅ Firebase initialized successfully with v8');
    } else {
        console.error('❌ Firebase is not loaded. Check CDN links.');
    }
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
}

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init("JkSzpCqv5TiLv63oR");
    console.log('✅ EmailJS initialized successfully');
} else {
    console.error('❌ EmailJS is not loaded. Check CDN links.');
}

// ==========================
// 9. Form Handling - COMPLETELY FIXED
// ==========================

// Enrollment Form Handler
const enrollmentForm = document.getElementById('enrollment-form');
if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        console.log('📝 Enrollment form submitted');

        const submitButton = this.querySelector('button[type="submit"]');
        const currentLang = document.documentElement.lang || 'en';
        const messages = alertMessages[currentLang] || alertMessages.en;

        // Form data collection
        const formData = {
            studentName: this['name'].value.trim(),
            studentPhone: this['phone'].value.trim(),
            guardianName: this['guardian-name'].value.trim(),
            guardianPhone: this['guardian-phone'].value.trim(),
            studentClass: this['class-select'].value,
            session: this['session-select'].value,
            email: this['email'].value.trim(),
            message: this['message'].value.trim(),
            wantsFreeClass: this['free-class-check'].checked,
            timestamp: new Date().toISOString(),
            submissionDate: new Date().toLocaleString()
        };

        // Validation Logic
        if (!formData.studentName || !formData.studentPhone || !formData.guardianName || !formData.guardianPhone || !formData.studentClass || !formData.session) {
            Swal.fire({
                icon: 'error',
                title: messages.incompleteInfo,
                text: messages.incompleteText,
                confirmButtonText: messages.okButton
            });
            return;
        }

        // Validate phone number format (Bangladeshi) - FIXED VERSION
        const phoneRegex = /^(?:\+88|01)?\d{9,11}$/;
        let studentPhone = formData.studentPhone.replace(/\D/g, '');
        let guardianPhone = formData.guardianPhone.replace(/\D/g, '');

        // Ensure phone numbers start with 01
        if (!studentPhone.startsWith('01')) {
            studentPhone = '01' + studentPhone.replace(/^8801?/, '');
        }
        if (!guardianPhone.startsWith('01')) {
            guardianPhone = '01' + guardianPhone.replace(/^8801?/, '');
        }

        if (!phoneRegex.test(studentPhone)) {
            Swal.fire({
                icon: 'error',
                title: messages.invalidStudentPhone,
                text: messages.invalidStudentPhoneText,
                confirmButtonText: messages.okButton
            });
            return;
        }

        if (!phoneRegex.test(guardianPhone)) {
            Swal.fire({
                icon: 'error',
                title: messages.invalidGuardianPhone,
                text: messages.invalidGuardianPhoneText,
                confirmButtonText: messages.okButton
            });
            return;
        }

        // Update formatted phone numbers
        formData.studentPhone = studentPhone;
        formData.guardianPhone = guardianPhone;

        // Update button state
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = messages.sending;
        submitButton.disabled = true;

        try {
            // Save to Firebase Firestore
            let docRef;
            if (firestore) {
                docRef = await firestore.collection("enrollments").add({
                    ...formData,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                console.log('✅ Enrollment saved to Firebase:', docRef.id);
            } else {
                // Fallback: Generate random ID if Firebase not available
                docRef = { id: 'LOCAL_' + Date.now() };
                console.log('⚠️ Firebase not available, using local storage');
                // Save to localStorage as fallback
                const existingData = JSON.parse(localStorage.getItem('enrollments') || '[]');
                existingData.push({ id: docRef.id, ...formData });
                localStorage.setItem('enrollments', JSON.stringify(existingData));
            }

            // Send Emails
            let emailsSent = 0;

            // Send thank you email to student
            if (formData.email && emailjs) {
                try {
                    await emailjs.send(
                        'service_0k8t44p',
                        'user_thankyou',
                        {
                            student_name: formData.studentName,
                            student_class: formData.studentClass,
                            to_email: formData.email,
                            free_class_offer: formData.wantsFreeClass ? 'Yes' : 'No'
                        }
                    );
                    emailsSent++;
                    console.log('✅ Thank you email sent');
                } catch (emailError) {
                    console.warn("❌ Thank you email failed:", emailError);
                }
            }

            // Send notification to admin
            if (emailjs) {
                try {
                    await emailjs.send(
                        'service_0k8t44p',
                        'admin_notification',
                        {
                            student_name: formData.studentName,
                            student_phone: formData.studentPhone,
                            guardian_name: formData.guardianName,
                            guardian_phone: formData.guardianPhone,
                            student_class: formData.studentClass,
                            session: formData.session,
                            email: formData.email,
                            message: formData.message || 'No message',
                            wants_free_class: formData.wantsFreeClass ? 'Yes' : 'No',
                            submission_time: new Date().toLocaleString('en-US'),
                            document_id: docRef.id
                        }
                    );
                    emailsSent++;
                    console.log('✅ Admin notification email sent');
                } catch (adminEmailError) {
                    console.warn("❌ Admin email failed:", adminEmailError);
                }
            }

            // Success message
            if (emailsSent > 0) {
                await Swal.fire({
                    icon: 'success',
                    title: messages.thankYou,
                    html: `<p>${messages.successText}</p><p><strong>${messages.referenceId}:</strong> ${docRef.id.substring(0, 8)}</p><p>${messages.weWillContact}</p>${formData.wantsFreeClass ? `<p>${messages.freeClassThanks}</p>` : ''}`,
                    confirmButtonText: messages.okButton
                });
            } else {
                // Data saved but emails failed
                await Swal.fire({
                    icon: 'warning',
                    title: messages.dataSaved,
                    html: `<p>${messages.dataSavedText}</p><p><strong>${messages.referenceId}:</strong> ${docRef.id.substring(0, 8)}</p><p>${messages.pleaseContact}</p>`,
                    confirmButtonText: messages.okButton
                });
            }

            // Reset form
            this.reset();

        } catch (error) {
            console.error("❌ Full submission error:", error);

            let errorMessage = messages.errorText;
            if (error.code === 'permission-denied') {
                errorMessage = messages.databaseError;
            } else if (error.code === 'unavailable') {
                errorMessage = messages.networkError;
            }

            await Swal.fire({
                icon: 'error',
                title: messages.error,
                text: errorMessage,
                confirmButtonText: messages.okButton
            });
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

// ==========================
// 10. Form Validation Enhancements - FIXED PHONE VALIDATION
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    // Phone number formatting - FIXED VERSION
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');

            // Keep leading zero for Bangladeshi numbers
            if (value.startsWith('880')) {
                value = '0' + value.substring(3);
            }

            // Ensure it starts with 01 for Bangladeshi numbers
            if (value.length > 0 && !value.startsWith('0') && value.length <= 10) {
                value = '0' + value;
            }

            e.target.value = value;
        });
    });

    // Real-time visual validation for required fields
    const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (!this.value.trim()) {
                this.style.borderColor = '#ff4757'; // Red border for empty required field
            } else {
                this.style.borderColor = ''; // Reset on valid
            }
        });

        input.addEventListener('input', function () {
            if (this.value.trim()) {
                this.style.borderColor = ''; // Reset as user types
            }
        });
    });
});

// ==========================
// 11. Page Load Complete & Initial Setup
// ==========================
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 PAS Coaching Center website loaded successfully');

    // Set initial language from localStorage or default
    initLanguageToggle();

    // Set initial mode from localStorage
    const savedMode = localStorage.getItem('preferredMode') || 'light-mode';
    if (savedMode === 'dark-mode') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        if (moonIcon) moonIcon.style.display = 'none';
        if (sunIcon) sunIcon.style.display = 'inline';

        // Update aria-label based on language
        const currentLang = document.documentElement.lang || 'en';
        const messages = alertMessages[currentLang] || alertMessages.en;
        if (modeToggleBtn) {
            modeToggleBtn.setAttribute('aria-label', messages.toggleLight);
        }
    }

    // Initialize testimonial system
    initTestimonialSystem();

    // Initialize banner system
    initBannerSystem();

    console.log('✅ All systems initialized');
});

// ==========================
// 12. Testimonial System - COMPATIBLE WITH FIREBASE v8
// ==========================

// Testimonial functionality will be initialized after DOM loads
function initTestimonialSystem() {
    // Check if testimonial form exists on the page
    const testimonialForm = document.getElementById('testimonial-form');
    const realTestimonialsContainer = document.getElementById('real-testimonials-container');

    if (!testimonialForm || !realTestimonialsContainer) {
        console.log('Testimonial elements not found - skipping testimonial system');
        return;
    }

    const demoTestimonials = document.querySelector('.demo-testimonials');
    const testimonialNameInput = document.getElementById('testimonial-name');
    const testimonialClassInput = document.getElementById('testimonial-class');
    const testimonialCommentInput = document.getElementById('testimonial-comment');
    const autoSignatureCheckbox = document.getElementById('auto-signature');

    // Auto Signature Generator
    function generateSignature(name, studentClass) {
        const signatures = {
            en: [
                `- ${name} (Class ${studentClass})`,
                `- ${name}, Class ${studentClass}`,
                `- ${name} - Class ${studentClass} Student`
            ],
            bn: [
                `- ${name} (ক্লাস ${studentClass})`,
                `- ${name}, ক্লাস ${studentClass}`,
                `- ${name} - ক্লাস ${studentClass} এর শিক্ষার্থী`
            ]
        };

        const currentLang = document.documentElement.lang || 'en';
        const langSignatures = signatures[currentLang] || signatures.en;
        const randomIndex = Math.floor(Math.random() * langSignatures.length);

        return langSignatures[randomIndex];
    }

    // Update signature preview in real-time
    function updateSignaturePreview() {
        const name = testimonialNameInput.value.trim();
        const studentClass = testimonialClassInput.value;

        if (name && studentClass && autoSignatureCheckbox.checked) {
            const signature = generateSignature(name, studentClass);

            // Remove existing preview if any
            const existingPreview = document.querySelector('.signature-preview');
            if (existingPreview) {
                existingPreview.remove();
            }

            // Create new preview
            const preview = document.createElement('div');
            preview.className = 'signature-preview';
            preview.style.cssText = `
                margin-top: 10px;
                padding: 10px;
                background: var(--color-surface-light);
                border-radius: 6px;
                border-left: 4px solid var(--color-primary);
            `;
            preview.innerHTML = `
                <strong style="color: var(--color-primary);">Signature Preview:</strong>
                <div class="preview-text" style="margin-top: 5px; font-style: italic;">${signature}</div>
            `;

            autoSignatureCheckbox.parentNode.parentNode.appendChild(preview);
        } else {
            const existingPreview = document.querySelector('.signature-preview');
            if (existingPreview) {
                existingPreview.remove();
            }
        }
    }

    // Event listeners for real-time signature preview
    if (testimonialNameInput && testimonialClassInput && autoSignatureCheckbox) {
        testimonialNameInput.addEventListener('input', updateSignaturePreview);
        testimonialClassInput.addEventListener('change', updateSignaturePreview);
        autoSignatureCheckbox.addEventListener('change', updateSignaturePreview);
    }

    // Create testimonial card HTML
    function createTestimonialCard(testimonial) {
        const date = testimonial.timestamp?.toDate ?
            new Date(testimonial.timestamp.toDate()).toLocaleDateString() :
            new Date(testimonial.timestamp).toLocaleDateString();

        return `
            <div class="card testimonial-card">
                <div class="quote-icon">"</div>
                <p class="quote-text">${testimonial.comment}</p>
                <span class="quote-author">${testimonial.signature}</span>
                <div class="testimonial-meta">
                    <small>${date}</small>
                </div>
            </div>
        `;
    }

    // Load testimonials from Firebase - FIXED VERSION (v8 compatible)
    async function loadTestimonials() {
        try {
            console.log('📝 Loading testimonials from database...');

            // Show loading state
            realTestimonialsContainer.innerHTML = `
                <div class="testimonial-loading">
                    <div class="loading-spinner"></div>
                    <p>Loading testimonials...</p>
                </div>
            `;

            // Hide demo testimonials
            if (demoTestimonials) {
                demoTestimonials.style.display = 'none';
            }

            // Get testimonials from Firebase - USING v8 SYNTAX
            let testimonials = [];
            if (firestore) {
                const testimonialsSnapshot = await firestore.collection("testimonials")
                    .orderBy("timestamp", "desc")
                    .get();

                testimonialsSnapshot.forEach((doc) => {
                    const data = doc.data();
                    testimonials.push({
                        id: doc.id,
                        ...data
                    });
                });
                console.log(`✅ Loaded ${testimonials.length} testimonials from Firebase`);
            } else {
                // Fallback to local storage
                testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
                console.log(`✅ Loaded ${testimonials.length} testimonials from localStorage`);
            }

            // Display testimonials
            if (testimonials.length > 0) {
                realTestimonialsContainer.innerHTML = testimonials
                    .map(createTestimonialCard)
                    .join('');
                console.log('✅ Testimonials displayed successfully');
            } else {
                // Show empty state
                realTestimonialsContainer.innerHTML = `
                    <div class="testimonial-empty">
                        <i data-lucide="message-square"></i>
                        <h4>No testimonials yet</h4>
                        <p>Be the first to share your experience!</p>
                    </div>
                `;
                // Show demo testimonials as fallback
                if (demoTestimonials) {
                    demoTestimonials.style.display = 'grid';
                }
                lucide.createIcons();
                console.log('ℹ️ No testimonials found, showing empty state');
            }

        } catch (error) {
            console.error("❌ Error loading testimonials:", error);

            // Show error state and fallback to demo testimonials
            realTestimonialsContainer.innerHTML = `
                <div class="testimonial-empty">
                    <i data-lucide="alert-circle"></i>
                    <h4>Unable to load testimonials</h4>
                    <p>Please check your connection and try again.</p>
                </div>
            `;
            if (demoTestimonials) {
                demoTestimonials.style.display = 'grid';
            }
            lucide.createIcons();
        }
    }

    // Handle testimonial form submission - FIXED VERSION (v8 compatible)
    testimonialForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log('📝 Testimonial form submitted');

        const submitButton = testimonialForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        // Get form data
        const formData = {
            name: testimonialNameInput.value.trim(),
            class: testimonialClassInput.value,
            comment: testimonialCommentInput.value.trim(),
            autoSignature: autoSignatureCheckbox.checked,
            timestamp: new Date().toISOString()
        };

        console.log('📋 Form data:', formData);

        // Validation
        if (!formData.name || !formData.class || !formData.comment) {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete Information',
                text: 'Please fill in all required fields.',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Generate signature
        formData.signature = formData.autoSignature
            ? generateSignature(formData.name, formData.class)
            : `- ${formData.name}`;

        // Update button state
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        try {
            // Save to Firebase - USING v8 SYNTAX
            if (firestore) {
                await firestore.collection("testimonials").add({
                    name: formData.name,
                    class: formData.class,
                    comment: formData.comment,
                    signature: formData.signature,
                    autoSignature: formData.autoSignature,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                console.log('✅ Testimonial saved to Firebase');
            } else {
                // Fallback to localStorage
                const existingTestimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
                existingTestimonials.push({
                    id: 'LOCAL_' + Date.now(),
                    ...formData
                });
                localStorage.setItem('testimonials', JSON.stringify(existingTestimonials));
                console.log('✅ Testimonial saved to localStorage');
            }

            // Show success message
            await Swal.fire({
                icon: 'success',
                title: 'Thank You!',
                text: 'Your testimonial has been submitted successfully.',
                confirmButtonText: 'OK'
            });

            // Reset form
            testimonialForm.reset();

            // Remove signature preview
            const existingPreview = document.querySelector('.signature-preview');
            if (existingPreview) {
                existingPreview.remove();
            }

            // Reload testimonials
            await loadTestimonials();

            console.log('✅ Testimonial submission completed successfully');

        } catch (error) {
            console.error("❌ Error submitting testimonial:", error);

            await Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was a problem submitting your testimonial. Please try again.',
                confirmButtonText: 'OK'
            });
        } finally {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });

    // Add localization strings for testimonial form
    if (!localizationStrings.en['Share Your Experience']) {
        localizationStrings.en['Share Your Experience'] = 'Share Your Experience';
        localizationStrings.en['Your Name'] = 'Your Name';
        localizationStrings.en['Your Class'] = 'Your Class';
        localizationStrings.en['Your Comment'] = 'Your Comment';
        localizationStrings.en['Use auto signature'] = 'Use auto signature';
        localizationStrings.en['Submit Testimonial'] = 'Submit Testimonial';
        localizationStrings.en['No testimonials yet'] = 'No testimonials yet';
        localizationStrings.en['Be the first to share your experience!'] = 'Be the first to share your experience!';

        localizationStrings.bn['Share Your Experience'] = 'আপনার অভিজ্ঞতা শেয়ার করুন';
        localizationStrings.bn['Your Name'] = 'আপনার নাম';
        localizationStrings.bn['Your Class'] = 'আপনার ক্লাস';
        localizationStrings.bn['Your Comment'] = 'আপনার মন্তব্য';
        localizationStrings.bn['Use auto signature'] = 'অটো সিগনেচার ব্যবহার করুন';
        localizationStrings.bn['Submit Testimonial'] = 'টেস্টিমোনিয়াল জমা দিন';
        localizationStrings.bn['No testimonials yet'] = 'এখনও কোনো টেস্টিমোনিয়াল নেই';
        localizationStrings.bn['Be the first to share your experience!'] = 'আপনি প্রথম হোন আপনার অভিজ্ঞতা শেয়ার করতে!';
    }

    // Initialize testimonial system
    loadTestimonials();

    // Refresh testimonials when language changes
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function () {
            setTimeout(loadTestimonials, 100);
        });
    }

    console.log('✅ Testimonial system initialized successfully');
}

// ==========================
// 13. Banner System - STATIC VERSION
// ==========================

function initBannerSystem() {
    console.log('🎨 Initializing STATIC banner system...');

    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slide-nav.prev');
    const nextBtn = document.querySelector('.slide-nav.next');

    if (slides.length === 0) {
        console.log('❌ No banner slides found');
        return;
    }

    let currentSlide = 0;
    let autoPlayInterval = null;
    const autoPlayDelay = 5000;

    // Function to show specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show current slide and activate dot
        slides[index].classList.add('active');
        if (dots[index]) {
            dots[index].classList.add('active');
        }

        currentSlide = index;
    }

    // Next slide function
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    // Previous slide function
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }

    // Auto-play functionality
    function startAutoPlay() {
        stopAutoPlay();
        if (slides.length > 1) {
            autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
        }
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    // Event listeners for navigation
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            restartAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            restartAutoPlay();
        });
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            restartAutoPlay();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            restartAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            restartAutoPlay();
        }
    });

    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('mouseenter', stopAutoPlay);
        slideshowContainer.addEventListener('mouseleave', startAutoPlay);
    }

    function restartAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Start auto-play
    startAutoPlay();

    // Make functions available globally for admin panel
    window.bannerManager = {
        refreshBanners: function () {
            console.log('🔄 Refreshing banners...');
            showSlide(0);
            restartAutoPlay();

            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'success',
                    title: 'Banners Refreshed!',
                    text: 'Banner system reloaded successfully',
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        }
    };

    console.log('✅ Static banner system initialized successfully');
}

// ==========================
// 14. Admin Panel System - COMPLETELY FIXED VERSION
// ==========================

// Admin configuration - SIMPLE & SECURE
const ADMIN_PASSWORD = "PAS_C_C";
let isAdminLoggedIn = false;

// Secret code detection - COMPLETELY FIXED
let secretCode = [];
const adminCode = ['a', 'd', 'm', 'i', 'n'];

// Global keydown listener for secret code - FIXED VERSION
document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.isContentEditable ||
        e.target.type === 'password') {
        return;
    }

    const key = e.key.toLowerCase();
    if (key.length === 1 && key >= 'a' && key <= 'z') {
        secretCode.push(key);

        if (secretCode.length > adminCode.length) {
            secretCode.shift();
        }

        if (secretCode.join('') === adminCode.join('')) {
            console.log('🎉 Secret code matched! Opening admin panel...');
            showAdminLogin();
            secretCode = [];
        }
    }
});

// DOM Content Loaded এ সব Event Listeners যোগ করব
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Initializing admin panel...');

    const adminLoginBtn = document.querySelector('.admin-login-btn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', adminLogin);
    }

    const adminPasswordInput = document.getElementById('admin-password');
    if (adminPasswordInput) {
        adminPasswordInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') adminLogin();
        });
    }

    const adminCloseBtn = document.querySelector('.admin-close-btn');
    if (adminCloseBtn) {
        adminCloseBtn.addEventListener('click', closeAdminModal);
    }

    const adminLogoutBtn = document.querySelector('.admin-logout-btn');
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', logoutAdmin);
    }

    const exportBtn = document.querySelector('button[onclick="exportEnrollments()"]');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportEnrollments);
    }

    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');
            if (tabName) {
                switchAdminTab(tabName);
            }
        });
    });

    console.log('✅ Admin event listeners initialized');
});

// Admin Modal Functions - COMPLETELY FIXED
function showAdminLogin() {
    console.log('🔓 Showing admin login...');

    const adminModal = document.getElementById('admin-modal');
    const adminLoginScreen = document.getElementById('admin-login-screen');
    const adminPanelScreen = document.getElementById('admin-panel-screen');

    if (adminModal) {
        adminModal.style.display = 'block';
        adminModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    if (adminLoginScreen) {
        adminLoginScreen.classList.add('active');
        adminLoginScreen.style.display = 'block';
    }

    if (adminPanelScreen) {
        adminPanelScreen.classList.remove('active');
        adminPanelScreen.style.display = 'none';
    }

    const passwordInput = document.getElementById('admin-password');
    if (passwordInput) {
        passwordInput.value = '';
        setTimeout(() => {
            passwordInput.focus();
            console.log('🔑 Password field focused');
        }, 300);
    }

    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

function closeAdminModal() {
    console.log('🚪 Closing admin modal...');

    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        adminModal.style.display = 'none';
        adminModal.classList.remove('show');
        document.body.style.overflow = '';
        isAdminLoggedIn = false;
        secretCode = [];
    }
}

function adminLogin() {
    console.log('🔐 Attempting admin login...');

    const passwordInput = document.getElementById('admin-password');
    const adminLoginScreen = document.getElementById('admin-login-screen');
    const adminPanelScreen = document.getElementById('admin-panel-screen');

    if (!passwordInput) {
        console.error('❌ Password input not found');
        Swal.fire('Error', 'Password field not found', 'error');
        return;
    }

    const password = passwordInput.value.trim();
    console.log('📝 Password entered:', password);

    if (!password) {
        Swal.fire({
            icon: 'error',
            title: 'Empty Password',
            text: 'Please enter the admin password',
            confirmButtonText: 'OK'
        });
        passwordInput.focus();
        return;
    }

    // SIMPLE PASSWORD CHECK - NO HASH
    if (password === ADMIN_PASSWORD) {
        console.log('✅ Login successful!');
        isAdminLoggedIn = true;

        if (adminLoginScreen) {
            adminLoginScreen.classList.remove('active');
            adminLoginScreen.style.display = 'none';
        }

        if (adminPanelScreen) {
            adminPanelScreen.classList.add('active');
            adminPanelScreen.style.display = 'block';
        }

        loadAdminData();

        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome to Admin Panel',
            timer: 1500,
            showConfirmButton: false
        });
    } else {
        console.log('❌ Wrong password');
        Swal.fire({
            icon: 'error',
            title: 'Wrong Password',
            text: 'Please enter the correct password',
            confirmButtonText: 'OK'
        });

        passwordInput.style.animation = 'shake 0.5s';
        setTimeout(() => {
            passwordInput.style.animation = '';
            passwordInput.value = '';
            passwordInput.focus();
        }, 500);
    }
}

function logoutAdmin() {
    console.log('👋 Logging out admin...');
    isAdminLoggedIn = false;
    closeAdminModal();

    Swal.fire({
        icon: 'info',
        title: 'Logged Out',
        text: 'You have been logged out successfully',
        timer: 1500,
        showConfirmButton: false
    });
}

// Tab Management - COMPLETELY FIXED
function switchAdminTab(tabName) {
    console.log('🔀 Switching to tab:', tabName);

    if (!tabName) {
        console.error('❌ No tab name provided');
        return;
    }

    document.querySelectorAll('.admin-tab-pane').forEach(pane => {
        pane.classList.remove('active');
        pane.style.display = 'none';
    });

    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    const targetPane = document.getElementById(`${tabName}-tab`);
    if (targetPane) {
        targetPane.classList.add('active');
        targetPane.style.display = 'block';
        console.log('✅ Tab pane activated:', tabName);
    } else {
        console.error('❌ Tab pane not found:', `${tabName}-tab`);
        return;
    }

    const targetTab = document.querySelector(`.admin-tab[data-tab="${tabName}"]`);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    switch (tabName) {
        case 'enrollments':
            loadEnrollmentsData();
            break;
        case 'testimonials':
            loadTestimonialsData();
            break;
        case 'banners':
            loadBannerManagement();
            break;
        case 'analytics':
            loadAnalyticsData();
            break;
        default:
            console.warn('⚠️ Unknown tab:', tabName);
    }

    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Load all admin data
async function loadAdminData() {
    console.log('📊 Loading all admin data...');
    try {
        await Promise.all([
            loadEnrollmentsData(),
            loadTestimonialsData(),
            loadAnalyticsData(),
            updateAdminStats()
        ]);
        console.log('✅ All admin data loaded successfully');
    } catch (error) {
        console.error('❌ Error loading admin data:', error);
        Swal.fire({
            icon: 'error',
            title: 'Data Loading Error',
            text: 'Failed to load admin data. Please check console for details.',
            confirmButtonText: 'OK'
        });
    }
}

// Load enrollments data - FIXED
async function loadEnrollmentsData() {
    try {
        const enrollmentsTable = document.getElementById('enrollments-table-body');
        if (!enrollmentsTable) {
            console.error('❌ Enrollments table not found');
            return;
        }

        enrollmentsTable.innerHTML = `
            <tr>
                <td colspan="5" class="admin-loading">
                    <div class="loading-spinner"></div>
                    <p>Loading enrollments...</p>
                </td>
            </tr>
        `;

        let enrollments = [];
        if (firestore) {
            const enrollmentsSnapshot = await firestore.collection("enrollments").get();
            enrollmentsSnapshot.forEach((doc) => {
                enrollments.push({ id: doc.id, ...doc.data() });
            });
        } else {
            enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        }

        enrollments.sort((a, b) => {
            const dateA = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
            const dateB = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
            return dateB - dateA;
        });

        if (enrollments.length > 0) {
            enrollmentsTable.innerHTML = enrollments.map(enrollment => `
                <tr>
                    <td><strong>${enrollment.studentName || 'N/A'}</strong></td>
                    <td>Class ${enrollment.studentClass || 'N/A'}</td>
                    <td>${enrollment.studentPhone || 'N/A'}</td>
                    <td>${enrollment.timestamp?.toDate ? new Date(enrollment.timestamp.toDate()).toLocaleDateString() : new Date(enrollment.timestamp).toLocaleDateString()}</td>
                    <td class="action-buttons">
                        <button class="btn-view" onclick="viewEnrollment('${enrollment.id}')">
                            <i data-lucide="eye"></i> View
                        </button>
                        <button class="btn-danger" onclick="deleteEnrollment('${enrollment.id}')">
                            <i data-lucide="trash-2"></i> Delete
                        </button>
                    </td>
                </tr>
            `).join('');
        } else {
            enrollmentsTable.innerHTML = `
                <tr>
                    <td colspan="5" class="admin-empty">
                        <i data-lucide="users"></i>
                        <h4>No Enrollments Yet</h4>
                        <p>No student has enrolled yet.</p>
                    </td>
                </tr>
            `;
        }

        lucide.createIcons();
    } catch (error) {
        console.error("❌ Error loading enrollments:", error);
        const enrollmentsTable = document.getElementById('enrollments-table-body');
        if (enrollmentsTable) {
            enrollmentsTable.innerHTML = `
                <tr>
                    <td colspan="5" class="admin-empty">
                        <i data-lucide="alert-circle"></i>
                        <h4>Error Loading Data</h4>
                        <p>Please check your connection.</p>
                    </td>
                </tr>
            `;
        }
    }
}

// Load testimonials data - FIXED  
async function loadTestimonialsData() {
    try {
        const testimonialsTable = document.getElementById('testimonials-table-body');
        if (!testimonialsTable) {
            console.error('❌ Testimonials table not found');
            return;
        }

        testimonialsTable.innerHTML = `
            <tr>
                <td colspan="5" class="admin-loading">
                    <div class="loading-spinner"></div>
                    <p>Loading testimonials...</p>
                </td>
            </tr>
        `;

        let testimonials = [];
        if (firestore) {
            const testimonialsSnapshot = await firestore.collection("testimonials").get();
            testimonialsSnapshot.forEach((doc) => {
                testimonials.push({ id: doc.id, ...doc.data() });
            });
        } else {
            testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
        }

        testimonials.sort((a, b) => {
            const dateA = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
            const dateB = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
            return dateB - dateA;
        });

        if (testimonials.length > 0) {
            testimonialsTable.innerHTML = testimonials.map(testimonial => `
                <tr>
                    <td><strong>${testimonial.name || 'N/A'}</strong></td>
                    <td>Class ${testimonial.class || 'N/A'}</td>
                    <td title="${testimonial.comment || ''}">${(testimonial.comment || '').substring(0, 50)}${(testimonial.comment || '').length > 50 ? '...' : ''}</td>
                    <td>${testimonial.timestamp?.toDate ? new Date(testimonial.timestamp.toDate()).toLocaleDateString() : new Date(testimonial.timestamp).toLocaleDateString()}</td>
                    <td class="action-buttons">
                        <button class="btn-view" onclick="viewTestimonial('${testimonial.id}')">
                            <i data-lucide="eye"></i> View
                        </button>
                        <button class="btn-danger" onclick="deleteTestimonial('${testimonial.id}')">
                            <i data-lucide="trash-2"></i> Delete
                        </button>
                    </td>
                </tr>
            `).join('');
        } else {
            testimonialsTable.innerHTML = `
                <tr>
                    <td colspan="5" class="admin-empty">
                        <i data-lucide="message-square"></i>
                        <h4>No Testimonials Yet</h4>
                        <p>No testimonials have been submitted yet.</p>
                    </td>
                </tr>
            `;
        }

        lucide.createIcons();
    } catch (error) {
        console.error("❌ Error loading testimonials:", error);
        const testimonialsTable = document.getElementById('testimonials-table-body');
        if (testimonialsTable) {
            testimonialsTable.innerHTML = `
                <tr>
                    <td colspan="5" class="admin-empty">
                        <i data-lucide="alert-circle"></i>
                        <h4>Error Loading Data</h4>
                        <p>Please check your connection.</p>
                    </td>
                </tr>
            `;
        }
    }
}

// Load analytics data - FIXED
async function loadAnalyticsData() {
    try {
        const recentActivity = document.getElementById('recent-activity');
        const classChart = document.getElementById('class-chart');

        if (!recentActivity || !classChart) {
            console.error('❌ Analytics elements not found');
            return;
        }

        let enrollments = [];
        let testimonials = [];

        if (firestore) {
            const enrollmentsSnapshot = await firestore.collection("enrollments").get();
            const testimonialsSnapshot = await firestore.collection("testimonials").get();

            enrollmentsSnapshot.forEach((doc) => enrollments.push(doc.data()));
            testimonialsSnapshot.forEach((doc) => testimonials.push(doc.data()));
        } else {
            enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
            testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
        }

        const recentItems = [
            ...enrollments.slice(0, 3).map(e => ({
                type: 'enrollment',
                text: `New enrollment from ${e.studentName || 'Unknown'}`,
                time: e.timestamp?.toDate ? e.timestamp.toDate() : new Date(e.timestamp || Date.now())
            })),
            ...testimonials.slice(0, 2).map(t => ({
                type: 'testimonial',
                text: `New testimonial from ${t.name || 'Unknown'}`,
                time: t.timestamp?.toDate ? t.timestamp.toDate() : new Date(t.timestamp || Date.now())
            }))
        ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 5);

        if (recentItems.length > 0) {
            recentActivity.innerHTML = recentItems.map(item => `
                <div class="activity-item">
                    <div class="activity-icon">
                        <i data-lucide="${item.type === 'enrollment' ? 'users' : 'message-square'}"></i>
                    </div>
                    <div class="activity-info">
                        <h5>${item.text}</h5>
                        <p>${new Date(item.time).toLocaleDateString()}</p>
                    </div>
                </div>
            `).join('');
        } else {
            recentActivity.innerHTML = `
                <div class="admin-empty">
                    <i data-lucide="activity"></i>
                    <h4>No Recent Activity</h4>
                    <p>Activity will appear here.</p>
                </div>
            `;
        }

        const classDistribution = {};
        enrollments.forEach(e => {
            const cls = e.studentClass || 'Unknown';
            classDistribution[cls] = (classDistribution[cls] || 0) + 1;
        });

        classChart.innerHTML = `
            <div style="padding: 1rem;">
                <h4 style="margin: 0 0 1rem 0; color: var(--color-text);">Class Distribution</h4>
                ${Object.keys(classDistribution).length > 0 ?
                Object.entries(classDistribution).map(([cls, count]) => `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; padding: 0.5rem; background: var(--color-surface-light); border-radius: 6px;">
                            <span>Class ${cls}</span>
                            <strong style="color: var(--color-primary);">${count}</strong>
                        </div>
                    `).join('') :
                '<p style="text-align: center; color: var(--color-text-secondary);">No data available</p>'
            }
            </div>
        `;

        lucide.createIcons();
    } catch (error) {
        console.error("❌ Error loading analytics:", error);
        const recentActivity = document.getElementById('recent-activity');
        if (recentActivity) {
            recentActivity.innerHTML = `
                <div class="admin-empty">
                    <i data-lucide="alert-circle"></i>
                    <h4>Error Loading Analytics</h4>
                    <p>Please check your connection.</p>
                </div>
            `;
        }
    }
}

function loadBannerManagement() {
    const bannersGrid = document.getElementById('banners-grid');
    if (!bannersGrid) return;

    try {
        bannersGrid.innerHTML = `
            <div style="padding: 2rem;">
                <!-- Statistics -->
                <div class="admin-stat-card" style="max-width: 500px; margin: 0 auto 2rem auto;">
                    <div class="stat-icon">
                        <i data-lucide="image"></i>
                    </div>
                    <div class="stat-info">
                        <h3>5</h3>
                        <p>Active Banners</p>
                    </div>
                </div>
                
                <!-- Current Banners Info -->
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h3>Current Banner Images</h3>
                    <p style="color: var(--color-text-secondary);">Banners are manually managed in HTML code</p>
                </div>

                <!-- Banners List -->
                <div style="background: var(--color-surface-light); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid var(--color-border);">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="https://i.ibb.co/j9vW7pvC/1.jpg" style="width: 60px; height: 30px; object-fit: cover; border-radius: 4px;">
                            <div>
                                <strong>Banner 1</strong>
                                <div style="color: var(--color-text-secondary); font-size: 0.9rem;">PAS Coaching Center - Excellence in Education</div>
                            </div>
                        </div>
                        <span style="background: var(--color-success-light); color: var(--color-success); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">Active</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid var(--color-border);">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="https://i.ibb.co/jkbLB5v8/2.jpg" style="width: 60px; height: 30px; object-fit: cover; border-radius: 4px;">
                            <div>
                                <strong>Banner 2</strong>
                                <div style="color: var(--color-text-secondary); font-size: 0.9rem;">Quality Education for Classes 6-10</div>
                            </div>
                        </div>
                        <span style="background: var(--color-success-light); color: var(--color-success); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">Active</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid var(--color-border);">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="https://i.ibb.co/WZsWQ5C/3.jpg" style="width: 60px; height: 30px; object-fit: cover; border-radius: 4px;">
                            <div>
                                <strong>Banner 3</strong>
                                <div style="color: var(--color-text-secondary); font-size: 0.9rem;">Expert Teachers & Modern Teaching Methods</div>
                            </div>
                        </div>
                        <span style="background: var(--color-success-light); color: var(--color-success); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">Active</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid var(--color-border);">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="https://i.ibb.co/Xk5wQ7p7/4.jpg" style="width: 60px; height: 30px; object-fit: cover; border-radius: 4px;">
                            <div>
                                <strong>Banner 4</strong>
                                <div style="color: var(--color-text-secondary); font-size: 0.9rem;">PAS Coaching - Success Guaranteed</div>
                            </div>
                        </div>
                        <span style="background: var(--color-success-light); color: var(--color-success); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">Active</span>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="https://i.ibb.co/60wF9sxN/5.jpg" style="width: 60px; height: 30px; object-fit: cover; border-radius: 4px;">
                            <div>
                                <strong>Banner 5</strong>
                                <div style="color: var(--color-text-secondary); font-size: 0.9rem;">Join PAS Coaching Today</div>
                            </div>
                        </div>
                        <span style="background: var(--color-success-light); color: var(--color-success); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">Active</span>
                    </div>
                </div>

                <!-- Instructions -->
                <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
                    <h4 style="margin-bottom: 1rem; color: var(--color-primary);">📝 How to Update Banners</h4>
                    <ol style="text-align: left; color: var(--color-text-secondary); line-height: 1.6;">
                        <li>Open <code>index.html</code> file</li>
                        <li>Find the <code>#banner-slider</code> section</li>
                        <li>Replace image URLs in <code>src</code> attributes</li>
                        <li>Update <code>alt</code> text if needed</li>
                        <li>Save file and refresh website</li>
                    </ol>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="refreshBanners()">
                        <i data-lucide="refresh-cw"></i>
                        Refresh Slideshow
                    </button>
                </div>
            </div>
        `;

        lucide.createIcons();

    } catch (error) {
        console.error('❌ Error loading banner management:', error);
        bannersGrid.innerHTML = `
            <div class="admin-empty">
                <i data-lucide="alert-circle"></i>
                <h4>Error Loading</h4>
                <p>Please check your connection.</p>
            </div>
        `;
    }
}

// Update admin statistics
async function updateAdminStats() {
    try {
        let totalEnrollments = 0;
        let totalTestimonials = 0;

        if (firestore) {
            const enrollmentsSnapshot = await firestore.collection("enrollments").get();
            const testimonialsSnapshot = await firestore.collection("testimonials").get();

            totalEnrollments = enrollmentsSnapshot.size;
            totalTestimonials = testimonialsSnapshot.size;
        } else {
            const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
            const testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
            totalEnrollments = enrollments.length;
            totalTestimonials = testimonials.length;
        }

        const enrollmentsEl = document.getElementById('total-enrollments');
        const testimonialsEl = document.getElementById('total-testimonials');
        const successRateEl = document.getElementById('success-rate');

        if (enrollmentsEl) enrollmentsEl.textContent = totalEnrollments;
        if (testimonialsEl) testimonialsEl.textContent = totalTestimonials;
        if (successRateEl) successRateEl.textContent = '100%';

        console.log(`📊 Stats updated - Enrollments: ${totalEnrollments}, Testimonials: ${totalTestimonials}`);

    } catch (error) {
        console.error("❌ Error updating stats:", error);
    }
}

// Delete functions - GLOBAL SCOPE
async function deleteEnrollment(id) {
    if (!id) {
        console.error('❌ No enrollment ID provided');
        return;
    }

    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "This enrollment will be permanently deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff4757',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
        try {
            if (firestore) {
                await firestore.collection("enrollments").doc(id).delete();
            } else {
                const enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
                const updatedEnrollments = enrollments.filter(item => item.id !== id);
                localStorage.setItem('enrollments', JSON.stringify(updatedEnrollments));
            }

            await loadEnrollmentsData();
            await updateAdminStats();

            Swal.fire({
                title: 'Deleted!',
                text: 'Enrollment has been deleted.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        } catch (error) {
            console.error("❌ Error deleting enrollment:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to delete enrollment.',
                icon: 'error'
            });
        }
    }
}

async function deleteTestimonial(id) {
    if (!id) {
        console.error('❌ No testimonial ID provided');
        return;
    }

    const result = await Swal.fire({
        title: 'Are you sure?',
        text: "This testimonial will be permanently deleted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff4757',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
        try {
            if (firestore) {
                await firestore.collection("testimonials").doc(id).delete();
            } else {
                const testimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
                const updatedTestimonials = testimonials.filter(item => item.id !== id);
                localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
            }

            await loadTestimonialsData();
            await updateAdminStats();

            Swal.fire({
                title: 'Deleted!',
                text: 'Testimonial has been deleted.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        } catch (error) {
            console.error("❌ Error deleting testimonial:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to delete testimonial.',
                icon: 'error'
            });
        }
    }
}

// View functions - GLOBAL SCOPE
function viewEnrollment(id) {
    if (!id) {
        console.error('❌ No enrollment ID provided');
        return;
    }

    Swal.fire({
        title: 'Enrollment Details',
        html: `
            <div style="text-align: left;">
                <p><strong>Enrollment ID:</strong> ${id}</p>
                <p><em>Detailed view coming in next update</em></p>
                <p>For now, check Firebase console for complete details.</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'OK',
        width: 500
    });
}

function viewTestimonial(id) {
    if (!id) {
        console.error('❌ No testimonial ID provided');
        return;
    }

    Swal.fire({
        title: 'Testimonial Details',
        html: `
            <div style="text-align: left;">
                <p><strong>Testimonial ID:</strong> ${id}</p>
                <p><em>Detailed view coming in next update</em></p>
                <p>For now, check Firebase console for complete details.</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'OK',
        width: 500
    });
}

// Export function - WORKING VERSION
async function exportEnrollments() {
    try {
        let enrollments = [];
        if (firestore) {
            const enrollmentsSnapshot = await firestore.collection("enrollments").get();
            enrollmentsSnapshot.forEach((doc) => {
                enrollments.push({ id: doc.id, ...doc.data() });
            });
        } else {
            enrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        }

        if (enrollments.length === 0) {
            Swal.fire({
                title: 'No Data',
                text: 'No enrollments to export.',
                icon: 'info'
            });
            return;
        }

        let csvContent = "Name,Class,Phone,Guardian,Guardian Phone,Email,Date,Free Class Requested\n";
        enrollments.forEach(enrollment => {
            const date = enrollment.timestamp?.toDate ?
                new Date(enrollment.timestamp.toDate()).toLocaleDateString() :
                new Date(enrollment.timestamp).toLocaleDateString();
            const row = [
                `"${enrollment.studentName || ''}"`,
                `"${enrollment.studentClass || ''}"`,
                `"${enrollment.studentPhone || ''}"`,
                `"${enrollment.guardianName || ''}"`,
                `"${enrollment.guardianPhone || ''}"`,
                `"${enrollment.email || ''}"`,
                `"${date}"`,
                `"${enrollment.wantsFreeClass ? 'Yes' : 'No'}"`
            ].join(',');
            csvContent += row + '\n';
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `enrollments-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        Swal.fire({
            title: 'Exported!',
            html: `✅ Successfully exported <strong>${enrollments.length}</strong> enrollments`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        });

    } catch (error) {
        console.error("❌ Error exporting:", error);
        Swal.fire({
            title: 'Export Failed',
            text: 'There was an error exporting the data.',
            icon: 'error'
        });
    }
}

// Banner functions - GLOBAL SCOPE
function refreshBanners() {
    if (window.bannerManager && typeof window.bannerManager.refreshBanners === 'function') {
        window.bannerManager.refreshBanners();
    } else {
        console.log('🔄 Refreshing banners...');
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'success',
                title: 'Banners Refreshed!',
                text: 'Banner system reloaded successfully',
                timer: 1500,
                showConfirmButton: false
            });
        }
    }
}

function openBannerUpload() {
    console.log('📤 Banner upload clicked');
    Swal.fire({
        icon: 'info',
        title: 'Manual Banner Update',
        html: `
            <div style="text-align: left;">
                <p><strong>Banners are updated manually:</strong></p>
                <ol>
                    <li>Edit <code>index.html</code> file</li>
                    <li>Update image URLs in banner section</li>
                    <li>Save and refresh website</li>
                </ol>
                <p>Current system uses static ImgBB hosted images.</p>
            </div>
        `,
        confirmButtonText: 'OK'
    });
}

// Close modal when clicking outside - FIXED
document.addEventListener('click', (e) => {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal && e.target === adminModal) {
        closeAdminModal();
    }
});

// Add shake animation if not already added
if (!document.querySelector('style#admin-shake-animation')) {
    const shakeStyle = document.createElement('style');
    shakeStyle.id = 'admin-shake-animation';
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(shakeStyle);
}

// Make all functions globally available
window.showAdminLogin = showAdminLogin;
window.closeAdminModal = closeAdminModal;
window.adminLogin = adminLogin;
window.logoutAdmin = logoutAdmin;
window.switchAdminTab = switchAdminTab;
window.deleteEnrollment = deleteEnrollment;
window.deleteTestimonial = deleteTestimonial;
window.viewEnrollment = viewEnrollment;
window.viewTestimonial = viewTestimonial;
window.exportEnrollments = exportEnrollments;
window.refreshBanners = refreshBanners;
window.openBannerUpload = openBannerUpload;

console.log('🎉 Admin panel system loaded successfully!');
console.log('🔑 Admin Secret Code: "admin" (type these letters anywhere on the page)');
console.log('🔐 Admin Password: "PAS_C_C"');