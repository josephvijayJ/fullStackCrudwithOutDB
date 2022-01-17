const express = require('express');
const app = express();
const cors = require('cors');

let options = {
  origin: '*',
};
app.use(cors(options));
app.use(express.json());
const userList = [];

app.get('/users', (req, res) => {
  res.json(userList);
});

app.post('/addusers', (req, res) => {
  req.body.id = userList.length + 1;
  let addedUsers = userList.push(req.body);

  res.json({ addedUsers: addedUsers });

  //   res.json({ addedUsers });
});

app.get('/users/:id', (req, res) => {
  let userId = userList.find((obj) => obj.id == req.params.id);
  res.json(userId);
});

app.put('/users/:id', (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  let Index = userList.findIndex((obj) => obj.id == req.params.id);
  console.log(Index);
  console.log('josee');
  userList[Index] = req.body;

  res.json({ message: 'user Edited Successfully' });
});

app.delete('/users/delete/:id', (req, res) => {
  //GETTING THE iNDEX
  console.log('params id:' + req.params.id);
  let Index = userList.findIndex((obj) => obj.id == req.params.id);
  console.log(Index);
  userList.splice(Index, 1);
  res.json({ message: 'User Deleted Successfully' });
});
app.listen(5000);

//ANOTHER LOGIC TOLD BY MENTOR FOR EDIT USING ID

// app.put('/users/edit/:id', (req, res) => {
//getting the index
//   let index = userList.findIndex((obj) => obj.id === req.params.id);

//   Object.keys(
//     userList[index].array.forEach((element) => {
//       userList[index][element] = req.body[element];
//     })
//   );
// });
