/*==================== DYNAMIC CONTENT POPULATION ====================*/
// Listen for portfolio data loaded event
document.addEventListener('portfolioDataLoaded', function(event) {
    const data = event.detail;
    populateContent(data);
});

function populateContent(data) {
    // Populate personal info
    populatePersonalInfo(data.personalInfo);
    
    // Populate social links
    populateSocialLinks(data.socialLinks);
    
    // Populate skills
    populateSkills(data.skills);
    
    // Populate education and work
    populateQualifications(data.education, data.work);
    
    // Populate expertise
    populateExpertise(data.expertise);
    
    // Populate projects
    populateProjects(data.projects);
    
    // Populate contact info
    populateContactInfo(data.personalInfo, data.contactForm);
}

function populatePersonalInfo(info) {
    // Update nav logo
    const navLogo = document.querySelector('.nav__logo');
    if (navLogo) navLogo.textContent = info.name.split(' ')[0] + ' ' + info.name.split(' ')[1];
    
    // Update profile images
    const homeBlobImg = document.querySelector('.home__blob-img');
    const aboutImg = document.querySelector('.about__img');
    
    if (homeBlobImg && info.profileImage) {
        homeBlobImg.setAttribute('xlink:href', info.profileImage);
    }
    if (aboutImg && info.profileImage) {
        aboutImg.setAttribute('src', info.profileImage);
    }
    
    // Update home section
    const homeTitle = document.querySelector('.home__title');
    const homeSubtitle = document.querySelector('.home__subtitle');
    const homeDescription = document.querySelector('.home__description');
    
    if (homeTitle) homeTitle.textContent = `Hello from ${info.name},`;
    if (homeSubtitle) homeSubtitle.textContent = info.title;
    if (homeDescription) homeDescription.textContent = info.description;
    
    // Update about section
    const aboutDescription = document.querySelector('.about__description');
    const aboutInfoTitle = document.querySelector('.about__info-title');
    const cvButton = document.querySelector('.cv-button');
    
    if (aboutDescription) aboutDescription.textContent = info.aboutDescription;
    if (aboutInfoTitle) aboutInfoTitle.textContent = info.completedProjects;
    if (cvButton && info.cv) cvButton.setAttribute('href', info.cv);
    
    // Update footer
    const footerTitle = document.querySelector('.footer__title');
    const footerSubtitle = document.querySelector('.footer__subtitle');
    const footerCopyName = document.querySelector('.footer__copy-name');
    
    if (footerTitle) footerTitle.textContent = info.name.split(' ')[0] + ' ' + info.name.split(' ')[1];
    if (footerSubtitle) footerSubtitle.textContent = info.title;
    if (footerCopyName) footerCopyName.textContent = info.name.split(' ')[0] + ' ' + info.name.split(' ')[1];
}

function populateSocialLinks(links) {
    // Home social links
    const homeSocial = document.querySelector('.home__social');
    if (homeSocial) {
        homeSocial.innerHTML = links.map(link => `
            <a href="${link.url}" target="_blank" class="home__social-icon">
                <i class="${link.icon}"></i>
            </a>
        `).join('');
    }
}

