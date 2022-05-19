function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [disabled, setDisabled]     = React.useState(true);
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      console.log(`label: ${label} and field: ${field}`);
      if (!field || label === 'password' && field.length < 8) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleChange(e){
    setDisabled(true);
    if (e.currentTarget.id === 'name') setName(e.currentTarget.value);  
    if (e.currentTarget.id === 'email') setEmail(e.currentTarget.value);
    if (e.currentTarget.id === 'password') setPassword(e.currentTarget.value);

    if (validate(document.getElementById('name').value,'name') && validate(document.getElementById('email').value,'email') && validate(document.getElementById('password').value,'password')) setDisabled(false);
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus(true);
  }

  return (
    <Card
      txtcolor = "black"
      header="Create Account"
      status={status}
      body={show ? (  
              <form onSubmit={handleCreate}>
                <label>
                  Name<br/>
                  <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={handleChange} />
                </label><br/>
                <label>
                  Email address<br/>
                  <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleChange}/>
                </label><br/>
                <label>
                  Password<br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handleChange}/>
                </label><br/>
                <button type="submit" className="btn btn-dark" style={{color: "yellow"}} disabled={disabled}>Create Account</button>
              </form>
            ):(
              <form onSubmit={clearForm}>
                <h5>Success</h5>
                <button type="submit" className="btn btn-dark" style={{color: "yellow"}} disabled={disabled}>Add another account</button>
              </form>
            )}
    />
  )
}