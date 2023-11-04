import SpeakerCard from "./SpeakerCard";
import speakersData from "../data";
import React, { useEffect, useState } from 'react';

const SpeakersList = () => {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
      if (speakersData.length > 0) {
      setSpeakers(speakersData);
      }
    }, []);


    return (
        <section className="container-fluid speakerbg">
        <div className="container speaker-section" id='speakers'>
            <h2 className="section-title">Speakers</h2>
            <div className='speaker-group'>
            {speakers.map((speaker) => (
   
                <SpeakerCard
                key={speaker.id}
                name={speaker.name}
                position={speaker.position}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
                about={speaker.about}
                />
            ))}
            </div>
        </div>
        </section>
     );
}
 
export default SpeakersList;