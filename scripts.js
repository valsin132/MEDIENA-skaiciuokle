let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', function() {
    let storis = document.getElementById('storio-pasirinkimas').value
    let plotis = document.getElementById('plocio-pasirinkimas').value
    let ilgis = document.getElementById('ilgio-pasirinkimas').value
    let lentos = document.getElementById('skaicius-lentu').value
    

    let kubatura = ((storis * plotis * ilgis * lentos) / 1000000000).toFixed(3)
    let kaina = (kubatura * 340).toFixed(2)

    let results = document.getElementById('results')
    results.innerHTML = `<p><strong>Kubatūra:</strong> ${kubatura} m3</p>`
    results.innerHTML += `<p><strong>VISO:</strong> ${kaina} eur.</p>`
    
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('storio-pasirinkimas').value = 25
    document.getElementById('plocio-pasirinkimas').value = 50
    document.getElementById('ilgio-pasirinkimas').value = 3000
    document.getElementById('skaicius-lentu').value = 0
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nepasirinkta.</p>'
})