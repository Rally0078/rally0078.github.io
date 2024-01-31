import './App.css'

import YoutubeIframe from './YoutubeIframe.tsx'
function HomePage() {
    return (    
        <div>
            <h3 class="pageTitle">Home Page</h3>
        <div class="content">
            <p>Welcome to my portfolio website. Feel free to look around and see my projects.</p>
            <h2 class="subheading">My Projects</h2>
            <h3>Bullock Cart race game</h3>
            <YoutubeIframe videoId={"5Wyk56bPiKU"} videoTitle={"Bull"} />
            <p>Based on the tradition of racing with bullock carts in South India. 
                Developed in Unreal Engine 5, it has a working multiplayer across LANs for upto 2 players. </p>
            <p>Main menu gives the option to play single player, host a multiplayer a session, and join an existing multiplayer session. 
                Scripting was done in C++ and Unreal Engine's Blueprint visual scripting.
                 3D models and animations were made possible thanks to Abishek Nimalan.</p>
            <h3>Car racing game</h3>
            <YoutubeIframe videoId={"Y4mWw4Ia42A"} videoTitle={"Car"} />
            <p>Car racing game with two cars. Set in the real life Monza Circuit in Italy. Developed in Unity 3D, it has a main menu, pause menu, and a car selection menu. </p>
               <p>Scripting was done in C#. Lap stopwatch and lap start/finish detection features are available. 3D models and animations were made possible thanks to Abishek Nimalan.
            </p>
        </div>
        </div>
    );
}

export default HomePage;