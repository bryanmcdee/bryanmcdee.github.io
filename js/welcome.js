(function(){
    var welcomeText = document.getElementById('welcome-text');
    var typewriter = new Typewriter(welcomeText, {
        loop: false,
        changeDelay: 1,
        changeDeleteSpeed: 1
    });

    function typeWriter(destination, message, speed){
        welcomeText.innerHTML = "> ";
        var i = 0;
        var interval = setInterval(function(){
            welcomeText.innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(interval);
            }
        }, speed);
    }
      
    function displayButton() {
        $("#meet-bryan").fadeIn("slow");
    }

    function displayAboutMeText() {  
        typewriter
            .typeString('Software Engineer')
            .pauseFor(1500)
            .deleteAll()
            .typeString('Tough Mudder')
            .pauseFor(1500)
            .deleteAll()
            .typeString('Bacon Connoisseur')
            .pauseFor(1500)
            .deleteAll()
            .typeString('Bryan McDonald')
            .callFunction(function(){ console.log('done'); })
            .start();
    }
    
    displayAboutMeText();
}());