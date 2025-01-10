// var pessoa1 = {
//     name: "junior",
//     idade: 18
// }
// var pessoa2 = {
//     name: "cleide",
//     idade: 60
// }

//var pessoas = [
//  { id: 1, name: "Pessoa1", nascimento: "01/07/2000", cargo: "Dev" },
// { id: 2, name: "Pessoa2", nascimento: "01/07/2000", cargo: "Dev" },
// { id: 3, name: "Pessoa3", nascimento: "01/07/2000", cargo: "Dev" },
// { id: 4, name: "Pessoa3", nascimento: "01/07/2000", cargo: "Dev" },
//  { id: 5, name: "Pessoa4", nascimento: "01/07/2000", cargo: "Dev" },

//]

var usuarios = [{ id: Number, name: "#", email: "#", senha: "#" }];

window.onload = () => {
  var tbody = document.querySelector(".tabela-dinamica tbody");

  var thead = document.querySelector(".tabela-dinamica thead"); //it's necessary?

  usuarios.forEach((usuario) => {
    //converte linha e celulas para js e resgata dentro do contexto as keys, afilia a key da celula dentro da linha
    var tr = document.createElement("tr");
    var tdId = document.createElement("td");

    tdId.textContent = usuario.id;
    tr.appendChild(tdId);

    var tdName = document.createElement("td");
    tdName.textContent = usuario.name;
    tr.appendChild(tdName);

    var tdEmail = document.createElement("td");
    tdEmail, (textContent = usuario.email);
    tr.appendChild(tdEmail);

    var tdSenha = document.createElement("td");
    tdSenha.textContent = usuario.senha;
    tr.appendChild(tdSenha);

    var tdAcao = document.createElement("td");
    tdAcao.textContent = "Editar/Deletar";
    tr.appendChild(tdAcao);
    //cada um chama sua celula
    tbody.appendChild(tr); //e o tbody chama a linha

    // var tdNascimento = document.createElement("td");
    // tdNascimento.textContent = usuario.nascimento;
    // tr.appendChild(tdNascimento);
    // var tdCargo = document.createElement("td");
    // tdCargo.textContent = pessoa.cargo;
    // tr.appendChild(tdCargo);
  });

  // var listagempessoa = document.getElementById('Listagem-pessoas')

  // pessoas.forEach(pessoa => {
  //     const p = document.createElement("p");
  //     p.textContent = `Nome:${pessoa.name} Idade: ${pessoa.idade}`

  //     listagempessoa.appendChild(p)
  // });

  // keys = Object.keys(pessoas[0]);
  //var trh = document.createElement('trh')
  //   keys.forEach((key) => {
  //     var th = document.createElement("th"); //aqui precisamos chamar a key e não o valor(value)
  //     th.textContent = key;
  //     tbody.appendChild(th);
  //   });
};
