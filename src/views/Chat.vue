<template>
  <div class="wrap">

    <div v-if="!joined" class="parent-container">
      <h2>This is an chat</h2>
      <div class="btns">
        <button v-on:click="selectedRoom('Lobby')">Lobby</button>
        <button v-on:click="selectedRoom('Room')">Room</button>
        <button v-on:click="selectedRoom('Room1')">Room1</button>
      </div>
      <div class="name-container">
         <input type="text" class="user-name" v-model="currentRoom" />
        <input type="text" class="user-name" v-model="currentUser" />
        <button class="join-button" v-on:click="join">Join</button>
      </div>
    </div>
 

    <div v-if="joined" class="chat_Container">
      <div class="chatHeader">
        <h4>{{currentRoom}}</h4>
        <button v-on:click="refreshAll">나가기</button>
      </div>
       <div class="list-container" id="chatBox">
        <div v-for="message in messages" :key="message.id">
          <div v-if="username==message.username" class="message myMessage">
            <div>
              <span class="message_name"> {{ message.username }} {{ message.id }}</span>
              <span class="message_time">{{message.time}}</span>
            </div>
            <span class="message_text">{{ message.text }}</span>
          </div>
          <div v-else class="message">
            <div>
              <span class="message_name"> {{ message.username }} {{ message.id }}</span>
              <span class="message_time">{{message.time}}</span>
            </div>
            <span class="message_text">{{ message.text }}</span>
          </div>
      </div>
    </div>

    <div class="text-input-container">
      <textarea
        v-model="text"
        class="text-message"
        v-on:keyup.enter="sendMessage"
      ></textarea>
    </div>
  </div>
</div>

</template>

<script>

//https://socket.io/docs/v4/client-initialization/ 문서참조
import io from "socket.io-client";

export default ({
  name: 'Chat',
  // computed: {
  //   user() {
  //      console.log();
  //      return this.$store.state.user;     
  //   }
  // },
  // mounted() {
  //   if(this.user.email == undefined) {
  //     this.joined = false;
  //     alert("로그인을 해야 이용할 수 있습니다.");
  //     this.$router.push({path:'/'});     
  //   }else{
  //      this.joined = true;
  //   }
  // },
  data() {
    return {
      currentRoom : "",
      joined: false,
      currentUser: "",
      text: "",
      messages: [],
      username: ""
    };
  },
  methods: {  
    selectedRoom(eventRoom){     
         
      this.currentRoom = eventRoom; 
    },
    join(){
       this.joined = true;
      //  this.socketInstance = io("http://localhost:3010");
         this.socketInstance = io("https://chat.siwonsoft.com/");
            // this.socketInstance = io("http://13.124.60.56/");

      const username = this.currentUser ; 
      const room = this.currentRoom;


      
      this.username = username;
      // Join chatroom
      this.socketInstance.emit('joinRoom',{ username, room });

      // Get room and users
      this.socketInstance.on('roomUsers', ({ room, users }) => {
       this.outputRoomName(room);
       this.outputUsers(users);

      });        

      // Message from server
      this.socketInstance.on('message', (message) => {
         console.log("message from server = >",message);
         this.outputMessage(message);
      });
    },
      // Add room name to DOM
    outputRoomName(room) {
      //roomName.innerText = room;
      console.log("add room name to dom",room);
    },
    // Add users to DOM
    outputUsers(users) {
       console.log("add users to dom",users);
      // userList.innerHTML = '';
      // users.forEach((user) => {
      // const li = document.createElement('li');
      // li.innerText = user.username;
      // userList.appendChild(li);
      // });
      // const usernum = users.length;
    },    

    sendMessage(){   
      this.addMessage(); 
      this.text ="";    
    },
    addMessage(){   
       const message = {  
        text: this.text,       
      };  
      // this.messages = this.messages.concat(message);    
      // Emit message to server

      this.socketInstance.emit('chatMessage', message.text);
      
    },    
    // Output message to DOM
    outputMessage(message) {   
       this.messages = this.messages.concat(message);       
       var chatBox = document.getElementById("chatBox");
       setInterval(100);
       chatBox.scrollTop = chatBox.scrollHeight;
       console.log(chatBox.scrollHeight);
       
    },
    refreshAll() {
        // 새로고침
        this.$router.go();
    }
  },
})

</script>

<style>
/* join */
.parent-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
}
.name-container{
  display: flex;
  width: 300px;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto;
}
.user-name {
  height: 30px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
}
.join-button {
  height: 30px;
  font-size: 20px;
}
/* chat */
.chat_Container{
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
}
.chatHeader{
  width: 100%;
  height: 60px;
  background-color:cornflowerblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.chatHeader>h4{
  color: white;
}
.chatHeader>button{
  border: none;
  margin: 20px 15px;
  background-color: white;
  padding: 5px 15px;
  border-radius: 50px;
  color: cornflowerblue;
}
.list-container{
  background-color: antiquewhite;
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  flex:1;
}
.text-message{
  width: 100%;
  height: 70px;
  padding: 10px auto;
  box-sizing: border-box;
}
.message{
  text-align: left;
  margin: 13px 0;
}
.message_name{
  font-weight: bold;
}
.message_time{
  font-size: 0.8rem;
}
.message_text{
  background: cadetblue;
  padding: 5px;
  display: inline-block;
  max-width: 80%;
  border-radius: 0px 5px 5px 5px;
}
.myMessage{
  text-align: right;
}
.myMessage .message_text{
  border-radius: 5px 0px 5px 5px;
}
</style>