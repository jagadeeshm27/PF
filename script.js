// --- SCROLL REVEAL LOGIC ---
const revealItems = () => {
    const items = document.querySelectorAll('.reveal-item');
    items.forEach(el => {
        const speed = 100; // How many pixels from the bottom to trigger
        if (el.getBoundingClientRect().top < window.innerHeight - speed) {
            el.classList.add('active');
        }
    });
};

// --- LANDING BACKGROUND PARALLAX ---
const handleParallax = () => {
    const scroll = window.scrollY;
    const bg = document.getElementById('landingBg');
    const landing = document.getElementById('landingSection');
    
    if (bg) bg.style.opacity = 1 - (scroll / 600);
    if (landing) landing.style.opacity = 1 - (scroll / 400);
};

// --- MODAL SYSTEM (Academic/Experience) ---
function openModal(img, title, inst, desc, learned, skills) {
    document.getElementById('modalImg').src = img + ".jpg";
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalInst').innerText = inst;
    document.getElementById('modalDesc').innerText = desc;
    
    const learnedBox = document.getElementById('modalLearned');
    learnedBox.innerHTML = ''; 
    learned.split(',').forEach(item => {
        if(item.trim() !== "") {
            const li = document.createElement('li');
            li.innerText = item.trim();
            learnedBox.appendChild(li);
        }
    });

    const skillsBox = document.getElementById('modalSkills');
    skillsBox.innerHTML = '';
    skills.split(',').forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.innerText = skill.trim();
        skillsBox.appendChild(span);
    });
    
    document.getElementById('eduModal').style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal() {
    document.getElementById('eduModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// --- TIMELINE SYSTEM (Roadmap) ---
function openTimeline(year, title, sub, desc, skills) {
    document.getElementById('tmYear').innerText = year;
    document.getElementById('tmTitle').innerText = title;
    document.getElementById('tmSub').innerText = sub;
    document.getElementById('tmDesc').innerText = desc;
    
    const skillsBox = document.getElementById('tmSkills');
    skillsBox.innerHTML = '';
    if(skills) {
        skills.split(',').forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.innerText = skill.trim();
            skillsBox.appendChild(span);
        });
    }
    document.getElementById('timelineModal').style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeTimeline() {
    document.getElementById('timelineModal').style.display = "none";
    document.body.style.overflow = "auto";
}

// --- EVENT LISTENERS ---
window.addEventListener('scroll', () => {
    handleParallax();
    revealItems();
});

// Run once on load to show items already in view
window.addEventListener('DOMContentLoaded', revealItems);