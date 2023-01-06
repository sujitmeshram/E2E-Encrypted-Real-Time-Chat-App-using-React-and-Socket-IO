// for initializing backend connection
// and ensures the communication between the users in the room.

const express = require("express");
const app = express();

// https://socket.io/docs/v4/server-installation/#:~:text=pnpm-,npm%20install%20socket.io,Copy,-To%20install%20a
const socket = require("socket.io");
const color = require("colors");
const cors = require("cors");
const { get_Current_User, user_Disconnect, join_User } = require("./dummyuser");

app.use(express());

const port = process.env.PORT || 8000;

app.use(cors());

var server = app.listen(
  port,
  console.log(`Server is running on the port no: ${port} `.green)
);

// https://socket.io/docs/v4/
const io = socket(server);

//initializing the socket io connection
io.on("connection", (socket) => {
  // The function we pass to socket.on(“joinRoom”) runs when a new
  // room user joins the room. A message to welcome the room user will
  // be shown to the user. Also, a message “username has joined” will be
  // broadcasted to all other users except the user who joined the room.

  //for a new user joining the room
  socket.on("joinRoom", ({ username, roomname }) => {
    //* create user
    const p_user = join_User(socket.id, username, roomname);
    console.log(socket.id, "=id");
    socket.join(p_user.room);

    //display a welcome message to the user who have joined a room
    socket.emit("message", {
      userId: p_user.id,
      username: p_user.username,
      text: `Welcome ${p_user.username}`,
    });

    //displays a joined room message to all other room users except that particular user
    socket.broadcast.to(p_user.room).emit("message", {
      userId: p_user.id,
      username: p_user.username,
      text: `${p_user.username} has joined the chat`,
    });
  });

  //The function we pass to socket.on(“chat”) handles sending and receiving message.
  //If a user leaves the chat, a disconnect message is broadcasted to all other room users
  //user sending message
  socket.on("chat", (text) => {
    //gets the room user and the message sent
    const p_user = get_Current_User(socket.id);

    io.to(p_user.room).emit("message", {
      userId: p_user.id,
      username: p_user.username,
      text: text,
    });
  });

  //when the user exits the room
  socket.on("disconnect", () => {
    //the user is deleted from array of users and a left room message displayed
    const p_user = user_Disconnect(socket.id);

    if (p_user) {
      io.to(p_user.room).emit("message", {
        userId: p_user.id,
        username: p_user.username,
        text: `${p_user.username} has left the chat`,
      });
    }
  });
});
