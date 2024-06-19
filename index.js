function duolingoAlert(){
    alert('Be Warned...');
    alert('This Is A Point Of No Return...');
};

function figureItOut(){
    document.getElementById('figure-it-out').textContent = 'Whomp Whomp';
    setTimeout(() => {
        document.getElementById('figure-it-out').textContent = 'Or Just Make One?';
    }, 2500)
};