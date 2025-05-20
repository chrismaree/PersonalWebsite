document.addEventListener('DOMContentLoaded', function() {
  // Add matrix-style typing effect for navigation buttons
  const addTypingEffect = () => {
    // Target the navigation buttons
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
    
    // Add enhanced glitch effect for social media icons
    const socialIcons = document.querySelectorAll('.icons .button--sacnite i');
    
    socialIcons.forEach(icon => {
      const parentButton = icon.closest('.button--sacnite');
      
      parentButton.addEventListener('mouseover', function() {
        // Save original classes
        const originalClass = icon.className;
        icon.setAttribute('data-original-class', originalClass);
        
        // Set up more aggressive glitching for icons
        let glitchCount = 0;
        const maxGlitches = 10; // Number of glitch effects to apply
        const iconClasses = [
          'fa-github-alt', 'fa-twitter', 'fa-linkedin', 'fa-telegram',
          'fa-code', 'fa-terminal', 'fa-bug', 'fa-random', 'fa-bolt',
          'fa-database', 'fa-cogs', 'fa-signal', 'fa-wifi', 'fa-hashtag'
        ];
        
        // More frequent and intense glitching
        const iconGlitchInterval = setInterval(() => {
          if (glitchCount >= maxGlitches) {
            clearInterval(iconGlitchInterval);
            // Reset to original icon
            icon.className = originalClass;
            return;
          }
          
          // Randomly decide whether to:
          // 1. Change the icon class entirely
          // 2. Apply a visual glitch effect
          // 3. Briefly hide the icon
          const effectType = Math.floor(Math.random() * 3);
          
          if (effectType === 0) {
            // Change icon entirely
            const randomIconClass = iconClasses[Math.floor(Math.random() * iconClasses.length)];
            icon.className = 'fa ' + randomIconClass;
          } else if (effectType === 1) {
            // Apply a visual glitch effect
            const transforms = [
              'translateX(2px)', 'translateY(-3px)', 'scale(1.2)', 'rotate(15deg)',
              'skewX(20deg)', 'skewY(-10deg)'
            ];
            const randomTransform = transforms[Math.floor(Math.random() * transforms.length)];
            icon.style.transform = randomTransform;
            icon.style.color = Math.random() > 0.5 ? '#0f0' : '#0ff';
            
            // Reset the transform after a brief period
            setTimeout(() => {
              icon.style.transform = 'none';
              icon.style.color = '';
            }, 100);
          } else {
            // Briefly hide the icon
            icon.style.opacity = '0';
            setTimeout(() => {
              icon.style.opacity = '1';
            }, 50);
          }
          
          glitchCount++;
        }, 50); // Much faster interval for more intense glitching
        
        // Reset everything after the effect is complete
        setTimeout(() => {
          clearInterval(iconGlitchInterval);
          icon.className = originalClass;
          icon.style.transform = 'none';
          icon.style.color = '';
          icon.style.opacity = '1';
        }, 500);
      });
      
      // Reset icon when mouse leaves
      parentButton.addEventListener('mouseout', function() {
        const originalClass = icon.getAttribute('data-original-class');
        if (originalClass) {
          icon.className = originalClass;
          icon.style.transform = 'none';
          icon.style.color = '';
          icon.style.opacity = '1';
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
  
  // Add enhanced glitch effects to project and work experience icons
  const addProjectIconGlitch = () => {
    // Target all project/other-project and experience icons
    const projectIcons = document.querySelectorAll('.project .no-print a i, .projects-container .no-print a i, .experience .no-print a i, .experience-container .no-print a i');
    
    projectIcons.forEach(icon => {
      const parentLink = icon.closest('a');
      
      parentLink.addEventListener('mouseover', function() {
        // Save original classes
        const originalClass = icon.className;
        icon.setAttribute('data-original-class', originalClass);
        
        // Set up more aggressive glitching for icons
        let glitchCount = 0;
        const maxGlitches = 12; // Increased number of glitch effects for more intensity
        const iconClasses = [
          'fa-github', 'fa-github-alt', 'fa-twitter', 'fa-linkedin', 'fa-telegram',
          'fa-code', 'fa-terminal', 'fa-bug', 'fa-random', 'fa-bolt',
          'fa-database', 'fa-cogs', 'fa-signal', 'fa-wifi', 'fa-hashtag',
          'fa-cube', 'fa-cubes', 'fa-microchip', 'fa-server', 'fa-hdd-o',
          'fa-key', 'fa-lock', 'fa-shield', 'fa-plug'
        ];
        
        // More frequent and intense glitching
        const iconGlitchInterval = setInterval(() => {
          if (glitchCount >= maxGlitches) {
            clearInterval(iconGlitchInterval);
            // Reset to original icon
            icon.className = originalClass;
            return;
          }
          
          // Randomly decide whether to:
          // 1. Change the icon class entirely
          // 2. Apply a visual glitch effect
          // 3. Briefly hide the icon
          // 4. Apply a digital distortion effect (new)
          const effectType = Math.floor(Math.random() * 4);
          
          if (effectType === 0) {
            // Change icon entirely
            const randomIconClass = iconClasses[Math.floor(Math.random() * iconClasses.length)];
            // Keep the size classes (fa-lg) but change the icon
            const sizeClass = originalClass.includes('fa-lg') ? 'fa-lg' : '';
            icon.className = 'fa ' + randomIconClass + (sizeClass ? ' ' + sizeClass : '');
          } else if (effectType === 1) {
            // Apply a more extreme visual glitch effect
            const transforms = [
              'translateX(3px)', 'translateY(-3px)', 'scale(1.3)', 'rotate(25deg)',
              'skewX(20deg)', 'skewY(-15deg)', 'perspective(100px) rotateY(20deg)',
              'scaleX(1.4)', 'scaleY(0.7)', 'translate3d(3px, -2px, 4px)'
            ];
            const randomTransform = transforms[Math.floor(Math.random() * transforms.length)];
            icon.style.transform = randomTransform;
            
            // Random color glitches
            const colors = ['#0f0', '#0ff', '#ff0', '#f0f', '#f00'];
            icon.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            // Add text shadow for glow effect
            icon.style.textShadow = `0 0 5px ${icon.style.color}, 0 0 10px ${icon.style.color}`;
            
            // Reset the transform after a brief period
            setTimeout(() => {
              icon.style.transform = 'none';
              icon.style.color = '';
              icon.style.textShadow = '';
            }, 60); // Faster reset for more frantic effect
          } else if (effectType === 2) {
            // Briefly hide the icon or make it semi-transparent
            icon.style.opacity = Math.random() * 0.7;
            setTimeout(() => {
              icon.style.opacity = '1';
            }, 30);
          } else {
            // Digital distortion effect (stretching/compression)
            if (Math.random() > 0.5) {
              // Horizontal stretching/compression
              icon.style.transform = `scaleX(${Math.random() * 1.5 + 0.5})`;
              icon.style.color = '#0f0';
              icon.style.overflow = 'visible';
              
              // Add a glitchy text-shadow
              const offsetX = Math.floor(Math.random() * 4) - 2;
              icon.style.textShadow = `${offsetX}px 0 #f00, ${-offsetX}px 0 #0ff`;
            } else {
              // Vertical stretching/compression
              icon.style.transform = `scaleY(${Math.random() * 1.5 + 0.5})`;
              icon.style.color = '#0ff';
              
              // Add a different glitchy text-shadow
              const offsetY = Math.floor(Math.random() * 4) - 2;
              icon.style.textShadow = `0 ${offsetY}px #f00, 0 ${-offsetY}px #0f0`;
            }
            
            setTimeout(() => {
              icon.style.transform = 'none';
              icon.style.color = '';
              icon.style.textShadow = '';
              icon.style.overflow = '';
            }, 50);
          }
          
          glitchCount++;
        }, 40); // Much faster interval for more intense glitching
        
        // Reset everything after the effect is complete
        setTimeout(() => {
          clearInterval(iconGlitchInterval);
          icon.className = originalClass;
          icon.style.transform = 'none';
          icon.style.color = '';
          icon.style.opacity = '1';
          icon.style.textShadow = '';
          icon.style.overflow = '';
        }, 500);
      });
      
      // Reset icon when mouse leaves
      parentLink.addEventListener('mouseout', function() {
        const originalClass = icon.getAttribute('data-original-class');
        if (originalClass) {
          icon.className = originalClass;
          icon.style.transform = 'none';
          icon.style.color = '';
          icon.style.opacity = '1';
          icon.style.textShadow = '';
          icon.style.overflow = '';
        }
      });
    });
  };
  
  // Remove blinking bits function as it's no longer needed
  
  // Initialize all effects
  addTypingEffect();
  createScanline();
  addHeadingGlitch();
  addProfileGlitch();
  addProjectIconGlitch();
  
  // Add a style for animations
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
  }
  
  /* Enhanced styles for project interactions */
  .projects-container a i {
    transition: transform 0.2s ease, color 0.2s ease;
  }
  
  .projects-container a:hover i {
    color: #0f0;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
  }
  `;
  document.head.appendChild(style);
});