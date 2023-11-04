import Table from 'react-bootstrap/Table';
import morningData from '../data/morning';
import eveningData from '../data/evening';

const Programme = () => {
    const colTime = 1
    const colNum = 2

    return ( 
        <section className='container-fluid programme' id='programme'>
            <div className='container'>
            <h2 className='programme-title'>Programme of Event</h2>

            <h3 className='morning'>Morning Programme </h3>
            <Table hover>
                <thead>
                    <tr>
                    <th colSpan={ colTime }>Time</th>
                    <th colSpan={ colNum }>Activities</th>
                    </tr>
                </thead>

                <tbody>
                    {morningData.map((morning)=>(
                        <tr>
                        <td colSpan = { colTime }>
                            {morning.time}
                        </td>
                        <td colSpan={colNum}>
                            {morning.activity}
                        </td>
                    </tr>
                    ))} 
                </tbody>
            </Table>

            <h3 className='evening'>Evening Programme </h3>
            <Table hover>
                <thead>
                    <tr>
                    <th colSpan={ colTime }>Time</th>
                    <th colSpan={ colNum }>Activities</th>
                    </tr>
                </thead>

                <tbody>
                    {eveningData.map((evening)=>(
                        <tr>
                        <td colSpan = { colTime }>
                            {evening.time}
                        </td>
                        <td colSpan={colNum}>
                            {evening.activity}
                        </td>
                    </tr>
                    ))} 
                </tbody>
            </Table>
            </div>
        </section>

     );
}
 
export default Programme;