document.addEventListener('DOMContentLoaded', function() {
  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
  });

  // Add highlight effect to map container on hover
  const mapContainer = document.querySelector('.map-container');
  mapContainer.addEventListener('mouseenter', function() {
    this.classList.add('highlight');
  });
  
  mapContainer.addEventListener('mouseleave', function() {
    this.classList.remove('highlight');
  });

  // Loading state simulation (remove in production)
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 1500);
});
document.addEventListener('DOMContentLoaded', function() {
  const toolsContainer = document.getElementById('floating-tools');
  const tools = [
    '🔧', // wrench
    '🔨', // hammer
    '🛠️', // hammer and wrench
    '⚙️', // gear
    '🔩', // nut and bolt
    '⛏️', // pick
    '🪛', // screwdriver
    '🧰', // toolbox
    '📐', // triangle ruler
    '🔌'  // plug
  ];

  // Create 10 floating tools
  for (let i = 0; i < 10; i++) {
    const tool = document.createElement('div');
    tool.className = 'tool-icon';
    tool.textContent = tools[Math.floor(Math.random() * tools.length)];
    
    // Random starting position
    const startPosX = Math.random() * 100;
    const animationDuration = 10 + Math.random() * 20;
    const delay = Math.random() * 15;
    
    tool.style.left = `${startPosX}%`;
    tool.style.animationDuration = `${animationDuration}s`;
    tool.style.animationDelay = `${delay}s`;
    
    toolsContainer.appendChild(tool);
  }

  // Make tools interactive on hover
  document.querySelectorAll('.tool-icon').forEach(tool => {
    tool.addEventListener('mouseenter', function() {
      this.style.opacity = '0.5';
      this.style.transform = 'scale(1.2)';
      this.style.transition = 'all 0.3s ease';
    });
    
    tool.addEventListener('mouseleave', function() {
      this.style.opacity = '0.15';
      this.style.transform = 'scale(1)';
    });
  });
});
// In your JavaScript where you create the tools
const colors = ['#f39c12', '#e74c3c', '#2ecc71', '#3498db', '#9b59b6'];
// ...
tool.style.color = colors[Math.floor(Math.random() * colors.length)];
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.classList.add('active');
    }
    
    // Add click effect
    link.addEventListener('click', function() {
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
