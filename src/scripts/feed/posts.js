

export const Post = (postObject) => {

    return `
        <section class="post">
            <header>          
                <h3 class="post_date">${postObject.date}</h3>
                <h2 class="post_concept"> concept: ${postObject.concept}</h2>              
            </header>
            <h3 class="post_text">${postObject.text}</h3>
            <h2 class="post_mood">${postObject.mood}</h2>
            <div><button id="edit--${postObject.id}">Edit</button></div>
        </section>        
           
`
}