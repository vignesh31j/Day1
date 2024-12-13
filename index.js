let testimonial_data =[
    {
        name:"Jaya Vignesh",
        image:"https://picsum.photos/200/200?random=2",
        text_content:"This company surpasses its competitors in service quality. Their products are of high quality, delivered promptly. I highly recommend this company."
    },
    {
        name:"Sharath Kumar",  
        image:"https://picsum.photos/200/200?random=3",
        text_content:"I needed a refund for tickets to an event that was changed last minute. I experienced great customer service and the issue was resolved in a timely manner."
    },
    {
        name:"Vignesh",
        image:"https://picsum.photos/200/200?random=4",
        text_content:"I am very happy with the service provided by the company. They are very professional and better"
    },
    {
        name:"Sharath",
        image:"https://picsum.photos/200/200?random=5",
        text_content:"I am completely blown away by how effective Company Name's digital marketing is Thighly recommend this to any business of any size."
    }
    
        

]

let data = 0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current =testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++

    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()
