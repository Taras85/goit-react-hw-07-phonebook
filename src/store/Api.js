
const API_KEY = '65b7608e46324d531d546a5e'
const BASE_URL = `https://${API_KEY}.mockapi.io/contacts`
// const BASE_URL = `https://65b7608e46324d531d546a5e.mockapi.io/contacts`;


export const fetchContacts = async () => {
  const data = await fetch(`${BASE_URL}`, {});
  return await data.json();
};

export const addContact  = async data => {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  return await res.json();
}

export const deleteContact  = async id =>
  {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  return await response.json();
};
