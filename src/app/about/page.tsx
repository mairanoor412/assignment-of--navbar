import style from "./about.module.css"

console.log(style, "Style")
const AboutPage = ()=>{
    return(
        <div className={style.container}> 
            <h1> This is about page </h1>
        </div>
    )
}

export default AboutPage;

