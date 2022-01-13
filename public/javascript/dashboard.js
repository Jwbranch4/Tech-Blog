function newPostBtnHandler(event) {
  document.location.replace("/dashboard/edit-post");
}

document
  .querySelector("#new-post-btn")
  .addEventListener("click", newPostBtnHandler);
