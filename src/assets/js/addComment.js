import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const commentDelBtn = document.querySelector(".comment_delBtn");

const increaseNumber = () =>{
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
}

const decreaseNumber = () =>{
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
}

const sendDelComment = async(comment_id) => {
    const videoId = window.location.href.split("/videos/")[1];
    await axios({
        url: `/api/${videoId}/del_comment`,
        method: "POST",
        data: {
            comment_id
        }
    });
};

const deleteComment = event => {
    const btn = event.target;
    const li = btn.parentNode;
    const comment_id = btn.getAttribute("id");
    sendDelComment(comment_id);
    commentList.removeChild(li);
    decreaseNumber();
}


const addComment = (comment, comment_id, creator_name, creator_id) => {
    const li = document.createElement("li");
    const span_creator = document.createElement("span");
    const span_text = document.createElement("span");
    const delBtn = document.createElement("div");
    const link = document.createElement("a");
    link.href = `/users/${creator_id}`
    span_creator.innerHTML = creator_name;
    span_creator.className = "comment_creator";
    span_text.innerHTML = comment;
    span_text.className = "comment_text";
    delBtn.innerHTML = "✖";
    delBtn.className = "comment_delBtn";
    delBtn.id = comment_id
    link.appendChild(span_creator);
    li.appendChild(link);
    li.appendChild(span_text);
    li.appendChild(delBtn);
    commentList.prepend(li);
    increaseNumber();
};

const sendComment = async(comment) => {
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment
        }
    });
    if (response.status === 200){
        const creator_name = response.data.creatorName;
        const creator_id = response.data.creatorId;
        const comment_id = response.data.commentId;
        addComment(comment, comment_id, creator_name, creator_id);
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
};

function init() {
    addCommentForm.addEventListener("submit", handleSubmit);
    if(commentDelBtn){
    commentDelBtn.addEventListener("click", deleteComment);
}
}

if (addCommentForm) {
    init();
}