const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        let titlePR = github.context.payload.pull_request.title;

        const PRDefault = /[a-z]+\([A-Z]+-\d+\):.*/
        const PRHotFix = /\(hotfix\)+\:.*/
        
        if ( !PRDefault.test(titlePR) && !PRHotFix.test(titlePR)) {
            core.setFailed('ERRO. Título da Pull Request não está no padrão.\n"tipoPR(IDJIRA): Descrição." ou "(hotfix): descrição."')
        }
        
        if (PRDefault.test(titlePR) || PRHotFix.test(titlePR)) {
            console.log('Título de PR válido!')
            return true
        }

    } catch (e) {
        core.setFailed(`Essa ação só será executada em uma Pull Request.\nERRO: ${e}.`)
    }
}

run()
