import panelistData from "../data/panelist";
import PanelCard from "./PanelCard";

const Panelist = () => {
    const panelData = panelistData.map((panel)=>{
        return <
            PanelCard
            imageUrl = {panel.imageUrl}
            name = {panel.name}
            position = {panel.position}
            profile = {panel.profile}
        />
    })

    return ( 
        <section className="container panelist">
            <h2 className="section-title">Panelist</h2>
            <div className="panel-group">
                { panelData }
            </div>
        </section>
    );
}
 
export default Panelist;