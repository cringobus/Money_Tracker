import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src="/proteus.png" className="MainLogo" />
      <h2 className='name'>Money Tracker</h2>
      <a href="login.html" className="link">Log in/sign in</a>
    </div>
  );
};

export default Header;
