window.onload = function(){

    let $title = $("#title");
    let $titleErrors = $("#titleErrors")
    let $rating = $("#rating");
    let $ratingErrors = $("#ratingErrors")
    let $awards = $("#awards");
    let $awardsErrors = $("#awardsErrors")
    let $releaseDate = $("#release_date");
    let $releaseDateErrors = $("#release_dateErrors")
    let $length = $("#length");
    let $lengthErrors = $("#lengthErrors")
    let $genre = $("#genre_id");
    let $genreErrors = $("#genreErrors");
    let $formCharge = $(".form")
    let $ulError = $(".errores")

    let validationErrors = false;

    $title.addEventListener('blur', function(){
        if(!$title.value.trim()){
            $title.classList.add("is-invalid");
            $titleErrors.innerHTML = "El titulo no debe estar vacio";
            validationErrors = true;
        } else if (!regExAlpha.test($title.value)){
            $title.classList.add("is-invalid");
            $titleErrors.innerHTML = "No es un titulo valido";
            validationErrors = true
        } else {
            $titleErrors.innerHTML = '';
            $title.classList.remove("is-invalid");
            $title.classList.add("is-valid");
            validationErrors = false;
        }
    });

    $rating.addEventListener('blur', function(){
        if(!$rating.value.trim()){
            $rating.classList.add("is-invalid");
            $ratingErrors.innerHTML = "El rating no debe estar vacio";
            validationErrors = true;
        } else if ($rating.value < 0 || $rating.value > 10){
            $rating.classList.add("is-invalid");
            $ratingErrors.innerHTML = "No es un rating valido";
            validationErrors = true
        } else {
            $ratingErrors.innerHTML = ''
            $rating.classList.remove("is-invalid")
            $rating.classList.add("is-valid")
            validationErrors = false
        }
    })

    $awards.addEventListener('blur', function(){
        if(!$awards.value.trim()){
            $awards.classList.add("is-invalid");
            $awardsErrors.innerHTML = "Premios no debe estar vacio";
            validationErrors = true;
        } else if ($awards.value < 0 || $awards.value > 10){
            $awards.classList.add("is-invalid");
            $awardsErrors.innerHTML = "No es un premio valido";
            validationErrors = true
        } else {
            $awardsErrors.innerHTML = ''
            $awards.classList.remove("is-invalid")
            $awards.classList.add("is-valid")
            validationErrors = false
        }
    })

    $releaseDate.addEventListener('blur', function(){
        if(!$releaseDate.value.trim()){
            $releaseDate.classList.add("is-invalid");
            $releaseDateErrors.innerHTML = "Debe ingresar una fecha";
            validationErrors = true;
        } else {
            $releaseDateErrors.innerHTML = ''
            $releaseDate.classList.remove("is-invalid")
            $releaseDate.classList.add("is-valid")
            validationErrors = false
        }
    })

    $length.addEventListener('blur', function(){
        if(!$length.value.trim()){
            $length.classList.add("is-invalid");
            $lengthErrors.innerHTML = "Premios no debe estar vacio";
            validationErrors = true;
        } else if ($length.value < 60 || $length.value > 360){
            $length.classList.add("is-invalid");
            $lengthErrors.innerHTML = "No es un premio valido";
            validationErrors = true
        } else {
            $lengthErrors.innerHTML = ''
            $length.classList.remove("is-invalid")
            $length.classList.add("is-valid")
            validationErrors = false
        }
    })

    $genre.addEventListener('blur', function(){
        if(!$genre.value.trim()){
            $genreErrors.innerHTML = 'Es necesario seleccionar una opcion';
            $genre.classList.add("is-invalid");
            validationErrors = true;
        } else {
            $genreErrors.innerHTML = ''
            $genre.classList.remove("is-invalid");
            $genre.classList.add("is-valid")
            validationErrors = false
        }
    })

    

    $formCharge.addEventListener('submit', function(event){
        
        event.preventDefault();

        let error = false;
        let elementsForm = this.elements;


        for (let index = 0; index < elementsForm.length; index++){
            if(elementsForm[index].value == "" && elementsForm[index].type != "submit"){
                $ulError.innerText = `Hay errores en el formulario `
                $ulError.classList.add("alert-warning")
                error = true
            }
        }

        if(!error && !validationErrors) {
            alert("La pelicula se guardo satisfactoriamente")
        }

    })

    
}


let $ = elem => document.querySelector(elem)