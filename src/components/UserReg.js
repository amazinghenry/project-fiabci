import Ticket from "./Ticket";
import Form from "./Form";

const UserReg = () => {
    return ( 
        <section className="container-fluid user-reg" id='usereg'>
            <div className="container">
                <div className="usereg-group">
                    <div className="usereg-form">
                        <Form />
                    </div>
                    <div className="usereg-ticket">
                        <Ticket />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default UserReg;