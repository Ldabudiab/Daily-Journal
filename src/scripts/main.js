import { PostList } from "./feed/postlist.js";
import { getPosts, createPost, usePostCollection } from "../Data/dataManager.js";
import { PostEntry } from "./feed/PostEntry.js";
import { Footer } from "../nav/Footer.js";

const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts.reverse());
	})
}

const showFooter = () =>{

    const footElement = document.querySelector("footer");
    footElement.innerHTML = Footer();
}

const showPostEntry = () => { 
	//Get a reference to the location on the DOM where the nav will display
	const entryElement = document.querySelector(".entryForm");
	entryElement.innerHTML = PostEntry();
  }


const applicationElement = document.querySelector(".main",);




applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	
	}
})

applicationElement.addEventListener("click", event => {
	if (event.target.id === "newPost__cancel") {
		//clear the input fields
	}
  })
  
  applicationElement.addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id === "newPost__submit") {
	//collect the input values into an object to post to the DB
	  const title = document.querySelector("input[name='postTitle']").value
	  const subject = document.querySelector("input[name='concept']").value
	  const description = document.querySelector("textarea[name='postDescription']").value
	  //we have not created a user yet - for now, we will hard code `1`.
	  //we can add the current time as well
	  const postObject = {
		  title: title,
		  concept: subject,
		  description: description,
		  userId: 1,
		  timestamp: Date.now()
	  }
  
	// be sure to import from the DataManager
		createPost(postObject)
		.then(dbResponse => {
			showPostList()
		  });
	}
  })

  applicationElement.addEventListener("change", event => {
	if (event.target.id === "yearSelection") {
	  const yearAsNumber = parseInt(event.target.value)
	  console.log(`User wants to see posts since ${yearAsNumber}`)
	  //invoke a filter function passing the year as an argument
	  showFilteredPosts(yearAsNumber);
	}
  })
  
  const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = usePostCollection().filter(singlePost => {
      if (singlePost.timestamp >= epoch) {
        return singlePost
      }
    })
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = PostList(filteredData);
  }
 
 

const startJrnl = () => {
    
    showPostEntry();
    showPostList();
    showFooter();
}



startJrnl();