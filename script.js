function display(img,name,price,details){

    const body = document.querySelector('body');

    body.innerHTML += `
    <div class="card-box">
        <div class="img-box">
            <img src="${img}" alt="">
        </div>
        <div class="name-box">
            <h1>${name}</h1>
        </div>
        <div class="price-box">
            <h4>${price}</h4>
        </div>
        <div class="detail-box">
            <p>${details}</p>
        </div>
    </div>
    `
}

function addPhone(){

    const img = document.getElementById('imgm').value;
    const name = document.getElementById('namem').value;
    const price = document.getElementById('pricem').value;
    const details = document.getElementById('detailsm').value;

    display(img,name,price,details);

}

const myobj = [
    {
        img: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/54859789be41fdd9d1852843a4f88cd5.png',
        name: 'Camon 40 Premier 5g',
        price: 'Rs. 55000',
        details: 'Android 15 5100 mAh 70W Ultra Charge'
    },

    {
        img: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/6f26bb1dd7b208e168008d0d71184f54.png',
        name: 'Phantom X',
        price: 'Rs. 32500',
        details: 'Android 15 5000 mAh 50W Ultra Charge'
    },
    
    {
        img: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/cc9fd38489efc76d5ed41ab50a51daba.png',
        name: 'Camon 40 Pro 5g',
        price: 'Rs. 53000',
        details: 'Android 15 6000 mAh 70W Ultra Charge'
    },
    {
        img: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/808ba6cdcfed56ae36b9c6ff43bbc4c1.png',
        name: 'SPARK Go 1S',
        price: 'Rs. 47000',
        details: 'Android 15 5500 mAh 60W Ultra Charge'
    },
    {
        img: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/8ce21c31b24849ecc9381593d35bc71a.webp',
        name: 'Camon 30S',
        price: 'Rs. 41000',
        details: 'Android 15 5100 mAh 70W Ultra Charge'
    },
    {
        img: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/5f4a7213c41314c19885b0a1d419e077.png',
        name: 'PHANTOM V Fold2 5G',
        price: 'Rs. 95000',
        details: 'Android 15 Fold 70W Ultra Charge'
    },
    {
        img: 'https://d3fyizz0b46qgr.cloudfront.net/global/phones/45c026326fdce9098edaf838b954f79b.png',
        name: 'PHANTOM V Fold',
        price: 'Rs. 89000',
        details: 'Android 15 Fold 70W Ultra Charge'
    },

]

myobj.forEach((element)=>{
    display(element.img, element.name , element.price , element.details)    
})