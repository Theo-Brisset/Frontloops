function boilingDots(){

    var self = this;

    self.interval;
    
    self.initialize = function(){
        self.createSection();
        
    }

    self.createSection = function (){
        var body = document.querySelector('body');
        
        //Créer la section
        var section = document.createElement('section');

        //Créer le form pour première ligne
        var form = document.createElement('form')

        var timerContainerDiv = document.createElement('div')
        timerContainerDiv.classList.add('conteneurTimer')

        //Créer l'input
        var input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('placeholder', 'Seconds')
        
        
        //Créer le button
        var button = document.createElement('button')
        button.setAttribute('type', 'submit')
        button.textContent = 'Start !'

        button.addEventListener('click', function(event){
            event.preventDefault();
            let launchTimer = new timer()
            
            let timerDiv = launchTimer.timerPresentation(input.value);
            timerContainerDiv.appendChild(timerDiv);

            launchTimer.launchCounter(input.value, timerDiv);
        })
        
        
        form.appendChild(input)
        form.appendChild(button)

        section.appendChild(form)
        section.appendChild(timerContainerDiv)

        body.appendChild(section);
    }

}

function timer(){

    var self = this;

    self.timerPresentation = function(startNumber){
        let timerDiv = document.createElement('div');
        timerDiv.classList.add('timer');
        timerDiv.textContent = startNumber;

        return timerDiv
    }
    
    self.launchCounter = function(startNumber, timerDiv){
        var currentNumber = startNumber;

        self.interval = setInterval(function() {
            currentNumber--;
            timerDiv.textContent = currentNumber; 

            if (currentNumber <= 0) {
                self.stopCountDown(timerDiv);
            }
        }, 1000);
        
    }


    self.countDown = function(enteredNumber){
        var startNumber = enteredNumber;

        self.interval = setInterval(function(){
            startNumber--;
        }, 1000);

    }

    self.stopCountDown = function(timerDiv) {
        clearInterval(self.interval);
        timerDiv.classList.add('hidden')
    }

}
