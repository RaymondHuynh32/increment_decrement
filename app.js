/* <input type="number" id="numberBox">
        <button><i class = "fas fa-plus-circle" id="plus"></i></button>
        <button><i class = "fas fa-minus-circle" id="minus"></i></button>
        <button><i class = "fas fa-sync-alt" id="reset"></i></button> */
let numberBox = document.querySelector("#numberBox");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");
let my_number = 0;
plus.addEventListener("click", function(){
    my_number++;
    numberBox.value = my_number;
})
minus.addEventListener("click", () => {
    my_number--;
    numberBox.value = my_number;
})
reset.addEventListener("click", ()=>{
    my_number = 0;
    numberBox.value = my_number;
})