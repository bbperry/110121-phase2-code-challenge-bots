import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCard from './BotCard'

function BotCollection({bots, handleAddArmy, handleDelete}) {
  // Your code here


  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot=> <BotCard key={bot.id} bot={bot} handleArmyClick={handleAddArmy} handleDelete={handleDelete} />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
