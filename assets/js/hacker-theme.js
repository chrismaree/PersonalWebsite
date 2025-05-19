document.addEventListener('DOMContentLoaded', function() {
  // Add matrix-style typing effect
  const addTypingEffect = () => {
    // Only target the navigation buttons, not social media buttons
    const buttons = document.querySelectorAll('.navigation-buttons .button--sacnite');
    
    buttons.forEach(button => {
      button.addEventListener('mouseover', function() {
        const text = this.textContent;
        this.setAttribute('data-original', text);
        
        // Simulate typing effect
        let index = 0;
        const randomChars = '01>_/\\|-+*=?!@#$%^&(){}[]'.split('');
        let isRunning = true;
        
        const glitchInterval = setInterval(() => {
          if (!isRunning) {
            clearInterval(glitchInterval);
            return;
          }
          
          const chars = text.split('');
          
          // Replace a random character with a random symbol
          const randomIndex = Math.floor(Math.random() * chars.length);
          const randomCharIndex = Math.floor(Math.random() * randomChars.length);
          chars[randomIndex] = randomChars[randomCharIndex];
          
          // Update button text
          this.textContent = chars.join('');
        }, 70);
        
        // Stop the effect after 500ms
        setTimeout(() => {
          isRunning = false;
          this.textContent = text;
        }, 500);
      });
      
      // Make sure text is reset when mouse leaves
      button.addEventListener('mouseout', function() {
        const originalText = this.getAttribute('data-original');
        if (originalText) {
          this.textContent = originalText;
        }
      });
    });
  };
  
  // Create scanline effect
  const createScanline = () => {
    const scanline = document.createElement('div');
    scanline.classList.add('scanline');
    document.body.appendChild(scanline);
  };
  
  // Add glitch effect to headings
  const addHeadingGlitch = () => {
    const headings = document.querySelectorAll('h1, h2');
    
    headings.forEach(heading => {
      heading.classList.add('glitch-text');
    });
  };
  
  // Add enhanced profile image glitch effect
  const addProfileGlitch = () => {
    const profileContainer = document.querySelector('.profile-img-container');
    const profileImg = document.querySelector('.profile-img');
    
    if (profileContainer && profileImg) {
      // Get the background image URL from the profile image
      const computedStyle = window.getComputedStyle(profileImg);
      const bgImage = computedStyle.backgroundImage;
      
      // Set the glitch effect to use the same image
      const glitchEffect = document.querySelector('.profile-glitch-effect');
      if (glitchEffect) {
        glitchEffect.style.backgroundImage = bgImage;
      }
      
      // Add additional data noise effect on hover
      profileContainer.addEventListener('mouseenter', () => {
        // Create random static noise in the image
        const noise = document.createElement('div');
        noise.classList.add('profile-noise');
        noise.style.position = 'absolute';
        noise.style.top = '0';
        noise.style.left = '0';
        noise.style.width = '100%';
        noise.style.height = '100%';
        noise.style.borderRadius = '130px';
        noise.style.backgroundColor = 'transparent';
        noise.style.zIndex = '3';
        noise.style.mixBlendMode = 'overlay';
        noise.style.pointerEvents = 'none';
        
        // Generate digital noise pattern
        noise.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")';
        noise.style.opacity = '0.3';
        noise.style.animation = 'noise-animation 0.2s linear infinite';
        
        profileContainer.appendChild(noise);
      });
      
      profileContainer.addEventListener('mouseleave', () => {
        const noise = document.querySelector('.profile-noise');
        if (noise) {
          noise.remove();
        }
      });
    }
  };
  
  // Initialize all effects
  addTypingEffect();
  createScanline();
  addHeadingGlitch();
  addProfileGlitch();
  
  // Add a style for noise animation
  const style = document.createElement('style');
  style.textContent = `
  @keyframes noise-animation {
    0% { opacity: 0.3; }
    10% { opacity: 0.4; }
    20% { opacity: 0.2; }
    30% { opacity: 0.3; }
    40% { opacity: 0.5; }
    50% { opacity: 0.3; }
    60% { opacity: 0.4; }
    70% { opacity: 0.2; }
    80% { opacity: 0.3; }
    90% { opacity: 0.4; }
    100% { opacity: 0.3; }
  }`;
  document.head.appendChild(style);
});