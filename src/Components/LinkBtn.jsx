const LinkBtn = (props) => {
   if (props.type === "outlined") {
        return <a href={props.href} className={"px-4 py-3 border-primary rounded-lg border text-primary bg-transparent " + props.className}>{props.children}</a>
   }else{
        return <a href={props.href} className={"px-4 py-3 border-primary rounded-lg border text-white bg-primary " + props.className}>{props.children}</a>
   }

}
 
export default LinkBtn;