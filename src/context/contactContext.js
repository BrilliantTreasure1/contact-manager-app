import { createContext } from 'react';

export const contactContext = createContext({
    contact : {},
    setContact : () => {},
    contacts : [],
    filteredContacts : [],
    setFilteredContacts : () => {},
    contactQuery: {},
    groups : [],
    onContactChange: () => {},
    deleteContact: () => {},
    updateContact: () => {},
    createContact:() => {},
    contactsSearch : () => {} 
})