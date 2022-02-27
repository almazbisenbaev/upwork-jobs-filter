const shouldHideSpamJobs = true; // Should I hide blacklisted jobs?

// Blacklisted keywords
const blacklist = [

    // These phrases are often used in spam
    "I need you to design and build",
    "same to same",
    "look same like",
    "build me",
    "I want someone to",
    "like http",
    "similar website like",
    ".ml",
    ".in",
    ".xyz",
    "like this",

    // These keywords are used to exclude projects that are not for me
    // "Shopify",
    // "magento",
    // "react",
    // "angular",
    // "payment",
    // "chat bot",
    // "Troubleshooting",
    // "Administrator",
    // "CRM",
    // "PHP developer",
    // "SEO expert",
    // "Web Scraper",
    // "casino",
    // "gambling",
    // "blogspot",
    // "android",
    // "ios",
    // "devops",
    // "laravel",
    // "clickfunnel",
    // "xero",
    // "android",
    // "django",

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
                    card.style.display = "none";
                    console.log("Hidden by keyword: ", word);
                }
            });
    

        }

    });
    
};



// Start the script when page loads
window.onload = function() {

    console.log('Upwork filter extension is working');

    setTimeout(function(){
        if(shouldHideSpamJobs){
            hideAllSpam();
        }
    }, 2000);

}
