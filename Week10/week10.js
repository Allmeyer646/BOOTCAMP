let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('lineup');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('order').value;
    row.insertCell(1).innerHTML = document.getElementById('player').value;
    row.insertCell(2).innerHTML = document.getElementById('position').value;
    row.insertCell(3).innerHTML = document.getElementById('average').value;
    let addPlayer = row.insertCell(4);
    addPlayer.appendChild(removePlayer(id++));
    document.getElementById('order').value = '';
    document.getElementById('player').value = '';   //these three lines will wipe the values from the inputs
    document.getElementById('position').value = '';
    document.getElementById('average').value = '';
});

function removePlayer(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-sm btn-secondary';
    btn.id = id;
    btn.innerHTML = 'Remove Player';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}