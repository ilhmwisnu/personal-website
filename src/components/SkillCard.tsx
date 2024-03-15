type Props = {
  className: string;
  skill: string;
  detail: string;
  imgSrc: string;
};

const SkillCard = (props: Props) => {
  return (
    <div className="mt-4 w-full flex flex-col justify-start ">
      <img src={props.imgSrc} className={props.className} alt="" />
      <h3 className="mt-6 font-bold">{props.skill}</h3>
      <p className="mt-4">{props.detail}</p>
    </div>
  );
};

export default SkillCard;
