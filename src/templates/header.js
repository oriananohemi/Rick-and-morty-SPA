const Header = () => {
  const view = `
    <div class="header-main flex-container">
        <div class="header-logo">
        <a href="#/">
          <img class="image-responsive" src="assets/logo.png"/>
          </a>
          </div>
          <a href="#/about">
             About
          </a>
    </div>
  `;
  return view;
}

export default Header