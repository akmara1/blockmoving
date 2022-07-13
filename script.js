const click = document.querySelector(".click");
const block = document.querySelector(".block");
document.body.querySelector(".wrapper").style.position = "relative";
block.style.position = "absolute";



let positionLeft = 0;
let positionTop = 0;



click.addEventListener("click", recursion = () =>{
    if(positionLeft<9){
        positionLeft++;
        let leftWidth = String(positionLeft*50)+"px";
        let topWidth = String(positionTop*50)+"px"
        console.log(leftWidth);
        block.style.left = leftWidth;
        block.style.top = topWidth;
    }else{
        if(positionTop<9){
            positionLeft=0;
            positionTop++
            let leftWidth = String(positionLeft*50)+"px";
            let topWidth = String(positionTop*50)+"px"
            block.style.left = leftWidth;
            block.style.top = topWidth;
        }


    }
    // if(position<9){
    //     // position++;
    //     click.addEventListener("click", recursion())
    // }
})
