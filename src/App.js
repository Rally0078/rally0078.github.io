import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
            <h1>The Lily Garden</h1>
        </div>
        <div class="container">
            <div class="navbar">
                <nav>
                    <ul>
                        <li class="hoverbutton"><a href="#">Home</a></li>
                        <li class="hoverbutton"><a href="#">About</a></li>
                        <li class="hoverbutton"><a href="#">Contact</a></li>
                        <li class="hoverbutton"><a href="#">Links</a></li>
                    </ul>
                </nav>
            </div>
            <h3 class="pageTitle">Home Page</h3>
            <div class="content">
                <p>Welcome to my Lily Garden. This is where I post pictures of flowers, particularly Lilies.</p>
            </div>
        </div>
    </div>
  );
}

export default App;
