
//  c/5 = (f-32)/9
    // f = (9c+160)/5

    function computeTemp() {
        let celc = document.getElementById('celc-input').value;
        const result = document.getElementById('result');
        const fahrent = document.getElementById('fahrent');
        const celcius = document.getElementById('celcius');


        f = ((9 * celc) + 160) / 5;
        c= ((celc-32)* 5/9).toFixed(2)

        if(fahrent.checked){
        result.innerHTML = `${celc}<sup>0</sup>C is ${f}<sup>0</sup>F`
        celc = ""
        }else if(celcius.checked){
         result.innerHTML = `${celc}<sup>0</sup>F is ${c}<sup>0</sup>C`
         celc = ""
        }else if(!celcius.checked && !fahrent.checked){
            alert('please select Fahrenheit or Celcius')
        }

      }

    