import './aboutstyle.css';

export function aboutPageLoad() {
    const content = document.getElementById('content');
    content.innerHTML = `
    <div class="aboutTab">
        <h1 class="aboutTitle">
            Been in business before you were born!
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aperiam, iure, sint, possimus quam vel a neque perspiciatis fugit voluptates voluptas odio beatae aspernatur. Nostrum id non repellat quaerat quisquam.</p>

        <form action="">
            <p>
                <label id="nametext" for="name">
                    <span>Name: </span>
                    <strong><span aria-label="required">*</span></strong>
                </label>
                <input type="text" name="name" id="name" required>
            </p>

            <p>
                <label id="messagetext" for="message">
                    <span>Message: </span>
                </label>
                <textarea name="message" id="message" placeholder="Leave a message!"></textarea>
                <br>
                <input type="submit" value="Submit" id="submit">
            </p>
        </form>
    </div>`
}   