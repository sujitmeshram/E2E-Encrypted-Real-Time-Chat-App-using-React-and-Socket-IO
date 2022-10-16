//file that will define the action object and
//return the the same to avoid writing the object every time we need it.

export const process = (encrypt, text, cypher) => {
  return {
    type: "PROCESS",
    payload: {
      encrypt,
      text,
      cypher,
    },
  };
};
