
/// <reference types="cypress" />

describe('Testando API', () => {
    context('When I send GET /usuarios', () => {
      it('Retornanr todos os registros da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        })
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.usuarios[0].email).to.not.be.null
            expect(response.body.quantidade).to.eq(response.body.usuarios.length)
            Cypress._.each(response.body.usuarios, (usuario) => {
                expect(usuario.email).to.not.be.null
                expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id' )
            })
          });          
      });
    });
  
    context('Obter usuário passando o ID como parâmetro', () => {
      it('Retornar somente o usuário pelo ID', () => {
        cy.request({
          method: 'GET',
          url: 'https://serverest.dev/usuarios',
          qs: {
            _id: '0uxuPY0cbmQhpEz1'
          }
        })
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.usuarios[0]).to.have.property('nome')
            //expect(response.body.usuarios[0].nome).to.eq("Yasmin Longuinho")
          });
      });
    });
  });