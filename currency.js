document.addEventListener('DOMContentLoaded', ()=>{
    fetch('https://v6.exchangerate-api.com/v6/dcf9a0d2f4febf07116a5a2f/latest/USD')
    .then( response => response.json() )
    .then(data =>{
        const rate = data.conversion_rates.VES;
        document.querySelector('h2').innerHTML = 'VES : ' + rate;

        document.querySelector('form').onsubmit = () =>{
            document.addEventListener('submit', (e)=>{
                e.preventDefault();
                let n = document.querySelector('#number').value;
                document.querySelector('h3').innerHTML = n * rate;
            })
        }
    })
    .catch('Error', ()=> console.log(Error))



})