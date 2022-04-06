import { useState, useEffect } from 'react';
import TeamCard from './TeamCard';

function TeamFormComponent(props) {

    const [season, updateSeason] = useState('');
    const [teams, updateTeams] = useState([]);
    const [selectedTeam, updateSelectedTeam] = useState(null);
    const formid = props.formid;

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

                        console.log(result);
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


    //initialize first team (Anaheim Ducks)
    if(teams.length > 0 && selectedTeam === null){
        updateSelectedTeam(teams[0]);
    }

    if(props.formid > props.formCount){

        return(<div className="column is-3"><p className="addClick" onClick={() => {props.addCount(props.formCount + 1)}}>+</p></div>)
    }


    if (props.formType === "teamForms") {

        return (


            <div className="column is-3">
                <form>
                    <h2>Team {formid}</h2>
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
                    <select value={selectedTeam === null ? 'None' : selectedTeam.name} onChange={evt => updateSelectedTeam(teams.find((team) => { return team.name === evt.target.value }))} name="selectList" id="selectList">
                        {teams.map(team => (
                            <option>{team.name}</option>
                        ))}
                    </select>


                </form>

            </div>

        )

    } else if(props.formType === "teamCards"){


       return( <TeamCard season = {season} selectedTeam = {selectedTeam} /> );


    }


}

export default TeamFormComponent