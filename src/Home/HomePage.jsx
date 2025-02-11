import '../css/App.css'
import PostTypes from '../Common/Post.jsx'
import lemonImage from '../public/images/lemonvalid.jpg'

const PostText = PostTypes.PostText;
const PostYoutube = PostTypes.PostYoutube;
const PostImage = PostTypes.PostImage;


function HomePage() {
    return (    
        <div>
            <h3 class="pageTitle">Home Page</h3>
            <div class="content">
                <p>Welcome to my portfolio website. Feel free to look around and see my projects.</p>
                <h2 class="subheading">My Currently Ongoing Projects</h2>
                <PostYoutube postTitle={"Jaguar Racing Game(Unreal Engine 5, C++)"} 
                postDescription={[
                    `I developed the logic for a racing game with cars from the British car manufacturer Jaguar.
                    Input handling and the car driving logic is written in C++, and the HUD is done in Unreal Engine blueprints. 
                    The project has version control by a self-hosted Git repo using Gitea running on Docker.`,
                    `Currently developing a checkpoint system and a main menu with level selection and car selection.`
                ]}
                isPlayList={true}
                videoId={"videoseries?si=wDUoCOoxJJ2bufEm&amp;list=PLLWvKGU_E1WmeeTSteVhNjzxljcG0yQd5"}
                />
                <PostImage postTitle={"Lemon Detection model(Python, PyTorch)"}
                postDescription={[
                    `I implemented a real-time object detection model for detecting ripe and unripe lemons using YOLO. 
                    I applied transfer learning techniques to train the YOLO network in PyTorch. 
                    The training was done for over 100 epochs before satisfactory results were obtained.`,
                    `The model achieved an mAP score of 69.95 and an mAP50–95 score of 0.55. `,
                    `The dataset was obtained from State Horticulture Farm, Government of Tamil Nadu. CVAT was used to annotate the dataset. 
                    I used OpenCV to capture camera stream to perform real-time object detection.`,
                    `Currently I am refining the system by trying state-of-the-art object detection techniques. 
                    In particular, I am implementing a Real-Time Detection Transformer with a Resnet-50 backbone in PyTorch to perform the object detection. 
                    I am also gathering more images (and videos) of lemons for the dataset to have a better model. 
                    This system could be used in robots and drones for agricultural automation.`
                ]}
                    imageName={lemonImage}
                />
                <PostText postTitle={"Discord Bot(TypeScript, MySQL)"} 
                postDescription={[
                    `I have developed a Discord Bot, Othinus, for my friends' Discord servers. 
                    The bot has administrative features such as kicking and banning server members. 
                    It offers a server-wise greeting message that can be set by a server administrator. 
                    The bot also has a built-in economy system that allows users to play minigames and earn virtual game currency.`, 
                    `The bot is written using Discord.js and TypeScript to interact with the Discord API. Slash commands are registered through the Discord REST API. 
                    The user currency data and greeting messages are stored in a MySQL database. 
                    The application and the database are containerized using Docker and Docker Compose.`,
                    `I have plans to add virtual games that gain currency, and an inventory system for each user with a virtual shop containing items.`
                    ]}/>
                <PostText postTitle={"A Trading Bot(C++, Python)"}
                postDescription={[
                    `I am currently implementing a trading bot. 
                    The bot generates signals based on stock returns and other indicators using machine learning techniques such as random forests, XGBoost, LightGBM, etc., 
                    A simulated stock exchange will offer a REST API to obtain the latest value of the stock and the past values.`,
                    `The exchange is written in C++ using Drogon for the API and Eigen. 
                    The past stock prices are stored in a database consisting of time stamp and the price. 
                    There is no visualization of this right now, but I will consider adding visualization separately using both Python(Matplotlib) and C++(ImGui and ImPlot).`,
                ]}
                />
            </div>
        </div>
    );
}

export default HomePage;