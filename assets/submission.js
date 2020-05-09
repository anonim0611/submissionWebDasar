const cacheKey = "NUMBER";
if (typeof(Storage) !== "undefined") {

    if (localStorage.getItem(cacheKey) === "undefined"){

        localStorage.setItem(cacheKey,0);
    }

    const btnDonasi = document.querySelector("#btnDonasi");
    const jml = document.querySelector("#jml");
    const btnDonasiA = document.querySelector("#btnDonasiA");
    const btnDonasiB = document.querySelector("#btnDonasiB");
    
    btnDonasi.addEventListener('click', function(event){
        let number = localStorage.getItem(cacheKey);
        number++;
        localStorage.setItem(cacheKey,number);
        jml.innerText = localStorage.getItem(cacheKey);

        alert("Terimakasih, sudah berpartisipasi pada donasi")

    });

    btnDonasiA.addEventListener('click', function(event){
        let number = localStorage.getItem(cacheKey);
        number++;
        localStorage.setItem(cacheKey,number);
        jml.innerText = localStorage.getItem(cacheKey);

        alert("Terimakasih, sudah berpartisipasi pada donasi")

    });

    btnDonasiB.addEventListener('click', function(event){
        let number = localStorage.getItem(cacheKey);
        number++;
        localStorage.setItem(cacheKey,number);
        jml.innerText = localStorage.getItem(cacheKey);

        alert("Terimakasih, sudah berpartisipasi pada donasi")

    });

} else {
    alert("Browser tidak mendukung web storage")

}
