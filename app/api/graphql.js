export default async function Handler(req, res) {
  await fetch("https://www.dnd5eapi.co/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query ExampleQuery {
        classes {
          index
          name
          proficiency_choices {
            desc
            choose
            from {
              options {
                ... on ProficiencyReferenceOption {
                  item {
                    name
                    index
                  }
                }
              }
            }
          }
        }
        skills {
          name
          desc
          index
        }
      }
      
      `,
    }),
    next: { revalidate: 10 },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.classes));
}

// const getClasses = data.classes;
// const getSkills = data.skills;

// const skillsIndex = getSkills?.map((skill) => "skill-" + skill.index);
// console.log(skillsIndex);

// return (
//   <div>
//     {getClasses?.map((post) => (
//       <div key={post.index}>
//         <h1>{post.name}</h1>
//         <h2>{post.proficiency_choices[0].desc}</h2>
//         {post.proficiency_choices[0].from.options.map((e) => {
//           const matchingSkill = getSkills.find(
//             (skill) => "skill-" + skill.index === e.item.index
//           );
//           return (
//             <div key={e.item.index}>
//               <h3>{e.item.name}</h3>
//               {skillsIndex.includes(e.item.index) ? (
//                 <h4>{matchingSkill.desc}</h4>
//               ) : null}
//             </div>
//           );
//         })}
//       </div>
//     ))}
//   </div>
// );
