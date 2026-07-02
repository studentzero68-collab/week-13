import { Routes, Route, Link, useParams } from 'react-router-dom';

const items = [
  { id: '1', title: 'Aurora Lamp', description: 'A soft, ambient lamp that turns any room calm and cozy.', category: 'Home' },
  { id: '2', title: 'Nova Headphones', description: 'Immersive sound with a clean design for long listening sessions.', category: 'Audio' },
  { id: '3', title: 'Pixel Watch', description: 'A sleek smartwatch built for daily movement and simple tracking.', category: 'Wearables' }
];

function Home() {
  return (
    <div className="page">
      <h1>Home</h1>
      <p>Explore a small collection of featured items and open their detail pages.</p>
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
      <p>The page you are looking for does not exist.</p>
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
