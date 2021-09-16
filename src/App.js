import logo from './logo.svg';
import 'bulma/css/bulma.min.css';
import './App.css';
import headPic from './Stick.jpg';
import { useState, useEffect } from 'react';
import ReactImageAppear from 'react-image-appear';
import SubmitButton from './SubmitButton';
import RenderTeams from './RenderTeams';
import FormComponent from './FormComponent';
import Sidebar from './Sidebar';



//Top level component. Handles the switching of form types, including the type of button (submit or reset).

function App() {

  const [submitType, updateType] = useState('Players');
  const [color1, updateColor1] = useState('typeButton2');
  const [color2, updateColor2] = useState('typeButton');
  const [formCount, addCount] = useState(2);

 


  return (
    <div>


      <div className="section">
        <div className="container">
          <h1>Hockey Comparison Tool<img className="headPic" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACyCAMAAADRVGVaAAAAgVBMVEX///8AAAD5+fkEBAT19fUYGBgQEBAICAj8/Py3t7cUFBTKysoqKipPT0/x8fHn5+dfX1/e3t4eHh6vr69ZWVnBwcFwcHDW1tbs7Ozk5OSPj48vLy80NDRSUlKBgYFBQUFDQ0OYmJhsbGyjo6OFhYUjIyN4eHinp6eUlJQ6Ojq8vLzq389qAAAHG0lEQVR4nO2c6ZaiMBCFB3dF2hVx35ex3/8BRyU3qCRhq0DmnHy/5vRoEiA3Vbkp/PPHYrFYLBaLxWKxWCwWi0XKqFNOPwFVP51j/UrUlJqgtQ5IGprvHMeZkDSV0NHYcdokHXmPETstmstXUXt1VO8Wb2nhvBjPizelZhZ2NCRo6hg2ta8RtKXgFHbTbxC0VbuHjc0I2pLj1l+d9EYkrQ3G4ZhvJK2JWVzCPqhk7rZfzbX1SbDDnuSWrMVD2OBFmwSZXjzCkKWhyXfYLRn/ELZZW+uUoM8mnkva6qIZjvlE2mrIoEkrPcAWIeI78aShbRHVJsGhvlClKQoumfQGtM2+0BMF/XDC1ekn3JOBBgmOemGbfwnbfMcnl2BjRZe+iWESbJLNu2nY4JoifZPA1H0nkiCTHlH6JqbBouCRpLVuONEcgo2IggWhXEatsK0zQVsqftmi9Fu4pUaf5VoEo1JDNv82YUN9yvRNApHKt2EzGvcNEVhLp4VamYSNaN2dRVDIJmjpSt/EdNkdyi/BHya9fUlmH5+HrbwS7Hga0zcJrMu8Pgm75LpPOyoleLD59q+Q3oF6WEognzzGQ9DWnb6JwZ3Kvsf8YcbQSrPJF4cZlZldXEivqTN9k3S9zxdwr04Z6ZuY+SWPBJknqz19E8PcRSfLQQqkt9E2KjW4Y+klOB+Xl76JmWXMxjD/c4fN4sDaSHuQMsu9MtKBB53OQqpWeoC5i6kkCLnq3zmpObA7l2whDSqXHmDuYqKFVGPSa1cnPT4UZm0kubhHA6QHYPDvlBKE9Mo5wE+CuYtKC4lLr7SdkxpmbShSdnOkB5i10ZZtjBByKox630CCsu0nM0wrSThlwNoQu7hYu6uNet8wd1G4n4M8q0o4ZZylEoS/S1JpQQqTYMybgItukPQA3MXm4vPvJkoP4Dxs/SFBrNlmSQ90BRL8NVR6ABJc8r+MjJUeYGcJ/CAF1p2B0gM/TILsIKUzNVh6AFFw9ZoIW6OlB+AuTt/+bar0QCRB+LnmSg8wY7N+uxgvPQD7mEFRKasdOIX/g/TA7W3EpksPzPiIzdnrJVDbsRGXUFtOBDzZ/2jI0cTQV4tLyylSnzFWixr3Y5Ezw9BSA2MI6KjFpYWvFgcWBTXU4hIz5BMCaZH+N1KKcWAj3nWivSBVIaAeYAyFdxYpPk0hoB5gDKG0d2O8BOG+cJcLfzBXgtidRkYG9oLfFpIpYOq+20WQ4NpICWJ0nzsnXEexQkA9uGwOfJsWkOBS/LUKwWl2bOcEx4igFpcWHqfjqRskaFryjBRZFJ0xyS9G7aoQp8WvhyylT6A6eIosOazEgm1O8ox3ZKT1hTgvKalaORm8Subcpe4bkg9TIjceu6o8n6d4JZb/yoHXqa7AhgRNiNwoGU8qskUJSfXJMwJF4gqGaoGSq5bj8LUg2WRBdYymV/vSgsreVEsBCtSqTZ6RWqZ72oiRVUoQBzhpNQUJll3SHsH9+rTbfi7Bqrz9AU5FWqknJw/t1ZygoLwwU7Ueexe/ouQZEzPbixqQYBVHEug7axaMKy3v9SiAPCezS8glWHbyPIKOsqeTfGNbru3F43SejAF7mHKTZ6TI+YICZFAgeV7MNtdJlinJ4/QqXxUA7JgsznPjdzv0kJJ3w/xxdXVTipjH6bxVAImbxW9Gy104m46vIaLI6vmkZn6KUeNEoUDFN+8zje0VbFd8hC9v76fpvNMcJo06ql4osEzh5a7E2ofg+lks8bxNf51vetOTIjTxFPl1HpIXlA+r55Z77cdGt4uOkD5oewdJqsOrsgpulnkWeJE00+gem6Kh1SP1xljNJvGbPef3WFoSnhL+dMfx5bkTLL22eFTPIV8l/xUOe3jwo3EPurMe/6/Cv93AL97ZnKIfX+wEk63XE42F0X/MF9WQX7T6u73n3fsf113clR+8P/f2uH/3vP19XHcSeGp+n/QhEepKskbgdydd3x0p41M3uZs4r5d/gsQLi6PK0P3jKmqxvbvKF82ZogcZ4cK6Tf7gN/IYEuxiH77I1t5GfAlLgtnq+P259MhjyEn4yGTpXiBbFmTw5G+ecczyfUhXPMlastB0En5cPuLoeTW85I9HKNK3teQr0rCcaTr3PkLBMv0jUtnILcl35It4hpu1/wrIi2HKhUOZyMhigDxhSy3BvuDQYvA3LnYByh3bWPIlRY65uEi+8057I/PbF4eNrFOgNi1k3auie6AKzw/qwmTno4XD8S6fIwk2izAtdBL2Aq5MAY/s3Tu76Tyamr/cCDO/JGNoJO5d/Y6oeMzt3eyWdZ828M/T+8fA68nbHl/0lIdJm1r3o5vWfbi9Bfk96B93cjjPhg/OqTbh8/P6c1o1jykcw457uD66OG6XN7+Kk+5acDtfj8OptxluT2Q/D26xWCwWi8VisVgsFouFlH94K1f8FbS9uwAAAABJRU5ErkJggg==' alt="headPic" /></h1>
          <br />
          <br />
          <h2>Compare: <button className={color1} onClick={() => { updateType('Players'); updateColor1('typeButton2'); updateColor2('typeButton'); }}><h2>Players</h2></button> <button className={color2} onClick={() => { updateType('Teams'); updateColor2('typeButton2'); updateColor1('typeButton'); }}><h2>Teams</h2></button></h2>
          <SubmitButton formType={submitType} updateType={updateType} />
          <button onClick={()=>{if(formCount < 4) addCount(formCount+1)}}></button>

        </div>
      </div>
      <Forms type={submitType} formCount = {formCount} addCount = {addCount}/>
    </div>
  );
}


