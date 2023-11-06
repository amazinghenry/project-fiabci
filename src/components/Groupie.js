import SpeakerCard from "./SpeakerCard";
import React, { useEffect, useState } from 'react';
import groupieData from "../data/groupieData";

const Groupie = () => {
    const [groupies, setGroupies] = useState([]);

    useEffect(() => {
      if (groupieData.length > 0) {
      setGroupies(groupieData);
    }
    }, []);

    return (
        <section className="container-fluid speakerbg">
        <div className="container speaker-section" id='speakers'>
            <div className='speaker-group'>
            {groupies.map((groupie) => (
   
                <SpeakerCard
                key={groupie.id}
                name={groupie.name}
                position={groupie.position}
                role={groupie.role}
                imageUrl={groupie.imageUrl}
                about={groupie.about}
                />
            ))}
            </div>
        </div>
        </section>
    );
    
}
 
export default Groupie;