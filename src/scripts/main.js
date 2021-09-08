import { PostList } from "./feed/postlist.js";
import { getPosts } from "../Data/dataManager.js";


const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const applicationElement = document.querySelector(".main",);

applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	
	}
})

const startJrnl = () => {
    
    
    showPostList();
    
}



startJrnl();