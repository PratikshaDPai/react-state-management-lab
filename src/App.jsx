// src/App.jsx

import { useState } from "react";
import "./App.css";

function TeamButton({
  isTeamMember,
  handleAddFighter,
  handleRemoveFighter,
  isMoneyEnough,
}) {
  if (isTeamMember) {
    return <button onClick={handleRemoveFighter}>Remove</button>;
  } else {
    return (
      <button onClick={handleAddFighter} disabled={isMoneyEnough}>
        Add
      </button>
    );
  }
}

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  function handleAddFighter(fighter) {
    // Add a new fighter without modifying the old team array
    // Create a new copy and set that to the team variable
    const newTeam = [...team];
    newTeam.push(fighter);
    setTeam(newTeam);
    setMoney(money - fighter.price);
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter((teamMate) => teamMate.id !== fighter.id));
    setMoney(money + fighter.price);
  }

  return (
    <>
      {team.length === 0 ? <p>Pick some team members!</p> : null}
      <p>Money: {money}</p>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} />
            <p className="fighter-name">
              {zombieFighter.name} ${zombieFighter.price}
            </p>
            <TeamButton
              isTeamMember={team.find(
                (teamMember) => teamMember.id === zombieFighter.id
              )}
              handleAddFighter={() => handleAddFighter(zombieFighter)}
              handleRemoveFighter={() => handleRemoveFighter(zombieFighter)}
              isMoneyEnough={money - zombieFighter.price < 0}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
