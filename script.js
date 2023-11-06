console.log("hello")

const qrTest = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
console.log("*******generate button*********")
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');


let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    console.log("********clicked*********")
    e.preventDefault()  
    isEmptyInput()    
});
downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');
    if(img !== null){
        let imgattribute = img.getAttribute('src')
        downloadBtn.setAttribute('href',imgattribute )

    }else{
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}` )
    }
})

function isEmptyInput(){  
    qrTest.value.length > 0 ? generateQrCode() : alert("Enter any text or Link ");
}

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyInput()

})

function generateQrCode() {
    qrContainer.innerHTML = ""
    console.log("*******printed*******")
    new  QRCode(qrContainer, {
        text: qrTest.value,
        height: size,
        width: size,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
}
