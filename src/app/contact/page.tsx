import style from "./contact.module.css"
console.log(style, "Style")

const ContactPage= ()=>{
    return (
        <div className={style.container}>
            <h1> This is Contact Page </h1>
        </div>
    )
}
export default ContactPage;