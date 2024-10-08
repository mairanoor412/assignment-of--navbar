import style from "./service.module.css"
console.log(style, "Style")

function ServicePage(){
    return(
        <div className={style.container}>
            <h1> This is service page </h1>
        </div>
    )
}
export default ServicePage;