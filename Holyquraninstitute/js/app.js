/**
 * Holy Quran Institute — Main Interactive Engine
 * Domain: holyquraninstitute.com
 * WhatsApp: +92 300 4390658
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_PHONE = '923004390658'; // International format without '+' or special characters

  // --- 1. Mobile Navigation Drawer ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // --- 2. Header Scroll Effect ---
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- 3. Active Nav Link Highlighting on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // --- 4. Interactive Course Selection & WhatsApp Routing ---
  const courseSelectInput = document.getElementById('selectedCourse');
  const courseInquiryBtns = document.querySelectorAll('[data-course-inquiry]');

  courseInquiryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseName = btn.getAttribute('data-course-inquiry');

      // Check if user clicked direct WhatsApp or Form Fill
      const isDirectWhatsApp = btn.getAttribute('data-direct-wa') === 'true';

      if (isDirectWhatsApp) {
        const directText = `Assalamu Alaikum Holy Quran Institute!\n\nI would like to inquire about the course: *${courseName}*.\nCould you please share the syllabus details, tutor availability, and fee schedule?\n\nJazakum Allahu Khairan.`;
        openWhatsApp(directText);
      } else {
        // Preselect course in contact form and scroll smoothly
        if (courseSelectInput) {
          courseSelectInput.value = courseName;
        }
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          showToast(`Course "${courseName}" selected in the registration form below.`);
        }
      }
    });
  });

  // --- 5. Fee Plan Selection Buttons ---
  const planInquiryBtns = document.querySelectorAll('[data-plan-inquiry]');
  planInquiryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan-inquiry');
      const planMsg = `Assalamu Alaikum Holy Quran Institute!\n\nI am interested in inquiring about the fee structure for *${planName}*.\nPlease provide the monthly fee details for my country/currency and how to schedule my free trial classes.\n\nJazakum Allahu Khairan.`;
      openWhatsApp(planMsg);
    });
  });

  // --- 6. Contact Form Submission (Direct WhatsApp Dispatcher) ---
  const contactForm = document.getElementById('quranContactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const studentName = document.getElementById('studentName')?.value.trim();
      const country = document.getElementById('studentCountry')?.value.trim();
      const studentAge = document.getElementById('studentAge')?.value;
      const selectedCourse = document.getElementById('selectedCourse')?.value;
      const preferredTime = document.getElementById('preferredTime')?.value.trim();
      const userMessage = document.getElementById('userMessage')?.value.trim();

      if (!studentName || !country || !selectedCourse) {
        showToast('Please fill in all required fields (Name, Country, and Course).');
        return;
      }

      // Build structured, courteous Islamic inquiry message
      let messageLines = [
        `*Assalamu Alaikum Holy Quran Institute!*`,
        ``,
        `I would like to book a *Free Trial Class* and register for online Quran classes:`,
        ``,
        `👤 *Student Name:* ${studentName}`,
        `🌍 *Country / Timezone:* ${country}`,
        `🎂 *Student Age / Category:* ${studentAge || 'Not specified'}`,
        `📖 *Selected Course:* ${selectedCourse}`,
        `⏰ *Preferred Time / Days:* ${preferredTime || 'Flexible / Any suitable slot'}`
      ];

      if (userMessage) {
        messageLines.push(`📝 *Additional Notes:* ${userMessage}`);
      }

      messageLines.push(``);
      messageLines.push(`Please send me the class schedule and Zoom meeting details. Jazakum Allahu Khairan.`);

      const fullMessage = messageLines.join('\n');
      showToast('Opening WhatsApp with your registration details...');
      
      setTimeout(() => {
        openWhatsApp(fullMessage);
      }, 350);
    });
  }

  // --- Helper: Open WhatsApp with URL Encoding ---
  function openWhatsApp(text) {
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  // --- 7. FAQ Accordion Toggle ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isCurrentActive = item.classList.contains('active');
        
        // Close all other open items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });

        // Toggle clicked item
        if (!isCurrentActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // --- 8. Toast Notification Utility ---
  function showToast(message) {
    let toast = document.getElementById('liveToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'liveToast';
      toast.className = 'toast-msg';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
});
