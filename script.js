document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image');
    let dragSrcEl = null;

    function handleDragStart(e) {
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
        this.classList.add('selected');
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    function handleDragEnd(e) {
        images.forEach((img) => {
            img.classList.remove('over');
            img.classList.remove('selected');
        });
    }

    images.forEach((img) => {
        img.addEventListener('dragstart', handleDragStart);
        img.addEventListener('dragenter', handleDragEnter);
        img.addEventListener('dragover', handleDragOver);
        img.addEventListener('dragleave', handleDragLeave);
        img.addEventListener('drop', handleDrop);
        img.addEventListener('dragend', handleDragEnd);
    });
});
