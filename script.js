let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePosts(){
localStorage.setItem("posts", JSON.stringify(posts));
}

function createPost(){

let text = document.getElementById("postText").value.trim();

if(text === "") return;

posts.unshift({
text:text,
likes:23,
comments:15
});

document.getElementById("postText").value="";

savePosts();
renderPosts();

}

function renderPosts(){

let feed = document.getElementById("feed");

feed.innerHTML = "";

posts.forEach((p,index)=>{

let div = document.createElement("div");

div.className="post";

div.innerHTML = `
<div class="post-header">

<img src="https://i.pravatar.cc/45">

<div>
<b>James Smith</b>
<div style="font-size:12px;color:gray">UX Designer</div>
</div>

</div>

<p>${p.text}</p>

<img src="https://picsum.photos/500/250?random=${index}">

<div class="post-actions">

<span onclick="likePost(${index})">❤️ ${p.likes}</span>

<span>💬 ${p.comments}</span>

<span>↗ Share</span>

</div>
`;

feed.appendChild(div);

});

}

function likePost(index){

posts[index].likes++;

savePosts();
renderPosts();

}

renderPosts();