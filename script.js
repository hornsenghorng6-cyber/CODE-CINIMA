// បញ្ជីរឿងភាគ និងភាពយន្តទូរទស្សន៍ដែលពេញនិយមបំផុត (Global Hits)
const movies = [
  {
    id: 1,
    title: "Avatar: The Way of Water",
    year: 2022,
    genre: "Adventure",
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    bg: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description: "Jake Sully lives with his newfound family on Pandora. When a familiar threat returns, Jake and Neytiri must protect their family and the Na'vi."
  },
  {
    id: 2,
    title: "Dune: Part Two",
    year: 2024,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    bg: "https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
  },
  {
    id: 3,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    bg: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
  },
  {
    id: 4,
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Action",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    bg: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description: "Peter Parker's secret identity is revealed, bringing his super heroic responsibilities into conflict with his normal life."
  },
  {
    id: 5,
    title: "John Wick: Chapter 4",
    year: 2023,
    genre: "Action",
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    bg: "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    description: "John Wick uncovers a path to defeating The High Table, but before he can earn his freedom, he must face a new enemy."
  },
  {
    id: 6,
    title: "The Batman",
    year: 2022,
    genre: "Action",
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    bg: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues."
  },
  {
    id: 7,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    bg: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    id: 8,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    bg: "https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
  },
  {
    id: 9,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    bg: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces a criminal mastermind known as the Joker, who seeks to plunge Gotham City into chaos."
  },
  {
    id: 10,
    title: "Top Gun: Maverick",
    year: 2022,
    genre: "Action",
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    bg: "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    description: "After more than thirty years of service, Pete Mitchell trains a new generation of elite fighter pilots."
  },
  {
    id: 11,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    genre: "Adventure",
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    bg: "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    description: "The Guardians embark on a dangerous mission to save Rocket and protect their family."
  },
  {
    id: 12,
    title: "Khmer Movie",
    year: 2008,
    genre: "Action",
    rating: 5.0,
    poster: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=90",
    bg: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=90",
    description: "A classic action story featuring intense battles and heroics."
  },
  {
    id: 13,
    title: "Deadpool & Wolverine",
    year: 2024,
    genre: "Action",
    rating: 7.8,
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    bg: "https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    description: "Deadpool is recruited by the Time Variance Authority and teams up with Wolverine for a dangerous multiverse adventure."
  },
  {
    id: 14,
    title: "Gotham City",
    year: 2008,
    genre: "Action",
    rating: 7.0,
    poster: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=90",
    bg: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=90",
    description: "A dark tale set in the heart of Gotham City as law enforcement struggles against chaotic crime elements."
  },
  {
    id: 15,
    title: "Inside Out 2",
    year: 2024,
    genre: "Animation",
    rating: 7.6,
    poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    bg: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    description: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected."
  },
  {
    id: 16,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    bg: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description: "A computer hacker learns that reality as he knows it is a simulation controlled by machines."
  },
  {
    id: 17,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    bg: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers must figure out a way to bring back their vanished allies for one final battle."
  },
  {
    id: 18,
    title: "Black Panther",
    year: 2018,
    genre: "Action",
    rating: 7.3,
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    bg: "https://image.tmdb.org/t/p/original/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    description: "T'Challa returns home to the isolated, technologically advanced African nation of Wakanda."
  },
  {
    id: 19,
    title: "Twisters",
    year: 2024,
    genre: "Adventure",
    rating: 6.5,
    poster: "https://image.tmdb.org/t/p/w500/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
    bg: "https://image.tmdb.org/t/p/original/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
    description: "A group of storm chasers risks everything to study powerful tornadoes and survive an unprecedented storm."
  },
  {
    id: 20,
    title: "Kingdom of the Planet of the Apes",
    year: 2024,
    genre: "Sci-Fi",
    rating: 7.0,
    poster: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    bg: "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    description: "Generations after Caesar's reign, a young ape begins a journey that will shape the future of apes and humans."
  }
];

