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
  const className = classes.results.map((className) => (
    <Link key={className.index} href={`/${className.index}`}>
      <h2>{className.name}</h2>
    </Link>
  ));

  const skills = await getSkills();

  return (
    <div>
      <h1>Choose your class</h1>
      {className}
    </div>
  );
}
