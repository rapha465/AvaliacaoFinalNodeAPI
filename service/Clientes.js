import Clientes from '../model/Clientes.js'

class ServiceClientes {

  async Buscar() {
    return Clientes.findALL()
  }

  BuscarUm(id) {
   if(!id || isNaN(id)) {
    throw new Error("Favor informar somente os dados dos clientes")
   }
     
   return Clientes.BuscarUm(id)
  }

  async Criar (id,nome, email, senha) {
    if (!id || !nome || !email || !senha) {
      throw new Error("Favor informar o Id, nome, email, senha")
      }
  
      await Clientes.CREATE({id , nome, email, senha}) 
    }
    
    async Alterar(id,nome, email, senha) {
      if (!id || !nome || !email || !senha) {
        throw new Error("Favor informar todos os dados")
      }
     const ClientesAlterar = await Clientes.findByPk(id)

       if(!ClientesAlterar) {
       throw new Error("Cliente não encontrado")
        }
         ClientesAlterar.id = id
         ClientesAlterar.nome = nome
         ClientesAlterar.email = email
          ClientesAlterar.senha = senha

        await ClientesAlterar.save()
      }
        async Deletar(id,nome, email, senha) {
           if(!id || isNaN(id) || !nome || isNaN (nome) || !email || isNaN(email) || !senha || isNaN(id)) {
             throw new Error("Favor deletar todos os dados")
            }

            const ClienteDelete = await Clientes.findByPk(id)

               if(!ClienteDelete) {
            throw new Error("Favor informar o Id corretamente")
        }
      await ClientesDelete.destroy()
    }
    
}

export default new ServiceClientes()






  