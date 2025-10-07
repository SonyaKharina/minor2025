function find_edit() {
    const surname_node = document.getElementById('surname')
    surname_node.innerHTML = "Surname: Kharina"

    const name_node = document.getElementById('name')
    name_node.innerHTML = "Name: Sofya"

    const year_node = document.getElementById('year')
    year_node.innerHTML = "Year of Birth: 2006"

    const node_for_click = document.getElementById('for_click')
    node_for_click.innerHTML = "Текст изменён"   
}

const node_for_click = document.getElementById('for_click')
node_for_click.addEventListener('click', find_edit)