// មុខងារបង្ហាញ Card រឿងនៅលើអេក្រង់ (Render Movies)
function renderMovies(movieList = movies) {
  const trendingGrid = document.getElementById("trendingGrid");
  const genreGrid = document.getElementById("genreGrid");
  
  let html = "";
  movieList.forEach(movie => {
    html += `
      <div class="movie-card" onclick="changeHeroBackground(${movie.id})">
        <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
        <div class="movie-card-info">
          <h4>${movie.title}</h4>
          <small>${movie.year} • <span style="color:#f59e0b;">★ ${movie.rating}</span> • ${movie.genre}</small>
        </div>
      </div>
    `;
  });

  if (trendingGrid) trendingGrid.innerHTML = html;
  if (genreGrid) genreGrid.innerHTML = html;
}

// មុខងារផ្លាស់ប្តូរ Background ផ្នែក Hero ពេលរើសរឿង (Dynamic Background Switcher)
function changeHeroBackground(movieId) {
  const movie = movies.find(m => m.id === movieId);
  if (!movie) return;

  const heroSection = document.getElementById("home");
  if (heroSection) {
    heroSection.style.background = `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.4)), url('${movie.bg}') center/cover no-repeat`;
    
    const heroContent = heroSection.querySelector(".hero-content");
    if (heroContent) {
      heroContent.querySelector("h1").innerHTML = `${movie.title}`;
      heroContent.querySelector(".hero-meta").innerHTML = `
        <span>${movie.year}</span><span>•</span>
        <span>${movie.genre}</span><span>•</span>
        <span class="rating">★ ${movie.rating}</span>
      `;
      heroContent.querySelector("p").innerText = movie.description;
      
      const infoBtn = heroContent.querySelector(".secondary-btn");
      if (infoBtn) infoBtn.setAttribute("onclick", `openMovie(${movie.id})`);
    }
  }
  
  openMovie(movieId);
}

// មុខងារ Filter តាមប្រភេទរឿង (Genres Filter)
function filterGenre(genreName, btnElement) {
  const buttons = document.querySelectorAll(".genre");
  buttons.forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  if (genreName === "All") {
    renderMovies(movies);
  } else {
    const filtered = movies.filter(m => m.genre.toLowerCase().includes(genreName.toLowerCase()));
    renderMovies(filtered);
  }
}

// មុខងារ Popup មើលព័ត៌មានរឿង (Movie Modal)
function openMovie(id) {
  const movie = movies.find(m => m.id === id);
  if (!movie) return;

  document.getElementById("modalPoster").src = movie.poster;
  document.getElementById("modalTitle").innerText = movie.title;
  document.getElementById("modalYear").innerText = movie.year;
  document.getElementById("modalGenre").innerText = movie.genre;
  document.getElementById("modalRating").innerText = "★ " + movie.rating;
  document.getElementById("modalDescription").innerText = movie.description;

  document.getElementById("movieModal").classList.add("active");
}

function closeMovie() {
  document.getElementById("movieModal").classList.remove("active");
}

// មុខងារ Payment Modal
function openPayment() {
  closeMovie();
  document.getElementById("paymentModal").classList.add("active");
}

function closePayment() {
  document.getElementById("paymentModal").classList.remove("active");
}

function selectPlan(element, price, planName) {
  document.querySelectorAll(".plan").forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
  document.getElementById("modalSelectedPlan").innerText = planName;
  document.getElementById("paymentAmount").innerText = "$" + price;
}

function payMoney() {
  const plan = document.getElementById("modalSelectedPlan").innerText;
  const price = document.getElementById("paymentAmount").innerText;
  
  document.getElementById("successPlan").innerText = plan;
  document.getElementById("successAmount").innerText = price;

  closePayment();
  document.getElementById("successModal").classList.add("active");
}

function closeSuccess() {
  document.getElementById("successModal").classList.remove("active");
}

// ដំណើរការដំបូងពេលបើក Web
window.onload = function() {
  renderMovies();
};