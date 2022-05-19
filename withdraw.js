function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [disabled, setDisabled]     = React.useState(true);
  const [value, setValue]         = React.useState(0);
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      console.log(`label: ${label} and field: ${field}`);
      if (!field || field === 0  || field === '00') {
        setStatus('Error: value is empty');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (field < 0) {
        setStatus('Error: value is a negative number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (isNaN(parseFloat(field))) {
        setStatus('Error: value is not a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleChange(e){
    setDisabled(true);
    if (e.currentTarget.id === 'value') setValue(Number(e.currentTarget.value));  

    if (validate(document.getElementById('value').value,'value')) setDisabled(false);
  }

  function handleSubmit(){
    console.log(value);
    if (!validate(value,     'value'))     return;
    if (ctx.users[0].balance - value >= 0) {
      ctx.users[0].balance -= value;
    } else {
      setStatus('Error: not enough balance');
      setTimeout(() => setStatus(''),3000);
      return false;
    };
    setShow(false);
  }    

  function clearForm(){
    setValue(0);
    setDisabled(true);
    setShow(true);
    setStatus(true);
  }

  return (
    <Card
      txtcolor = "black"
      header="Withdraw"
      status={status}
      body={show ? (  
              <form onSubmit={handleSubmit}>
                <label>
                  Balance<br/>
                  {JSON.stringify(ctx.users[0].balance)}
                </label><br/>
                <label>
                  Value<br/>
                  <input type="input" className="form-control" id="value" placeholder="Enter value" value={value} onChange={handleChange} />
                </label><br/>
                <button type="submit" className="btn btn-dark" style={{color: "yellow"}} disabled={disabled}>Withdraw</button>
              </form>
            ):(
              <form onSubmit={clearForm}>
                <h5>Success</h5><br/>
                <label>
                  Balance<br/>
                  {JSON.stringify(ctx.users[0].balance)}
                </label><br/>
                <button type="submit" className="btn btn-dark" style={{color: "yellow"}} disabled={disabled}>Make another withdraw</button>
              </form>
            )}
    />
  )
}
