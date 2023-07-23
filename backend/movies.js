const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Abhi@xx50i',
  database: 'OverWatch'
});

connection.connect((err) => {
  if(err){
    console.error(err);
    return;
  }

  console.log('connected');


const moviesData = [
  {
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 9.3,
    runtime: 142,
    release_year: 1994,
    director: 'Frank Darabont',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    poster: 'https://example.com/shawshank-redemption-poster.jpg',
    trailer: 'https://youtube.com/watch?v=6hB3S9bIaco',
    watch_links: ['Netflix'],
    genres: ['Drama', 'Crime']
  },
  {
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    rating: 9.2,
    runtime: 175,
    release_year: 1972,
    director: 'Francis Ford Coppola',
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    poster: 'https://example.com/godfather-poster.jpg',
    trailer: 'https://youtube.com/watch?v=sY1S34973zA',
    watch_links: ['Amazon Prime', 'HBO Max'],
    genres: ['Crime', 'Drama']
  },
  {
    title: 'The Dark Knight',
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    rating: 9.0,
    runtime: 152,
    release_year: 2008,
    director: 'Christopher Nolan',
    actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    poster: 'https://example.com/dark-knight-poster.jpg',
    trailer: 'https://youtube.com/watch?v=EXeTwQWrcwY',
    watch_links: ['Netflix', 'Amazon Prime'],
    genres: ['Action', 'Crime', 'Drama']
  },
  {
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 8.9,
    runtime: 154,
    release_year: 1994,
    director: 'Quentin Tarantino',
    actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    poster: 'https://example.com/pulp-fiction-poster.jpg',
    trailer: 'https://youtube.com/watch?v=s7EdQ4FqbhY',
    watch_links: ['Hulu', 'Disney+'],
    genres: ['Crime', 'Drama']
  },
  {
    title: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    rating: 8.8,
    runtime: 139,
    release_year: 1999,
    director: 'David Fincher',
    actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    poster: 'https://example.com/fight-club-poster.jpg',
    trailer: 'https://youtube.com/watch?v=SUXWAEX2jlg',
    watch_links: ['Amazon Prime', 'HBO Max'],
    genres: ['Drama']
  },
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    rating: 8.7,
    runtime: 148,
    release_year: 2010,
    director: 'Christopher Nolan',
    actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    poster: 'https://example.com/inception-poster.jpg',
    trailer: 'https://youtube.com/watch?v=YoHD9XEInc0',
    watch_links: ['Netflix', 'Hulu'],
    genres: ['Action', 'Adventure', 'Sci-Fi']
  },
  {
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    rating: 8.7,
    runtime: 136,
    release_year: 1999,
    director: 'Lana Wachowski, Lilly Wachowski',
    actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    poster: 'https://example.com/matrix-poster.jpg',
    trailer: 'https://youtube.com/watch?v=m8e-FF8MsqU',
    watch_links: ['Netflix', 'Amazon Prime'],
    genres: ['Action', 'Sci-Fi']
  },
  {
    title: 'Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
    rating: 8.7,
    runtime: 146,
    release_year: 1990,
    director: 'Martin Scorsese',
    actors: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'],
    poster: 'https://example.com/goodfellas-poster.jpg',
    trailer: 'https://youtube.com/watch?v=qo5jJpHtI1Y',
    watch_links: ['Hulu', 'Disney+'],
    genres: ['Biography', 'Crime', 'Drama']
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    rating: 8.9,
    runtime: 201,
    release_year: 2003,
    director: 'Peter Jackson',
    actors: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
    poster: 'https://example.com/lotr-return-of-the-king-poster.jpg',
    trailer: 'https://youtube.com/watch?v=r5X-hFf6Bwo',
    watch_links: ['Netflix', 'Amazon Prime'],
    genres: ['Action', 'Adventure', 'Drama']
  },
  {
    title: 'Schindler\'s List',
    description: 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    rating: 8.9,
    runtime: 195,
    release_year: 1993,
    director: 'Steven Spielberg',
    actors: ['Liam Neeson', 'Ralph Fiennes', 'Ben Kingsley'],
    poster: 'https://example.com/schindlers-list-poster.jpg',
    trailer: 'https://youtube.com/watch?v=gG22XNhtnoY',
    watch_links: ['Hulu', 'Disney+'],
    genres: ['Biography', 'Drama', 'History']
  },
  // Add more movies here
];

  moviesData.forEach((movie) => {
    const actors = movie.actors.join(', '); 
    const genre = movie.genres.join(', '); 
    const watchlinks = movie.watch_links.join(', '); 
    const sql = 'INSERT INTO db2 (title, film_desc, rating, runtime, release_year, director, actors, poster, trailer, watch_links, genres) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    movie.title,
    movie.description,
    movie.rating,
    movie.runtime,
    movie.release_year,
    movie.director,
    actors,
    movie.poster,
    movie.trailer,
    watchlinks,
    genre
  ];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting movie:', err);
        return;
      }

      console.log('Movie inserted successfully:', result.insertId);
    });
  });

  // Close the MySQL connection
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
      return;
    }

    console.log('MySQL connection closed');
  });


});
