

 function ButtonComponent(props){
    const{buttonText,backgroundColor,click}=props;
    return(
    <div>
        <button style={{backgroundColor}} onClick={click}>{buttonText}</button>
    </div>
);
}
export default ButtonComponent;