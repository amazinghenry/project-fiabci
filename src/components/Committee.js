import React from 'react';
import committees from "../data/committee";
import CommitteeCard from './CommitteeCard';

const Committee = () => {
    const [committee, setCommittee] = React.useState(committees); // Initialize the state with the data

    return ( 
        <section className="committee-section container">
            <h2 className="">Planning Committee Members</h2>
            <div className="committee-card">
            {committee.map((committeeItem) => ( // Use a different name for the map variable
                <CommitteeCard
                    key={committeeItem.id}
                    name={committeeItem.name}
                    imageUrl={committeeItem.imageUrl}
                />
            ))}
            </div>
        </section>
     );
}

export default Committee;
