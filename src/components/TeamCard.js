import { useState, useEffect } from 'react';
import ReactImageAppear from 'react-image-appear';

function TeamCard(props) {



  const [teamCard, updateTeamCard] = useState({});


  if (Object.keys(teamCard).length === 0 || teamCard.id !== props.selectedTeam.id) {
    let fixedSeason = props.season.replace(/-/g, "");
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${props.selectedTeam.id}/stats?stats=statsSingleSeason&season=${fixedSeason}`, {
      method: "GET",


    })
      .then(res => res.json())
      .then(
        (result) => {


          let card = {

            id: props.selectedTeam.id,
            points: result.stats[0].splits[0].stat.pts,
            wins: result.stats[0].splits[0].stat.wins,
            losses: result.stats[0].splits[0].stat.losses,
            OTL: result.stats[0].splits[0].stat.ot,
            PP: (Math.round(result.stats[0].splits[0].stat.powerPlayPercentage * 100) / 100).toFixed(2),
            PK: (Math.round(result.stats[0].splits[0].stat.penaltyKillPercentage * 100) / 100).toFixed(2),
            shots: (Math.round(result.stats[0].splits[0].stat.shotsPerGame * 100) / 100).toFixed(2),
            shotsAgainst: (Math.round(result.stats[0].splits[0].stat.shotsAllowed * 100) / 100).toFixed(2)

          }



          updateTeamCard(card);









        },


      )
  }




  return (

    <div className="column">
      <div id="card">
        <div className="card_head_team">
          <h1 className="cardHead">{props.selectedTeam.name}</h1>
          <ReactImageAppear className="teamLogo"
            src={`
                https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.selectedTeam.id}.svg`}
            loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
          />
        </div>

        <table>
          <tr>
            <td>
              <span className="statName"><strong className="right"><p>Points:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.points}</strong></span>
            </td>

          </tr>
          <tr>
            <td>
              <span className="statName"><strong className="right"><p>Wins:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.wins}</strong></span>
            </td>

          </tr>
          <tr>
            <td>
              <span className="statName"><strong className="right"><p>Losses:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.losses}</strong></span>
            </td>

          </tr>

          <tr>
            <td>
              <span className="statName"><strong className="right"><p>OTL:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.OTL}</strong></span>
            </td>

          </tr>

          <tr>
            <td>
              <span className="statName"><strong className="right"><p>PP%:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.PP}</strong></span>
            </td>

          </tr>


          <tr>
            <td>
              <span className="statName"><strong className="right"><p>PK%:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.PK}</strong></span>
            </td>

          </tr>

          <tr>
            <td>
              <span className="statName"><strong className="right"><p>Shots:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.shots}</strong></span>
            </td>

          </tr>
          <tr>
            <td>
              <span className="statName"><strong className="right"><p>Shots Against:</p></strong></span>
            </td>

            <td>
              <span><strong>{teamCard.shotsAgainst}</strong></span>
            </td>

          </tr>
        </table>

      </div>

    </div>);






}


export default TeamCard