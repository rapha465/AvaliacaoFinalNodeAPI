import ServiceClientes from "../services/clientes.js";

class ControllerClientes {

    // Buscar todos os clientes
    async Buscar(req, res) {
        try {
            const clientes = await ServiceClientes.Buscar();

            res.send({ clientes });
        } catch (error) {
            res.send({ message: error.message });
        }
    }

    // Buscar um cliente pelo ID
    async BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const cliente = await ServiceClientes.BuscarUm(id);

            res.send({ cliente });
        } catch (error) {
            res.send({ message: error.message });
        }
    }

    // Criar um cliente
    async Criar(req, res) {
        try {
            const id = req.body.id;
            const nome = req.body.nome;
            const email = req.body.email;
            const senha = req.body.senha;

            await ServiceClientes.Criar(id, nome, email, senha);

            res.send({ message: "Criado com sucesso!" });
        } catch (error) {
            res.send({ message: error.message });
        }
    }

    // Alterar um cliente
    async Alterar(req, res) {
        try {
            const id = req.params.id;
            const nome = req.body.nome;
            const email = req.body.email;
            const senha = req.body.senha;

            await ServiceClientes.Alterar(id, nome, email, senha);

            res.send({ message: "Alterado com sucesso!" });
        } catch (error) {
            res.send({ message: error.message });
        }
    }

    // Deletar um cliente
    async Deletar(req, res) {
        try {
            const id = req.params.id;

            await ServiceClientes.Deletar(id);

            res.send({ message: "Deletado com sucesso!" });
        } catch (error) {
            res.send({ message: error.message });
        }
    }
}

export default new ControllerClientes();