//Handles the information stored 
function Forms(props) {


  const [prevFormCount, addPrevCount] = useState(2);
  const [form1Option1, updateF3O1] = useState('option 2');
  const [formType, updateType] = useState(props.type);
  const [formObjs, updateObjs] = useState([{ prop1: '1', prop2: '2' }, { prop3: '3', prop4: '4' }])


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const [playerCard1, updatePlayerCard1] = useState({});
  const [playerCard2, updatePlayerCard2] = useState({});
  const [playerCard3, updatePlayerCard3] = useState({});
  const [playerCard4, updatePlayerCard4] = useState({});

  const [season1, updateSeason1] = useState('');
  const [teams1, updateTeams1] = useState([]);
  const [selectedTeam1, updateSelectedTeam1] = useState(null);
  const [players1, updatePlayers1] = useState([]);
  const [selectedPlayer1, updateSelectedPlayer1] = useState(null);


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    1



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    2

  const [season2, updateSeason2] = useState('');
  const [teams2, updateTeams2] = useState([]);
  const [selectedTeam2, updateSelectedTeam2] = useState(null);
  const [players2, updatePlayers2] = useState([]);
  const [selectedPlayer2, updateSelectedPlayer2] = useState(null);

  if (season2.length === 0) {
    updateSeason2('2020-2021');
  }

  //update teams2
  useEffect(() => {
    let fixedSeason = season2.replace(/-/g, "");
    async function fetchData() {



      await fetch(`https://statsapi.web.nhl.com/api/v1/teams?season=${fixedSeason}`, {
        method: "GET",


      })
        .then(res => res.json())
        .then(
          (result) => {

            updateTeams2(result.teams.sort(function (a, b) {
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
  }, [season2]);



  //update players2

  useEffect(() => {


    let teamSelected = teams2.find(function isTeam(team) {
      return team.name === selectedTeam2;
    })

    if (teamSelected === undefined) {
      teamSelected = { id: 24 };
    }

    let fixedSeason = season2.replace(/-/g, "");

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

            updatePlayers2(
              sortedPlayers
            );

            updateSelectedPlayer2(sortedPlayers[0]);


          },


        )
    }

    fetchData();
    return;
  }, [selectedTeam2, season2, teams2]);






  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 3
  const [season3, updateSeason3] = useState('');
  const [teams3, updateTeams3] = useState([]);
  const [selectedTeam3, updateSelectedTeam3] = useState(null);
  const [players3, updatePlayers3] = useState([]);
  const [selectedPlayer3, updateSelectedPlayer3] = useState(null);


  if (season3.length === 0) {
    updateSeason3('2020-2021');
  }

  //update teams3
  useEffect(() => {
    let fixedSeason = season3.replace(/-/g, "");
    async function fetchData() {



      await fetch(`https://statsapi.web.nhl.com/api/v1/teams?season=${fixedSeason}`, {
        method: "GET",


      })
        .then(res => res.json())
        .then(
          (result) => {

            updateTeams3(result.teams.sort(function (a, b) {
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
  }, [season3]);



  //update players3

  useEffect(() => {


    let teamSelected = teams3.find(function isTeam(team) {
      return team.name === selectedTeam3;
    })

    if (teamSelected === undefined) {
      teamSelected = { id: 24 };
    }

    let fixedSeason = season3.replace(/-/g, "");

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

            updatePlayers3(
              sortedPlayers
            );

            updateSelectedPlayer3(sortedPlayers[0]);

          },


        )
    }

    fetchData();
    return;
  }, [selectedTeam3, season3, teams3]);


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 4

  const [season4, updateSeason4] = useState('');
  const [teams4, updateTeams4] = useState([]);
  const [selectedTeam4, updateSelectedTeam4] = useState(null);
  const [players4, updatePlayers4] = useState([]);
  const [selectedPlayer4, updateSelectedPlayer4] = useState(null);

  if (season4.length === 0) {
    updateSeason4('2020-2021');
  }

  //update teams4
  useEffect(() => {
    let fixedSeason = season4.replace(/-/g, "");
    async function fetchData() {



      await fetch(`https://statsapi.web.nhl.com/api/v1/teams?season=${fixedSeason}`, {
        method: "GET",


      })
        .then(res => res.json())
        .then(
          (result) => {

            updateTeams4(result.teams.sort(function (a, b) {
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
  }, [season4]);



  //update players4

  useEffect(() => {


    let teamSelected = teams4.find(function isTeam(team) {
      return team.name === selectedTeam4;
    })

    if (teamSelected === undefined) {
      teamSelected = { id: 24 };
    }

    let fixedSeason = season4.replace(/-/g, "");

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

            updatePlayers4(
              sortedPlayers
            );

            updateSelectedPlayer4(sortedPlayers[0]);


          },


        )
    }

    fetchData();
    return;
  }, [selectedTeam4, season4, teams4]);


  if (formType !== props.type) {

    updateType(props.type);

    addPrevCount(props.formCount);

    console.log(props.type)
    updateSeason1('2020-2021');
    updateSeason2('2020-2021');
    updateSeason3('2020-2021');
    updateSeason4('2020-2021');

    let updatedObj = formObjs.map(item => {

      if (item.prop1 === '1') {
        return { ...item, prop1: '5' };
      }

      return item;
    })

    updateObjs(updatedObj);
  }


  /////////////////////////////////////////////////////////////////////////////// Return code

  let rows = [];

  for(let i=0; i<props.formCount; i++){
    
    rows.push(


          <FormComponent formType={formType} />

);
  }

  if (formType === 'Players' || formType === 'PlayerCards') {

   
    return (
      <section>
        <Sidebar formType = {formType}/>
        <div className='container'>

          
          <div className="columns is-variable">

            {rows}
 
          </div>

        </div>
      </section>

    );

  } else if (formType === 'Teams') {


    return (
      <div>hi</div>

    )


  
    



  } else {

    //Need Season/team for each team

    return (<RenderTeams />);

  }


  



  


}

export default App;
