import Link from "next/dist/client/link";

const Certificates = ({ certificates }) => {
    return (
        <>
            <h1 className="title-projects">Certificates</h1>
            <div className="container-projects">
            <div>
            {
                certificates.map(certificate => {
                    return (
                        <div>
                        <div className="card-projects" >
                            <Link href={certificate.url}>
                                <img Style="object-fit: contain; width:800px"src={certificate.img} alt={certificate.name} />
                            </Link>
                        </div>
                            <h4>{certificate.name}</h4>
                        </div>
                    )
                })
            }</div>
            </div>
        </>
    )
}

export default Certificates;