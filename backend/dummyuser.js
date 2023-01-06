//here I created an empty array of users and will
//add a user who joins a room. In case the user disconnects, the array is emptied.

const c_users = [];

// The join_User() function adds the user to the array of users.
// It consists of three keys id, a username, and a room name,
// where the room name tells the user the room or group belongs.

// joins the user to the specific chatroom
function join_User(id, username, room) {
  const p_user = { id, username, room };

  c_users.push(p_user);
  console.log(c_users, "users");

  return p_user;
}

console.log("user out", c_users);

// The get_Current_User() function will
// take the id of the particular user
// Gets a particular user id to return the current user
function get_Current_User(id) {
  return c_users.find((p_user) => p_user.id === id);
}

//In the user_Disconnect() function, if a user disconnects or leaves the chat,
// the function accepts a user id and deletes the user object from the array users.

// called when the user leaves the chat and its user object deleted from array
function user_Disconnect(id) {
  const index = c_users.findIndex((p_user) => p_user.id === id);

  if (index !== -1) {
    // https://www.w3schools.com/jsref/jsref_splice.asp
    return c_users.splice(index, 1)[0];
  }
}

module.exports = {
  join_User,
  get_Current_User,
  user_Disconnect,
};
