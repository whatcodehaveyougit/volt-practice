import { UIImage } from 'biuty/react';
import logoSrc from '../../images/logo.svg';
// SVG doesn't work, on Furet you use abolsute paths, that doesn't work in here..


const Header = () => {

  return (
    <>
      <UIImage
        alt="logo"
        src={logoSrc}
        ratio="rectangle"
      />
    </>
  )
}

export default Header;