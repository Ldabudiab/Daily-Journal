

export const Post = (postObject) => {

    return `
        <section class="post">
            <header>          
                <h3 class="post__date">${postObject.date}</h3>
                <h2 class="post__concept"> concept: ${postObject.concept}</h2>              
            </header>
            <article class="post_text">${postObject.text}</article>
        </section>        
           
`
}