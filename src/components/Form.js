import {useState} from 'react'
function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} foi cadastrado com a senha : ${password}`)
  }

  const [name, setName] = useState('Matheus')
  const [password, setPassword] = useState()
  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            placeholder="Digite o seu nome"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            placeholder="Digite a sua senha"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value="Cadastrar"></input>
        </div>
      </form>
    </div>
  );
}
export default Form;
