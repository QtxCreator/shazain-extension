alert("Script injected by Shazain!");
//(function() {
  const label = document.querySelector('.account-type-label');
  if (label) {
    label.textContent = label.textContent.includes('Demo') ? 'Live Account' : 'Demo Account';
    alert('Account mode toggled (UI only)');
  } else {
    alert('Account label not found.');
  }
})();
 You can add DOM changes or anything else here
