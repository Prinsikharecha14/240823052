function armstrong(num) {
    let s = num + '';
    let sum = 0;
    for (let i = 0; i < s.length; i++) sum += s[i] ** s.length;
    console.log(sum);
  }
  
  armstrong(153); 