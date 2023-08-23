const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const tbody = document.getElementById('tbody');

    for (let i = 0; i <= 10; i++) {
        tbody.innerHTML +=
            `<tr>
                <td>${numeroTabla.value}</td>
                <td>${i}</td>
                <td>${numeroTabla.value * i}</td>
            </tr>`
    };
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    tbody.innerHTML = '';
})
