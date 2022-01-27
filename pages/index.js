import Certificates from "../components/Certificates";
import Hire from "../components/Hire";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import projects from "../info";
import certificates from "../certificates";
import AboutMe from "../components/MoreAboutMe";
const index = () => {
  return (
    <div>
      <Layout>
        <Profile />
        <Projects projects={projects} />
        <Certificates certificates={certificates} />
        <AboutMe />
        <Hire />
        
      </Layout>
    </div>
  );
};

export default index;
