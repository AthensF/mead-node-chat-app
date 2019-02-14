const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: "Athens",
      room: "Node"
    },{
      id: '2',
      name: "Kavit",
      room: "React"
    },{
      id: '3',
      name: "Philip",
      room: "Node"
    }]
  });

  it('should add user' , () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Athens',
      room: 'The room'
    }

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  })

  it('should list Node room users', () => {
    var userList = users.getUserList('Node');
    expect(userList).toEqual(['Athens','Philip'])
  })

  it('should list React room users', () => {
    var userList = users.getUserList('React');
    expect(userList).toEqual(['Kavit'])
  })

  it('should find valid user', ()=>{
    var user = users.getUser('1');
    expect(user.name).toBe('Athens');
  })

  it('should not find invalid user', ()=>{
    var user = users.getUser('4');
    expect(user).toNotExist();
  })

  it('should remove valid user', ()=>{
    var userId = '1';
    var resUser = users.removeUser(userId);
    expect(resUser.id).toBe(userId);
    expect(users.users.length).toBe(2);
  })

  it('should not remove invalid user', ()=>{
    var userId = '4';
    var resUser = users.removeUser(userId);
    expect(resUser).toNotExist();
    expect(users.users.length).toBe(3);
  })
})
