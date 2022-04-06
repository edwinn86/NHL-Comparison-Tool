function Sidebar(props){



    if(props.formType === 'Players'){
        return null;
    } else {
        
        return (<div id='sidebar'>
        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>Games Played</p>
          </span>
        </div>
        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>Points</p>
          </span>
        </div>

        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>Goals</p>
          </span>
        </div>

        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>Assists</p>
          </span>
        </div>


        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>Plus/Minus</p>
          </span>

        </div>

        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>PPG</p>
          </span>
        </div>

        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>PIM</p>
          </span>

        </div>

        <div className="stat_div">
          <span className="sidebarSpan right">
            <p>Shots</p>
          </span>
        </div>
        <div className = "stat_div">
          <span className="sidebarSpan right">
            <p>Shooting%</p>
          </span>
        </div>
      </div>);
    }
    
}

export default Sidebar;