// export const getPosts = () => {
// 	return fetch("http://localhost:8088/posts")
// 	.then(response => response.json()) 
	

// }

export const createPost = postObj => {
	return fetch("http://localhost:8088/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(postObj)
  
	})
		.then(response => response.json())
  }

  let postCollection = [];

export const usePostCollection = () => {
  
  return [...postCollection];
}
export const getPosts = () => {
  return fetch("http://localhost:8088/posts")
    .then(response => response.json())
    .then(parsedResponse => {
      postCollection = parsedResponse
      return parsedResponse;
    })
}