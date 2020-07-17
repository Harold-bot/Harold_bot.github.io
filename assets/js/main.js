function react() {
  isHidden = document.querySelector('input[name="time"]:checked').value;
  if (isHidden) {
    document.getElementById("time_choise").style.display = 'block';    
    document.getElementById("time_choise").style.transition = 'all 2s ease-in-out 2s';
  }
}

