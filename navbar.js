const useLocation       = ReactRouterDOM.useLocation;

function NavBar(){
  const location = useLocation();
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link">
                <a className={location.pathname==='/createaccount/' ? "nav-link active" : "nav-link"} href="#/createaccount/">Create Account</a>
                <span className="nav-tooltip">Open a new account</span>
              </div>
            </li>
            <li className="nav-item">
            <div className="nav-link">
                <a className={location.pathname==='/deposit/' ? "nav-link active" : "nav-link"} href="#/deposit/">Deposit</a>
                <span className="nav-tooltip">Make a deposit</span>
              </div>
            </li>
            <li className="nav-item">
            <div className="nav-link">
                <a className={location.pathname==='/withdraw/' ? "nav-link active" : "nav-link"} href="#/withdraw/">Withdraw</a>
                <span className="nav-tooltip">Make a withdraw</span>
              </div>
            </li>
            <li className="nav-item">
            <div className="nav-link">
                <a className={location.pathname==='/alldata/' ? "nav-link active" : "nav-link"} href="#/alldata/">All Data</a>
                <span className="nav-tooltip">List all data</span>
              </div>
            </li>          
          </ul>
      </div>
    </nav>
    </>
  );
}