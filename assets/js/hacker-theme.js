document.addEventListener('DOMContentLoaded', function() {
  // Add matrix-style typing effect
  const addTypingEffect = () => {
    const buttons = document.querySelectorAll('.button--sacnite');
    
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
        
        // Stop the effect after 800ms
        setTimeout(() => {
          isRunning = false;
          this.textContent = text;
        }, 800);
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
  
  // Initialize all effects
  addTypingEffect();
  createScanline();
  addHeadingGlitch();
});