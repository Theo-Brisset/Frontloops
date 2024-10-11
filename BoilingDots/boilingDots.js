function boilingDots(){

    var self = this;

    self.interval;
    
    self.initialize = function(){
        console.log("hello");
        self.createSection();

    }

    self.createSection = function (){
        var body = document.querySelector('body');
        
        //Créer la section
        var section = document.createElement('section');

        //Créer le form pour première ligne
        var form = document.createElement('form')

        var timerContainerDiv = document.createElement('div')

        //Créer l'input
        var input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('placeholder', 'Enter number of seconds')
        
        
        //Créer le button
        var button = document.createElement('button')
        button.setAttribute('type', 'submit')
        button.textContent = 'Start !'

        button.addEventListener('click', function(event){
            event.preventDefault();
            let launchTimer = new timer()
            launchTimer.launchCounter(input.value)

        })
        
        
        form.appendChild(input)
        form.appendChild(button)

        section.appendChild(form)

        body.appendChild(section);
    }


    self.displayTimer = function(){

        var timerDiv = document.createElement('div')
        timerDiv.classList.add('timer')
        timerDiv.textContent

    }

}

function timer(){

    var self = this;
    
    self.launchCounter = function(number){
        self.delay = 1000 * number;

        self.countDown(number)

        setTimeout(() => self.stopCountDown(), self.delay)
    }


    self.countDown = function(enteredNumber){
        var startNumber = enteredNumber;

        self.interval = setInterval(function(){
            startNumber--;
            console.log(startNumber + " secondes comptées");

            return startNumber
        }, 1000);

    }

    self.stopCountDown = function() {
        clearInterval(self.interval);
    }

}