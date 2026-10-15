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




window.addEventListener("scroll", updateActiveEmoji);

updateActiveEmoji();
