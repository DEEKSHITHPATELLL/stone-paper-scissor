let ucount=0;
let Ccount=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user=document.querySelector("#p1");
const comp=document.querySelector("#p2");
const genCompChoice=()=>
{
    const choice=["rock","paper","scissors"];
    const ridx=Math.floor(Math.random()*3);
    return choice[ridx];
}
const draw=(userchoice,compchoice)=>
{
    msg.innerText=`Tie game!play again`;
    msg.style.backgroundColor="black";
    msg.style.color="white";

}
const showWinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
       ucount++;
       user.innerText=`${ucount}`;
        msg.innerText=`User won! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else
    {
        Ccount++;
        comp.innerText=`${Ccount}`;
        msg.innerText=`User lost! your ${userchoice} lost to ${compchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}
const playGame=(userchoice)=>
{
    const compchoice=genCompChoice();
    if(userchoice===compchoice)
    {
       draw(userchoice,compchoice);
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="rock"?true:false;
        }
        else
        {
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});