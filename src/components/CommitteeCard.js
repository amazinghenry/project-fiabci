const CommitteeCard = (props) => {
    return ( 
        <div class="committee-container">
            <img src={`image/${ props.imageUrl }`} alt="" className="img-fluid com-image" />
            <div class="committee-middle">
            <div class="committee-text">{props.name}</div>
            </div>
        </div>

     );
}
 
export default CommitteeCard;