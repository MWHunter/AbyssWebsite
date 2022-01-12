// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyToClipboard() {
    /* Get the text field */
    const copyText = document.getElementById("serverIP");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    const button = document.getElementById("copyButton");
    button.innerHTML = "Copied!";
}