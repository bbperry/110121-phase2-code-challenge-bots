import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = 'http://localhost:8002/bots'

function BotsPage() {

  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function handleAddArmy(enlist) {
    setBots(
      bots.map((bot) =>
        bot.id === enlist.id ? { ...bot, enlisted: true } : bot
      )
    );
  }

  function handleRelease(enlist) {
    setBots(
      bots.map((bot) =>
        bot.id === enlist.id ? { ...bot, enlisted: false } : bot
      )
    );
  }

  function handleDelete(id) {
    setBots(bots.filter(bot=> bot.id !== id))
  }


  return (
    <div>
      <YourBotArmy bots={bots.filter(bots=> bots.enlisted)} handleRelease={handleRelease} handleDelete={handleDelete} />
      <BotCollection bots={bots} handleAddArmy={handleAddArmy} handleDelete={handleDelete}/>
    </div>
  )
}

export default BotsPage;
