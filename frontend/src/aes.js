//file aes.js which is responsible for the encryption
//of outgoing messages and decryption of incoming messages by the use of the same secret key,
// as below:
var aes256 = require("aes256");

//the secret key used for encrypting and decrypting messages, just for easy demostration, I put secret key here, otherwise put it in .env file
var secret_key = "uI2ooxtwHeI6q69PS98fx9SWVGbpQohO";

//returns the encrypted text
export const to_Encrypt = (text) => {
  var encrypted = aes256.encrypt(secret_key, text);
  return encrypted;
};

//welcome message is not decrypted
export const to_Decrypt = (cipher, username) => {
  if (cipher.startsWith("Welcome")) {
    return cipher;
  }

  if (cipher.startsWith(username)) {
    return cipher;
  }

  //  //decryped message is returned
  var decrypted = aes256.decrypt(secret_key, cipher);
  return decrypted;
};

//In the code above, I imported aes256 from the aes module
// and wrote the functions where the incoming encrypted message is decrypted
//and outgoing message is encrypted.

//Ofcourse the welcome user message is not to be encrypted.
