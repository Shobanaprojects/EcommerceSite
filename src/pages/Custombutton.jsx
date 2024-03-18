import { Fragment } from "react";


const CustomButton = ({title, btnonClick, btnStyle, btntype, dataToggle, dataTarget}) => {
    return(
        <Fragment>
            <button onClick={btnonClick} className={btnStyle} type={btntype} data-bs-toggle={dataToggle} data-bs-target={dataTarget}>{title}</button>
        </Fragment>        
    )        
}
export default CustomButton;