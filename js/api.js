    function crearTarjetaPelicula(pelicula) {
        const cardLink = document.createElement("a");
        cardLink.classList.add("linkPeliculas");
        cardLink.href = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;

        const card = document.createElement("div");
        card.classList.add("tarjetaPeliculas");

        //const cardBody = document.createElement("div");
        //cardBody.classList.add("cuerpoPeliculas");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add('tituloPeliculas');
        cardTitle.textContent = pelicula.title;

        const cardImg = document.createElement("img");
        cardImg.classList.add("imagenesPeliculas");
        cardImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
        cardImg.alt = pelicula.title;
        cardImg.loading = "lazy";

        card.appendChild(cardTitle);
        card.appendChild(cardImg);
        //card.appendChild(cardBody);
        cardLink.appendChild(card);

        return cardLink
    }
    
    const API_SERVER = `https://api.themoviedb.org/3`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
            }
        };
            
    const cargarPeliculas = async (page = 5) => {
        try {
            //realizamos una petición fetch a la API para obtener las películas populares
            const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
            console.log(response);
            const data = await response.json(); //convertimos la respuesta a JSON
            console.log(data);
            const movies = data.results; //extraemos las películas de la respuesta, array de objetos de películas
            console.log(movies);
            const peliculasSection = document.getElementById("peliculasSection");
            peliculasSection.innerHTML = ''; //limpiamos el contenido previo del contenedor
            movies.forEach(movie => {
                const peliculaCard = crearTarjetaPelicula(movie); //iteramos sobre películas
                peliculasSection.appendChild(peliculaCard); //añadimos la tarjeta de película al contenedor
            }); //iteramos sobre las películas
        }catch(error){
            console.error(error);
        }
    };

    document.addEventListener("DOMContentLoaded", () => {cargarPeliculas(1)});
