import styled from '@emotion/styled'
import { FiHome, FiLogIn, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom'

 /* 
    * Style
 */
const Nav = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 

  .nav-btn{
    color: var(--orange01);
    padding: 0.5rem;
  }
  .nav-list{   
    z-index: 999;
    transition: all .4s ease-in-out;
    margin-left: -200px;
    background: none; 
    position: absolute;
    top: 42px;
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
 

export default function Navbar(){

  const openList = () => {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('open')

    setTimeout(() => {
      navList.classList.remove('open')
    }, 5000)
  }
  
  return (
    <Nav>
      <button className="nav-btn" onClick={openList}>
        <FiMenu style={{fontSize: '31px'}}/>
      </button>
      <div className="nav-list">
        <Link className="nav" to="/">
          <FiHome style={{fontSize: '31px'}}/><span>HOME</span>
        </Link>
        <Link className="nav" to="/login">
          <FiLogIn style={{fontSize: '31px'}}/><span>LOGIN</span>
        </Link>
      </div>
    </Nav>
  )
}
