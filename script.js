document.addEventListener('DOMContentLoaded', function() {
	const joinRevolutionBtn = document.getElementById('join-revolution');
	const generateMemeBtn = document.getElementById('generate-meme');
	const topTextInput = document.getElementById('top-text-input');
	const bottomTextInput = document.getElementById('bottom-text-input');
	const topTextDisplay = document.getElementById('top-text');
	const bottomTextDisplay = document.getElementById('bottom-text');
      
	// Join Revolution button effect
	joinRevolutionBtn.addEventListener('click', function() {
	    alert('Welcome to the ModiCoin revolution! 🚀🇮🇳');
	});
      
	// Meme Generator functionality
	generateMemeBtn.addEventListener('click', function() {
	    topTextDisplay.textContent = topTextInput.value;
	    bottomTextDisplay.textContent = bottomTextInput.value;
	});
      
	// Fun hover effect for features
	const features = document.querySelectorAll('.feature');
	features.forEach(feature => {
	    feature.addEventListener('mouseover', function() {
	        this.style.transform = 'scale(1.05)';
	        this.style.transition = 'transform 0.3s ease';
	    });
	    feature.addEventListener('mouseout', function() {
	        this.style.transform = 'scale(1)';
	    });
	});
      
	// Scroll reveal animation
	window.addEventListener('scroll', revealOnScroll);
      
	function revealOnScroll() {
	    const elements = document.querySelectorAll('section');
	    elements.forEach(element => {
	        const elementTop = element.getBoundingClientRect().top;
	        const windowHeight = window.innerHeight;
	        if (elementTop < windowHeight - 100) {
		  element.style.opacity = '1';
		  element.style.transform = 'translateY(0)';
	        }
	    });
	}
      
	// Initial call to reveal elements
	revealOnScroll();
      });
      
      
