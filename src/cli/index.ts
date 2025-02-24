
import { generateTemplate } from "../core/templateProcessor";
import { promptProjectInfo} from "./prompt";
import path from "path"

// porta de entrada da aplicação
async function run(){
    try{
       const ProjectInfo = await promptProjectInfo() // variavel que carrega as informações do projeto

        const templatePath = path.join(__dirname, "../template/server.ejs")
        const outputDirectory = path.join(ProjectInfo.outputDirectory, ProjectInfo.projectName, "server.js")


    const data = {
        port : 3000,
        projectName: ProjectInfo.projectName
    } // dados que serão injetados no template quando ele for para o output

    await generateTemplate(templatePath , data, outputDirectory)
    // função que gera o template se baseando no seu caminho, 
    // nos dados pré-definidos e em qual será sua sáida

    console.log(`Diretório Criado no seguinte caminho: ${outputDirectory}`)  
    }
    catch {
        console.error("Erro na geração do projeto")
    }

}

run ()  