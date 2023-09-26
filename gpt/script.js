document.addEventListener("DOMContentLoaded", function () {
    const getStartedButton = document.getElementById("getStartedButton");

    getStartedButton.addEventListener("click", function () {
        redirectToMusicPage();
    });

    function redirectToMusicPage() {
        // You can replace this with the actual URL of your music page.
        window.location.href = './index.html';
    }
});
