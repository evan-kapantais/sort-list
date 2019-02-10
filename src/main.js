var items = document.getElementsByClassName('item');

for (var i = 0; i < items.length; ++i) {
    items[i].addEventListener('click', toggleClicked);
    items[i].addEventListener('mouseenter', toggleEnter);
    items[i].addEventListener('mouseleave', toggleLeave);
}

function toggleClicked() {

    if (!this.classList.contains('clicked')) {
        for (var i = 0; i < items.length; ++i) {
            items[i].classList.remove('clicked');
        }
        if (this.classList.contains('hover')) {
            this.classList.remove('hover');
        }
        this.classList.add('clicked');
    }
}

function toggleEnter() {
    if (!this.classList.contains('clicked'))
    {    if (!this.classList.contains('hover')) {
            for (var i = 0; i < items.length; ++i) {
                items[i].classList.remove('hover');
            }
            this.classList.add('hover');
        }
    }
}

function toggleLeave() {
    this.classList.remove('hover');
}
