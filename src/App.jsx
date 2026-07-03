import { NavLink, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';
import { games } from './data';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div>
          <p className="eyebrow">FromSoftware Collection</p>
          <h1>FromSoftware Game Library</h1>
          <p className="hero-copy">Explore legendary worlds, unforgettable bosses, and the kind of adventures that demand patience, courage, and resolve.</p>
          <Link to="/item/6" className="hero-btn">Explore Games</Link>
        </div>
      </section>

      <section className="games-section" aria-labelledby="featured-games-heading">
        <div className="section-heading">
          <h2 id="featured-games-heading">Featured Games</h2>
          <p>Browse a curated selection of titles that define the studio's legacy.</p>
        </div>

        <div className="card-grid">
          {games.map((game) => (
            <article className="card" key={game.id}>
              <img src={game.image} alt={`${game.title} artwork`} loading="lazy" />
              <div className="card-body">
                <p className="card-meta">{game.genre} • {game.releaseYear}</p>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <Link to={`/item/${game.id}`} className="card-link">View Details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}

function Detail() {
  const { id } = useParams();
  const game = games.find((entry) => entry.id === id);

  if (!game) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="page detail-page">
      <img src={game.image} alt={`${game.title} banner`} className="detail-banner" />
      <div className="detail-content">
        <p className="eyebrow">Featured Game</p>
        <h1>{game.title}</h1>
        <p className="detail-intro">{game.description}</p>

        <div className="detail-grid">
          <div>
            <p><strong>Developer</strong><br />{game.developer}</p>
            <p><strong>Publisher</strong><br />{game.publisher}</p>
            <p><strong>Release Year</strong><br />{game.releaseYear}</p>
          </div>
          <div>
            <p><strong>Genre</strong><br />{game.genre}</p>
            <p><strong>Difficulty</strong><br />{game.difficulty}</p>
            <p><strong>Platforms</strong><br />{game.platforms}</p>
          </div>
        </div>

        <section className="detail-section">
          <h2>Story Overview</h2>
          <p>{game.story}</p>
        </section>

        <section className="detail-section">
          <h2>Key Features</h2>
          <ul>
            {game.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <Link to="/" className="link-btn">← Return Home</Link>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="page not-found">
      <h1>YOU DIED</h1>
      <p>The page you seek has faded into ash.</p>
      <Link to="/" className="link-btn">Return Home</Link>
    </div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">FromSoft Hub</Link>
        <nav className="nav" aria-label="Primary navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/item/6">Featured Game</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
