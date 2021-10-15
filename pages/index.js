import Hire from "../components/Hire";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import projects from "../info";
const index = () => {
  return (
    <div>
      <Layout>
          <Profile />
          <Projects projects={projects}/>
          <Hire />
      </Layout>
    
    </div>
  );
};

export default index;
