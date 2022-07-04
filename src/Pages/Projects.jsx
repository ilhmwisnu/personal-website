import ProjectTile from "../Components/ProjectTile";

const Projects = () => {
    return (
        <div className="pt-24 pb-16" id="projects">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="flex flex-col gap-16">
                <ProjectTile
                    title="sapien nec sagittis aliquam"
                    subtitle="Mobile Development"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Morbi tincidunt augue interdum velit euismod."
                    src="https://cdn.dribbble.com/users/7073797/screenshots/15509388/a00b9c20-b6b1-4fb9-9bb8-d69764322182_4x.png"
                ></ProjectTile>
                <ProjectTile
                    title="nunc mi ipsum faucibus"
                    subtitle="Website Development"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Morbi tincidunt augue interdum velit euismod."
                    src="https://themes.getbootstrap.com/wp-content/uploads/2021/05/soft-ui-design-system-thumbnail.jpg"
                ></ProjectTile>
                <ProjectTile
                    title="adipiscing vitae proin sagittis"
                    subtitle="Mobile App Design"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Morbi tincidunt augue interdum velit euismod."
                    src="https://images.wondershare.com/mockitt/ui-design/ui-example-round-corners-trend.png"
                ></ProjectTile>
            </div>
        </div>
    );
};

export default Projects;
