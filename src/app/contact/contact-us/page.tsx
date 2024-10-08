import style from "./contact-us.module.css"
console.log(style, "Style")

const ContactUsPage=()=>{
    return(
        <div className={style.container}> 
            <h2> This is contact us page </h2>
        </div>
    )
}
export default ContactUsPage;