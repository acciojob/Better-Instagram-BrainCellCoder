document.addEventListener("DOMContentLoaded",()=>{
let draggables = document.querySelectorAll(".image")
// console.log(draggables)

let draggedElement = null // which card/div you have started dragging
draggables.forEach(draggable =>{

    // dragStart, dragEnd

    draggable.addEventListener("dragstart",(e)=>{
         draggedElement = e.target
        //  e.dataTransfer.setData("text", e.target.id)
         draggedElement.style.opacity = 0.5
    })

    draggable.addEventListener("dragend",(e)=>{
        e.target.style.opacity = 1
   })

   // dragover, dragenter, drop
   let dragEvents = ["dragover", "dragenter", "drop"]
//    draggable.addEventListener("dragover", (e)=>{
//         e.preventDefault()
//    })

    dragEvents.forEach(drag =>{
        draggable.addEventListener(drag, (e)=>{
                e.preventDefault()

            if(drag == "drop"){
                 const targetElement = e.target // where you want to drop it
                console.log("Helllloo")
                if(targetElement != draggedElement){
                    // swap the background image
                    const draggedBackground = draggedElement.id
                    draggedElement.id = targetElement.id
                    targetElement.id = draggedBackground

                    // swap: 

                    const draggedText = draggedElement.innerText
                    draggedElement.innerText = targetElement.innerText
                    targetElement.innerText = draggedText


                }



            }
        })
    })


})
})