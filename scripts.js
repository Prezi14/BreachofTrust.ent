let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function currentSlide(n) {
    showSlidesManual(slideIndex = n);
}

function showSlidesManual(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


document.addEventListener("DOMContentLoaded", function() {
    var backgroundImage = document.getElementById("background-image").src;
    document.body.style.backgroundImage = 'url(' + backgroundImage + ')';
});

document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('nav-bar');
    navBar.classList.add('show');

    emailjs.init("YchpvX2wtPJZyG5P18"); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'Yservice_gqvt21f'; // Replace with your EmailJS service ID
        const templateID = 'Ytemplate_kcgexe4'; // Replace with your EmailJS template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});