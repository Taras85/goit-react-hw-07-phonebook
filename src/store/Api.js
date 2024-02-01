
const API_KEY = '65b7608e46324d531d546a5e'
const BASE_URL = `https://${API_KEY}.mockapi.io/contacts`
// const BASE_URL = `https://65b7608e46324d531d546a5e.mockapi.io/contacts`;


export const getContacts = async () => {
  const data = await fetch(`${BASE_URL}`, {});
  return await data.json();
  
};

export const createContacts = async data => {
  const res = await fetch(`${BASE_URL}`, {
    //   body: JSON.stringify(data.json()),
    // });
    // return await res.json(data);
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  return await res.json();
}

export const deleteContacts = async id =>
// {
//   const res = await fetch(`${BASE_URL}/${id}`);
//   return await res.json();
// };
  {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  return await response.json();
};
