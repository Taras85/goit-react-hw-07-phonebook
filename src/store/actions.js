// import { createAction, nanoid } from "@reduxjs/toolkit";
// import { ADDCONTACTS, DELETECONTACTS, FILTER } from "./types";


// export const createContact = contact => ({
//   type: ADDCONTACTS,
//   payload: contact,
// });

// export const changeFilter = value => ({
//   type: FILTER,
//   payload: value,
// });

// export const deleteContact = (id, contacts) => 
//   ({
//     type: DELETECONTACTS,
//     payload: contacts.filter(contact => contact.id !== id),
//   });


// export const createContact = createAction('ADDCONTACTS', (name, number) => {
  
//   return {
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     }
//   }
// })
// export const deleteContact = createAction('DELETECONTACTS', (id, contacts) => {
//   return {
//         payload: 
//       contacts.filter(contact => contact.id !== id),
    
//   }
// })

// export const changeFilter =createAction('FILTER')