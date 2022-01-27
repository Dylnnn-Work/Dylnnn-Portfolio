const AboutMe = () => {
    return (
        <div Style="margin-top:140px">
            <div Style="display:flex;justify-content:center;">
                <h1>More about me</h1>
            </div>
            <div className="container-dates">
                <h5 >Place</h5>
                <span>I live in Buenos Aires, Argentina.</span>
                <h5 className="textAboutme">Hobbies</h5>
                <span>Guitar🎸, videogames🎮 and Sports&fitnes🏋🏾‍♀️.</span>
                <h5 className="textAboutme">Sports</h5>
                <span>Futbol⚽, calisthenics🤸🏾‍♂️, natation🏊🏾‍♂️ and weightlifting🏋🏾‍♀️.</span>
                <h5 className="textAboutme">Work kit</h5>
                <span>Windows, VSC, Git, Google Chrome, Postman.</span>
                <h5 className="textAboutme">Technologies</h5>
                <span Style="width:900px;text-align:center">TypeScript,
                    JavaScript,
                    React JS,
                    NodeJS,
                    Redux JS,
                    HTML,
                    CSS,
                    Express JS,
                    MongoDB,
                    Next JS,
                    PosgreSQL and
                    Knowledge of algorithms and data structures.
                </span>
                <h5 className="textAboutme">Lenguages</h5>
                <span>native Spanish,
                    intermediate English,
                    intermediate Portugese.
                </span>

            </div>
        </div>
    )
}

export default AboutMe;