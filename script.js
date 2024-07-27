document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.querySelectorAll('.image');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
    draggable.addEventListener('drop', dragDrop);
    draggable.addEventListener('dragend', dragEnd);
  });

  let dragSrcEl = null;

  function dragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    this.classList.add('selected');
  }

  function dragOver(e) {
    e.preventDefault();
    return false;
  }

  function dragEnter(e) {
    this.classList.add('over');
  }

  function dragLeave(e) {
    this.classList.remove('over');
  }

  function dragDrop(e) {
    e.preventDefault();
    if (dragSrcEl !== this) {
      dragSrcEl.outerHTML = this.outerHTML;
      this.outerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function dragEnd(e) {
    draggables.forEach(draggable => {
      draggable.classList.remove('over');
      draggable.classList.remove('selected');
    });
  }
});
