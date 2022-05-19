function AllData(){
  const ctx = React.useContext(UserContext);
  const listUsers = [];
  
  {JSON.stringify(ctx.users.map((user, i) => {
    console.log(`${i+1} is ${user.name}`);
    listUsers.push(user);
  }))};

  console.log(listUsers);

  return (
    <>
    {listUsers.map((user) => {
    return <Card
      txtcolor = "black"
      header={user['name']}
      body={  
              <form>
                <label>
                  <b>Name: </b>{user['name']}
                </label><br/>
                <label>
                  <b>Email: </b>{user['email']}
                </label><br/>
                <label>
                  <b>Password: </b>{user['password']}
                </label><br/>
                <label>
                  <b>Balance: </b>{user['balance']}
                </label><br/>
              </form>
            }
    />
    })}

    </>
  );
}
