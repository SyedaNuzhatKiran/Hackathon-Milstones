document.addEventListener('DOMContentLoaded', function () {
    var themeToggleBtn = document.querySelector('#themeToggleBtn');
    themeToggleBtn === null || themeToggleBtn === void 0 ? void 0 : themeToggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
    });
});
