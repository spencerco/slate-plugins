export const setPositionAtSelection = (
  el: HTMLElement,
  scrollContainer: HTMLElement,
  direction: 'top' | 'bottom' = 'top'
) => {
  const domSelection = window.getSelection();
  if (!domSelection || domSelection.rangeCount < 1) return;

  const domRange = domSelection.getRangeAt(0);
  const rect = domRange.getBoundingClientRect();

  const parentContainer = el.offsetParent as HTMLElement | null
  if (!parentContainer) return;

  // el.style.top = (parentContainer.getBoundingClientRect().top + rect.top - el.offsetHeight) + "px"
  el.style.top = (scrollContainer.scrollTop - (parentContainer.getBoundingClientRect().top - scrollContainer.offsetTop) + (rect.top - scrollContainer.offsetTop) - el.offsetHeight) + "px"
  // console.log(scrollContainer.scrollTop, parentContainer.getBoundingClientRect().top, scrollContainer.offsetTop, rect.top, scrollContainer.offsetTop)
  el.style.left = `${
    rect.left - parentContainer.getBoundingClientRect().left - el.offsetWidth / 2 + rect.width / 2
  }px`;
};
