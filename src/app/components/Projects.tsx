import ProjectTile from "../../components/ProjectTile";

const Projects = () => {
  return (
    <div className="pt-24 pb-16" id="projects">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col gap-16">
        <ProjectTile
          title="SirKasir App"
          subtitle="Mobile App"
          desc="SirKasir is a robust point-of-sale (POS) and offline cashier application designed to streamline and enhance business operations. With user-friendly features, including easy sales recording, comprehensive sales reports, and data security, SirKasir enables businesses to manage transactions effortlessly."
          src="./sirkasir_project.png"
        ></ProjectTile>
        <ProjectTile
          title="Siresto App"
          subtitle="Mobile App"
          desc="Siresto is an innovative, cloud-based Restaurant Point of Sale (POS) application designed to revolutionize the way culinary establishments manage their operations. This online POS solution is crafted with a focus on user-friendliness and robust functionality to elevate the restaurant experience for both staff and customers."
          src="./siresto_project.png"
        ></ProjectTile>
        <ProjectTile
          title="Cartgo UI Design"
          subtitle="Mobile App UI Design"
          desc="Cartgo is a comprehensive mobile application designed to revolutionize the agricultural product marketplace. This app serves as a platform connecting farmers, suppliers, and buyers, facilitating seamless transactions and fostering a thriving agricultural community. With an intuitive user interface and robust features, Cartgo aims to streamline the buying and selling process for agricultural products."
          src="./cartgo_project.png"
        ></ProjectTile>
      </div>
    </div>
  );
};

export default Projects;
