let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');

screen.value = '';
for(item of button)
    {
            item.addEventListener('click',(e)=>{
            var audio = new Audio('btn.wav');
            audio.play();
            buttonText = e.target.innerText;
    
        if(buttonText=="C")
        {
                screen.value = '';
        }
        
        else if(buttonText== '\xF7')
        {
            screen.value += '/';
        }
    
        else if(buttonText== '\xD7')
        {
            screen.value += '*';
        }
    
        else if(buttonText== '\u2190')
        {
            screen.value = screen.value.replace(screen.value.charAt(screen.value.length-1),'');
        }
    
        else if(buttonText=="=")
        {
            try{
                        screen.value = eval(screen.value);
            }

            catch(e){
                screen.value = 'Syntax Error ';
                setTimeout(()=>{
                    screen.value = '';  
                },2000);          
            }

        }
        
        else{
                screen.value += buttonText;
        }
        })    
    }
