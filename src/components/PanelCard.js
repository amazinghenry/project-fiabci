const PanelCard = (props) => {
    return ( 
        <div className="panel-card">
            <div className="panel-image">
            <img src={`image/${ props.imageUrl }`} alt="" className="img-fluid" />
            </div>
            <div className="panel-content">
                <h2 className="panel-name">
                    {props.name}
                </h2>
                <p className="panel-position">
                {props.position}
                </p>
                <p className="panel-bio">
                {props.profile}
                </p>
            </div>
        </div>
     );
}
 
export default PanelCard;