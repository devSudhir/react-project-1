import logo from '../image/logo.svg';
const Header = () =>{
    return (<header>
        <nav className="my-nav">
        <img
          src={logo}
          className="d-inline-block align-top mynav-icon"
          alt="bootstrap logo"
        />

        <div>React Project 1</div>
      </nav>
    </header>)
}

export {Header}