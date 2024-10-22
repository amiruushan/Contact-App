import React from 'react';

class AddContact extends React.Component{
    render(){
        return(
            <div>
                <h2>AddContact</h2>
                <form>
                   <div className="feild">
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Name' />
                    </div> 
                    <div className="feild">
                        <label>Email</label>
                        <input type="email" name="email" placeholder='Name' />
                    </div> 
                </form>
            </div>
        );
    }

}

export default AddContact;