export const PostEntry = () => {
    return `
    <div class="newPost">
    <div>
        <input value=""
               name="postTitle"
               class="newPost__input"
               type="text"
               placeholder="Title" />
    </div>
    <div>
        <input value=""
               name="concept"
               class="newPost__input"
               type="text"
               placeholder="Topic covered" />
    </div>

    <textarea name="postDescription"
        class="newDesc__input newPost__description"
        placeholder="What I learned in class..."></textarea>

</div>
    <button id="newPost__submit">Save</button>
    <button id="newPost__cancel">Cancel</button>
    `
}