import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponentB from '../componentsB';




const ComponentA = () => {

    const defaultContact = new Contact('marianela', 'teran','marianteranf@gmail.com', true);


    return (
        <div>
            <div>
                <h1>Welcome</h1>
            </div>

            <ComponentB user={defaultContact} />
        </div>
    );
};



export default ComponentA;
