const emojis = document.querySelectorAll(".emoji-scroll span");

emojis.forEach(function(emoji) {

    emoji.addEventListener("click", function() {

        const sectionId = emoji.getAttribute("data-section");

        const section = document.getElementById(sectionId);

        if (section) {

            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: "smooth"
            });

        }

    });

});


// Detect current section

const sections = document.querySelectorAll(
    "#about, #education, #skills, #projects, #hobbies, #contact"
);


function updateActiveEmoji() {

    let currentSection = "";

    // Check if we are at the bottom of the page

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {

        currentSection = "contact";

    } 
    
    else {

        sections.forEach(function(section) {

            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= window.innerHeight / 2) {

                currentSection = section.id;

            }

        });

    }


    emojis.forEach(function(emoji) {

        emoji.classList.remove("active");

        if (emoji.dataset.section === currentSection) {

            emoji.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveEmoji);

updateActiveEmoji();