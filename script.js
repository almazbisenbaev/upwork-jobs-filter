const shouldHideSpamJobs = true; // Should I hide blacklisted jobs?

// Blacklisted keywords
const blacklist = [

    // These phrases are often used in spam
    "I need you to design and build",
    "like this",
    "build me",
    "I want someone to",
    "like http",
    ".ml", ".in", ".xyz", ".tk", // some of them want you to visit their shitty websites that are based on free domain names
    "@gmail.com", "whatsapp", // they often want you to message them directly via email or whatsapp

    // These keywords are used to exclude projects that are not for me
    "angular",
    "chat bot",

];


// Removes jobs that you don't want to see
const hideAllSpam = function(){

    let allCards = document.querySelectorAll('.up-card-hover');

    allCards.forEach(function(card){

        const titleEl = card.querySelector('.job-tile-title');

        if(titleEl){

            let text = titleEl.textContent.toLowerCase();
    
            blacklist.forEach(function(word){
                if( text.includes(word.toLowerCase()) ){
                    card.style.height = "60px";
                    card.style.opacity = "0.15";
                    card.style.overflow = "hidden";
                    console.log("Hidden by keyword: ", word);
                }
            });
    
        }


        // 

    });


    let allDescriptions = document.querySelectorAll('[data-test="job-description-text"]');

    allDescriptions.forEach(function(item){

        const card = item.closest(".up-card-hover");

        let text = item.textContent.toLowerCase();

        blacklist.forEach(function(word){
            if( text.includes(word.toLowerCase()) ){
                card.style.height = "60px";
                card.style.opacity = "0.15";
                card.style.overflow = "hidden";
                console.log("Hidden by keyword: ", word);
            }
        });

    });
    
};



// Start the script when page loads
window.onload = function() {

    console.log('Upwork filter extension is working');
    console.log('Author: bisenbaev.com');

    // Hides all shitty jobs every 2 seconds
    setInterval(function(){
        if(shouldHideSpamJobs){
            hideAllSpam();
        }
    }, 2000);

}
