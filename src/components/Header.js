import logo from '../images/logo/Logo.png';

const Header = () => {
  return (
    <nav>
      <a href='#'>
        <img src={logo} alt='logo' />
        my travel journal.
      </a>
    </nav>
  );
};

export default Header;
