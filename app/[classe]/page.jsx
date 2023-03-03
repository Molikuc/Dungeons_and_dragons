import Link from "next/link";

export default async function ClassesDetail({ params }) {
  const { classe } = params;
  const data = await fetch(`https://www.dnd5eapi.co/api/classes/${classe}`);
  const res = await data.json();

  const skills = res.proficiency_choices[0].from.options.map((skill) => ({
    name: skill.item.name.slice(6),
    index: skill.item.index.slice(6),
  }));

  // const getSkills = skills.map((skill) => skill.index);
  // const getName = skills.map((skill) => skill.name);

  const skillsData = await Promise.all(
    skills.map(async (skills) => {
      const data = await fetch(
        `https://www.dnd5eapi.co/api/skills/${skills.index}`
      );
      const res = await data.json();
      return res;
    })
  );

  // const handleClick = (event) => {
  //   setIsActive((current) => !current);
  // };

  return (
    <div>
      <div className="font-sans m-8 text-center">
        <h1 className="font-bold text-4xl py-4 justify-center">{res.name}</h1>
        <h2 className="text-xl py-5">
          Proficiencies : {res.proficiency_choices[0].desc}
        </h2>
        <div className="grid gap-5 grid-cols-fluid">
          {skillsData.map((skill) => {
            const matchedSkill = skills.find((s) => s.index === skill.index);
            return (
              <div
                className="border-2 p-4 bg-light-grey cursor-pointer active:last:inline"
                key={skill.index}
              >
                <h3 className="text-xl pb-4 ">{matchedSkill.name}</h3>
                <p>{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center py-5">
        <Link
          className="w-28 border-2 p-3 text-center hover:bg-light-grey"
          href="./"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
