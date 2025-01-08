import '../css/App.css'
import PostTypes from '../Common/Post.jsx'
import portfolioImage from '../public/images/portfolio.png'
//const PostText = PostTypes.PostText;
const PostYoutube = PostTypes.PostYoutube;
const PostImage = PostTypes.PostImage;

const Projects = () => {
    return (
        <div>
            <h3 class="pageTitle">Completed Projects</h3>
            <div class="content">
                <p>These are the projects that I have completed. I have done projects from a wide range of areas, 
                    from game development and web development to deep learning.</p>
                <h2 class="subheading">My Projects</h2>
                <PostImage postTitle={"Portfolio Website"} postDescription={[
                    "Developed this portfolio website to showcase my projects.",
                    "Written in JavaScript and uses React. Future plans turn this into a blog and to host using a cloud provider with a backend and database.",
                    "Deployed using GitHub actions CI/CD and hosted as a static site using GitHub pages."
                ]}
                    imageName={portfolioImage}
                />

                <PostYoutube postTitle={"Bullock Cart race game(Unreal Engine 5, C++)"} postDescription={
                    [`Based on the tradition of racing with bullock carts in South India. 
                    Developed in Unreal Engine 5, it has a working multiplayer across LANs for upto 2 players.`, 

                    `Main menu gives the option to play single player, host a multiplayer a session, and join an existing multiplayer session. 
                    Scripting was done in C++ and Unreal Engine's Blueprint visual scripting.`]
                    }
                    videoId={"5Wyk56bPiKU"}
                    />
                <PostYoutube postTitle={"Car racing game(Unity 3D, C#)"} postDescription={
                    [`Car racing game with two cars. Set in the real life Monza Circuit in Italy. Developed in Unity 3D, 
                        it has a main menu, pause menu, and a car selection menu.`, 

                    `Scripting was done in C#. Lap stopwatch and lap start/finish detection features are available.`]
                    }
                    videoId={"Y4mWw4Ia42A"}
                    />
            </div>
        </div>
    );
}
/*<PostText postTitle={"Portfolio Website"} postDescription={[
                    "Developed this portfolio website to showcase my projects.",
                    "Written in JavaScript and uses React.",
                    "Deployed using GitHub actions CI/CD and hosted as a static site using GitHub pages."
                ]}/>
*/
export default Projects;