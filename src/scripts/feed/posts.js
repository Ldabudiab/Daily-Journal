import { dateFormat } from "../helperFunctions/helpers.js"

export const Post = (postObject) => {

    return `
    <section class="post">
    <h3 class="post__timestamp">${dateFormat(postObject.timestamp)}</h3>
    <header>       
        <h2 class="post__title">${postObject.title}</h2>
    </header>
    <h3 class="post__concept">Concept: ${postObject.concept}</h3>   
    <h3 class="post__description">${postObject.description}</h3>
   
  </section>
`
}