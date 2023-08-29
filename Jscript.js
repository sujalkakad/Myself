  
  function scrollToSection(event) {
    event.preventDefault();  
    const target = document.querySelector(event.target.getAttribute('href')); 
    target.scrollIntoView({ behavior: 'smooth' });  
  }


  const link = document.querySelector('a[href="#section"]');
  link.addEventListener('click', scrollToSection);

document.addEventListener("input", function(event) {
    if (event.target.classList.contains("accuracy-slider")) {
      const slider = event.target;
      const skillProgress = slider.parentElement.querySelector(".skill-progress");
      const accuracyValue = slider.parentElement.querySelector(".accuracy-value");
  
      const percentage = slider.value;
      skillProgress.style.setProperty("--progress-width", percentage + "%");
      accuracyValue.textContent = percentage + "%";
    }
  });

  var typed = new Typed('#element', {
    strings: ['Web Developer.'],
    typeSpeed: 150,
    
    loop: true, 
    loopCount: Infinity, 
    onComplete: function (self) {
        
        setTimeout(function () {
            self.reset(); 
        }); 
    }
});


