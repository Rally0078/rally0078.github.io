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
                        <li class="hoverbutton"><a href="#" class="MenuHyper">About Me</a></li>
                        <li class="hoverbutton"><a href="#" class="MenuHyper">Home</a></li>
                        <li class="hoverbutton"><a href="#" class="MenuHyper">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <h3 class="pageTitle">Home Page</h3>
            <div class="content">
                <p>Welcome to my Lily Garden, this is my portfolio website. Feel free to look around and make nasty comments about it on my github.</p>
                <h2 class="subheading">My Projects</h2>
                <p></p>
            </div>
        </div>
    </div>
  );
}

export default App;
