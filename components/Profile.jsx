const Profile = () => {
    return (
        <div className="card card-body">
            <div className="row">
                <div className="col-md-2">
                    <img src="profile-photo.jpg" alt="Dylan Alejandro Gonzalez" className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h1>Dylan Gonzalez</h1>
                    <h5>About</h5>
                    <span>
                        Hi i'm Dylan 👨🏽‍💻, i'm a Full-Stack JavaScript Developer. I've experience in Scrum projects with TypeScript, React, Redux, Node, Express, postgreSQl, sequelize, MongoDB, Mongoose, GraphQl, Apollo Client, Tailwind CSS, among others.
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Profile;