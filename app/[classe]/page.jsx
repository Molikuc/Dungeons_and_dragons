import Link from "next/link";

export default async function ClassesDetail({ params }) {
  const { classe } = params;
  const data = await fetch(`https://www.dnd5eapi.co/api/classes/${classe}`);
  const res = await data.json();

  const skills = res.proficiency_choices[0].from.options.map((skill) => ({
    name: <h3 key={skill.item.index}>{skill.item.name.slice(6)}</h3>,
    index: skill.item.index.slice(6),
  }));

  const getSkills = skills.map((skill) => skill.index);
  const getName = skills.map((skill) => skill.name);

  const skillsData = await Promise.all(
    skills.map(async (skills) => {
      const data = await fetch(
        `https://www.dnd5eapi.co/api/skills/${skills.index}`
      );
      const res = await data.json();
      return res;
    })
  );

  return (
    <div>
      <h1>{res.name}</h1>
      <h2>{res.proficiency_choices[0].desc}</h2>
      {skillsData.map((skill) => {
        const matchedSkill = skills.find((s) => s.index === skill.index);
        return (
          <div key={skill.index}>
            <h3>{matchedSkill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        );
      })}
      <Link href="./">Back Home</Link>
    </div>
  );
}
