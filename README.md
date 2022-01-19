![img](https://github.com/madeiramadeirabr/action-check-branch-name-pattern/blob/production/img/action-check-branch-name-pattern.svg)

# Title Structure Validation of a PR
_Action that validates the Title structure of a Pull Request_

## Squad Owner
[SRE](https://github.com/orgs/madeiramadeirabr/teams/squad-sre-architecture-carpentry 'SRE')


*STANDARD:*
```bash
    tipo(PREFIX-00): Descrição.
```



_*Example:*_
```bash
    feat(ISSUE-159): Implements Swagger.
```


Example use:
```yml
jobs:
  check-title-pull-request:
    runs-on: ubuntu-latest
    name: 'check-title-pull-request'
    steps:      
        - uses: madeiramadeirabr/action-check-title-pr-pattern@v1
```