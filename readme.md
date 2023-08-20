# Backend do app de cardapio
Este é o backend da aplicação de cardapio. Note que essa aplicação utiliza docker para rodar o ambiente.
Para isso, segue um tutorial de como rodar essa aplicação corretamente:

## Pré-requisitos
Antes de começar, certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode instalar o Docker Desktop que já possui as duas aplicações:
- Docker Desktop: https://docs.docker.com/get-docker/

## Passo a passo
1. Clone o repositório da aplicação: `git clone https://github.com/wcarvalho98/cardapio-app-backend`
2. Navegue até a pasta do projeto: `cd cardapio-app`
3. Execute o seguinte comando para criar e iniciar os containers: `docker-compose up --build`
   - O comando acima irá baixar as imagens necessárias, criar os containers e iniciar a aplicação.
4. Aguarde até que o contêiner esteja em execução. Você deverá ver uma saída semelhante a esta: `backend-app-1 | Servidor rodando na porta 8080` e `backend-app-1 | MongoDB connected.`
5. Para parar o contêiner, execute o seguinte comando: `docker-compose down`
6. Pronto, a aplicação estará rodando no seguinte endereço: `http://localhost:8080`

## Rotas (WIP)
As seguintes rotas estão disponíveis:

### Sem autenticação:
- 

### Com autenticação:
- 


### Insomnia (WIP)
No arquivo `Insomnia.json`, na raiz do projeto, podes importar todas as rotas na aplicação Insomnia e facilmente fazer requests para as rotas.