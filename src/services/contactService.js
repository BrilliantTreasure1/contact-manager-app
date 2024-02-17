import axios from 'axios';

const SERVER_URL = "http://localhost:9000";


export const getAllContact = () => {
    const Url = `${SERVER_URL}/contacts`;
    return axios.get(Url)
}

export const getContact = (contactId) => {
    const Url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(Url)
}

export const getAllgroups = () => {
    const Url = `${SERVER_URL}/groups`;
    return axios.get(Url)
}

export const getGroups = (groupId) => {
    const Url = `${SERVER_URL}/groups/${groupId}`;
    return axios.get(Url)
}

export const creatContact = (contact) => {
    const Url = `${SERVER_URL}/contacts`;
    return axios.post(Url , contact)
}

export const updateContact = (contact , contactId) => {
    const Url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.put(Url , contact)
}

export const deletContact = (contactId) => {
    const Url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.delete(Url)
}