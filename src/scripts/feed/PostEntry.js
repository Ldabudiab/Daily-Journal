export const PostEntry = () => {
    return `
    <div class="newPost">
    <div class="titleBox">
        <input value=""
               name="postTitle"
               class="newPost__input"
               type="text"
               placeholder="Title" />
    </div>
    <div class="conceptBox">
        <input value=""
               name="concept"
               class="newPost__input"
               type="text"
               placeholder="Topic covered" />
    </div>
    <div class="descBox">
    <textarea name="postDescription"
        class="newDesc__input newPost__description"
        placeholder="What I learned in class..."></textarea>
    </div>
    </div>

    <div class="button_pos">
    <button id="newPost__submit">Save</button>
    <button id="newPost__cancel">Cancel</button>
    </div>

    `
}