function calculatePrice() {
    const size = document.querySelector("input[name='size']:checked").value;
    const selectedDrink = document.getElementById("drink").value;

    let price = 0;
    if (selectedDrink != "default") {
        if (selectedDrink === "bubble-milktea") {
            price = 30;
        } else if (selectedDrink === "iced-latte") {
            price = 28;
        } else if (selectedDrink === "pineapple-juice") {
            price = 26;
        }

        // TODO: Adjust the price based on the selected size
        if (size === "medium") {
            price += 5;
        } else if (size === "large") {
            price += 10;
        }

        // TODO: Display the calculated price
        document.getElementById("price").textContent = price;
    } else {
        // TODO: Show alert message for choosing a drink
        alert("Please select a drink first.");
        // TODO: Clear radio buttons state one-by-one
        let sizeOptions = document.querySelectorAll("input[name='size']");
        for (option of sizeOptions) {
            option.checked = false;
        }
        let iceOptions = document.querySelectorAll("input[name='ice']");
        for (option of iceOptions) {
            option.checked = false;
        }
        let sweetnessOptions = document.querySelectorAll("input[name='sweetness']");
        for (option of sweetnessOptions) {
            option.checked = false;
        }
    }

}

function validateForm() {
    // TODO: Get all form values (name, drink, size, ice, sweetness)
    const name = document.getElementById("name").value;
    const drink = document.getElementById("drink").value;
    const size = document.querySelector("input[name='size']:checked");
    const ice = document.querySelector("input[name='ice']:checked");
    const sweetness = document.querySelector("input[name='sweetness']:checked");

    // TODO: Check if name field is empty
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    // TODO: Check if drink is selected
    if (drink === "default") {
        alert("Please select a drink.");
        return false;
    }

    // TODO: Check if size is selected
    if (!size) {
        alert("Please select a size.");
        return false;
    }

    // TODO: Check if ice level is selected
    if (!ice) {
        alert("Please select an ice preference.");
        return false;
    }

    // TODO: Check if sweetness level is selected
    if (!sweetness) {
        alert("Please select a sweetness level.");
        return false;
    }

    // TODO: Return true if the form is completely filled
    return true;
}

function placeOrder(event) {
    // TODO: Prevent the default form submission behavior
    event.preventDefault();

    // TODO: Check if form is validated or not, only submit data when form is validated
    if (validateForm()) {
        // TODO: Get all form values (name, drink, size, ice, sweetness)
        const name = document.getElementById("name").value;
        const drink = document.getElementById("drink").value;
        const size = document.querySelector("input[name='size']:checked").value;
        const ice = document.querySelector("input[name='ice']:checked").value;
        const sweetness = document.querySelector("input[name='sweetness']:checked").value;

        // TODO: Group all data into an array in the order of: name, drink, size, ice, sweetness
        const orderData = [name, drink, size, ice, sweetness];
        // TODO: Save the order data to localStorage
        localStorage.setItem("orders", orderData);

        // TODO: Display a confirmation message after placing the order
        alert("Order placed successfully! Thank you for your order.");

        // TODO: Reset the form to its initial state
        document.getElementById("order-form").reset();
        // TODO: Update the price display after resetting the form
        document.getElementById("price").textContent = 0;
    }
}