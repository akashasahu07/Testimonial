const testimonials = [
    {
        name: 'Tony Stark',
        position: 'CEO of Stark Industries, Genius Inventor, Philanthropist',
        image: 'https://i.pinimg.com/originals/45/de/42/45de424a29a8000a65787ec74440799c.png',
        testimonial: 'Stark Industries, founded by Howard Stark and led by Tony Stark, specializes in advanced tech, weapons, and energy innovations.'
    },
    {
        name: "Steve Rogers",
        position: "Super Soldier, Avenger",
        image: "https://i.pinimg.com/originals/ba/32/c3/ba32c3707b4625af137ee5892c10a36f.jpg",
        testimonial: "I stand for justice, freedom, and doing what’s right, no matter the cost."
    },
    {
        name: "Bruce Banner",
        position: "Scientist, The Hulk",
        image: "https://i.pinimg.com/736x/96/57/5d/96575d75284fad363babf332c7f6c9b2.jpg",
        testimonial: "Science is my strength, but sometimes, smashing is the only solution."
    }
]

const testimonialContainer = document.getElementById('_testimonial-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

function showTestimonial() {
    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML = `
    <img src='${testimonial.image}'/>
    <h3>${testimonial.name}</h3>
    <h6>${testimonial.position}</h6>
    <p>${testimonial.testimonial}</p>
    `;
}

function changeTestimonial(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = testimonials.length -1;
    } else if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    showTestimonial();
}

prevButton.addEventListener('click', () => changeTestimonial(-1));
nextButton.addEventListener('click', () => changeTestimonial(1));

showTestimonial();