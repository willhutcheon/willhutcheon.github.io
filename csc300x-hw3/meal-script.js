/* Will Hutcheon
Webpage that displays restaurant reccomendations and reccomended dishes for the restaurants as well as a page for creating a meal plan
based on the reccomendations. This file contains the javascript code for the meal plan webpage. This code is adding buttons with functionality to allow a user
to create a meal plan and see how much their plan costs. */
document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.add');
    const mealPlanList = document.getElementById('meal-plan-list');
    const totalCostElement = document.getElementById('total-cost');

    let totalCost = 0;

    addButtons.forEach(button => {
        button.addEventListener('click', function () {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);

            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
                <p>${name}</p>
                <p>Price: $${price.toFixed(2)}</p>
                <button class="remove">Remove</button>
                <button class="add-more">Add Another Order</button>
            `;
            mealPlanList.appendChild(item);

            totalCost += price;
            totalCostElement.textContent = totalCost.toFixed(2);

            const removeButton = item.querySelector('.remove');
            removeButton.addEventListener('click', function () {
                mealPlanList.removeChild(item);
                totalCost -= price;
                totalCostElement.textContent = totalCost.toFixed(2);
            });

            const addMoreButton = item.querySelector('.add-more');
            addMoreButton.addEventListener('click', function () {
                const additionalItem = document.createElement('div');
                additionalItem.classList.add('item');
                additionalItem.innerHTML = `
                    <p>${name}</p>
                    <p>Price: $${price.toFixed(2)}</p>
                    <button class="remove">Remove</button>
                    <button class="add-more">Add Another Order</button>
                `;
                mealPlanList.appendChild(additionalItem);

                totalCost += price;
                totalCostElement.textContent = totalCost.toFixed(2);

                const additionalRemoveButton = additionalItem.querySelector('.remove');
                additionalRemoveButton.addEventListener('click', function () {
                    mealPlanList.removeChild(additionalItem);
                    totalCost -= price;
                    totalCostElement.textContent = totalCost.toFixed(2);
                });
            });
        });
    });
});
