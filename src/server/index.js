const express = require('express');
const os = require('os');
const mongoose = require('mongoose');
const Message = require('./model/insertNote')

const app = express();

app.use(express.static('dist'));
//app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

//app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const http = require('http').Server(app)
const port = process.env.PORT || 3001

// Socket.io serverSocket
const serverSocket = require('socket.io')(http)

http.listen(port, () => {
  console.log(`Server listening on port ${port}.`)
})
mongoose.connect('mongodb+srv://HannahKuo:Mid123@cluster0-siqgd.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
db = mongoose.connection
db.on('error', error => {
  console.log(error)
})
db.once('open', () => {
  console.log('MongoDB connected!')
  serverSocket.on('connection', socket => {

    Message.find()
      //.limit(100)
      //.sort({ _id: 1 })
      .exec((err, res) => {
          if (err) throw err
          //console.log('res'+res);
          for (let x = 0; x < res.length; x++) {
            //console.log(res[x].title + ": " + res[x].category);
          }   
          //socket.emit('init', res)
          //socket.emit('add_slide',res);
    })
    //console.log(Message.find({body:"3123"}).pretty());

    socket.on('clear', () => {
        Message.deleteMany({}, () => {
          console.log('server clear');
          //socket.broadcast.emit('cleared')
        })
    })
    socket.on('input', data => {
      console.log('input');
      //console.log(data.title, data.category, data.location);
      let title = data.title;
      let category = data.category;
      let location = data.location;
      let url = data.url;
      let img = data.img;
      let discription = data.discription;
      const message = new Message({title,category,location,url,img,discription})
      message.save(err => {
        if (err) console.error(err);
      console.log('save');
      })
    })
    socket.on('need_slide_travel',()=> {
      Message.find({"category":"travel"})
      //.limit(100)
      //.sort({ _id: 1 })
      .exec((err, res) => {
          if (err) throw err 
          //socket.emit('init', res)
          socket.emit('add_slide_travel',res);
      })
    })
    socket.on('need_slide_desserts',()=> {
      Message.find({"category":"desserts"})
      //.limit(100)
      //.sort({ _id: 1 })
      .exec((err, res) => {
          if (err) throw err 
          //socket.emit('init', res)
          socket.emit('add_slide_desserts',res);
      })
    })
    socket.on('need_slide_eat',()=> {
      Message.find({"category":"eat"})
      //.limit(100)
      //.sort({ _id: 1 })
      .exec((err, res) => {
          if (err) throw err 
          //socket.emit('init', res)
          socket.emit('add_slide_eat',res);
      })
    })
    //start
    /*
    socket.on('txt', mes => {
      console.log('txt: '+mes);
      //sendStatus('clear');
      
      name = "name";
      body = mes;
      const message = new Message({ name, body })
      message.save(err => {
        if (err) console.error(err)
        /*
        socket.emit('output', [data])

        // Saved!
        sendStatus({
            message: 'Message sent',
            clear: true
        })
        
       console.log('save')
      })
    })
    //end*/
  })
})