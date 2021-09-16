import { useState, useEffect } from 'react';
import ReactImageAppear from 'react-image-appear';

function PlayerCard(props){



    const [playerCard, updatePlayerCard1] = useState({});


    if (Object.keys(playerCard).length === 0 || playerCard.playerID !== props.selectedPlayer.person.id) {
        let fixedSeason = props.season.replace(/-/g, "");
         fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.selectedPlayer.person.id}/stats?stats=statsSingleSeason&season=${fixedSeason}`, {
          method: "GET",


        })
          .then(res => res.json())
          .then(
            (result) => {






              let playerCardStats = {
                playerID: props.selectedPlayer.person.id,
                gamesPlayed: result.stats[0].splits[0].stat.games,
                points: result.stats[0].splits[0].stat.points,
                goals: result.stats[0].splits[0].stat.goals,
                assists: result.stats[0].splits[0].stat.assists,
                plusMinus: result.stats[0].splits[0].stat.plusMinus,
                PPG: result.stats[0].splits[0].stat.powerPlayGoals,
                PIM: result.stats[0].splits[0].stat.powerPlayGoals,
                shots: result.stats[0].splits[0].stat.shots,
                shotPct: result.stats[0].splits[0].stat.shotPct



              }




              updatePlayerCard1(playerCardStats);






            },


          )
      }






    return(
    
    
      <div className="column">
        <div id="card">
          <div id="card_head">
            <div className="centerHead">
              <h1 className="cardHead">{props.selectedPlayer.person.fullName}</h1>
              <ReactImageAppear className="playerFace"
                src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${props.selectedPlayer.person.id}.jpg`}
                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
              />
              <h2>{props.selectedPlayer.position.name}</h2>
            </div>
          </div>
          <div>
            <span>
              <p>{playerCard.gamesPlayed}</p>
            </span>
          </div>
          <div id="stat_div">
            <span>
              <p>{playerCard.points}</p>
            </span>
          </div>
          <div>
            <span>
              <p>{playerCard.goals}</p>
            </span>
          </div>

          <div>
            <span>
              <p>{playerCard.assists}</p>
            </span>
          </div>

          <div>
            <span>
              <p>{playerCard.plusMinus}</p>
            </span>
          </div>


          <div>
            <span>
              <p>{playerCard.PPG}</p>
            </span>

          </div>

          <div>
            <span>
              <p>{playerCard.PIM}</p>
            </span>
          </div>

          <div>
            <span>
              <p>{playerCard.shots}</p>
            </span>

          </div>

          <div>
            <span>
              <p>{playerCard.shotPct}</p>
            </span>
          </div>

        </div>

      </div>)












}


export default PlayerCard