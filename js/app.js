const app = {
    init: function () {
        const btnElmt = document.querySelector('.pdf');
        btnElmt.addEventListener('click', app.handleClick);
    },
    handleClick: function (evt) {
        document.querySelector('.pdf').classList.add('invisible');

    }
};

document.addEventListener('DOMContentLoaded', app.init);