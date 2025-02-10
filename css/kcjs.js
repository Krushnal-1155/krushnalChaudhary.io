// Typing animation
const typingAnimationElement = document.getElementById('typing-animation');
const typingTexts = ['Engineer', 'Developer', 'Fresher'];
let textIndex = 0;

function playTypingAnimation() {
  const text = typingTexts[textIndex];
  let charIndex = 0;
  
  function typeChar() {
    if (charIndex < text.length) {
      typingAnimationElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 200);
    } else {
      setTimeout(() => {
        typingAnimationElement.textContent = '';
        textIndex = (textIndex + 1) % typingTexts.length;
        playTypingAnimation();
      }, 1000);
    }
  }

  typeChar();
}

playTypingAnimation();
