import style from "./style/nav.module.css"
import Link from "next/link";
const Nav = () => {
  return (
    <div className={style.container}>
    
    <div className={style.flex}>
      <nav className={style.nav}>
      <ul className={style.ul}> 
        <li className={style.li}>
           <Link className={style.link} href="/" target="_blank"> Home </Link> 
           </li>

         <li className={style.li}>
           <Link className={style.link} href="/about" target="_blank"> About </Link> 
           </li>

        <li className={style.li}>
           <Link className={style.link} href='/service' target="_blank"> Service </Link> 
           </li>

        <li className={style.li}>
           <Link className={style.link} href='/contact' target="_blank"> Contact </Link>
           </li>
             
        <li className={style.li}> 
          <Link className={style.link} href='/contact/contact-us' target="_blank"> Contact us </Link>
          </li>
           
        
      </ul>
      </nav>
      
      <h1 className={style.h1}> Home Page </h1>
      </div>
      </div>
  )
}

export default Nav;