function populateSkills(skills) {
    const skillsContainer = document.querySelector('.skills__container');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = skills.map(category => `
        <div>
            <div class="skills__content skills__open">
                <div class="skills__header">
                    <i class="${category.icon} skills__icon"></i>
                    <div>
                        <h1 class="skills__title">${category.category}</h1>
                        <span class="skills__subtitle">${category.subtitle}</span>
                    </div>
                    <i class="uil uil-angle-down skills__arrow"></i>
                </div>
                <div class="skills__list grid">
                    ${category.items.map(skill => `
                        <div class="skills__data">
                            <div class="skills__titles">
                                <h3 class="skills__name">${skill.name}</h3>
                                <div class="skills__number">${skill.level}%</div>
                            </div>
                            <div class="skills__bar">
                                <div class="skills__percentage" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-attach skill accordion listeners
    initSkillsAccordion();
}

function populateQualifications(education, work) {
    // Populate education
    const educationContent = document.querySelector('#education');
    if (educationContent) {
        educationContent.innerHTML = education.map((item, index) => `
            <div class="qualification__data">
                ${index % 2 === 0 ? `
                    <div>
                        <h3 class="qualification__title">${item.title}</h3>
                        <span class="qualification__subtitle">
                            <a href="${item.institutionUrl}" target="_blank">${item.institution}</a>
                        </span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${item.period}
                        </div>
                    </div>
                    <div>
                        <span class="qualification__rounder"></span>
                        ${index < education.length - 1 ? '<span class="qualification__line"></span>' : ''}
                    </div>
                ` : `
                    <div></div>
                    <div>
                        <span class="qualification__rounder"></span>
                        ${index < education.length - 1 ? '<span class="qualification__line"></span>' : ''}
                    </div>
                    <div>
                        <h3 class="qualification__title">${item.title}</h3>
                        <span class="qualification__subtitle">
                            <a href="${item.institutionUrl}" target="_blank">${item.institution}</a>
                        </span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${item.period}
                        </div>
                    </div>
                `}
            </div>
        `).join('');
    }
    
    // Populate work
    const workContent = document.querySelector('#work');
    if (workContent) {
        workContent.innerHTML = work.map((item, index) => `
            <div class="qualification__data">
                ${index % 2 === 0 ? `
                    <div>
                        <h3 class="qualification__title">${item.title}</h3>
                        <span class="qualification__subtitle">
                            <a href="${item.companyUrl}" target="_blank">${item.company}</a>
                        </span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${item.period}
                        </div>
                    </div>
                    <div>
                        <span class="qualification__rounder"></span>
                        ${index < work.length - 1 ? '<span class="qualification__line"></span>' : ''}
                    </div>
                ` : `
                    <div></div>
                    <div>
                        <span class="qualification__rounder"></span>
                        ${index < work.length - 1 ? '<span class="qualification__line"></span>' : ''}
                    </div>
                    <div>
                        <h3 class="qualification__title">${item.title}</h3>
                        <span class="qualification__subtitle">
                            <a href="${item.companyUrl}" target="_blank">${item.company}</a>
                        </span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${item.period}
                        </div>
                    </div>
                `}
            </div>
        `).join('');
    }
}

function populateExpertise(expertise) {
    const expertiseContainer = document.querySelector('.Expertise__container');
    if (!expertiseContainer) return;
    
    expertiseContainer.innerHTML = expertise.map(item => `
        <div class="Expertise__content">
            <div>
                <i class="${item.icon} Expertise__icon"></i>
                <h3 class="Expertise__title">${item.title}</h3>
                
                <span class="button button--flex button--small button--link Expertise__button">
                    View More
                    <i class="uil uil-arrow-right button__icon"></i>
                </span>
                
                <div class="Expertise__modal">
                    <div class="Expertise__modal-content">
                        <h4 class="Expertise__modal-title">${item.title}</h4>
                        <i class="uil uil-times Expertise__modal-close"></i>
                        
                        <ul class="Expertise__modal-expertise grid">
                            ${item.description.map(desc => `
                                <li class="Expertise__modal-service">
                                    <i class="uil uil-check-circle Expertise__modal-icon"></i>
                                    <p>${desc}</p>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-attach modal listeners
    initExpertiseModals();
}

function populateProjects(projects) {
    const portfolioContainer = document.querySelector('.portfolio__container .swiper-wrapper');
    if (!portfolioContainer) return;
    
    portfolioContainer.innerHTML = projects.map(project => `
        <div class="portfolio__content grid swiper-slide">
            <img src="${project.image}" alt="${project.title}" class="portfolio__img" loading="lazy">
            
            <div class="portfolio__data">
                <h3 class="portfolio__title">${project.title}</h3>
                <p class="portfolio__description">${project.description}</p>
                <a href="${project.url}" class="button button--flex button--small portfolio__button">
                    View
                    <i class="uil uil-arrow-right button__icon"></i>
                </a>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Swiper after content is loaded
    initPortfolioSwiper();
}

function populateContactInfo(info, formConfig) {
    // Update contact information
    const telegramInfo = document.querySelector('.contact__information:nth-child(1) .contact__subtitle');
    const emailInfo = document.querySelector('.contact__information:nth-child(2) .contact__subtitle');
    const locationInfo = document.querySelector('.contact__information:nth-child(3) .contact__subtitle');
    
    if (telegramInfo) telegramInfo.textContent = info.telegram;
    if (emailInfo) emailInfo.textContent = info.email;
    if (locationInfo) locationInfo.textContent = info.location;
    
    // Update form action
    const contactForm = document.querySelector('.contact__form');
    if (contactForm && formConfig.action) {
        contactForm.setAttribute('action', formConfig.action);
    }
}

// Helper function to re-initialize skills accordion
function initSkillsAccordion() {
    const skillsHeader = document.querySelectorAll('.skills__header');
    
    function toggleSkills() {
        if(this.parentNode.classList.contains('skills__open')){
            this.parentNode.classList.remove('skills__open');
            this.parentNode.classList.add('skills__close');
        } else {
            this.parentNode.classList.remove('skills__close');
            this.parentNode.classList.add('skills__open');
        }
    }
    
    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills);
    });
}

// Helper function to re-initialize expertise modals
function initExpertiseModals() {
    const modalViews = document.querySelectorAll('.Expertise__modal');
    const modalBtns = document.querySelectorAll('.Expertise__button');
    const modalCloses = document.querySelectorAll('.Expertise__modal-close');
    
    let modal = function (modalClick){
        modalViews[modalClick].classList.add('active-modal');
    };
    
    modalBtns.forEach((modalBtn, i)=>{
        modalBtn.addEventListener('click', ()=>{
            modal(i);
        })
    });
    
    modalCloses.forEach(modalClose => {
        modalClose.addEventListener('click', () =>{
            modalViews.forEach((modalView) =>{
                modalView.classList.remove('active-modal');
            });
        });
    });
}

/*==================== MENU SHOW Y HIDDEN ====================*/
const  navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    // Toggle between adding and removing the "skills__open" and "skills__close" class
    if(this.parentNode.classList.contains('skills__open')){
        this.parentNode.classList.remove('skills__open');
        this.parentNode.classList.add('skills__close');
    } else {
        this.parentNode.classList.remove('skills__close');
        this.parentNode.classList.add('skills__open');
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

/*==================== Expertise MODAL ====================*/
const modalViews = document.querySelectorAll('.Expertise__modal'),
    modalBtns = document.querySelectorAll('.Expertise__button'),
    modalCloses = document.querySelectorAll('.Expertise__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
});

modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let portfolioSwiper = null;

function initPortfolioSwiper() {
    // Destroy existing instance if it exists
    if (portfolioSwiper) {
        portfolioSwiper.destroy(true, true);
    }
    
    // Create new Swiper instance
    portfolioSwiper = new Swiper(".portfolio__container", {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination-portfolio",
            clickable: true,
        },
    });
}

// Initialize on page load (will be reinitialized after content loads)
initPortfolioSwiper();
/*==================== ARTICLES ====================*/
let swiperarticles = new Swiper(".articles__container", {
    loop: true,
    grapCursor: true,
    spaceBetween: 40,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  });
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', function() {
    const scrollUp = document.getElementById('scroll-up');
    let footer = document.getElementById('footer');
    let rect = footer.getBoundingClientRect(); // Gets the current position of the footer

    // Check if the top of the footer is visible
    if (rect.top <= window.innerHeight) {
        // If the footer is visible, change the button's color
        scrollUp.classList.add("scrollup--footer");
    } else {
        // Otherwise, remove the class
        scrollUp.classList.remove("scrollup--footer");
    }
});

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Google recaptcha
window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }

// validate all field in the contact form
document.getElementById("check").onclick = function() {
    let allAreFilled = true;
    document.getElementById("submit_form").querySelectorAll("[required]").forEach(function(i) {
      if (!allAreFilled) return;
      if (!i.value) { allAreFilled = false;  return; }
    })
    if (!allAreFilled) {
      alert('Fill all the fields');
    }
  };
