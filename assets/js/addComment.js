import axios from "axios";

var i;

const addCommentForm = document.getElementById("jsAddComment");
const commentList=document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");





function increseNumber(){
    commentNumber.innerHTML =parseInt(commentNumber.innerHTML,10) +1;
}

const addComment = (comment)=>{
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML=comment;
    li.appendChild(span);
    commentList.prepend(li);
    increseNumber();
}

const sendComment = async(comment) =>{
    const videoId = window.location.href.split("/videos/")[1];
    const response =  await axios({
        url:`/api/${videoId}/comment`,
        method:"POST",
        data:{
            comment
        }
    });
    if(response.status === 200){
        addComment(comment);
    }
    console.log(response);
}

function handleSubmit (event){
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value="";
}

const removeCommentFromDb = async(id) => {
    const videoId = window.location.href.split("/videos/")[1];
    const response =  await axios({
        url:`/api/${videoId}/deleteComment`,
        method:"POST",
        data:{
            commentId:id
        }
    });
    if(response.status === 200){
        console.log(`good : ${id}`)
    }
    console.log(response);
}
function deleteClickedComment(event){
    const TARGET_LI=event.target.parentNode.parentNode;
    console.log(TARGET_LI.id);
    removeCommentFromDb(TARGET_LI.id);
    TARGET_LI.remove();
    
}

function init(){
    addCommentForm.addEventListener("submit",handleSubmit);
    
    const commentListAnchor = commentList.querySelectorAll("a");
    
    for(i=0;i<commentListAnchor.length;i++){
    commentListAnchor[i].addEventListener("click",deleteClickedComment);
    
}}

if(addCommentForm){
    
    init();
    
    
}
