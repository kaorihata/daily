import styled from '@emotion/styled'
import { FiLogIn, FiUser, FiMenu } from 'react-icons/fi';

 /* 
    * Style
 */
const Nav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  .nav-btn{
    color: var(--orange01);
    padding: 0.5rem;
  }
  .nav-list{   
    display: flex;
    flex-direction: column;
    z-index: 999;
    transition: all .4s ease-in-out;
    margin-left: -200px;
    background: none; 
  }
  .open{
    margin-left: 0;
    background: var(--orange01);
  }
  .nav{
    color: var(--white01);
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    &:hover{
      color: var(--black01);
      transition: 0.6s;
    }
    span{
      font-size: 1.25rem;
      margin-left: 0.25rem;
    }
  }
`

function Navbar(){
  
  const handleClick = () => {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('open')
  }
   
  return (
    <Nav>
        <button className="nav-btn" onClick={handleClick}>
          <FiMenu style={{fontSize: '31px'}}/>
        </button>
        <div className="nav-list">
          <a className="nav" href="#">
            <FiLogIn style={{fontSize: '31px'}}/><span>LOGIN</span>
          </a>
          <a className="nav" href="#">
            <FiUser style={{fontSize: '31px'}}/><span>SIGN UP</span>
          </a>
        </div>
    </Nav>
  )

}

export default Navbar
