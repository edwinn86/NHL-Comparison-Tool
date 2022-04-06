import { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';

function FormComponent(props) {



  const [season, updateSeason] = useState('');
  const [teams, updateTeams] = useState([]);
  const [selectedTeam, updateSelectedTeam] = useState(null);
  const [players, updatePlayers] = useState([]);
  const [selectedPlayer, updateSelectedPlayer] = useState(null);
  const [resetCount, updateReset] = useState(props.resetCount);
  const formid = props.formid;



  //Ensures that player card is reset when reset button is clicked

  if (props.resetCount > resetCount) {
    updateSelectedTeam(null);
    updateSelectedPlayer(null);
    updatePlayers([]);
    updateTeams([]);
    updateSeason('');
    updateReset(props.resetCount);
  }
  
  if (season.length === 0) {
    updateSeason('2021-2022');
  }


  //update teams
  useEffect(() => {

    let fixedSeason = season.replace(/-/g, "");
    function fetchData() {



      fetch(`https://statsapi.web.nhl.com/api/v1/teams?season=${fixedSeason}`, {
        method: "GET",


      })
        .then(res => res.json())
        .then(
          (result) => {
            updateTeams(result.teams.sort(function (a, b) {

              var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
              if (nameA < nameB) //sort string ascending
                return -1
              if (nameA > nameB)
                return 1
              return 0 //default return value (no sorting)
            }));


          },


        )
    }

    fetchData();
    return;
  }, [season]);



  //update players

  useEffect(() => {



    if (props.formType === "teamForms") {
      return;
    }


    let teamSelected = teams.find(function isTeam(team) {
      return team.name === selectedTeam;
    })

    if (teamSelected === undefined) {
      teamSelected = { id: 24 };
    }

    let fixedSeason = season.replace(/-/g, "");

    async function fetchData() {



      await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamSelected.id}?expand=team.roster&season=${fixedSeason}`, {
        method: "GET",


      })
        .then(res => res.json())
        .then(
          (result) => {

            let sortedPlayers = result.teams[0].roster.roster.sort(function (a, b) {
              var nameA = a.person.fullName.toLowerCase(), nameB = b.person.fullName.toLowerCase()
              if (nameA < nameB) //sort string ascending
                return -1
              if (nameA > nameB)
                return 1
              return 0 //default return value (no sorting)
            });

            updatePlayers(
              sortedPlayers
            );

            updateSelectedPlayer(sortedPlayers[0]);


          },


        )
    }

    fetchData();
    return;
  }, [selectedTeam, season, teams]);


  //Checks to see if current form should render a player form, a (+), or a player card
  if (formid > props.formCount) {
    return (
      <div className="column is-3">
        <p className="addClick" onClick={() => { props.addCount(props.formCount + 1) }}>+</p>
      </div>);
  }



  if (props.formType === "playerForms") {

    return (


      <div className="column is-3">
        <form>
          <h2>Player {formid}</h2>
          <br />
          <label>Season: </label>
          <select value={season} onChange={evt => updateSeason(evt.target.value)} name="selectList" id="selectList">
            <option value="2021-2022">2021-2022</option>
            <option value="2020-2021">2020-2021</option>
            <option value="2019-2020">2019-2020</option>
            <option value="2018-2019">2018-2019</option>
            <option value="2017-2018">2017-2018</option>
            <option value="2016-2017">2016-2017</option>
          </select>

          <br></br>
          <br />

          <label>Team: </label>
          <select value={selectedTeam} onChange={evt => updateSelectedTeam(evt.target.value)} name="selectList" id="selectList">
            {teams.map(team => (
              <option>{team.name}</option>
            ))}
          </select>

          <br></br>
          <br />

          <label>Player: </label>
          <select value={selectedPlayer === null ? 'None' : selectedPlayer.person.fullName} onChange={evt => updateSelectedPlayer(players.find((player) => { return player.person.fullName === evt.target.value }))} name="selectList" id="selectList">
            {players.map(player => (
              <option>{player.person.fullName}</option>
            ))}
          </select>

        </form>

      </div>

    )



  } else {



    return (<PlayerCard season={season} selectedPlayer={selectedPlayer} formid={formid} />);



  }
























}

export default FormComponent