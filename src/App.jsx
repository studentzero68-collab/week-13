import { Routes, Route, Link, useParams } from 'react-router-dom';

const items = [
  { id: '1', title: 'Dark Souls', description: 'A brutal action RPG where every step forward feels earned and every victory is hard-won.', category: 'Action RPG' },
  { id: '2', title: 'Sekiro', description: 'A sword-and-blood journey focused on precision, patience, and mastering the art of combat.', category: 'Action' },
  { id: '3', title: 'Elden Ring', description: 'A vast open world filled with mystery, danger, and unforgettable boss encounters.', category: 'Open World' }
];

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

  return (
    <div className="page">
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
