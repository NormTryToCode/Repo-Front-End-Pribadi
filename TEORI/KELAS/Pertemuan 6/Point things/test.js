const API_KEY = '7ab92b63b627f25d4863f853b604d887'; // <-- MANDATORY

var genres = {};

// Saat dokumen selesai dimuat (Vanilla JS)
$(function(){
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(r => {
        r.genres.forEach((genre) => {
          genres[genre.id] = genre.name;
        });
      })
      .catch(e => {
        alert("Gagal mengambil data genre");
      });
      
      $('#searchButton').click(function(e) {
        e.preventDefault();

        $('#error').text("");

        const $searchBtn = $(this);
        $searchBtn.prop('disabled', true);
        $searchBtn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');

        $('#result').html("");

        const movieTitle = $('#title').val();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&include_adult=false`;

        // Fetch data API
        fetch(url)
        .then(response => response.json())
        .then(r => {
            if (r.results.length === 0) {
            $('#error').text('!!! No movie with this title.');
            } else {
            const $tableResult = $('#result');
            r.results.forEach((movie) => {
                const tableCell = createCell(movie);
                $tableResult.append(tableCell);
            });
            }
        })
        .catch(e => {
            $('#error').text('!!! Terjadi kesalahan pada server.');
        })
        .finally(() => {
            // Re-enable search button
            $searchBtn.prop('disabled', false);
            $searchBtn.text('Search');
        });

      });
});


// Event handler saat tombol search di-klik (Vanilla JS)
// document.getElementById('searchButton').addEventListener('click', (e) => {
//     e.preventDefault(); // Mencegah form submit bawaan browser

//     // Clear error message
//     document.getElementById('error').textContent = ""; 

//     // Disabled search button & ubah text jadi loading
//     const searchBtn = document.getElementById('searchButton');
//     searchBtn.disabled = true;
//     searchBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';

//     // Clear previous results
//     document.getElementById('result').innerHTML = "";

//     // Ambil nilai input title
//     const movieTitle = document.getElementById('title').value;
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}&include_adult=false`;

//     // Fetch data API
//     fetch(url)
//       .then(response => response.json())
//       .then(r => {
//         if (r.results.length === 0) {
//           document.getElementById('error').textContent = '!!! No movie with this title.';
//         } else {
//           const tableResult = document.getElementById('result');
//           r.results.forEach((movie) => {
//             const tableCell = createCell(movie);
//             tableResult.appendChild(tableCell);
//           });
//         }
//       })
//       .catch(e => {
//         document.getElementById('error').textContent = '!!! Terjadi kesalahan pada server.';
//       })
//       .finally(() => {
//         // Re-enable search button
//         searchBtn.disabled = false;
//         searchBtn.textContent = 'Search';
//       });
// });

// Fungsi membuat baris tabel menggunakan DOM murni
function createCell(movie) {
    var $row = $('<tr>');
    const $resultTable = $('#result');

    const $movieNo = $resultTable.find('tr').length + 1;

    var $colNo = $('<td>');
    $colNo.attr('width', '10');

    var $h2No = $('<h2>');
    $h2No.attr('class', 'display-5');
    $h2No.text(`#${$movieNo}`);

    $colNo.append($h2No);
    $row.append($colNo);

    const posterUrl = (movie.poster_path !== null)
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';

    var $colPoster = $('<td>');
    $colPoster.attr('width', '100');

    var $img = $('<img>');
    $img.attr('src', posterUrl);
    $img.attr('height', 200);

    $colPoster.append($img);
    $row.append($colPoster);

    const $td = $('<td>');
    $row.append($td);

    const $title = $('<h2>');
    $title.attr('class', "display-5");
    $title.text(movie.title);
    $td.append($title);

    const $overview = $('<p>');
    $overview.text(movie.overview);
    $td.append($overview);

    const $rating = $('<span>');
    $rating.attr("class", "badge badge-success p-2");
    $rating.text(`Rating: ${movie.vote_average}`);
    $td.append($rating);

    movie.genre_ids.forEach((id) => {
        const $genre = $('<span>');
        $genre.attr('class', "badge badge-warning ml-2 p-2");
        $genre.text(genres[id]);
        $td.append($genre);
    });

    return $row;
}