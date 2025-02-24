

import fs from 'fs-extra';
import ejs from 'ejs';

//função que gera o projeto de acordo com o caminho do template e os dados, retornando um novo projeto
export async function generateTemplate(
  templatePath: string,
  data: Record<string, any>,
  outputPath: string
): Promise<void> {
  try {

    const templateContent = await fs.readFile(templatePath, 'utf8');
    // lê o template de acordo com seu endereço na máquina

    const renderedContent = ejs.render(templateContent, data);
    // Substitui o conteudo do template pelas informações dadas pelo usuário

    await fs.outputFile(outputPath, renderedContent);
    // gera o arquivo com os novos dados , criando o projeto base

    console.log(`Arquivo gerado: ${outputPath}`);
  } catch (error) {
    console.error('Erro ao gerar template:', error);
    throw error;
  }
}
