import '../css/App.css'

function About() {
    return (
        <div>
            <h3 class="pageTitle">About Me</h3>
            <div class="content">
                <h2 class="subheading">Summary</h2>
                <p>Hello, I am Vimal. I am interested in many things computational. I do game development, physics simulations, machine learning, and deep learning. 
                    I have experience in computational techniques such as creating ODE and PDE solvers to be used in physics and engineering problems. 
                    I have developed machine learning and deep learning models for my projects.</p>
                <p></p>
                <p>I also have some experience with backend web development by developing a Discord bot using Discord.js in TypeScript. 
                    This portfolio is built using React and JavaScript.</p>
                <p>I have graduated with MSc in Physics from IISER Thiruvananthapuram in 2024. </p>
                <hr></hr>
                <div class="cv">
                    <h2 class="subheading">CV</h2>
                    <h3 class="cv_subheading">Experience</h3>
                    <ul>
                        <li class="cv_nobullet">
                        <span class="cv_left"><h3 class="cv_top">Research: Master's Dissertation</h3></span>
                        <span class="cv_right"><h4 class="cv_top">December 2023 - May 2024</h4></span>
                        <div class="clear"></div>

                        <span class="cv_left"><h4>Title: Derivation of van der Waals Attractive Forces From Electromagnetic Fluctuations </h4></span>
                        <div class="clear"></div>
                        <p>Summary: The expression for the van der Waals attractive force between two plates was calculated from fundamental principles of electromagnetic fluctuations 
                            using techniques from Statistical Field Theory.
                        </p>

                        </li>
                    </ul>

                    <h3 class="cv_subheading">Education</h3>
                    <ul>
                        <li class="cv_nobullet">
                            <span class="cv_left"><h3 class="cv_top">Master of Science in Physics</h3></span>
                            <span class="cv_right"><h4 class="cv_top">2022-2024</h4></span>
                            <div class="clear"></div>

                            <span class="cv_left"><h4>Indian Institute of Science Education and Research, Thiruvananthapuram</h4></span>
                            <span class="cv_right"><h4>Vithura, Kerala, India</h4></span>
                            <div class="clear"></div>

                            <span class="cv_left"><p>CGPA: 9.20/10 - With Distinction.</p></span>
                            <span class="cv_right"></span>
                            <div class="clear"></div>
                            <p>Coursework: Classical Mechanics, Electromagnetism, Statistical Mechanics, Computational Physics, Machine Learning.</p>
                        </li>

                        <li class="cv_nobullet"><br></br></li>

                        <li class="cv_nobullet">
                            <span class="cv_left"><h3 class="cv_top">Bachelor of Science in Physics</h3></span>
                            <span class="cv_right"><h4 class="cv_top">2019-2022</h4></span>
                            <div class="clear"></div>

                            <span class="cv_left"><h4>St. Xavier's College (Autonomous), Palayamkottai </h4></span>
                            <span class="cv_right"><h4>Tirunelveli, Tamil Nadu, India</h4></span>
                            <div class="clear"></div>

                            <span class="cv_left"><h4>Affiliated to Manonmaniam Sundaranar University, Tirunelveli</h4></span>
                            <span class="cv_right"></span>
                            <div class="clear"></div>

                            <span class="cv_left"><p>CGPA: 8.81/10 - First Class with Distinction.</p></span>
                            <span class="cv_right"></span>
                            <div class="clear"></div>
                            <span class="cv_left"><p>Coursework: C++ Programming, Electronics-1,2, Microprocessors.</p></span>
                            <div class="clear"></div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default About;