let randomEmojis = [
    "&#128514;",
    "&#128517;",
    "&#128518;", 
    "&#128521;",
    "&#128527;",
    "&#128540;",
    "&#128541;",
    "&#129315;",
];

// AJAX
$(document).ready(function () { 
    
    function SendRandom () 
    {
         // para que aparezcan emojis random
         let emoji = random();

         function random() 
         {
             randomIndex = Math.ceil((Math.random()*randomEmojis.length-1));
             newText = randomEmojis[randomIndex];
             return newText;
         }

         return emoji
    }
    
    function GetAjax(e)
    { 
        e.preventDefault();
        // para que se reinicie el contenido cada vez
        $('#datosJokes').html('');

        $.ajax({
            type: "get",
            url: "http://api.icndb.com/jokes/random",
            dataType: "json",
            success: function (data) { 
                       
                        $('#jokes').html(SendRandom());
                        /* para que se muestre el contenido del alert si este tiene d-none
                        $('#datosJokes').parent().removeClass('d-none');*/
                        $('#datosJokes').html(data.value.joke); 
                    } 
        });
    }


    function GetFetch (e)
    {
        e.preventDefault();
        // para que se reinicie el contenido cada vez
        $('#datosJokes').html('');

        fetch('http://api.icndb.com/jokes/random')
        .then(response => response.json().then(val => $('#datosJokes').html(val.value.joke)))
        .catch(error => console.log(err));

        $('#jokes').html(SendRandom());

    }

    $('#jokes').click((GetFetch)); 
        
});




