function computeKg(){
    const poundss = document.querySelector('.pound-input').value;
    const weightinKg = document.querySelector('#kilogram');
    

    const resultinKg = (poundss* 0.45359237).toFixed(2)
    

     weightinKg.innerHTML = `Your weight in Kilogram is: ${resultinKg} `

}



    