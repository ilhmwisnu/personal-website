import ProjectTile from "../Components/ProjectTile";

const Projects = () => {
    return (
        <div className="py-16" id="projects">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="flex flex-col gap-16">
                <ProjectTile
                    title="One-page Personal Website for Freelance Marketer, Nicole Warshauer"
                    subtitle="Website Design, Webflow Build"
                    desc="This was a fully custom website that I designed from scratch in Figma, and then built in Webflow. The aim was to have a friendly, yet professional vibe. The site is very fast—with a Google Pagespeed score of 99 for desktop and 92 for mobile."
                    src="https://cdn.dribbble.com/users/7073797/screenshots/15509388/a00b9c20-b6b1-4fb9-9bb8-d69764322182_4x.png"
                ></ProjectTile>
                <ProjectTile
                    title="One-page Personal Website for Freelance Marketer, Nicole Warshauer"
                    subtitle="Website Design, Webflow Build"
                    desc="This was a fully custom website that I designed from scratch in Figma, and then built in Webflow. The aim was to have a friendly, yet professional vibe. The site is very fast—with a Google Pagespeed score of 99 for desktop and 92 for mobile."
                    src="https://cdn.dribbble.com/users/7073797/screenshots/15509388/a00b9c20-b6b1-4fb9-9bb8-d69764322182_4x.png"
                ></ProjectTile>
                <ProjectTile
                    title="One-page Personal Website for Freelance Marketer, Nicole Warshauer"
                    subtitle="Website Design, Webflow Build"
                    desc="This was a fully custom website that I designed from scratch in Figma, and then built in Webflow. The aim was to have a friendly, yet professional vibe. The site is very fast—with a Google Pagespeed score of 99 for desktop and 92 for mobile."
                    src="https://cdn.dribbble.com/users/7073797/screenshots/15509388/a00b9c20-b6b1-4fb9-9bb8-d69764322182_4x.png"
                ></ProjectTile>
            </div>
        </div>
    );
};

export default Projects;
