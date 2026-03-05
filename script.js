let posts = JSON.parse(localStorage.getItem("posts")) || [];

const postText = document.getElementById("postText");
const postBtn = document.getElementById("postBtn");
const postsList = document.getElementById("postsList");

// Enable/disable button
postText.addEventListener("input", () => {
  postBtn.disabled = postText.value.trim() === "";
});

postBtn.addEventListener("click", () => {
  const text = postText.value.trim();
  if(text === "") return;

  posts.unshift({
    user: "James Smith",
    title: "UX Designer",
    text: text,
    likes: 0,
    image: `https://picsum.photos/500/250?random=${Date.now()}`
  });

  postText.value = "";
  postBtn.disabled = true;
  savePosts();
  renderPosts();
});

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
  postsList.innerHTML = "";
  posts.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <div class="post-header">
        <img src="https://i.pravatar.cc/48?u=${i}" />
        <div>
          <strong>${p.user}</strong>
          <div style="font-size:13px;color:#666">${p.title}</div>
        </div>
      </div>
      <p>${p.text}</p>
      <img src="${p.image}" class="post-image"/>
      <div class="post-actions">
        <span onclick="likePost(${i})">❤️ ${p.likes}</span>
        <span>💬 0</span>
        <span>↗ Share</span>
      </div>
    `;
    postsList.appendChild(div);
  });
}

function likePost(i){
  posts[i].likes++;
  savePosts();
  renderPosts();
}

// Initial render
renderPosts();