(function(){
    'use strict';
    console.log('reading.js');

    const StartBtn = document.querySelector("#StartBtn");
    const input1 = document.querySelector("#place");
    const label1 = document.querySelector("#placeLabel");
    const header1 = document.querySelector("h1");
    const header2 = document.querySelector("h2");

    // when start button is clicked, it gets hidden & the first input field shows up
    StartBtn.addEventListener("click", function() {

        StartBtn.style.display = "none";
        label1.style.display = "block";
        input1.style.display = "block";
        header1.style.display = "none";
        header2.style.display = "none";

    });

    const inputs = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');
    const cows = document.querySelectorAll('img');

    for (let i = 0; i<inputs.length;i++) {
        inputs[i].addEventListener('keyup', function(event) {
            if ((event.key==='Enter'||event.keyCode===13)&&i<inputs.length-1) {
                // input & label changes
                inputs[i].style.display = 'none'; 
                labels[i].style.display = 'none'; 
                inputs[i + 1].style.display = 'block'; 
                labels[i + 1].style.display = 'block'; 
                inputs[i + 1].focus(); 
                //cow changes
                cows[i].style.display = 'none'; 
                cows[i+1].style.display = 'block'; 
            }
    });
    }
    // create final madlib to print out in the end
    const madlib = document.querySelector('#madlib');
    const submit = document.querySelector('#submit')

    submit.addEventListener('click', function(event){
        event.preventDefault();
        const place = document.querySelector('#place').value;
        const name = document.querySelector('#name').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const number = document.querySelector('#number').value;
        const NC = document.querySelector('#NumberCow');
        const EC = document.querySelector('#EndCow');

        let myText;

        if (place == '') {
            myText = 'Please provide a place'
            document.querySelector('#place').focus();
        } else if (name == '') {
            myText = 'Please provide a name'
            document.querySelector('#name').focus();
            
        }  else if (adj == '') {
            myText = 'Please provide an adjective'
            document.querySelector('#adj').focus();
            
        }   else if (verb == '') {
            myText = 'Please provide a verb'
            document.querySelector('#verb').focus();
        }   else if (number == '') {
            myText = 'Please provide a number'
            document.querySelector('#number').focus();
        } else {
            myText = `A New Place at UC Davis: <br>
            Young: Have you been to the new <strong>${place}</strong> on campus? <br>
            Silo: Yes! I went there with <strong>${name}</strong> and had a <strong>${adj}</strong> time. <br> 
            Young: That sounds fun! I heard everyone goes there to  <strong>${verb}</strong>. I bet other UC campuses dont have this! <br>
            Silo: I agree. I go there now <strong>${number}</strong> times a day! <br>
            Young: Really? We should go together sometime. That would be fun.`;
            document.querySelector('#place').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#number').value = '';
        }
        // hide the cow and submit button
        NC.style.display = "none";
        EC.style.display = "block";
        submit.style.display = "none";
        madlib.style.display = "block";
        madlib.innerHTML = myText;
    });
})();