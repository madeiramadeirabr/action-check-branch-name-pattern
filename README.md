![img](https://github.com/madeiramadeirabr/action-check-title-pr-pattern/blob/production/img/validate-the-title-structure-of-a-pull-request.svg)
# action-check-title-pr-pattern

## Descrição
Action que valida:
- Título da Pull-Request está no padrão definido

## Contexto de negócio:
Irá compor a estrutura padrão que está sendo desenvolvida para o CI/CD da [MadeiraMadeira](https://github.com/madeiramadeirabr 'MadeiraMadeira'), sendo aplicável a todos os Projetos Novos (e "antigos").

## Squad:
[SRE-Architecture-Carpentry](https://github.com/orgs/madeiramadeirabr/teams/squad-sre-architecture-carpentry 'SRE-Architecture-Carpentry')

## Requisitos:
1. Título da Pull Request precisa estar no padrão:
```bash
tipo(PREFIX-00): mensagem.
```

> *Exemplo*: `feat(SRE-159): implements Swagger.`

---
>⚠️ Action permite a criação de Pull Requests do tipo "hotfix".
> *Exemplo de Título:* `hotfix: ajustes no retorno do JSON.`

---

## Exemplo de uso (da action):
```yml
jobs:
  check-title-pull-request:
    runs-on: ubuntu-latest
    name: 'check-title-pull-request'
    steps:      
        - uses: madeiramadeirabr/action-check-title-pr-pattern@1.0.2
```