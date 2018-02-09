import React, { Component } from 'react';
import './App.css';

import Contact from './contact';

let Contacts = [
    {
        id: 1,
        name: 'Alex',
        number: '+7 777 777 77 77',
        image: 'https://cdn.dribbble.com/users/1461762/screenshots/3826770/missing_summer.png'
    },
    {
        id: 2,
        name: 'Katya',
        number: '+5 555 555 55 55',
        image: 'https://cdn.dribbble.com/users/288987/screenshots/1822458/low_poly_blue.jpg'
    },
    {
        id: 3,
        name: 'Vasya',
        number: '+4 444 444 44 44',
        image: 'https://cdn.dribbble.com/users/288987/screenshots/2154354/elephant.jpg'
    },
    {
        id: 4,
        name: 'Petya',
        number: '+3 333 333 33 33 ',
        image: 'https://cdn.dribbble.com/users/255/screenshots/2411966/red-five-dribs.png'
    },
];

/*getInitialState: function main () {
    return {
        displayedContacts: Contacts
    };
};*/

const handleSearch = (event) =>  {

};



class ContactsList extends Component{
    /*constructor(props){
        super(props);
    }*/
    render () {
        return (
            <div className="contacts">
                <input type="text" className="input-search" onChange={handleSearch}/>
                <ul className="contacts-list">
                    {
                        Contacts.map(function (el) {
                            return <Contact key={el.id} name={el.name} number={el.number} image={el.image}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ContactsList;
