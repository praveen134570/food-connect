function goToDonate() {
    document.getElementById("donate").scrollIntoView();
}

function goToFind() {
    document.getElementById("find").scrollIntoView();
}


document.getElementById("donateForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Food donated successfully!");

    this.reset();

});


function requestFood(foodName) {

    alert("You requested: " + foodName);

    document.getElementById("request").scrollIntoView();

}


document.getElementById("requestForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Food request submitted successfully!");

    this.reset();

});


function searchFood() {

    let search = document.getElementById("search").value.toLowerCase();

    let foods = document.getElementsByClassName("food");

    for (let i = 0; i < foods.length; i++) {

        let foodName = foods[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if (foodName.includes(search)) {
            foods[i].style.display = "block";
        }
        else {
            foods[i].style.display = "none";
        }
    }
}