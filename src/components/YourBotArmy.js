import React from 'react';
import BotCard from './BotCard'

function YourBotArmy({ bots, handleRelease, handleDelete }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map(bot=> <BotCard key={bot.id} bot={bot} handleArmyClick={handleRelease} handleDelete={handleDelete}/> )}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
