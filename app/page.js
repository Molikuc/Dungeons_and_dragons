import Link from "next/link";

async function getClasses() {
  const res = await fetch(`https://www.dnd5eapi.co/api/classes`);
  return res.json();
}

async function getSkills() {
  const res = await fetch("https://www.dnd5eapi.co/api/skills");
  return res.json();
}

export default async function Home() {
  const classes = await getClasses();
  const className = classes.results.map((classe) => (
    <Link key={classe.index} href={`/${classe.index}`}>
      <h2 className="text-2xl py-3 hover:bg-light-grey">{classe.name}</h2>
    </Link>
  ));

  const skills = await getSkills();

  return (
    <div className="font-sans m-8 flex flex-col text-center">
      <h1 className="font-bold text-5xl m-5 text">Choose your class</h1>
      {className}
    </div>
  );
}
