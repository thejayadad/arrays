document.addEventListener('DOMContentLoaded', function () {
    // Sample array
    const myArray = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

    function displayArray() {
        const arrayList = document.getElementById('arrayList');

        arrayList.innerHTML = '';

        myArray.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            arrayList.appendChild(li);
        });
    }

    displayArray();
});
