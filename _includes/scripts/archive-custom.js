(function() {
  function toggleFilteredStatus() {
    document.querySelector('article[itemscope]').classList[
      location.search ? 'add' : 'remove'
    ]('archive--filtered');
  }
  toggleFilteredStatus();
  // Filtering the archive uses the History API to avoid refreshing the page
  window.history.replaceState = new Proxy(window.history.replaceState, {
    apply: (target, thisArg, argArray) => {
      setTimeout(toggleFilteredStatus);
      return target.apply(thisArg, argArray);
    },
  });
})();
