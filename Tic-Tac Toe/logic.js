let boxes=document.querySelectorAll(".box");//accessing all button with class
let resett=document.querySelector(".reset");//same as above but only one button
let neww=document.querySelector(".new");//accessing complete div to make it appear after the winner is decided
let newbtn=document.querySelector(".newgame");//accessing new game button so to define what happen when we click on this button
let paragraph = document.querySelector(".para");

let turn_O=true; // creating a variable that stores the turn of X______O

const Winning_Pattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];//created a 2D array or array of array that store all the pattern at which the user will be winner.

//addind event listener to define what happen when you click on the button.
//to access each button forEach method is used.

let click_count=0;//to count number of times button clicked.

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked");
        //box.innerText="ab"; --- this is how we can access the inner text

        if(turn_O){
            box.innerText="O";
            turn_O=false;
        }
        else{
            box.innerText="X";
            turn_O=true;
        }
        box.disabled=true;//this will disable every single button after once clicked.

        click_count++;

        checkWinner();//every time a button is clicked we have to check if the winning Pattern is created or not.

    });
});//forEach loop passes value from boxes array object which are(buttons) so {box here hold every single button each time}


const disable_box = ()=>{
    for(let b of boxes){
        b.disabled =true;
    }
};

const enable_box = ()=>{
    for(let b of boxes){
        b.disabled =false;
        b.innerText = ""; //removing all the previous value of button.
    }
};

const draw_fn = ()=>{
    paragraph.innerText=`It's a Draw !`;
    neww.classList.remove("hide");
};


const showwinner = (winner)=>{
    paragraph.innerText=`WINNER ! is  ${winner}`;//passing text to new button paragraph
    neww.classList.remove("hide"); //removing class hide so that can show the winner
    disable_box();//disabeling boxes so that no further game can be played.
};


const checkWinner = () =>{
    for(let pos of Winning_Pattern){//this loop returns value at that index
        //console.log(pos);----this will print value at winning_pattern index
        //console.log(pos[0],pos[1],pos[2]);----this will print value at winning pattern array of array meaning(at 0 index --> at 0,1,2 position value will be printed)
        //console.log(boxes[pos[0]].innerText,boxes[pos[1]].innerText,boxes[pos[2]].innerText);-----now this will print the text at that button.
        //winning_pattern[0]--
        //                      at position[1]----
        //                                        innerText(x or o)
        let pos1val= boxes[pos[0]].innerText;
        let pos2val= boxes[pos[1]].innerText;
        let pos3val= boxes[pos[2]].innerText;
        //this here will give boxes that are creating winning pattern.

        if(pos1val !="" && pos2val !="" && pos3val !=""){//if all 3 boxes are not empty the only we will check  if the winning pattern is created.
            
            if(pos1val === pos2val && pos2val === pos3val){
                //console.log("winner",pos1val);
                showwinner(pos1val);
            }
            
            if(click_count === 9){
                draw_fn(); // when all boxes/button are filled then draw condition is executed.
            }
    }
    }
};

//to reset the function 
const reset_fun=()=>{
    turn_O=true;
    enable_box();//calling this box because we want to enable all box when new game start
    //also removing all previous value of the buttons.

    neww.classList.add("hide");//adding it so that we can hide it again.
    
    click_count=0; //resetting click count.
};

newbtn.addEventListener("click",reset_fun);//event on click will reset the button.

resett.addEventListener("click",reset_fun);