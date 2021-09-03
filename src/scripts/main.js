import { PostList } from "./feed/postlist.js";
import { getPosts } from "../Data/dataManager.js";


const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

const startJrnl = () => {
    
    
    showPostList();
    
}



startJrnl();