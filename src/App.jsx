import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const items = [
  { id: '1', title: 'Dark Souls', description: 'A brutal action RPG where every step forward feels earned and every victory is hard-won.', category: 'Action RPG' },
  { id: '2', title: 'Sekiro', description: 'A sword-and-blood journey focused on precision, patience, and mastering the art of combat.', category: 'Action' },
  { id: '3', title: 'Elden Ring', description: 'A vast open world filled with mystery, danger, and unforgettable boss encounters.', category: 'Open World' }
];

// These are the IDs that trigger the error
const darkSoulsGames = ['1'];

function Home() {
  return (
    <div className="page">
      <h1>FromSoftware Hub</h1>
      <p>Step into a simple gaming center for Dark Souls, Sekiro, and Elden Ring.</p>
      <div className="card-grid">
        {items.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Detail() {
  const { id } = useParams();
  const item = items.find((entry) => entry.id === id);
  const [errorDismissed, setErrorDismissed] = useState(false);

  const showError = darkSoulsGames.includes(id) && !errorDismissed;

  return (
    <div className="page">

      {showError && (
        <div className="error-banner">
          <div className="error-content">
            <h2>⚠️ Error: You dare challenge Dark Souls?</h2>
            <p>This path leads to suffering. Proceed with caution, Unkindled One.</p>
            <button
              className="error-dismiss"
              onClick={() => setErrorDismissed(true)}
            >
              I accept the pain — show me anyway
            </button>
          </div>
        </div>
      )}

      <h1>{item ? item.title : 'Item not found'}</h1>
      <p className="badge">Current ID: {id}</p>
      {item ? (
        <>
          <p>{item.description}</p>
          <p><strong>Category:</strong> {item.category}</p>
        </>
      ) : (
        <p>No item exists for this ID.</p>
      )}
      <Link to="/" className="link-btn">Back to home</Link>
    </div>
  );
}

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <p>The path is lost in the ashes. Return to the hub.</p>
      <Link to="/" className="link-btn">Go home</Link>
    </div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/item/1">Sample detail</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;