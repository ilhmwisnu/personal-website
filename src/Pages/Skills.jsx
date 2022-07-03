import SkillCard from "../Components/SkillCard";

const Skills = () => {
    return ( <div className="pt-24 pb-16" id="skills">
        <h2 className="font-bold text-3xl">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
            <SkillCard skill="UI Design" className="w-10" imgSrc="./figma.svg" detail="asd asd asodnasl d asdoasknda sdalo sd as dasdjpoas doaks oas dasbdka aksjdbkas aosjdhoajsd ikajsd aksjdakjsd askdjabksdj asodjbaks askdjabsdk askbkasjd aklsjdbak" ></SkillCard>
            <SkillCard skill="Front-End Web Development" className="w-16" imgSrc="./React.png" detail="asd asd asodnasl d asdoasknda sdalo sd as dasdjpoas doaks oas dasbdka aksjdbkas aosjdhoajsd ikajsd aksjdakjsd askdjabksdj asodjbaks askdjabsdk askbkasjd aklsjdbak" ></SkillCard>
            <SkillCard skill="Mobile App Development" className="w-10" imgSrc="./flutter.png" detail="asd asd asodnasl d asdoasknda sdalo sd as dasdjpoas doaks oas dasbdka aksjdbkas aosjdhoajsd ikajsd aksjdakjsd askdjabksdj asodjbaks askdjabsdk askbkasjd aklsjdbak" ></SkillCard>
        </div>
    </div> );
}
 
export default Skills;