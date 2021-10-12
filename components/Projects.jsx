import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";

const Projects = ({ projects }) => {
    const router = useRouter();

    const handleClick = (route) => {
        router.push(`/projects/${route}`)
    }

    return (
        <>
        <div className="title-projects">
            <h1>Projects</h1>
        </div>
            <div className="container-projects">
                <div>
                    {projects.map((r, index) => {
                        return (
                            <div key={index}> 
                            <Link href={"/projects/" + r.id}  >
                                <div>
                                    <div  className="card-projects" >
                                        <img className="project-img" src={r.principal_img} alt={r.name} />
                                    </div>
                                    <h2>{r.name}</h2>
                                </div>
                            </Link> 
                            {/* <button onClick={() => handleClick(r.name)} className="btn-primary primary">ir a este proyecto</button> */}
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default Projects;