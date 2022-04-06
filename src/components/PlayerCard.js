import { useState, useEffect } from 'react';
import ReactImageAppear from 'react-image-appear';

function PlayerCard(props) {



  const [playerCard, updatePlayerCard] = useState({});


  if (Object.keys(playerCard).length === 0) {
    let fixedSeason = props.season.replace(/-/g, "");
    fetch(`https://statsapi.web.nhl.com/api/v1/people/${props.selectedPlayer.person.id}/stats?stats=statsSingleSeason&season=${fixedSeason}`, {
      method: "GET",


    })
      .then(res => res.json())
      .then(
        (result) => {



          if (props.selectedPlayer.position.name === 'Goalie') {
            console.log(result);
            let playerCardStats = {

              playerID: props.selectedPlayer.person.id,
              gamesPlayed: result.stats[0].splits[0].stat.games,
              savePct: (Math.round(result.stats[0].splits[0].stat.evenStrengthSavePercentage * 100) / 100).toFixed(2),
              GAA: (Math.round(result.stats[0].splits[0].stat.goalAgainstAverage * 100) / 100).toFixed(2),
              shutouts: result.stats[0].splits[0].stat.shutouts,
              shotsAgainst: result.stats[0].splits[0].stat.shotsAgainst,
              wins: result.stats[0].splits[0].stat.wins
            }

            updatePlayerCard(playerCardStats);
          } else {

            let playerCardStats = {
              playerID: props.selectedPlayer.person.id,
              gamesPlayed: result.stats[0].splits[0].stat.games,
              points: result.stats[0].splits[0].stat.points,
              goals: result.stats[0].splits[0].stat.goals,
              assists: result.stats[0].splits[0].stat.assists,
              plusMinus: result.stats[0].splits[0].stat.plusMinus,
              PPG: result.stats[0].splits[0].stat.powerPlayGoals,
              PIM: result.stats[0].splits[0].stat.penaltyMinutes,
              shots: result.stats[0].splits[0].stat.shots,
              shotPct: result.stats[0].splits[0].stat.shotPct



            }

            updatePlayerCard(playerCardStats);

          }







        },


      )
  }





  if (props.selectedPlayer.position.name === "Goalie") {

    return (


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

          <table>

            <tr>
              <td className="goalieData">
                <span className="statName"><strong className="right"><p>Games Played:</p></strong></span>
              </td>

              <td>
                <span><strong>{playerCard.gamesPlayed}</strong></span>
              </td>

            </tr>
    


            <tr>
              <td  className="goalieData">
                <span className="statName"><strong className="right"><p>Save%:</p></strong></span>
              </td>
              <td>
                <span>
                  <strong>{playerCard.savePct}</strong>
                </span>
              </td>

            </tr>
            <tr>
              <td  className="goalieData">
                <span className="statName"><strong className="right"><p>GAA: </p></strong></span>
              </td>
              <td>
                <span>
                  <strong>{playerCard.GAA}</strong>
                </span>
              </td>

            </tr>

            <tr>
              <td  className="goalieData">
                <span className="statName"><strong className="right"> <p>Shutouts: </p></strong></span>
              </td>
              <td>
                <span>
                  <strong>{playerCard.shutouts}</strong>
                </span>
              </td>

            </tr>

            <tr>
              <td  className="goalieData">
                <span className="statName"><strong className="right"><p>Shots Against:</p></strong></span>
              </td>
              <td>
                <span>
                  <strong>{playerCard.shotsAgainst}</strong>
                </span>
              </td>

            </tr>
            <tr>
              <td  className="goalieData">
                <span className="statName"><strong className="right"><p>Wins:</p></strong></span>
              </td>
              <td>
                <span>
                  <strong>{playerCard.wins}</strong>
                </span>
              </td>

            </tr>


          </table>

        </div>
      </div>);

  }


  return (


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

        <table>

          <tr>
            <td>
              <span className="statName"><strong className="right"><p>Games Played:</p></strong></span>
            </td>

            <td>
              <span><strong>{playerCard.gamesPlayed}</strong></span>
            </td>

          </tr>


          <tr>
            <td >
              <span className="statName"><strong className="right"><p> Points:</p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.points}</strong>
              </span>
            </td>

          </tr>

          <tr>
            <td >
              <span className="statName"><strong className="right"><p> Goals: </p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.goals}</strong>
              </span>
            </td>

          </tr>


          <tr>
            <td >
              <span className="statName"><strong className="right"> <p>Assists: </p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.assists}</strong>
              </span>
            </td>

          </tr>


          <tr>
            <td >
              <span className="statName"><strong className="right"><p> +/-</p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.plusMinus}</strong>
              </span>
            </td>

          </tr>


          <tr>
            <td >
              <span className="statName"><strong className="right"><p> PPG:</p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.PPG}</strong>
              </span>
            </td>

          </tr>


          <tr>
            <td >
              <span className="statName"><strong className="right"><p> PIM:</p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.PIM}</strong>
              </span>
            </td>

          </tr>

          <tr>
            <td >
              <span className="statName"><strong className="right"><p> Shots:</p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.shots}</strong>
              </span>
            </td>

          </tr>

          <tr>
            <td >
              <span className="statName"><strong className="right"><p> Shot%:</p></strong></span>
            </td>
            <td>
              <span>
                <strong>{playerCard.shotPct}</strong>
              </span>
            </td>

          </tr>


        </table>

      </div>
    </div >
  )












}


export default PlayerCard