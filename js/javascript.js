$(document).ready(function () { 
    $('#jokes').click(function (e) { 
        e.preventDefault();
        $('#datosJokes').html('');

        $.ajax({
            type: "get",
            url: "http://api.icndb.com/jokes/random",
            dataType: "json",
            success: function (data) { 
                        $('#datosJokes').parent().removeClass('d-none');
                            //console.log(data.value.joke)
                        $('#datosJokes').html(data.value.joke); 
                    } 
        });
        
    });
        
});