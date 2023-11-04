const SpeakerCard = (props) => {
    return ( 
        <div className="speaker-card">
            <img src={`image/${ props.imageUrl }`} alt="" className="img-fluid" />
            <h3 className="speaker-title">{props.name}</h3>
            <p className="speaker-position">{props.position}</p>
            <p className="speaker-role">{props.role}</p>
        </div>
    );
}
 
export default SpeakerCard;