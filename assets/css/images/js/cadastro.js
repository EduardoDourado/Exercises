window.onload = () => {

    tbody = document.querySelector('.listagem-dinamica tbody')
    tbody.innerHtml = ""

    var users = JSON.parse (localStorage.getItem('users'))
    users.forEach((usuario) => {
        
        var tr = document.createElement('tr');//linha

        
        var tdName = document.createElement('td');
        tdName.textContent = usuario.name
        tr.appendChild(tdName)
        
        var tdEmail = document.createElement('td');
        tdEmail.textContent = usuario.email
        tr.appendChild(tdEmail)

        var tdSenha = document.createElement('td');
        tdSenha.textContent = usuario.senha
        tr.appendChild(tdSenha)

        tbody.appendChild(tr)
    })
    //1- escutar o evento do submit do form
    document.getElementById('Cadastro').addEventListener('submit', function (event) {// chama o input submit entao tudo que estiver dentro do forms sera escutado o evento com os respectivos valores.
        event.preventDefault()//faz com que nao atualize a pag
        //2- pegar os dados do input do form
        name = document.getElementById('nome').value
        senha = document.getElementById('senha').value
        email = document.getElementById('email').value

        var users = JSON.parse(localStorage.getItem('users'))

        if(users == null) users = []
        
        
        
        //3 salvar esses dados em um objeto
        usuario = {
            
            name: name,
            senha: senha,
            email: email,
            
            
            
        }
        //4- salvar esse objeto em uma lista
        
        users.push(usuario)
        localStorage.setItem('users', JSON.stringify(users))
        //5 - apresentar os dados dessa lista em uma tabela
        tbody = document.querySelector('.listagem-dinamica tbody')
        tbody.innerHtml = ""

     //modyfied
        
        var users = JSON.parse (localStorage.getItem('users'))
        tbody.innerHTML = "";
        users.forEach((usuario) => {
            
            var tr = document.createElement('tr');//linha

            
            var tdName = document.createElement('td');
            tdName.textContent = usuario.name
            tr.appendChild(tdName)
            
            var tdEmail = document.createElement('td');
            tdEmail.textContent = usuario.email
            tr.appendChild(tdEmail)

            var tdSenha = document.createElement('td');
            tdSenha.textContent = usuario.senha
            tr.appendChild(tdSenha)

            tbody.appendChild(tr)
        })

    
    })

}
